import { Service, Project, AiTool, LibraryItem, TimelineItem, AchievementStats } from './types';

export const services: Service[] = [
  {
    id: '01',
    title: 'تصميم الهويات البصرية',
    description: 'بناء هوية بصرية احترافية تشمل الشعار، الألوان، الخطوط، النمط البصري، وتطبيقات العلامة التجارية بما يعكس شخصية المشروع ويعزز حضوره.',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '02',
    title: 'تصميم تجربة وواجهة المستخدم UX/UI',
    description: 'تصميم واجهات رقمية عصرية وسهلة الاستخدام للمواقع والمنصات والتطبيقات، مع التركيز على وضوح الرحلة، جمال الواجهة، وتحسين تجربة المستخدم.',
    icon: 'LayoutDashboard',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '03',
    title: 'تطوير المواقع والمنصات الرقمية',
    description: 'إنشاء مواقع إلكترونية ومنصات رقمية احترافية متجاوبة مع جميع الأجهزة، سريعة، منظمة، وقابلة للتوسع بما يناسب احتياجات الأفراد والشركات.',
    icon: 'Code2',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '04',
    title: 'البرمجة والحلول التقنية',
    description: 'تطوير حلول برمجية عملية ومخصصة تساعد على تنظيم العمل، تحسين الأداء، أتمتة المهام، وتحويل الأفكار إلى منتجات رقمية قابلة للاستخدام.',
    icon: 'TerminalSquare',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '05',
    title: 'إنتاج المحتوى بالذكاء الاصطناعي',
    description: 'صناعة محتوى مرئي ونصي احترافي باستخدام أدوات الذكاء الاصطناعي، يشمل الأفكار، النصوص، الصور، الفيديوهات، الحملات، والمحتوى التسويقي.',
    icon: 'Sparkles',
    image: '/images/services/ai-content.svg'
  },
  {
    id: '06',
    title: 'إنتاج الفيديو والإعلانات الذكية',
    description: 'تصميم أفكار إعلانية وسيناريوهات فيديو وStoryboards احترافية، مع توظيف أدوات الذكاء الاصطناعي لإنتاج محتوى بصري مؤثر وجاذب.',
    icon: 'Video',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '07',
    title: 'إدارة الحملات الإعلانية',
    description: 'تخطيط وبناء حملات إعلانية رقمية تساعد على زيادة الوعي، جذب العملاء، وتحقيق نتائج تسويقية قابلة للقياس عبر محتوى ورسائل واضحة.',
    icon: 'Megaphone',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '08',
    title: 'التدريب الإلكتروني في الذكاء الاصطناعي',
    description: 'تقديم برامج تدريبية وكورسات تعليمية عملية في أدوات الذكاء الاصطناعي لمساعدة الأفراد وصناع المحتوى والشركات على استخدامها بفعالية.',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '09',
    title: 'تدريب صناع المحتوى',
    description: 'تدريب عملي لصناع المحتوى على بناء الأفكار، كتابة النصوص، تصميم الصور، إنتاج الفيديوهات، وتنظيم خطة محتوى باستخدام أدوات الذكاء الاصطناعي.',
    icon: 'Clapperboard',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '10',
    title: 'هندسة الأوامر Prompt Engineering',
    description: 'كتابة وتطوير أوامر احترافية للذكاء الاصطناعي تساعد على الحصول على نتائج دقيقة في التصميم، الفيديو، البرمجة، التسويق، والتحليل.',
    icon: 'Bot',
    image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '11',
    title: 'الاستشارات الرقمية والذكاء الاصطناعي',
    description: 'تقديم استشارات مخصصة لاختيار الأدوات، بناء الاستراتيجية الرقمية، تحسين سير العمل، ودمج الذكاء الاصطناعي داخل المشاريع بشكل عملي.',
    icon: 'BrainCircuit',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '12',
    title: 'بناء المحتوى التعليمي والكورسات',
    description: 'تصميم محتوى تعليمي منظم، خطط تدريب، مواد تعليمية، عروض تقديمية، ومسارات تعلم تساعد على تقديم المعرفة بأسلوب واضح واحترافي.',
    icon: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '13',
    title: 'تصميم الصور والبوسترات الإعلانية',
    description: 'نصمم بوسترات وصورًا تسويقية مميزة للسوشيال ميديا والإعلانات الرقمية، تجمع بين الجاذبية البصرية والرسالة الواضحة لزيادة التفاعل وتعزيز حضور علامتك.',
    icon: 'Image',
    image: '/images/services/posters-design.svg'
  },
  {
    id: '14',
    title: 'تصميم العروض التقديمية الاحترافية',
    description: 'نحوّل أفكارك إلى عروض تقديمية مرتبة ومؤثرة بصريًا، مناسبة للاجتماعات، العروض التجارية، التدريب، وشرح المنتجات أو الخدمات بأسلوب واضح ومقنع.',
    icon: 'Presentation',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '15',
    title: 'إنتاج فيديوهات إعلانية قصيرة',
    description: 'نقدّم فيديوهات إعلانية مناسبة للمنصات الرقمية، تجمع بين النص التسويقي، الحركة، المونتاج، والمؤثرات البصرية لتوصيل رسالتك بسرعة واحترافية.',
    icon: 'Clapperboard',
    image: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=600&q=80'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'حملة بوسترات إعلانية لمطعم',
    description: 'تصميم مجموعة بوسترات سوشيال ميديا جذابة لعرض الوجبات والعروض اليومية بأسلوب بصري احترافي.',
    category: 'التصميم الجرافيكي',
    tags: ['Photoshop', 'Social Media', 'Ads'],
    imageUrl: '/images/portfolio/restaurant-posters.svg',
    link: '#',
    fallbackSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
  },
  {
    id: '2',
    title: 'تصميم منشورات سوشيال ميديا لبراند تجاري',
    description: 'تصميم قوالب ومنشورات متناسقة تعكس هوية البراند وتزيد من قوة حضوره على المنصات الرقمية.',
    category: 'التصميم الجرافيكي',
    tags: ['Instagram', 'Visual Design', 'Branding'],
    imageUrl: '/images/portfolio/social-media-brand.svg',
    link: '#',
    fallbackSvg: 'M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.58 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
  },
  {
    id: '3',
    title: 'فيديو إعلاني قصير لمنتج',
    description: 'إنتاج فيديو إعلاني قصير يبرز مميزات المنتج برسائل واضحة ومؤثرات بصرية مناسبة للمنصات الرقمية.',
    category: 'المونتاج والإنتاج المرئي',
    tags: ['Video Editing', 'Motion', 'Ads'],
    imageUrl: '/images/portfolio/product-video-ad.svg',
    link: '#',
    fallbackSvg: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55-.45 1-1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'
  },
  {
    id: '4',
    title: 'مونتاج Reels احترافي لصانع محتوى',
    description: 'تحرير فيديوهات قصيرة بإيقاع سريع، نصوص جذابة، وانتقالات احترافية لزيادة التفاعل والمشاهدة.',
    category: 'المونتاج والإنتاج المرئي',
    tags: ['Reels', 'Short Video', 'Content'],
    imageUrl: '/images/portfolio/reels-editing.svg',
    link: '#',
    fallbackSvg: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55-.45 1-1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'
  },
  {
    id: '5',
    title: 'موقع تعريفي لشركة خدمات',
    description: 'تصميم وتطوير موقع تعريفي سريع ومتجاوب يعرض خدمات الشركة وهويتها بطريقة واضحة واحترافية.',
    category: 'تطوير الويب',
    tags: ['React', 'Tailwind', 'Responsive'],
    imageUrl: '/images/portfolio/company-website.svg',
    link: '#',
    fallbackSvg: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z'
  },
  {
    id: '6',
    title: 'متجر إلكتروني لمنتجات رقمية',
    description: 'واجهة متجر إلكتروني لعرض المنتجات الرقمية مع تجربة شراء واضحة وتصميم مناسب للموبايل والديسكتوب.',
    category: 'تطوير الويب',
    tags: ['E-commerce', 'UI', 'Web App'],
    imageUrl: '/images/portfolio/digital-store.svg',
    link: '#',
    fallbackSvg: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z'
  },
  {
    id: '7',
    title: 'دورة تدريبية في أدوات الذكاء الاصطناعي',
    description: 'تصميم برنامج تدريبي عملي يساعد المتدربين على استخدام أدوات الذكاء الاصطناعي في العمل والإنتاج.',
    category: 'التدريب والكورسات',
    tags: ['AI Training', 'Workshops', 'Education'],
    imageUrl: '/images/portfolio/ai-training-course.svg',
    link: '#',
    fallbackSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
  },
  {
    id: '8',
    title: 'كورس صناعة المحتوى الرقمي',
    description: 'برنامج تدريبي يشرح بناء الأفكار، كتابة السكربت، التخطيط للمحتوى، وتحسين الظهور الرقمي.',
    category: 'التدريب والكورسات',
    tags: ['Content', 'Training', 'Strategy'],
    imageUrl: '/images/portfolio/content-course.svg',
    link: '#',
    fallbackSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
  },
  {
    id: '9',
    title: 'خطة محتوى شهرية لمنصة تعليمية',
    description: 'إعداد خطة محتوى منظمة تشمل أفكار المنشورات، الرسائل التسويقية، وجدولة النشر حسب أهداف المنصة.',
    category: 'صناعة المحتوى',
    tags: ['Content Plan', 'Copywriting', 'Strategy'],
    imageUrl: '/images/portfolio/monthly-content-plan.svg',
    link: '#',
    fallbackSvg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'
  },
  {
    id: '10',
    title: 'سكربتات فيديوهات إعلانية',
    description: 'كتابة سكربتات قصيرة ومقنعة للفيديوهات الإعلانية تساعد في إيصال الرسالة بسرعة ووضوح.',
    category: 'صناعة المحتوى',
    tags: ['Scripts', 'Ads', 'Storytelling'],
    imageUrl: '/images/portfolio/video-scripts.svg',
    link: '#',
    fallbackSvg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'
  },
  {
    id: '11',
    title: 'هوية بصرية كاملة لشركة ناشئة',
    description: 'تصميم نظام بصري متكامل يشمل الشعار، الألوان، الخطوط، ونمط الاستخدام للظهور باحترافية.',
    category: 'البراندات والهوية البصرية',
    tags: ['Brand Identity', 'Colors', 'Guidelines'],
    imageUrl: '/images/portfolio/startup-brand-identity.svg',
    link: '#',
    fallbackSvg: 'M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.58 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
  },
  {
    id: '12',
    title: 'Brand Kit لمشروع شخصي',
    description: 'إعداد حزمة هوية بصرية لصاحب مشروع أو صانع محتوى تشمل العناصر الأساسية للاستخدام الرقمي.',
    category: 'البراندات والهوية البصرية',
    tags: ['Brand Kit', 'Visual System', 'Design'],
    imageUrl: '/images/portfolio/personal-brand-kit.svg',
    link: '#',
    fallbackSvg: 'M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.58 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
  },
  {
    id: '13',
    title: 'تصميم شعار تقني حديث',
    description: 'تصميم لوجو بسيط واحترافي لمشروع تقني مع مراعاة وضوحه في الاستخدامات الرقمية والمطبوعة.',
    category: 'تصميم اللوجو',
    tags: ['Logo', 'Minimal', 'Tech'],
    imageUrl: '/images/portfolio/tech-logo-design.svg',
    link: '#',
    fallbackSvg: 'M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.58 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
  },
  {
    id: '14',
    title: 'تصميم شعار برنامج إعلامي',
    description: 'تصميم شعار يعبر عن هوية برنامج إعلامي أو إذاعي بأسلوب واضح وقابل للاستخدام في الغلاف والفيديو.',
    category: 'تصميم اللوجو',
    tags: ['Logo Design', 'Media', 'Identity'],
    imageUrl: '/images/portfolio/media-program-logo.svg',
    link: '#',
    fallbackSvg: 'M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.58 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
  },
  {
    id: '15',
    title: 'هوية بصرية لبرنامج إذاعي',
    description: 'تصميم هوية متكاملة لبرنامج إذاعي تشمل الغلاف، الألوان، القوالب البصرية، ومواد النشر.',
    category: 'البرامج الإذاعية',
    tags: ['Radio Show', 'Branding', 'Media'],
    imageUrl: '/images/portfolio/radio-show-brand.svg',
    link: '#',
    fallbackSvg: 'M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.58 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
  },
  {
    id: '16',
    title: 'تصميم غلاف ومقاطع ترويجية لبرنامج إذاعي',
    description: 'تصميم غلاف بصري ومقاطع ترويجية قصيرة تساعد البرنامج على الظهور بشكل احترافي على المنصات.',
    category: 'البرامج الإذاعية',
    tags: ['Cover Design', 'Promo', 'Audio Visual'],
    imageUrl: '/images/portfolio/radio-promo-cover.svg',
    link: '#',
    fallbackSvg: 'M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.58 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
  },
  {
    id: '17',
    title: 'إنتاج محتوى بالذكاء الاصطناعي',
    description: 'استخدام أدوات الذكاء الاصطناعي لإنتاج أفكار ونصوص وصور تساعد في تسريع صناعة المحتوى.',
    category: 'الذكاء الاصطناعي',
    tags: ['AI Content', 'Automation', 'Creative AI'],
    imageUrl: '/images/portfolio/ai-content-production.svg',
    link: '#',
    fallbackSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
  },
  {
    id: '18',
    title: 'تصميم صور إعلانية بالذكاء الاصطناعي',
    description: 'إنشاء صور إعلانية مبتكرة باستخدام الذكاء الاصطناعي مع تحسينها لتناسب الحملات والمنصات الرقمية.',
    category: 'الذكاء الاصطناعي',
    tags: ['AI Images', 'Ads', 'Generative AI'],
    imageUrl: '/images/portfolio/ai-ad-images.svg',
    link: '#',
    fallbackSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
  }
];

