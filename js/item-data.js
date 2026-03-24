/**
 * ==========================================
 * GAMRA WOOD CRAFT - Portfolio Items Data
 * ==========================================
 * This file contains all portfolio items data
 * Used by item.html and portfolio.html pages
 */

var portfolioItems = [
    {
        id: 'kitchen-1',
        category: { ar: 'مطبخ', en: 'Kitchen', fr: 'Cuisine' },
        title: { ar: 'مطبخ مغربي عصري', en: 'Modern Moroccan Kitchen', fr: 'Cuisine marocaine moderne' },
        description: { ar: 'تصميم مطبخ عصري بلمسة تراثية مغربية، يستخدم أجود أنواع الخشب مع تشطيب ذهبي أنيق. يتميز بمساحات تخزين عملية وإضاءة LED مدمجة.', en: 'Modern kitchen design with Moroccan heritage touch, using finest wood types with elegant gold finishing. Features practical storage spaces and integrated LED lighting.', fr: 'Conception de cuisine moderne avec une touche héritée marocaine, utilisant les meilleures essences de bois avec une élégante finition dorée. Dispose de espaces de rangement pratiques et éclairage LED intégré.' },
        image: 'assets/images/kitchen-1.jpg',
        features: { ar: ['تصميم عصري بلمسة تراثية', 'تشطيب ذهبي أنيق', 'مساحات تخزين متعددة', 'إضاءة LED مدمجة', 'أجهزة مدمجة عالية الجودة'], en: ['Modern design with heritage touch', 'Elegant gold finishing', 'Multiple storage spaces', 'Integrated LED lighting', 'High-quality built-in appliances'], fr: ['Design moderne avec touche patrimoniale', 'Finition dorée élégante', 'Multiples espaces de rangement', 'Éclairage LED intégré', 'Appareils encastrés de haute qualité'] },
        materials: { ar: ['خشب الأرز', 'رخام طبيعي', 'ذهب'], en: ['Cedar wood', 'Natural marble', 'Gold'], fr: ['Bois de cèdre', 'Marbre naturel', 'Or'] },
        dimensions: { width: '350cm', height: '240cm', depth: '60cm' }
    },
    {
        id: 'bedroom-1',
        category: { ar: 'غرفة نوم', en: 'Bedroom', fr: 'Chambre' },
        title: { ar: 'غرفة نوم ملكية', en: 'Royal Bedroom', fr: 'Chambre royale' },
        description: { ar: 'غرفة نوم فاخرة بتشطيبات ذهبية وتفاصيل يدوية دقيقة. تتضمن خزانة ملابس مدمجة وطاولة bedside مزخرفة.', en: 'Luxurious bedroom with gold finishing and intricate hand-made details. Includes built-in wardrobe and decorated bedside table.', fr: 'Chambre luxueuse avec finition dorée et détails artisanaux précis. Comprend une garde-robe intégrée et une table de chevet décorative.' },
        image: 'assets/images/bedroom-1.jpg',
        features: { ar: ['تشطيب بالذهب الحقيقي', 'تفاصيل يدوية مزخرفة', 'خزانة مدمجة', 'طاولة bedside', 'إضاءة محيطية'], en: ['Real gold finishing', 'Intricate hand-made details', 'Built-in wardrobe', 'Bedside table', 'Ambient lighting'], fr: ['Finition or véritable', 'Détails artisanaux complexes', 'Garde-robe intégrée', 'Table de chevet', 'Éclairage ambiant'] },
        materials: { ar: ['خشب البلوط', 'ذهب عيار 24', 'مفروشات فاخرة'], en: ['Oak wood', '24k gold', 'Luxury fabrics'], fr: ['Bois de chêne', 'Or 24 carats', 'Tissus luxueux'] },
        dimensions: { width: '400cm', height: '280cm', depth: '200cm' }
    },
    {
        id: 'living-room',
        category: { ar: 'صالة', en: 'Living Room', fr: 'Salon' },
        title: { ar: 'صالة استقبال فاخرة', en: 'Luxury Reception Hall', fr: 'Salle de réception luxueuse' },
        description: { ar: 'صالة استقبال بتصميم عصري يجمع بين الأناقة والراحة. تتضمن وحدة تلفزيون مدمجة وأرفف للعرض.', en: 'Reception hall with modern design combining elegance and comfort. Features built-in TV unit and display shelves.', fr: 'Salle de réception au design moderne alliant élégance et confort. Comprend une unité TV intégrée et des étagères d\'affichage.' },
        image: 'assets/images/living-room.jpg',
        features: { ar: ['تصميم مفتوح', 'وحدة تلفزيون مدمجة', 'أرفف عرض مزخرفة', 'منطقة جلوس مريحة', 'دهان مضيء'], en: ['Open design', 'Built-in TV unit', 'Decorated display shelves', 'Comfortable seating area', 'Glowing paint'], fr: ['Design ouvert', 'Unité TV intégrée', 'Étagères d\'affichage décorées', 'Zone de siège confortable', 'Peinture lumineuse'] },
        materials: { ar: ['خشب الكركاع', 'زجاج امان', 'قماش مخملي'], en: ['Thuya wood', 'Safety glass', 'Velvet fabric'], fr: ['Bois de thuya', 'Verre sécurité', 'Tissu velvet'] },
        dimensions: { width: '600cm', height: '300cm', depth: '180cm' }
    },
    {
        id: 'kitchen-2',
        category: { ar: 'مطبخ', en: 'Kitchen', fr: 'Cuisine' },
        title: { ar: 'مطبخ مفتوح', en: 'Open Kitchen', fr: 'Cuisine ouverte' },
        description: { ar: 'مطبخ مفتوح على الصالة بتصميم حديث وعصري. يتميز بجزيرة مركزية ومساحات تخزين منظمة.', en: 'Open kitchen to the living room with modern contemporary design. Features central island and organized storage spaces.', fr: 'Cuisine ouverte sur le salon avec un design contemporain moderne. Dispose d\'une île centrale et d\'espaces de rangement organisés.' },
        image: 'assets/images/kitchen-2.jpg',
        features: { ar: ['تصميم مفتوح', 'جزيرة مركزية', 'تخزين منظم', 'سطح عمل واسع', 'معدن مقاوم للصدأ'], en: ['Open design', 'Central island', 'Organized storage', 'Wide work surface', 'Stainless steel'], fr: ['Design ouvert', 'Île centrale', 'Rangement organisé', 'Grand plan de travail', 'Acier inoxydable'] },
        materials: { ar: ['خشب الأرز', 'ستانلس ستيل', 'حجر الكوارتز'], en: ['Cedar wood', 'Stainless steel', 'Quartz stone'], fr: ['Bois de cèdre', 'Acier inoxydable', 'Pierre de quartz'] },
        dimensions: { width: '400cm', height: '250cm', depth: '70cm' }
    },
    {
        id: 'decor-1',
        category: { ar: 'ديكور', en: 'Decor', fr: 'Décor' },
        title: { ar: 'وحدة جدارية مزخرفة', en: 'Decorative Wall Unit', fr: 'Unité murale décorative' },
        description: { ar: 'قطعة ديكور فنية بتفاصيل نقش مغربي يدوي. مثالية لتزيين جدران الصالة أو المدخل.', en: 'Artistic decor piece with hand-carved Moroccan patterns. Ideal for decorating living room or entrance walls.', fr: 'Pièce décorative artistique avec des motifs marocains sculptés à la main. Idéale pour decorated les murs du salon ou de l\'entrée.' },
        image: 'assets/images/decor-1.jpg',
        features: { ar: ['نقش مغربي يدوي', 'تصميم فني فريد', 'إضاءة LED محيطية', 'تركيب على الحائط', 'قطع يدوية فاخرة'], en: ['Hand-carved Moroccan patterns', 'Unique artistic design', 'LED ambient lighting', 'Wall mounted', 'Luxury handcrafted'], fr: ['Motifs marocains sculptés à la main', 'Design artistique unique', 'Éclairage LED ambiant', 'Montage mural', 'Artisanat de luxe'] },
        materials: { ar: ['خشب الأرز', 'ذهب', 'دهان طبيعى'], en: ['Cedar wood', 'Gold', 'Natural paint'], fr: ['Bois de cèdre', 'Or', 'Peinture naturelle'] },
        dimensions: { width: '180cm', height: '120cm', depth: '15cm' }
    },
    {
        id: 'decor-2',
        category: { ar: 'ديكور', en: 'Decor', fr: 'Décor' },
        title: { ar: 'خزانة كلاسيكية', en: 'Classic Cabinet', fr: 'Armoire classique' },
        description: { ar: 'خزانة كلاسيكية بتصميم حديث تجمع بين التراث والمعاصرة. تتضمن أرفف قابلة للتعديل وأبواب زجاجية.', en: 'Classic cabinet with modern design combining heritage and contemporary. Features adjustable shelves and glass doors.', fr: 'Armoire classique au design moderne alliant patrimoine et contemporain. Comprend des étagères ajustables et des portes en verre.' },
        image: 'assets/images/decor-2.jpg',
        features: { ar: ['تصميم كلاسيكي عصري', 'أرفف قابلة للتعديل', 'أبواب زجاجية', 'مقابض ذهبية', 'مساحة تخزين كبيرة'], en: ['Modern classic design', 'Adjustable shelves', 'Glass doors', 'Gold handles', 'Large storage space'], fr: ['Design classique moderne', 'Étagères ajustables', 'Portes en verre', 'Poignées dorées', 'Grand espace de rangement'] },
        materials: { ar: ['خشب البلوط', 'زجاج شفاف', 'ذهب'], en: ['Oak wood', 'Clear glass', 'Gold'], fr: ['Bois de chêne', 'Verre transparent', 'Or'] },
        dimensions: { width: '160cm', height: '220cm', depth: '50cm' }
    },
    {
        id: 'door-french',
        category: { ar: 'باب', en: 'Door', fr: 'Porte' },
        title: { ar: 'باب فرنسي', en: 'French Door', fr: 'Porte française' },
        description: { ar: 'باب فرنسي أنيق بالزجاج الشفاف يوفر الضوء الطبيعي مع الحفاظ على الخصوصية.', en: 'Elegant French door with transparent glass providing natural light while maintaining privacy.', fr: 'Porte française elegante avec verre transparent offrant une lumière naturelle tout en maintenant l\'intimité.' },
        image: 'assets/images/door-french.jpg',
        features: { ar: ['زجاج شفاف', 'إضاءة طبيعية', 'تصميم أنيق', 'أمان عالي', 'عزل حراري'], en: ['Transparent glass', 'Natural light', 'Elegant design', 'High security', 'Thermal insulation'], fr: ['Verre transparent', 'Lumière naturelle', 'Design élégant', 'Haute sécurité', 'Isolation thermique'] },
        materials: { ar: ['خشب الأرز', 'زجاج أمن', 'ستانلس ستيل'], en: ['Cedar wood', 'Safety glass', 'Stainless steel'], fr: ['Bois de cèdre', 'Verre sécurisé', 'Acier inoxydable'] },
        dimensions: { width: '150cm', height: '220cm', depth: '8cm' }
    },
    {
        id: 'bedroom-master',
        category: { ar: 'غرفة نوم', en: 'Bedroom', fr: 'Chambre' },
        title: { ar: 'غرفة نوم رئيسية', en: 'Master Bedroom', fr: 'Chambre principale' },
        description: { ar: 'غرفة نوم رئيسية فاخرة بتشطيبات راقية وأثاث مخصص.', en: 'Luxury master bedroom with high-end finishing and custom furniture.', fr: 'Chambre principale luxueuse avec des finitions haut de gamme et des meubles sur mesure.' },
        image: 'assets/images/bedroom-master.jpg',
        features: { ar: ['تصميم فاخر', 'تشطيبات راقية', 'أثاث مخصص', 'إضاءة محيطية', 'خزانة مدمجة'], en: ['Luxury design', 'High-end finishing', 'Custom furniture', 'Ambient lighting', 'Built-in wardrobe'], fr: ['Design luxueux', 'Finitions haut de gamme', 'Meubles sur mesure', 'Éclairage ambiant', 'Garde-robe intégrée'] },
        materials: { ar: ['خشب البلوط', 'جلد طبيعي', 'قماش فاخر'], en: ['Oak wood', 'Natural leather', 'Luxury fabric'], fr: ['Bois de chêne', 'Cuir naturel', 'Tissu luxueux'] },
        dimensions: { width: '450cm', height: '300cm', depth: '220cm' }
    },
    {
        id: 'bedroom-guest',
        category: { ar: 'غرفة نوم', en: 'Bedroom', fr: 'Chambre' },
        title: { ar: 'غرفة ضيوف', en: 'Guest Room', fr: 'Chambre d\'hôtes' },
        description: { ar: 'غرفة نوم للضيوف بتصميم مريح وفخم يوفر إقامة ممتعة للزوار.', en: 'Guest bedroom with comfortable and luxurious design providing enjoyable stay for visitors.', fr: 'Chambre d\'hôtes avec un design confortable et luxueux offrant un séjour agréable aux visiteurs.' },
        image: 'assets/images/bedroom-guest.jpg',
        features: { ar: ['تصميم مريح', 'إضاءة دافئة', 'تخزين كافٍ', 'تهوية ممتازة', 'ديكور أنيق'], en: ['Comfortable design', 'Warm lighting', 'Adequate storage', 'Excellent ventilation', 'Elegant decor'], fr: ['Design confortable', 'Éclairage chaud', 'Rangement suffisant', 'Excellente ventilation', 'Décor élégant'] },
        materials: { ar: ['خشب الأرز', 'قماش قطني', 'حجر طبيعي'], en: ['Cedar wood', 'Cotton fabric', 'Natural stone'], fr: ['Bois de cèdre', 'Tissu coton', 'Pierre naturelle'] },
        dimensions: { width: '350cm', height: '260cm', depth: '180cm' }
    },
    {
        id: 'bedroom-kids',
        category: { ar: 'غرفة نوم', en: 'Bedroom', fr: 'Chambre' },
        title: { ar: 'غرفة أطفال', en: 'Kids Room', fr: 'Chambre enfants' },
        description: { ar: 'غرفة أطفال بتصميم مرح وآمن مع ألوان زاهية وتخزين عملي.', en: 'Kids room with fun and safe design with bright colors and practical storage.', fr: 'Chambre enfants avec un design amusant et sécurisé avec des couleurs vives et un rangement pratique.' },
        image: 'assets/images/bedroom-kids.jpg',
        features: { ar: ['تصميم آمن', 'ألوان زاهية', 'تخزين عملي', 'مساحة للعب', 'زوايا آمنة'], en: ['Safe design', 'Bright colors', 'Practical storage', 'Play area', 'Safe corners'], fr: ['Design sécurisé', 'Couleurs vives', 'Rangement pratique', 'Espace de jeu', 'Angles sécurisés'] },
        materials: { ar: ['خشب آمن', 'دهان غير سام', 'قماش قابل للغسل'], en: ['Safe wood', 'Non-toxic paint', 'Washable fabric'], fr: ['Bois sécurisé', 'Peinture non toxique', 'Tissu lavable'] },
        dimensions: { width: '300cm', height: '240cm', depth: '160cm' }
    },
    {
        id: 'sofa',
        category: { ar: 'صالة', en: 'Living Room', fr: 'Salon' },
        title: { ar: 'أريكة كلاسيكية', en: 'Classic Sofa', fr: 'Canapé classique' },
        description: { ar: 'أريكة كلاسيكية فاخرة بتشطيب يدوي والجلد الطبيعي المريح.', en: 'Luxurious classic sofa with hand finishing and comfortable natural leather.', fr: 'Canapé classique luxueux avec finition manuelle et cuir naturel confortable.' },
        image: 'assets/images/sofa.jpg',
        features: { ar: ['جلد طبيعي', 'تشطيب يدوي', 'هيكل خشبي', 'وسائد مريحة', 'تصميم كلاسيكي'], en: ['Natural leather', 'Hand finishing', 'Wooden frame', 'Comfortable cushions', 'Classic design'], fr: ['Cuir naturel', 'Finition manuelle', 'Cadre en bois', 'Coussins confortables', 'Design classique'] },
        materials: { ar: ['جلد طبيعي', 'خشب البلوط', 'قماش مخملي'], en: ['Natural leather', 'Oak wood', 'Velvet fabric'], fr: ['Cuir naturel', 'Bois de chêne', 'Tissu velvet'] },
        dimensions: { width: '280cm', height: '90cm', depth: '95cm' }
    },
    {
        id: 'door-entrance',
        category: { ar: 'باب', en: 'Door', fr: 'Porte' },
        title: { ar: 'باب مدخل', en: 'Entrance Door', fr: 'Porte d\'entrée' },
        description: { ar: 'باب مدخل رئيسي بتصميم فخم يوفر الأمان والأناقة.', en: 'Main entrance door with luxurious finishing providing security and elegance.', fr: 'Porte d\'entrée principale avec une finition luxueuse offrant sécurité et élégance.' },
        image: 'assets/images/door-entrance.jpg',
        features: { ar: ['تصميم فخم', 'أمان عالي', 'عزل صوتي', 'مقاومة للعوامل الجوية', 'تشطيب ذهبي'], en: ['Luxurious design', 'High security', 'Sound insulation', 'Weather resistant', 'Gold finishing'], fr: ['Design luxueux', 'Haute sécurité', 'Isolation phonique', 'Résistant aux intempéries', 'Finition dorée'] },
        materials: { ar: ['خشب الأرز', 'ذهب', 'ستانلس ستيل'], en: ['Cedar wood', 'Gold', 'Stainless steel'], fr: ['Bois de cèdre', 'Or', 'Acier inoxydable'] },
        dimensions: { width: '120cm', height: '240cm', depth: '10cm' }
    },
    {
        id: 'door-interior',
        category: { ar: 'باب', en: 'Door', fr: 'Porte' },
        title: { ar: 'باب داخلي', en: 'Interior Door', fr: 'Porte intérieure' },
        description: { ar: 'باب داخلي أنيق يوفر الخصوصية مع الحفاظ على جمالية التصميم.', en: 'Elegant interior door providing privacy while maintaining design aesthetics.', fr: 'Porte intérieure élégante offrant l\'intimité tout en maintenant l\'esthétique du design.' },
        image: 'assets/images/door-interior.jpg',
        features: { ar: ['تصميم أنيق', 'خصوصية', 'تركيب سهل', 'عزل حراري', 'مقبض مريح'], en: ['Elegant design', 'Privacy', 'Easy installation', 'Thermal insulation', 'Comfortable handle'], fr: ['Design élégant', 'Intimité', 'Installation facile', 'Isolation thermique', 'Poignée confortable'] },
        materials: { ar: ['خشب الأرز', 'زجاج محجوب'], en: ['Cedar wood', 'Obscured glass'], fr: ['Bois de cèdre', 'Verre opaque'] },
        dimensions: { width: '90cm', height: '210cm', depth: '6cm' }
    },
    {
        id: 'tv-console',
        category: { ar: 'صالة', en: 'Living Room', fr: 'Salon' },
        title: { ar: 'وحدة تلفزيون', en: 'TV Console', fr: 'Meuble TV' },
        description: { ar: 'وحدة تلفزيون عصرية مع تخزين للأجهزة ومساحات عرض.', en: 'Contemporary TV console with device storage and display spaces.', fr: 'Meuble TV contemporain avec rangement pour appareils et espaces d\'affichage.' },
        image: 'assets/images/tv-console.jpg',
        features: { ar: ['تصميم عصري', 'تخزين للأجهزة', 'مساحات عرض', 'إدارة الكابلات', 'سطح واسع'], en: ['Contemporary design', 'Device storage', 'Display spaces', 'Cable management', 'Wide surface'], fr: ['Design contemporain', 'Rangement pour appareils', 'Espaces d\'affichage', 'Gestion des câbles', 'Surface large'] },
        materials: { ar: ['خشب الكركاع', 'زجاج أمن', 'ستانلس ستيل'], en: ['Thuya wood', 'Safety glass', 'Stainless steel'], fr: ['Bois de thuya', 'Verre sécurisé', 'Acier inoxydable'] },
        dimensions: { width: '200cm', height: '50cm', depth: '45cm' }
    },
    {
        id: 'dining-table',
        category: { ar: 'صالة', en: 'Living Room', fr: 'Salon' },
        title: { ar: 'طاولة طعام', en: 'Dining Table', fr: 'Table à manger' },
        description: { ar: 'طاولة طعام عائلية فاخرة بتصميم يجمع بين الجمال والعملية.', en: 'Luxurious family dining table with design combining beauty and practicality.', fr: 'Table à manger familiale luxueuse avec un design alliant beauté et praticité.' },
        image: 'assets/images/dining-table.jpg',
        features: { ar: ['سعة كبيرة', 'سطح مقاوم للخدش', 'تصميم أنيق', 'قدرة على التحمل', 'سهولة التنظيف'], en: ['Large capacity', 'Scratch-resistant surface', 'Elegant design', 'Durability', 'Easy cleaning'], fr: ['Grande capacité', 'Surface antirayure', 'Design élégant', 'Durabilité', 'Nettoyage facile'] },
        materials: { ar: ['خشب البلوط', 'طلاء مقاوم'], en: ['Oak wood', 'Resistant coating'], fr: ['Bois de chêne', 'Revêtement résistant'] },
        dimensions: { width: '220cm', height: '75cm', depth: '100cm' }
    },
    {
        id: 'coffee-table',
        category: { ar: 'ديكور', en: 'Decor', fr: 'Décor' },
        title: { ar: 'طاولة قهوة', en: 'Coffee Table', fr: 'Table basse' },
        description: { ar: 'طاولة قهوة مصممة بعناية بالتفاصيل اليدوية الفريدة.', en: 'Carefully designed coffee table with unique handcrafted details.', fr: 'Table basse conçue avec soin avec des détails artisanaux uniques.' },
        image: 'assets/images/coffee-table.jpg',
        features: { ar: ['تصميم فريد', 'تفاصيل يدوية', 'سطح صلب', 'مستدامة', 'سهولة النقل'], en: ['Unique design', 'Handcrafted details', 'Sturdy surface', 'Sustainable', 'Easy to move'], fr: ['Design unique', 'Détails artisanaux', 'Surface robuste', 'Durable', 'Facile à déplacer'] },
        materials: { ar: ['خشب الكركاع', 'دهان طبيعي'], en: ['Thuya wood', 'Natural varnish'], fr: ['Bois de thuya', 'Vernis naturel'] },
        dimensions: { width: '120cm', height: '45cm', depth: '60cm' }
    },
    {
        id: 'bookshelf',
        category: { ar: 'ديكور', en: 'Decor', fr: 'Décor' },
        title: { ar: 'رف كتب', en: 'Bookshelf', fr: 'Bibliothèque' },
        description: { ar: 'رف كتب أنيق مع مساحات عرض للكتب والتحف الفنية.', en: 'Elegant bookshelf with display spaces for books and art pieces.', fr: 'Bibliothèque élégante avec des espaces d\'affichage pour les livres et les œuvres d\'art.' },
        image: 'assets/images/bookshelf.jpg',
        features: { ar: ['مساحات متعددة', 'عرض التحف', 'تصميم عملي', 'استخدام متنوع', 'سهولة الوصول'], en: ['Multiple spaces', 'Art display', 'Practical design', 'Versatile use', 'Easy access'], fr: ['Espaces multiples', 'Affichage d\'art', 'Design pratique', 'Utilisation polyvalente', 'Accès facile'] },
        materials: { ar: ['خشب الأرز', 'زجاج'], en: ['Cedar wood', 'Glass'], fr: ['Bois de cèdre', 'Verre'] },
        dimensions: { width: '150cm', height: '200cm', depth: '35cm' }
    },
    {
        id: 'table-side',
        category: { ar: 'ديكور', en: 'Decor', fr: 'Décor' },
        title: { ar: 'طاولة جانبية', en: 'Side Table', fr: 'Table d\'appoint' },
        description: { ar: 'طاولة جانبية عملية بتصميم أنيق يكمل أي صالة.', en: 'Practical side table with elegant design complementing any living room.', fr: 'Table d\'appoint pratique avec un design élégant complétant n\'importe quel salon.' },
        image: 'assets/images/table-side.jpg',
        features: { ar: ['تصميم عملي', 'سهولة النقل', 'سطح مستوٍ', 'تصميم أنيق', 'متعددة الاستخدام'], en: ['Practical design', 'Easy to move', 'Flat surface', 'Elegant design', 'Multi-purpose'], fr: ['Design pratique', 'Facile à déplacer', 'Surface plane', 'Design élégant', 'Polyvalent'] },
        materials: { ar: ['خشب الكركاع', 'دهان مقاوم'], en: ['Thuya wood', 'Resistant varnish'], fr: ['Bois de thuya', 'Vernis résistant'] },
        dimensions: { width: '50cm', height: '55cm', depth: '50cm' }
    }
];

