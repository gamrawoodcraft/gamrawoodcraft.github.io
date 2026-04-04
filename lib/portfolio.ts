import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

export type PortfolioItem = {
  src: string;
  filename: string;
  slug: string;
  code: string;
  title: string;
  category?: string;
  priceRange?: string;
  country?: string;
  summary?: string;
  description?: string;
  features?: string[];
  materials?: string[];
  dimensions?: {
    width?: string;
    height?: string;
    depth?: string;
  };
  featured?: boolean;
  order?: number;
};

type PortfolioMetadataItem = {
  file: string;
  code?: string;
  title?: string;
  category?: string;
  priceRange?: string;
  country?: string;
  summary?: string;
  description?: string;
  features?: string[];
  materials?: string[];
  dimensions?: {
    width?: string;
    height?: string;
    depth?: string;
  };
  featured?: boolean;
  order?: number;
};

type LegacyPortfolioItem = {
  id: string;
  category?: { en?: string };
  title?: { en?: string };
  description?: { en?: string };
  features?: { en?: string[] };
  materials?: { en?: string[] };
  dimensions?: { width?: string; height?: string; depth?: string };
};

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function toTitleCase(input: string) {
  return input
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function generateCodeFromFilename(file: string) {
  const base = path.parse(file).name.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const prefix = (base.slice(0, 3) || 'PRD').padEnd(3, 'X');

  let hash = 0;
  for (let i = 0; i < file.length; i += 1) {
    hash = (hash * 31 + file.charCodeAt(i)) % 100000;
  }

  const suffix = String(hash).padStart(5, '0');
  return `GB-${prefix}-${suffix}`;
}

function sanitizeMetadata(input: unknown): Map<string, PortfolioMetadataItem> {
  if (!Array.isArray(input)) {
    return new Map();
  }

  const map = new Map<string, PortfolioMetadataItem>();
  for (const item of input) {
    if (!item || typeof item !== 'object') {
      continue;
    }

    const candidate = item as Record<string, unknown>;
    if (typeof candidate.file !== 'string' || candidate.file.trim().length === 0) {
      continue;
    }

    const normalized: PortfolioMetadataItem = {
      file: candidate.file,
      code: typeof candidate.code === 'string' ? candidate.code : undefined,
      title: typeof candidate.title === 'string' ? candidate.title : undefined,
      category: typeof candidate.category === 'string' ? candidate.category : undefined,
      priceRange: typeof candidate.priceRange === 'string' ? candidate.priceRange : undefined,
      country: typeof candidate.country === 'string' ? candidate.country : undefined,
      summary: typeof candidate.summary === 'string' ? candidate.summary : undefined,
      featured: typeof candidate.featured === 'boolean' ? candidate.featured : undefined,
      order: typeof candidate.order === 'number' ? candidate.order : undefined
    };

    map.set(normalized.file, normalized);
  }

  return map;
}

async function loadPortfolioMetadata(directory: string): Promise<Map<string, PortfolioMetadataItem>> {
  const metadataFile = path.join(directory, 'metadata.json');

  try {
    const raw = await readFile(metadataFile, 'utf8');
    return sanitizeMetadata(JSON.parse(raw));
  } catch {
    return new Map();
  }
}

async function loadLegacyPortfolioItems(): Promise<Map<string, LegacyPortfolioItem>> {
  const legacyFile = path.join(process.cwd(), 'old-html-version', 'data', 'portfolio.json');

  try {
    const raw = await readFile(legacyFile, 'utf8');
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return new Map();
    }

    const items = new Map<string, LegacyPortfolioItem>();
    for (const item of parsed as LegacyPortfolioItem[]) {
      if (!item || typeof item.id !== 'string') {
        continue;
      }
      items.set(item.id, item);
    }

    return items;
  } catch {
    return new Map();
  }
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const directory = path.join(process.cwd(), 'public', 'portfolio');
  const metadataMap = await loadPortfolioMetadata(directory);
  const legacyMap = await loadLegacyPortfolioItems();

  let files: string[] = [];
  try {
    files = await readdir(directory);
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const parsed = path.parse(file);
      const metadata = metadataMap.get(file);
      const legacy = legacyMap.get(parsed.name);

      return {
        filename: file,
        src: `/portfolio/${file}`,
        slug: parsed.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
        code: metadata?.code?.trim() || generateCodeFromFilename(file),
        title: metadata?.title?.trim() || toTitleCase(parsed.name),
        category: metadata?.category || legacy?.category?.en,
        priceRange: metadata?.priceRange,
        country: metadata?.country,
        summary: metadata?.summary || legacy?.description?.en,
        description: metadata?.description || legacy?.description?.en,
        features: metadata?.features || legacy?.features?.en,
        materials: metadata?.materials || legacy?.materials?.en,
        dimensions: metadata?.dimensions || legacy?.dimensions,
        featured: metadata?.featured,
        order: metadata?.order
      };
    })
    .sort((a, b) => {
      const featuredDelta = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      if (featuredDelta !== 0) {
        return featuredDelta;
      }

      const orderA = typeof a.order === 'number' ? a.order : Number.MAX_SAFE_INTEGER;
      const orderB = typeof b.order === 'number' ? b.order : Number.MAX_SAFE_INTEGER;
      if (orderA !== orderB) {
        return orderA - orderB;
      }

      return a.filename.localeCompare(b.filename);
    });
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  const items = await getPortfolioItems();
  return items.find((item) => item.slug === slug) || null;
}
