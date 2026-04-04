Add your product images here to auto-populate the portfolio gallery.

Supported formats:
- .jpg
- .jpeg
- .png
- .webp
- .avif

Naming tip:
Use descriptive file names with hyphens, for example:
- carved-wood-door-morocco.jpg
- custom-dining-table-oak.png

How it works:
- Every image in this folder is shown automatically on /en/gallery, /fr/gallery, and /ar/gallery.
- No code changes are required when you add a new image.

Optional metadata:
You can create/edit public/portfolio/metadata.json to customize item details.

Supported fields per item:
- file (required): exact image filename
- code (optional): custom product code (example: GB-TBL-00012)
- title (optional)
- category (optional)
- priceRange (optional)
- country (optional)
- summary (optional)
- featured (optional): true or false
- order (optional): lower number appears first

If code is not set in metadata, it is auto-generated from filename.

Example:
[
	{
		"file": "custom-dining-table-oak.png",
		"code": "GB-TBL-00012",
		"title": "Custom Oak Dining Table",
		"category": "Tables",
		"priceRange": "1500 - 5000",
		"country": "France",
		"summary": "Solid oak handcrafted dining table with custom dimensions and finish.",
		"featured": true,
		"order": 1
	}
]