/**
 * Ensure gallery filter + icon exist (JSON may omit optional fields)
 */
function normalizePortfolioItem(item) {
    if (!item || typeof item !== 'object') return item;
    if (!item.filter && item.category && item.category.en) {
        var map = { Kitchen: 'kitchen', Bedroom: 'bedroom', 'Living Room': 'living', Door: 'door', Decor: 'decor' };
        item.filter = map[item.category.en] || 'decor';
    }
    if (!item.icon) {
        var iconByFilter = { kitchen: 'fa-home', bedroom: 'fa-bed', living: 'fa-couch', door: 'fa-door-open', decor: 'fa-gem' };
        item.icon = iconByFilter[item.filter] || 'fa-image';
    }
    // Favorites: use data flag OR localStorage override (localStorage takes precedence)
    item.isFavorite = (typeof item.isFavorite !== 'undefined' ? item.isFavorite : false);
    try {
        var localFav = localStorage.getItem('favorite-' + item.id);
        if (localFav === 'true') item.isFavorite = true;
    } catch (e) {
        // localStorage unavailable
    }
    return item;
}

window.normalizePortfolioItem = normalizePortfolioItem;

/**
 * Load portfolio items from data/portfolio.json (primary).
 * Falls back to the embedded array if fetch fails or JSON is empty.
 */
window.loadPortfolioItems = async function() {
    // Try portfolio_fixed.json first (demo favorites), then portfolio.json, then fallback
    const sources = ['data/portfolio.json', 'data/portfolio.json'];
    
    for (let source of sources) {
        try {
            const response = await fetch(source);
            if (response.ok) {
                const items = await response.json();
                if (Array.isArray(items) && items.length > 0) {
                    console.log(`Loaded ${items.length} items from ${source}`);
                    return items.map(normalizePortfolioItem);
                }
            }
        } catch (error) {
            console.warn(`Failed to load ${source}:`, error);
        }
    }
    
    console.warn('All JSON failed, using embedded list');
    return portfolioItems.map(normalizePortfolioItem);
};

// Keep original array as fallback
window.portfolioItems = portfolioItems;

// Export for Node (unchanged)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioItems;
};