export const aiTools: AiTool[] = [
  {
    id: '1',
    name: 'Gemini 2.5 Flash / Pro',
    icon: 'Sparkles',
    category: 'الذكاء الاصطناعي التوليدي',
    description: 'استخدام وتكامل النماذج المتطورة من Google لإنتاج النصوص البرمجية، التحليلات، وتطوير التطبيقات الذكية.',
    proficiency: 'خبير / Expert',
    useCase: 'تطوير حلول برمجية مدعومة بالذكاء الاصطناعي وتوليد المحتوى.'
  },
  {
    id: '2',
    name: 'Midjourney & Stable Diffusion',
    icon: 'Image',
    category: 'توليد الصور الإبداعية',
    description: 'صناعة لوحات فنية ومكونات واجهة مستخدم وشعارات ومؤثرات بصرية غاية في الدقة عبر هندسة الأوامر المتقدمة.',
    proficiency: 'خبير / Expert',
    useCase: 'تصميم الهويات البصرية واللوحات الفنية الترويجية.'
  },
  {
    id: '3',
    name: 'Cursor AI & Copilot',
    icon: 'Cpu',
    category: 'البرمجة المدعومة بالذكاء الاصطناعي',
    description: 'توظيف بيئات التطوير الذكية لتسريع كتابة الأكواد النظيفة وحل المشكلات المعقدة بكفاءة وجودة عالية.',
    proficiency: 'متقدم / Advanced',
    useCase: 'برمجة وتطوير واجهات الويب وتطبيقات كاملة التجهيز.'
  },
  {
    id: '4',
    name: 'v0.dev & Bolt.new',
    icon: 'Layout',
    category: 'هندسة الواجهات السريعة',
    description: 'تصميم واجهات وتخطيطات مستوحاة من التصاميم الاحترافية لتوليد الهياكل البرمجية وبدء التطوير الفوري.',
    proficiency: 'خبير / Expert',
    useCase: 'التطوير السريع وتصميم النماذج الأولية للعملاء (Rapid Prototyping).'
  }
];

