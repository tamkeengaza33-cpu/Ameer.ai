export interface RichLibraryItem {
  id: string;
  title: string;
  category: 'tutorials' | 'design' | 'resources';
  categoryLabel: string;
  description: string;
  date: string;
  readTime: string;
  fileSize: string;
  fileType: string;
  tags: string[];
  downloadUrl: string;
  highlights: string[];
  content: {
    introduction: string;
    sections: {
      title: string;
      description?: string;
      codeBlock?: {
        language: string;
        code: string;
      };
      steps?: string[];
      bullets?: { label: string; text: string }[];
    }[];
    conclusion?: string;
  };
}

export const richLibraryItems: RichLibraryItem[] = [
  {
    id: 'lib-prompt-eng',
    title: 'دليل هندسة الأوامر (Prompt Engineering) لـ Midjourney v6',
    category: 'tutorials',
    categoryLabel: 'دروس وشروحات',
    description: 'دليل شامل يشرح صياغة الأوامر للحصول على صور، شعارات، وواجهات مستخدم مذهلة وفائقة الدقة والواقعية.',
    date: '٢٤ يونيو ٢٠٢٦',
    readTime: 'قراءة في ٦ دقائق',
    fileSize: '٢.٤ ميجابايت',
    fileType: 'PDF / دليل رقمي',
    tags: ['Midjourney', 'AI Design', 'Prompts'],
    downloadUrl: '#',
    highlights: ['أسرار الصياغة المتقدمة', 'مكتبة الكلمات المفتاحية', 'بارامترات الإصدار السادس'],
    content: {
      introduction: 'يعتبر توليد الصور بالذكاء الاصطناعي مهارة فنية بحد ذاتها. يكمن سر النجاح في دقة التوجيه البصري وصياغة أمر (Prompt) يفهمه المحرك بعمق. في هذا الدليل، نكشف عن الهيكل السحري لأوامر Midjourney v6 الذي يعتمد عليه كبار المصممين.',
      sections: [
        {
          title: '١. الهيكل النموذجي للأمر البصري الاحترافي',
          description: 'للحصول على نتيجة مذهلة من المرة الأولى، التزم دائماً بالهيكل التالي المرتب بذكاء:',
          codeBlock: {
            language: 'text',
            code: '[Subject] + [Setting/Context] + [Lighting] + [Camera/Style] + [Parameters]'
          },
          bullets: [
            { label: 'العنصر الأساسي (Subject):', text: 'وصف دقيق لما تريد رؤيته (مثال: فنجان قهوة من السيراميك الداكن).' },
            { label: 'البيئة والخلفية (Setting):', text: 'أين يقع العنصر وما يحيط به (مثال: على طاولة خشبية رطبة بجوار نافذة ممطرة).' },
            { label: 'نمط الإضاءة (Lighting):', text: 'عامل الجاذبية البصرية الأكبر (مثال: إضاءة دراماتيكية دافئة بتوهج خفيف).' },
            { label: 'أسلوب الكاميرا والعدسة (Camera):', text: 'لتحديد عمق الصورة والواقعية (مثال: لقطة ماكرو بعدسة 85mm بفتحة f/1.8 لتأثير العزل).' }
          ]
        },
        {
          title: '٢. مكتبة الكلمات البصرية السحرية',
          description: 'إليك قائمة بأقوى الكلمات المفتاحية باللغة الإنجليزية لتعزيز الجودة البصرية والواقعية بشكل فوري:',
          bullets: [
            { label: 'إضاءة سينمائية:', text: 'Cinematic studio lighting, volumetric glow, moody golden hour accent, dramatic shadows.' },
            { label: 'تفاصيل دقيقة ورسم ثلاثي الأبعاد:', text: 'Photorealistic textures, 8k resolution, octane render, intricate details, hyper-detailed.' },
            { label: 'أسلوب التصوير الفوتوغرافي الاحترافي:', text: 'Sleek composition, depth of field, sharp focus, award-winning photography.' }
          ]
        },
        {
          title: '٣. بارامترات التحكم المتقدمة (Parameters)',
          description: 'تُضاف هذه الأوامر في نهاية البرومبت للتحكم الكامل في الخصائص الفنية للصورة:',
          bullets: [
            { label: '--ar 16:9', text: 'لتحديد نسبة العرض إلى الارتفاع (مثال: وايد سكرين لسطح المكتب أو اليوتيوب).' },
            { label: '--style raw', text: 'لتقليل تزيين الذكاء الاصطناعي المبالغ فيه وتوجيهه للالتزام التام بكلماتك الحرفية.' },
            { label: '--s 250', text: 'قيمة الـ Stylize (تتراوح من 0 لـ 1000) للتحكم في مدى فنية وجمالية التفاصيل المولدة.' },
            { label: '--v 6.0', text: 'لتفعيل المحرك الأحدث الذي يقدم فهمًا أفضل للنصوص والقدرة على كتابة الكلمات داخل الصور.' }
          ]
        },
        {
          title: '٤. أمثلة عملية جاهزة للاستخدام والنسخ',
          description: 'انسخ هذه البرومبتات وطبقها فوراً في Midjourney لرؤية النتائج المدهشة:',
          codeBlock: {
            language: 'text',
            code: `// برومبت لتصميم واجهة مستخدم داكنة للهواتف الذكية:\nModern banking mobile app interface UI, sleek clean design, dark neomorphic style, glowing gold accents, glassmorphism, figma mockup style, high fidelity, 3D clay elements --ar 16:9 --style raw --v 6.0\n\n// برومبت لتوليد شعار تقني مستقبلي متناسق:\nMinimalist geometric high-tech vector logo, letter "A", quantum computing theme, neon cyan and violet colors, dark background, Adobe Illustrator style, vector precision, clean path --v 6.0`
          }
        }
      ],
      conclusion: 'هندسة الأوامر هي لغة التفاهم مع الآلة. الاستمرار في التجريب وتغيير ترتيب الكلمات ونوع الإضاءة هو طريقك للاحتراف وتوفير ساعات من البحث والتصميم اليدوي.'
    }
  },
  {
    id: 'lib-gemini-react',
    title: 'تكامل واجهة برمجة تطبيقات Gemini بأمان في تطبيقات React',
    category: 'tutorials',
    categoryLabel: 'دروس وشروحات',
    description: 'شرح منهجي بالشيفرة البرمجية لبناء خادم وسيط (Proxy API) للاتصال بنماذج Gemini دون كشف مفاتيحك السرية للمتصفح.',
    date: '٢٢ يونيو ٢٠٢٦',
    readTime: 'قراءة في ٨ دقائق',
    fileSize: '١.٨ ميجابايت',
    fileType: 'Code Snippets / أكواد ومقال',
    tags: ['React', 'Gemini API', 'Security'],
    downloadUrl: '#',
    highlights: ['معمارية الخادم الوسيط', 'تكامل SDK الجديد', 'تأمين مفاتيح الـ API'],
    content: {
      introduction: 'عند بناء تطبيقات الويب المدعومة بالذكاء الاصطناعي، يقع العديد من المطورين المبتدئين في خطأ فادح وهو استدعاء الـ API الخاص بجوجل أو OpenAI مباشرة من المتصفح، مما يعرض مفاتيحهم السرية للسرقة والاستغلال الضار. في هذا الدرس، نشرح الطريقة الآمنة والاحترافية للتكامل باستخدام Node.js/Express و React.',
      sections: [
        {
          title: '١. معمارية الاتصال الآمن (Proxy Architecture)',
          description: 'بدلاً من اتصال المتصفح بالذكاء الاصطناعي مباشرة، نقوم بإنشاء خادم وسيط يعمل كجدار حماية يخفي المفاتيح السرية عن المستخدمين ويتحكم في حجم الطلبات:',
          bullets: [
            { label: 'الخطوة الأولى:', text: 'يقوم تطبيق React بإرسال طلب محلي إلى مسار الخادم الخاص بنا (مثال: POST /api/gemini).' },
            { label: 'الخطوة الثانية:', text: 'يستقبل خادم Express الطلب، ويقوم بإضافة المفتاح السري المخرّن في متغيرات البيئة الآمنة (.env).' },
            { label: 'الخطوة الثالثة:', text: 'يرسل الخادم الطلب إلى جوجل عبر SDK الرسمي ويستقبل الإجابة.' },
            { label: 'الخطوة الرابعة:', text: 'يعيد الخادم الإجابة نظيفة لتطبيق React لعرضها للمستخدم.' }
          ]
        },
        {
          title: '٢. كود الخادم الوسيط (Express Server with @google/genai)',
          description: 'هذا الكود متوافق تماماً مع حزمة الـ SDK الحديثة الموصى بها من جوجل لدمج نماذج Gemini 3.5 Flash:',
          codeBlock: {
            language: 'typescript',
            code: `import express from 'express';\nimport { GoogleGenAI } from '@google/genai';\nimport dotenv from 'dotenv';\n\ndotenv.config();\nconst app = express();\napp.use(express.json());\n\n// تهيئة العميل باستخدام المفتاح المخفي من السيرفر\nconst ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });\n\napp.post('/api/gemini', async (req, res) => {\n  try {\n    const { message } = req.body;\n    if (!message) {\n      return res.status(400).json({ error: 'الرسالة مطلوبة' });\n    }\n\n    const response = await ai.models.generateContent({\n      model: 'gemini-3.5-flash',\n      contents: message,\n      config: {\n        temperature: 0.7,\n        systemInstruction: 'أنت مساعد ذكي واحترافي تجيب باللغة العربية بطلاقة.'\n      }\n    });\n\n    res.json({ reply: response.text });\n  } catch (error: any) {\n    console.error(error);\n    res.status(500).json({ error: 'حدث خطأ أثناء معالجة الطلب الذكي' });\n  }\n});\n\napp.listen(3000, () => console.log('Proxy Server running on port 3000'));`
          }
        },
        {
          title: '٣. كود تطبيق الويب (React Client Component)',
          description: 'إليك كود الخطاف (Hook) والاتصال البسيط لإرسال السؤال واستقبال الإجابة وعرض حالات التحميل:',
          codeBlock: {
            language: 'typescript',
            code: `import React, { useState } from 'react';\n\nexport function AiChat() {\n  const [message, setMessage] = useState('');\n  const [reply, setReply] = useState('');\n  const [loading, setLoading] = useState(false);\n\n  const handleSend = async () => {\n    if (!message.trim() || loading) return;\n    setLoading(true);\n    \n    try {\n      const response = await fetch('/api/gemini', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ message })\n      });\n      const data = await response.json();\n      setReply(data.reply);\n    } catch (error) {\n      console.error('Failed to chat:', error);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  return (\n    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900">\n      <textarea \n        value={message} \n        onChange={(e) => setMessage(e.target.value)} \n        placeholder="اسأل الذكاء الاصطناعي..." \n        className="w-full p-3 rounded bg-neutral-950 border border-neutral-800 text-white"\n      />\n      <button \n        onClick={handleSend} \n        disabled={loading} \n        className="mt-2 bg-brand text-black px-4 py-2 rounded font-bold"\n      >\n        {loading ? 'جاري التفكير...' : 'إرسال الطلب'}\n      </button>\n      {reply && <div className="mt-4 p-3 bg-neutral-950 rounded text-neutral-300">{reply}</div>}\n    </div>\n  );\n}`
          }
        }
      ],
      conclusion: 'باتباع هذا التنسيق، تضمن حماية كاملة لحساباتك ومفاتيحك الفنية من السرقة وتملك سيطرة كاملة على معدل استخدام الطلبات والحدود المسموح بها.'
    }
  },
  {
    id: 'lib-dark-palette',
    title: 'نظام تنسيق الألوان والتوهج للواجهات الداكنة الفخمة',
    category: 'design',
    categoryLabel: 'أدوات التصميم',
    description: 'قواعد ومعايير اختيار الألوان الرقمية وتوزيع درجات السطوع لإنشاء تصاميم مريحة للعين ومعززة بتأثيرات الوهج (Neon Glow).',
    date: '٢٠ يونيو ٢٠٢٦',
    readTime: 'قراءة في ٥ دقائق',
    fileSize: '٣.١ ميجابايت',
    fileType: 'Figma Library / دليل ألوان',
    tags: ['Color Palette', 'Dark UI', 'Aesthetics'],
    downloadUrl: '#',
    highlights: ['أوزان الخلفيات', 'تأثيرات الزجاج (Glassmorphism)', 'كود وتدرجات Tailwind'],
    content: {
      introduction: 'تصميم الواجهات الداكنة لا يعني استخدام اللون الأسود المطلق (#000) في كل مكان. بل يتطلب طبقات دقيقة من درجات الرمادي والأسود الفحمي لإعطاء عمق وتوجيه عين المستخدم للمحتوى الأهم بشكل مريح وبدون تشتيت بكسلي.',
      sections: [
        {
          title: '١. تدريج الارتفاع البصري للمستويات (Surface Elevation)',
          description: 'في التصميم الداكن، نستخدم اللون الأفتح تدريجياً للتعبير عن الكروت والنوافذ الأكثر قرباً من عين المستخدم (الأعلى ارتفاعاً):',
          bullets: [
            { label: 'الخلفية العميقة (Base Canvas):', text: 'تتراوح بين #050505 و #0A0A0A لضمان سواد مريح.' },
            { label: 'البطاقات والمكونات (Cards/Surfaces):', text: 'تكون بلون #121212 أو #171717 مع حدود ناعمة جداً بوزن #262626 لترسيم الحواف.' },
            { label: 'النوافذ العائمة والمنسدلة (Floating Dropdowns):', text: 'تكون بلون #1C1C1C أو #222222 لإعطاء وهم القرب والطفو البصري.' }
          ]
        },
        {
          title: '٢. تدرجات الألوان المتوهجة (Tailwind Glow Presets)',
          description: 'إليك أكواد وتنسيقات جاهزة في Tailwind CSS لتأثيرات الوهج الرقمي الأكثر جاذبية وسلاسة:',
          bullets: [
            { label: 'توهج الذهب الفاخر (الأمير):', text: 'border border-brand/20 shadow-[0_0_20px_rgba(245,180,0,0.15)] bg-brand/5 text-brand' },
            { label: 'توهج السيان السيبراني (Cyber Cyan):', text: 'border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-cyan-500/5 text-cyan-400' },
            { label: 'توهج البنفسجي الفلكي (Cosmic Violet):', text: 'border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.15)] bg-purple-500/5 text-purple-400' }
          ]
        },
        {
          title: '٣. تقنية تأثير الزجاج الشفاف (Glassmorphism)',
          description: 'لتحقيق مظهر الزجاج الشبه شفاف الذي يضفي طابعاً مستقبلياً راقياً، استخدم هذا المزيج البرمجي الرائع:',
          codeBlock: {
            language: 'html',
            code: `<!-- كود لتصميم كارت زجاجي متوهج ومتفاعل -->\n<div class="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:border-brand/30 hover:shadow-[0_15px_30px_rgba(245,180,0,0.1)]">\n  <h3 class="text-white font-bold">كارت زجاجي متوهج</h3>\n  <p class="text-neutral-400 text-sm">مظهر زجاجي يبرز الخلفية المتحركة خلف الكارت بسلاسة.</p>\n</div>`
          }
        }
      ],
      conclusion: 'التوازن هو المفتاح. لا تبالغ في استخدام تأثيرات التوهج أو النيون، اجعلها مخصصة فقط للأزرار الهامة (CTA) ومؤشرات الحالة الفعالة لمنع تشويش تجربة القراءة والوصول.'
    }
  },
  {
    id: 'lib-font-pairing',
    title: 'مصفوفة اختيار وتنسيق الخطوط للهويات الرقمية الفاخرة',
    category: 'design',
    categoryLabel: 'أدوات التصميم',
    description: 'دليل منهجي لكيفية اختيار الخطوط المتوافقة بصرياً لإبراز طابع وتخصص المشروع وجذب انتباه القارئ بسلاسة.',
    date: '١٨ يونيو ٢٠٢٦',
    readTime: 'قراءة في ٤ دقائق',
    fileSize: '١.٢ ميجابايت',
    fileType: 'Typography Guide / كتيب خطوط',
    tags: ['Typography', 'UI/UX', 'Branding'],
    downloadUrl: '#',
    highlights: ['أسرار تناغم الخطوط', 'دليل الاستخدام للمنصات', 'تضمين جوجل فونتس المباشر'],
    content: {
      introduction: 'الخط هو صوت البراند الصامت. اختيار خطوط غير متوافقة أو استخدام أحجام عشوائية يدمر هوية الموقع فورياً ويقلل من رغبة العميل في القراءة والمتابعة. في هذا الدليل، نلخص التوليفات المثالية التي تمنح موقعك المظهر الاحترافي الممتاز.',
      sections: [
        {
          title: '١. ثنائيات الخطوط الموصى بها (Font Pairings)',
          description: 'إليك المزيج الذهبي حسب "المود" أو الانطباع المطلوب إيصاله للجمهور:',
          bullets: [
            { label: 'المظهر التقني والمستقبلي (Sleek Tech):', text: 'استخدم خط Space Grotesk أو Outfit للعناوين الكبيرة مع خط Inter للنصوص والفقرات.' },
            { label: 'المظهر الفاخر والكلاسيكي (Luxury Serif):', text: 'استخدم خط Playfair Display للعناوين الرئيسية مع خط Outfit للمقاطع والتحميلات.' },
            { label: 'المظهر الهندسي البسيط (Minimalist Modern):', text: 'استخدم خط Plus Jakarta Sans للعناوين الكبيرة، فهو هندسي متكامل ومريح بوزن Bold.' }
          ]
        },
        {
          title: '٢. كيفية دمج وتثبيت الخطوط في Tailwind CSS',
          description: 'الخطوات الصحيحة لتسجيل الخطوط في مشروعك عبر Google Fonts ومستوى الإطار البرمجي:',
          codeBlock: {
            language: 'css',
            code: `/* تضمين الخطوط داخل ملف index.css الخاص بالمشروع */\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap');\n\n@theme {\n  --font-sans: "Inter", ui-sans-serif, sans-serif;\n  --font-display: "Space Grotesk", sans-serif;\n  --font-mono: "JetBrains Mono", monospace;\n}`
          }
        },
        {
          title: '٣. النطاق الذهبي للأحجام والارتفاعات (Modular Scale)',
          description: 'لتأسيس تسلسل هرمي واضح، اتبع هذه الموازين الهامة:',
          bullets: [
            { label: 'عنوان الصفحة (Hero Headline):', text: 'مقاس 4xl إلى 6xl بوزن black (سميك جداً) بتباعد حروف ضيق tracking-tight.' },
            { label: 'العناوين الجانبية (Section Headings):', text: 'مقاس 2xl أو 3xl بوزن bold (عريض).' },
            { label: 'النصوص العادية (Body Text):', text: 'مقاس sm أو base بوزن light أو normal مع تباعد أسطر مريح leading-relaxed.' }
          ]
        }
      ],
      conclusion: 'التزم بحد أقصى خطين في الموقع بالكامل. خط واحد للعناوين والآخر للنصوص هو الهيكل النموذجي الذي يمنح موقعك ثباتاً وهوية واضحة تزيد الثقة والاحترافية.'
    }
  },
  {
    id: 'lib-svg-pack',
    title: 'حقيبة أكواد SVG لأيقونات ورموز الذكاء الاصطناعي',
    category: 'resources',
    categoryLabel: 'ملفات وموارد',
    description: 'حقيبة برمجية كاملة تحتوي على رموز فنية مصممة بمسارات نظيفة لاستخدامها مباشرة كأيقونات تقنية خفيفة وسريعة التحميل.',
    date: '١٥ يونيو ٢٠٢٦',
    readTime: 'جاهز للتحميل مجاناً',
    fileSize: '٤٨٠ كيلوبايت',
    fileType: 'SVG Vector / حزمة برمجية',
    tags: ['SVG Icons', 'Development Assets', 'AI Nodes'],
    downloadUrl: '#',
    highlights: ['أكواد نظيفة وقابلة للنسخ', 'متوافقة مع Tailwind CSS', 'تحميل وتضمين مستقل'],
    content: {
      introduction: 'السرعة هي كل شيء في أداء مواقع الويب. بدلاً من تحميل مكاتب أيقونات ثقيلة وضخمة، يقدم الأمير الفلسطيني هذه الحقيبة البرمجية من أيقونات الـ SVG المدمجة والخفيفة للغاية التي تناسب مشاريع البرمجة والذكاء الاصطناعي وتلوّن ذاتياً حسب العناصر المحيطة.',
      sections: [
        {
          title: '١. أيقونة المعالج العصبي الذكي (Neural Core Icon)',
          description: 'كود SVG مثالي لتمثيل المعالجة السحابية، الرقائق الإلكترونية أو النواة الذكية:',
          codeBlock: {
            language: 'xml',
            code: `<svg class="w-12 h-12 text-brand animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n  <rect x="4" y="4" width="16" height="16" rx="2"/>\n  <rect x="9" y="9" width="6" height="6" rx="1"/>\n  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>\n</svg>`
          }
        },
        {
          title: '٢. أيقونة الشرارة التوليدية (Sparkles & Magic Icon)',
          description: 'تُستخدم على نطاق واسع لتمثيل أدوات توليد الصور والكتابة الفورية بالذكاء الاصطناعي:',
          codeBlock: {
            language: 'xml',
            code: `<svg class="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>\n</svg>`
          }
        },
        {
          title: '٣. أيقونة الاتصال السحابي وقاعدة البيانات (Database Connection)',
          description: 'أيقونة ممتازة لتمثيل الخوادم أو قواعد البيانات الموزعة أو تكامل الأنظمة السحابية:',
          codeBlock: {
            language: 'xml',
            code: `<svg class="w-10 h-10 text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n  <ellipse cx="12" cy="5" rx="9" ry="3"/>\n  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>\n  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>\n</svg>`
          }
        }
      ],
      conclusion: 'قم بنسخ أي من الأكواد أعلاه مباشرة ولصقها داخل كود React أو HTML، وستعمل بسلاسة مطلقة وبأعلى دقة ممكنة على جميع الشاشات والمقاسات.'
    }
  },
  {
    id: 'lib-figma-kit',
    title: 'حقيبة كروت وهياكل الواجهات الداكنة المجهزة لـ Figma',
    category: 'resources',
    categoryLabel: 'ملفات وموارد',
    description: 'ملف تصميم مفتوح المصدر لبرنامج Figma يحتوي على هياكل شبكية (Grids)، كروت زجاجية، وأزرار متوهجة لتبدأ بها واجهتك القادمة.',
    date: '١٢ يونيو ٢٠٢٦',
    readTime: 'تحميل مباشر مجاني',
    fileSize: '٦.٥ ميجابايت',
    fileType: 'Figma (.fig) / ملف مفتوح',
    tags: ['Figma File', 'UI Kit', 'Wireframes'],
    downloadUrl: '#',
    highlights: ['أزرار تفاعلية بالكامل', 'أعمدة وشبكات Layouts', 'توافق كامل مع Tailwind CSS'],
    content: {
      introduction: 'ابدأ مشاريع تصميم الواجهات الخاصة بك بذكاء وسرعة. نوفر لك في هذا الملف الجاهز للتحميل جميع الكروت الأساسية، القوائم المنسدلة، وأنماط الأزرار بحالتها المختلفة المصممة بدقة متطابقة مع موازين التصميم العالمي ومقاسات شبكة Tailwind.',
      sections: [
        {
          title: '١. ما تحتويه حقيبة Figma المفتوحة',
          description: 'مجموعة متكاملة من العناصر والأنظمة البصرية التي تختصر عليك ساعات من رسم الحواف والظلال:',
          bullets: [
            { label: 'بطاقات الواجهة الشبكية (Layout Cards):', text: 'أكثر من ١٥ نوع كارت زجاجي ومظلم بظلال ناعمة وإطارات دقيقة بوزن 1px.' },
            { label: 'أزرار تفاعلية (Interactive Buttons):', text: 'أزرار مجهزة بخواص Figma Component States (Default, Hover, Press, Loading).' },
            { label: 'حقول الإدخال وقوائم الاختيار (Inputs & Dropdowns):', text: 'نماذج حقول احترافية مع مؤشرات الخطأ وحالات التركيز (Focus).' }
          ]
        },
        {
          title: '٢. كيفية استيراد الملف وبدء العمل',
          description: 'اتبع هذه الخطوات لتثبيت واستخدام الموارد في مساحة عملك:',
          steps: [
            'قم بتحميل الملف المرفق وحفظه على جهازك بصيغة .fig',
            'افتح حساب Figma الخاص بك، واذهب إلى لوحة التحكم الرئيسية ثم اضغط على زر Import.',
            'اختر الملف الذي قمت بتحميله وانتظر بضع ثوان حتى يكتمل الرفع.',
            'افتح الملف وابدأ في نسخ العناصر أو استخدام الـ local components لبناء شاشاتك بأسلوب الـ Auto-Layout الرائع.'
          ]
        }
      ],
      conclusion: 'تم إعداد هذا الملف بعناية فائقة بواسطة الأمير الفلسطيني لدعم مجتمع المصممين والمطورين العرب وتوفير بيئة انطلاق قوية لتطوير الواجهات الفخمة.'
    }
  }
];
