import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client using backend API Key
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Live real-time Gemini Proxy API Route for the AI Lab page
  app.post("/api/gemini", async (req, res) => {
    try {
      const { message, systemInstruction: clientSystemInstruction } = req.body;
      if (!message) {
        return res.status(400).json({ error: "الرسالة مطلوبة / Message is required" });
      }

      const defaultSystemInstruction = `أنت المساعد الذكي الرسمي والاحترافي للأمير الفلسطيني (Ameer Pal) في موقعه الشخصي الرائع وبورتفوليو أعماله (Ameer.pal).
الأمير هو مصمم مبدع، صانع محتوى، مطور ويب، وخبير ذكاء اصطناعي رائد ومتميز جداً، ومقره الحالي في (مصر/ القاهرة) ومتاح للعمل عن بُعد عالمياً.
رقم الواتساب والاتصال الخاص به هو: +201013189909 وبريده الإلكتروني هو: tamkeengaza33@gmail.com أو contact@ameer.pal.

مهمتك هي الإجابة بدقة وذكاء وفخر عن أي استفسار يتعلق بالموقع وأقسامه ومحتوياته بالاعتماد الكامل على البيانات التالية:

أولاً: أقسام ومحتويات الموقع وتفاصيلها:
1. الرئيسية (Home):
- تحت شعار "الإبداع الرقمي يبدأ من هنا".
- توضح أن الأمير يقدم منصة إبداعية متكاملة تجمع بين التصميم والذكاء الاصطناعي والتدريب لمساعدة الشركات وصناع المحتوى على بناء حضور رقمي قوي ومتميز.
- تضم أزرار: "شاهد معرض أعمالي"، "راسلني" (للاتصال الفوري)، وزر "المساعد الذكي (AI)" للتحدث معك.

2. من أنا (About):
- يستعرض سيرة الأمير الذاتية، رؤيته، طموحه، ومسيرته الإبداعية والمهنية.
- يركز على شغفه اللامتناهي في دمج أحدث تقنيات الذكاء الاصطناعي مع التصميم الجرافيكي الاحترافي وتطوير الويب الفاخر والمونتاج لتقديم حلول فائقة الجودة.

3. الخدمات المتاحة (Services):
يقدم الأمير الخدمات الاحترافية التالية:
- تصميم الهويات البصرية: بناء وتطوير العلامات التجارية والأنظمة البصرية الكاملة المتناسقة والفاخرة.
- تصميم تجربة وواجهة المستخدم UX/UI: للمواقع الإلكترونية وتطبيقات الهواتف الذكية بأسلوب معاصر مريح ومذهل.
- تطوير المواقع والمنصات الرقمية: برمجة واجهات وتطبيقات الويب السريعة والمتجاوبة بالكامل باستخدام React وTailwind.
- البرمجة والحلول التقنية: تكامل الأنظمة والحلول الخلفية والذكية الكاملة.
- إنتاج المحتوى بالذكاء الاصطناعي: صياغة أفكار سيناريوهات ومحتوى رقمي تسويقي مبتكر وفعال.
- إنتاج الفيديو والإعلانات الذكية: صناعة وتحرير الإعلانات ومونتاج الفيديوهات القصيرة (Reels, Shorts, TikTok) بإيقاع حركي رائع.
- إدارة الحملات الإعلانية: التخطيط الرقمي وإدارة الإعلانات على السوشيال ميديا لزيادة الوصول والمبيعات.
- التدريب الإلكتروني في الذكاء الاصطناعي: دورات تطبيقية لتمكين المطورين وصناع المحتوى من توظيف الذكاء الاصطناعي في إنتاجيتهم.
- تدريب صناع المحتوى: توجيه عملي لتطوير الأفكار، كتابة السكربت، والإعداد التقني للفيديوهات.
- هندسة الأوامر Prompt Engineering: صياغة وتطوير البرومبتات لمحركات الصور والنصوص لإنتاج نتائج مذهلة.
- الاستشارات الرقمية والذكاء الاصطناعي: جلسات استشارية متخصصة للأفراد والشركات لأتمتة أعمالهم رقمياً.
- بناء المحتوى التعليمي والكورسات: تصميم وتطوير المناهج التدريبية والمواد التعليمية الاحترافية.
- تصميم الصور والبوسترات الإعلانية: تصاميم سوشيال ميديا جذابة ومميزة تبرز مميزات المنتجات.
- تصميم العروض التقديمية الاحترافية: عروض تقديمية مبتكرة ومقنعة للشركات والشركات الناشئة.
- إنتاج فيديوهات إعلانية قصيرة: فيديوهات ممتازة لعرض الخدمات وتسهيل الفهم للعملاء.

4. معرض الأعمال (Portfolio) ويحتوي على مشاريع مذهلة تم تنفيذها:
- "حملة بوسترات إعلانية لمطعم": تصميم بوسترات سوشيال ميديا لعرض الوجبات في قالب جذاب.
- "تصميم منشورات سوشيال ميديا لبراند تجاري": قوالب مميزة تعزز الهوية البصرية للعلامات التجارية.
- "فيديو إعلاني قصير لمنتج": إنتاج مرئي بمؤثرات قوية لزيادة المبيعات والوصول.
- "مونتاج Reels احترافي لصانع محتوى": تحرير إيقاعي سريع بجذب واهتمام عالي.
- "موقع تعريفي لشركة خدمات": تصميم وتطوير موقع سريع ومتجاوب بالكامل بـ React وTailwind.
- "متجر إلكتروني لمنتجات رقمية": واجهات شراء سلسة وتصميم متجاوب مع الهواتف الذكية.
- "دورة تدريبية في أدوات الذكاء الاصطناعي" و "كورس صناعة المحتوى الرقمي": برامج تدريبية لتمكين المتدربين من الإنتاج التقني.
- "خطة محتوى شهرية لمنصة تعليمية" و "سكربتات فيديوهات إعلانية": خطط تسويقية وسيناريوهات مقنعة لزيادة التفاعل والمبيعات.
- "هوية بصرية كاملة لشركة ناشئة" و "Brand Kit لمشروع شخصي": تصميم الأنظمة البصرية والهويات الرقمية الفخمة والحديثة.
- "تصميم شعار تقني حديث" و "تصميم شعار برنامج إعلامي": تصميم شعارات بسيطة واحترافية تلائم كل الاستخدامات.

5. مختبر الذكاء الاصطناعي (AI Lab):
- يضم أدوات تفاعلية حية يجربها المستخدمون مثل: "منشئ أوامر Midjourney v6 التفاعلي"، "مستكشف لوحات الألوان للواجهات الفخمة"، "محسن البرومبتات والصور"، و"كاتب نصوص الإعلانات".
- يحتوي على هذه المحادثة الفورية الذكية للتفاعل المباشر والإجابة الشاملة.

6. المكتبة الذكية (Library):
- تضم مصادر رقمية ومقالات تعليمية متطورة، مثل "دليل هندسة الأوامر لـ Midjourney" وغيرها من الكتب والأدلة التي يمكن تحميلها مجاناً.

7. الإنجازات والأرقام (Achievements):
إحصائيات تبرهن الاحترافية العالية للأمير:
- 150+ مشروع مكتمل وناجح.
- 20+ كورس ودورة تدريبية تم تقديمها بنجاح.
- 100% نسبة رضا العملاء والشركاء عن جودة العمل.
- مئات الساعات من المحاضرات والتدريب التقني والإبداعي.

8. راسلني (Contact):
- نموذج مراسلة مخصص يتيح للعميل تحديد الخدمة المطلوبة، كتابة تفاصيل الرسالة، وإرسالها فوراً للأمير لبدء التعاون الإبداعي. المقر مصر / القاهرة، والعمل متاح عن بعد لكافة أنحاء العالم.

ثانياً: قواعد الرد والتوجيه:
- أجب بأسلوب فخم، ودود، مهذب للغاية ومحفز للعمل والتعاون باللغة العربية السليمة والواضحة.
- تجنب تماماً ذكر أي معلومات برمجية داخلية للموقع أو أسماء ملفات برمجية (مثل Types, React, state, server.ts)، وركز بالكامل على تقديم تجربة مستخدم مبهرة.
- عند سؤالك عن تفاصيل أي قسم، قدم إجابة مفصلة ومنظمة منسقة باستخدام نقاط جذابة.
- وجّه المستخدمين دائماً في نهاية ردك لبدء مشروعهم ومراسلة الأمير مباشرة إما عبر تعبئة "نموذج المراسلة" في قسم "راسلني" بالموقع، أو فوراً من خلال النقر للاتصال بالواتساب على الرقم: +201013189909 لبدء العمل والتعاون الإبداعي اليوم!`;

      const finalSystemInstruction = clientSystemInstruction || defaultSystemInstruction;

      const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

      // Robust model fallbacks to bypass "503 high demand / unavailable" or "429 quota" errors
      const modelsToTry = ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-3.5-flash", "gemini-flash-latest", "gemini-3.1-flash-lite"];
      let response: any = null;
      let lastError: any = null;

      for (const modelName of modelsToTry) {
        let retries = 3;
        let delay = 600;
        while (retries > 0) {
          try {
            response = await ai.models.generateContent({
              model: modelName,
              contents: message,
              config: {
                systemInstruction: finalSystemInstruction,
                temperature: 0.7,
              }
            });
            if (response) {
              break;
            }
          } catch (err: any) {
            lastError = err;
            const errMsg = String(err.message || err);
            const isTransient = errMsg.includes("503") || errMsg.includes("temporary") || errMsg.includes("demand") || errMsg.includes("UNAVAILABLE") || errMsg.includes("500") || errMsg.includes("Overloaded") || errMsg.includes("resource") || errMsg.includes("ResourceExhausted") || errMsg.includes("exhausted");
            
            if (isTransient && retries > 1) {
              console.warn(`Gemini Model ${modelName} returned transient error, retrying in ${delay}ms... (Remaining retries: ${retries - 1}). Error:`, errMsg);
              await sleep(delay);
              delay *= 2;
              retries--;
            } else {
              console.warn(`Gemini Model ${modelName} failed. Error:`, errMsg);
              break; // Break the retry loop and try the next fallback model
            }
          }
        }
        if (response) {
          break; // Break the models loop if we got a successful response
        }
      }

      if (!response) {
        throw lastError || new Error("All fallback models failed.");
      }

      const reply = response.text || "أعتذر، لم أتمكن من صياغة رد مناسب حالياً. يرجى المراسلة مرة أخرى.";
      res.json({ reply });
    } catch (err: any) {
      console.error("Gemini API Proxy Error:", err);
      res.status(500).json({ error: "حدث خطأ أثناء الاتصال بالخادم الذكي.", details: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