export const libraryItems: LibraryItem[] = [
  {
    id: 'lib-1',
    title: 'دليل هندسة الأوامر (Prompt Engineering) للمصممين',
    category: 'tutorials',
    categoryLabel: 'دروس تعليمية',
    description: 'شرح مفصل لكيفية الحصول على صور احترافية وتصاميم مذهلة باستخدام Midjourney عبر صياغة أوامر فائقة الدقة.',
    date: '٢٠ يونيو ٢٠٢٦',
    readTime: 'قراءة في ٥ دقائق',
    downloadUrl: '#'
  },
  {
    id: 'lib-2',
    title: 'تكامل واجهة برمجة تطبيقات Gemini في تطبيقات React',
    category: 'design',
    categoryLabel: 'مصادر ومقالات',
    description: 'شرح عملي خطوة بخطوة بالشيفرة البرمجية لكيفية ربط نماذج جوجل اللغوية بموقعك بشكل آمن وتفاعلي.',
    date: '١٨ يونيو ٢٠٢٦',
    readTime: 'قراءة في ٨ دقائق',
    downloadUrl: '#'
  },
  {
    id: 'lib-3',
    title: 'مكتبة أيقونات وموارد تصميم واجهات المستخدم الداكنة',
    category: 'resources',
    categoryLabel: 'أدوات وموارد',
    description: 'مجموعة من الملفات والرموز والشعارات المفتوحة المصدر المصممة خصيصاً للمطورين الباحثين عن تصميم راقي وأنيق.',
    date: '١٥ يونيو ٢٠٢٦',
    readTime: 'ملف جاهز للتحميل',
    downloadUrl: '#'
  }
];

export const timelineItems: TimelineItem[] = [
  {
    year: '٢٠٢٤ - ٢٠٢٦',
    title: 'مطور واجهات ذكية ومصمم مستقل',
    description: 'العمل مع عملاء في الوطن العربي لتطوير بوابات إلكترونية وحلول برمجية مبنية على الذكاء الاصطناعي وصناعة الفيديو الترويجي.'
  },
  {
    year: '٢٠٢٢ - ٢٠٢٤',
    title: 'أخصائي تصميم هوية بصرية ومونتاج',
    description: 'تطوير وتصميم العلامات التجارية للشركات والناشئين، وصناعة الفيديوهات التسويقية لزيادة الوصول والمبيعات.'
  },
  {
    year: '٢٠٢٠ - ٢٠٢٢',
    title: 'بداية الرحلة في عالم التصميم البرمجي',
    description: 'دراسة واكتساب الخبرات العميقة في مجالات تصميم الويب، المونتاج الإبداعي، وأدوات تصميم الجرافيك والواجهات.'
  }
];

export const achievementStats: AchievementStats = {
  projectsCount: '+٢٥',
  designsCount: '+١٠٠',
  videosCount: '+٥٠',
  fieldsCount: '٤ مجالات'
};
