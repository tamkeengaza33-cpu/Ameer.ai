import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { richLibraryItems, RichLibraryItem } from './LibraryData';
import { 
  BookOpen, Calendar, Clock, Download, FileText, CheckCircle,
  Search, Sparkles, Code, Palette, Layers, Copy, Check,
  ExternalLink, Eye, X, ArrowLeft, Lightbulb, Sliders,
  Wand2, Laptop, ChevronLeft, Send, Zap, Plus, ArrowRight,
  HelpCircle
} from 'lucide-react';

interface LibraryProps {
  setActiveTab: (tab: string) => void;
}

export default function Library({ setActiveTab: setGlobalActiveTab }: LibraryProps) {
  // Tabs and filter states
  const [activeTab, setActiveTab] = useState<'all' | 'tutorials' | 'design' | 'resources'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive Reader State (opens drawer)
  const [selectedItem, setSelectedItem] = useState<RichLibraryItem | null>(null);
  
  // Download simulation feedback states
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  // Copy code blocks state
  const [copiedBlockIndex, setCopiedBlockIndex] = useState<number | null>(null);



  // -----------------------------------------------------------------
  // 3. RESOURCE REQUEST FORM STATE
  // -----------------------------------------------------------------
  const [requestTitle, setRequestTitle] = useState('');
  const [requestCategory, setRequestCategory] = useState('tutorials');
  const [requestDetails, setRequestDetails] = useState('');
  const [isSubmittingRequest, setIsSubmittingRequest] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [aiResponseText, setAiResponseText] = useState('');

  const submitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestTitle.trim() || isSubmittingRequest) return;

    setIsSubmittingRequest(true);
    
    // Simulate AI computing an estimated response & scheduling
    setTimeout(() => {
      setIsSubmittingRequest(false);
      setRequestSuccess(true);
      
      const categoriesArabic: { [key: string]: string } = {
        tutorials: 'الدروس والشروحات التفاعلية',
        design: 'أدوات ونظم التصميم',
        resources: 'الملفات والموارد القابلة للتحميل'
      };

      setAiResponseText(`مرحباً بك! استلمت طلبك الذكي لإضافة مورد بعنوان: "${requestTitle}" في قسم ${categoriesArabic[requestCategory]}.
لقد قام محرك الذكاء الاصطناعي للأمير بجدولة هذا الطلب لتقدير المادة العلمية وتنسيق الأكواد والملفات اللازمة.
💡 **الحالة المقدرة:** تم القبول وإدراجها في قائمة التطوير المباشر.
📅 **الموعد المقدر للنشر:** خلال ٢٤ - ٤٨ ساعة القادمة. شكراً لشغفك بمشاركة المعرفة والمساهمة في إثراء المكتبة!`);
    }, 1200);
  };

  const resetRequestForm = () => {
    setRequestTitle('');
    setRequestDetails('');
    setRequestSuccess(false);
    setAiResponseText('');
  };

  // -----------------------------------------------------------------
  // 4. FILTERING & SEARCHING LIBRARY ITEMS
  // -----------------------------------------------------------------
  const filteredItems = useMemo(() => {
    return richLibraryItems.filter(item => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      const matchesSearch = searchQuery.trim() === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Download Action Simulation
  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadedId(id);
      setTimeout(() => setDownloadedId(null), 3000);
    }, 1500);
  };

  // Helper to copy code in the drawer
  const copyCodeBlock = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedBlockIndex(index);
    setTimeout(() => setCopiedBlockIndex(null), 2000);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 bg-neutral-950 overflow-hidden" id="library-section">
      {/* Visual background lights and grids */}
      <div className="absolute top-24 left-1/4 h-[350px] w-[350px] rounded-full bg-brand/5 blur-[120px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 h-[450px] w-[450px] rounded-full bg-amber-500/5 blur-[140px] opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ==========================================================
            HEADER & HERO SHOWCASE
            ========================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold font-mono mb-4">
              <Zap size={12} className="animate-pulse" />
              <span>EDUCATIONAL AI & DESIGN HUBS</span>
            </div>
            <h1 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              المكتبة <span className="text-brand glow-text-yellow">الذكية</span>
            </h1>
            <div className="mt-4 h-1.5 w-24 bg-brand mx-auto rounded-full shadow-[0_0_15px_#F5B400]" />
            <p className="mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
              مستودع متكامل ومعرفي عالي الجودة يحتوي على دروس تعليمية حقيقية، أدوات تصميم ونماذج برمجية جاهزة للاستخدام وقابلة للتحميل المجاني والمباشر.
            </p>
          </motion.div>
        </div>

        {/* ==========================================================
            SECTION 3: THE RESOURCE HUB GRID (مصفوفة الموارد والمقالات الكاملة)
            ========================================================== */}
        <div className="mb-20">
          
          {/* Header Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 border-b border-border-dark pb-6">
            
            {/* Category Select Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              {[
                { id: 'all', label: 'جميع المصادر' },
                { id: 'tutorials', label: 'دروس وشروحات' },
                { id: 'design', label: 'أدوات التصميم' },
                { id: 'resources', label: 'ملفات وموارد' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-brand text-black shadow-md'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full md:w-72 max-w-sm">
              <span className="absolute inset-y-0 right-3.5 flex items-center text-neutral-500 pointer-events-none">
                <Search size={14} />
              </span>
              <input
                type="text"
                placeholder="ابحث بالعنوان، الكلمة الدلالية..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm rounded-xl bg-neutral-900 border border-border-dark pr-10 pl-4 py-3 text-white placeholder-neutral-500 focus:border-brand/40 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 left-3 flex items-center text-neutral-500 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col justify-between rounded-3xl border border-border-dark bg-neutral-900/40 p-6 backdrop-blur-md transition-all duration-350 hover:border-brand/30 hover:shadow-[0_15px_30px_rgba(245,180,0,0.03)]"
                  >
                    <div>
                      {/* Meta stats block */}
                      <div className="flex items-center justify-between text-[10px] text-neutral-500">
                        <span className="inline-flex items-center gap-1 font-bold text-brand bg-brand/5 px-2 py-0.5 rounded border border-brand/10">
                          <BookOpen size={10} />
                          <span>{item.categoryLabel}</span>
                        </span>
                        
                        <div className="flex items-center gap-2 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar size={10} />
                            <span>{item.date}</span>
                          </span>
                        </div>
                      </div>

                      {/* Item Title */}
                      <h3 className="mt-4 font-sans font-black text-base sm:text-lg text-white group-hover:text-brand transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>

                      {/* Item Description */}
                      <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light line-clamp-3">
                        {item.description}
                      </p>

                      {/* Dynamic highlights list */}
                      <div className="mt-4 pt-4 border-t border-border-dark/40 space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                            <CheckCircle size={10} className="text-brand flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tag badges */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="text-[9px] font-mono font-bold text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons footer */}
                    <div className="mt-6 pt-4 border-t border-border-dark/60 flex items-center justify-between gap-2.5">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="flex-1 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-border-dark text-neutral-200 hover:text-white px-3 py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Eye size={12} />
                        <span>اقرأ الشرح</span>
                      </button>

                      <button
                        onClick={() => handleDownload(item.id)}
                        disabled={downloadingId === item.id}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                          downloadedId === item.id
                            ? 'bg-emerald-500 text-white shadow-md'
                            : 'bg-brand/10 hover:bg-brand text-brand hover:text-black border border-brand/20 hover:border-transparent'
                        }`}
                      >
                        {downloadingId === item.id ? (
                          <>
                            <div className="w-3 h-3 border-2 border-brand border-t-transparent rounded-full animate-spin" />
                            <span className="hidden sm:inline">جاري...</span>
                          </>
                        ) : downloadedId === item.id ? (
                          <>
                            <CheckCheckIcon size={12} />
                            <span>تم!</span>
                          </>
                        ) : (
                          <>
                            <Download size={12} />
                            <span className="hidden sm:inline">تحميل ({item.fileSize})</span>
                            <span className="sm:hidden">تحميل</span>
                          </>
                        )}
                      </button>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16 bg-neutral-900/10 rounded-3xl border border-border-dark p-8">
                <FileText size={48} className="mx-auto text-neutral-600 mb-3" />
                <h3 className="text-base font-bold text-neutral-300">لم يتم العثور على أي موارد تطابق بحثك</h3>
                <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">جرب استخدام كلمات مفتاحية أخرى أو تصفح تبويبات التصنيف بالأعلى.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* ==========================================================
            SECTION 4: SUBMIT A RESOURCE REQUEST FORM (اطلب ملفات وموارد مخصصة)
            ========================================================== */}
        <div className="mt-24 max-w-4xl mx-auto rounded-3xl border border-border-dark bg-gradient-to-r from-neutral-950 via-neutral-900/60 to-neutral-950 p-6 sm:p-10 backdrop-blur-sm shadow-xl relative">
          <div className="absolute top-4 left-4 text-neutral-800 pointer-events-none">
            <HelpCircle size={80} className="opacity-10" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold font-mono">
                <span>REQUEST SYSTEM</span>
              </div>
              <h3 className="font-sans font-black text-xl sm:text-2xl text-white">هل تبحث عن مورد أو شرح مخصص؟</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                إذا كنت ترغب في مادة علمية محددة في الذكاء الاصطناعي، أو تبحث عن ملف تصميم أو أيقونة مخصصة، اطلبها الآن وسيقوم الأمير بجدولتها وصياغتها وتوفيرها لك مجاناً في أسرع وقت.
              </p>
            </div>

            <div className="md:col-span-7">
              <AnimatePresence mode="wait">
                {!requestSuccess ? (
                  <motion.form
                    key="request-form"
                    onSubmit={submitRequest}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1.5">عنوان المورد أو المادة العلمية المطلوبة</label>
                      <input
                        type="text"
                        required
                        value={requestTitle}
                        onChange={(e) => setRequestTitle(e.target.value)}
                        placeholder="مثال: شرح تكامل خرائط جوجل Google Maps في تطبيقات React"
                        className="w-full rounded-xl bg-neutral-950 border border-border-dark px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:border-brand/40 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-neutral-300 mb-1.5">تصنيف المورد</label>
                        <select
                          value={requestCategory}
                          onChange={(e) => setRequestCategory(e.target.value)}
                          className="w-full rounded-xl bg-neutral-950 border border-border-dark px-3 py-3 text-xs text-white focus:border-brand/40 focus:outline-none"
                        >
                          <option value="tutorials">دروس وشروحات علمية</option>
                          <option value="design">أدوات ونظم تصميم</option>
                          <option value="resources">ملفات وموارد برمجية</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-300 mb-1.5">البريد الإلكتروني للإشعار (اختياري)</label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          className="w-full rounded-xl bg-neutral-950 border border-border-dark px-4 py-3 text-xs text-white placeholder-neutral-600 focus:border-brand/40 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1.5">تفاصيل إضافية أو مميزات تريد تغطيتها (اختياري)</label>
                      <textarea
                        rows={2}
                        value={requestDetails}
                        onChange={(e) => setRequestDetails(e.target.value)}
                        placeholder="مثال: يرجى تضمين شرح معالجة الأخطاء وأمثلة عملية بالشيفرة."
                        className="w-full rounded-xl bg-neutral-950 border border-border-dark px-4 py-3 text-xs text-white placeholder-neutral-600 focus:border-brand/40 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingRequest || !requestTitle.trim()}
                      className="w-full rounded-xl bg-brand py-3 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-brand-dark transition-all disabled:opacity-50"
                    >
                      {isSubmittingRequest ? (
                        <span>جاري معالجة طلبك وجدولته...</span>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>إرسال طلب المورد وجدولته ذكياً</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="request-success"
                    className="space-y-4 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-right"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2.5 text-emerald-400">
                      <CheckCircle size={20} />
                      <h4 className="font-sans font-bold text-sm sm:text-base">تم إرسال طلبك بنجاح للجدولة!</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light whitespace-pre-wrap">
                      {aiResponseText}
                    </p>
                    <button
                      onClick={resetRequestForm}
                      className="mt-3 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs font-bold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-all"
                    >
                      طلب مورد آخر
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>

      {/* ==========================================================
          5. SLIDE-OVER DRAWER / MODAL: INTERACTIVE READER
          ========================================================== */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm cursor-pointer"
            />

            {/* Sidebar Drawer container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed inset-y-0 right-0 w-full max-w-3xl bg-neutral-950 border-l border-neutral-800 z-50 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
              dir="rtl"
            >
              {/* Header block */}
              <div className="p-6 border-b border-border-dark bg-neutral-900/80 backdrop-blur flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-brand text-black text-[10px] font-extrabold uppercase">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{selectedItem.date}</span>
                  </span>
                  <span className="text-neutral-500 font-mono text-xs hidden sm:inline">|</span>
                  <span className="text-neutral-500 font-mono text-xs hidden sm:inline flex items-center gap-1">
                    <FileText size={12} />
                    <span>{selectedItem.fileSize} ({selectedItem.fileType})</span>
                  </span>
                </div>
                
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white transition-all hover:border-neutral-700"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable Reader Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 scroll-smooth text-right">
                
                {/* Title and Intro */}
                <div className="space-y-4">
                  <h2 className="font-sans font-black text-2xl sm:text-3xl text-white leading-tight">
                    {selectedItem.title}
                  </h2>
                  <div className="h-1 w-20 bg-brand rounded-full" />
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light whitespace-pre-wrap pt-2">
                    {selectedItem.content.introduction}
                  </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                  {selectedItem.content.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3 pt-4 border-t border-border-dark/40">
                      <h3 className="font-sans font-black text-base sm:text-lg text-white">
                        {section.title}
                      </h3>
                      
                      {section.description && (
                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                          {section.description}
                        </p>
                      )}

                      {/* Display custom steps if any */}
                      {section.steps && (
                        <ol className="space-y-2 pt-2">
                          {section.steps.map((step, sIdx) => (
                            <li key={sIdx} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-brand/10 border border-brand/20 text-brand font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <span className="flex-1 leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      )}

                      {/* Display custom bullets if any */}
                      {section.bullets && (
                        <div className="grid grid-cols-1 gap-3.5 pt-2">
                          {section.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="p-3.5 rounded-2xl border border-neutral-900 bg-neutral-900/20 flex flex-col sm:flex-row sm:items-start gap-2 text-xs sm:text-sm">
                              <div className="flex items-center gap-1.5 sm:pt-0.5 font-bold text-white min-w-[150px] flex-shrink-0">
                                <CheckCircle size={12} className="text-brand" />
                                <span>{bullet.label}</span>
                              </div>
                              <p className="text-neutral-400 leading-relaxed font-light">{bullet.text}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Display code block if any */}
                      {section.codeBlock && (
                        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden mt-4 shadow-inner">
                          <div className="bg-neutral-900 px-4 py-2.5 border-b border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                            <span>{section.codeBlock.language.toUpperCase()} SNIPPET</span>
                            <button
                              onClick={() => copyCodeBlock(section.codeBlock!.code, idx)}
                              className="text-neutral-400 hover:text-brand transition-all flex items-center gap-1"
                            >
                              {copiedBlockIndex === idx ? <Check size={10} className="text-emerald-400" /> : <Copy size={10} />}
                              <span>{copiedBlockIndex === idx ? 'تم النسخ!' : 'نسخ الكود'}</span>
                            </button>
                          </div>
                          <pre className="p-4 sm:p-5 overflow-x-auto font-mono text-xs text-neutral-300 leading-relaxed text-left selection:bg-brand/25">
                            <code>{section.codeBlock.code}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                {selectedItem.content.conclusion && (
                  <div className="p-5 rounded-2xl border border-brand/10 bg-brand/5 space-y-2 mt-8">
                    <div className="flex items-center gap-2 text-brand font-bold text-xs sm:text-sm">
                      <Lightbulb size={16} />
                      <span>ملخص وتوجيه فني من الأمير</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                      {selectedItem.content.conclusion}
                    </p>
                  </div>
                )}

              </div>

              {/* Bottom bar inside drawer */}
              <div className="p-6 border-t border-border-dark bg-neutral-900/80 backdrop-blur flex items-center justify-between">
                <button
                  onClick={() => {
                    handleDownload(selectedItem.id);
                  }}
                  disabled={downloadingId === selectedItem.id}
                  className="rounded-xl bg-brand hover:bg-brand-dark text-black font-black text-xs sm:text-sm px-6 py-3.5 flex items-center gap-2 transition-all shadow-md"
                >
                  {downloadingId === selectedItem.id ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>جاري التجهيز...</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      <span>تحميل النسخة الكاملة ({selectedItem.fileSize})</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-xs font-bold text-neutral-400 hover:text-white transition-all flex items-center gap-1"
                >
                  <span>إغلاق القارئ</span>
                  <ArrowLeft size={14} className="scale-x-[-1]" />
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}

// Simple fallback icon component since CheckCheck is not standard in standard Lucide version
function CheckCheckIcon({ size = 12 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
      <path d="M18 6 7 17l-5-5" />
      <path d="m22 10-7.5 7.5L13 16" />
    </svg>
  );
}
