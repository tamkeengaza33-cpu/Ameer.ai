import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import MobileQuickNav from './components/MobileQuickNav';

// Pages imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AiLab from './pages/AiLab';
import Assistant from './pages/Assistant';
import Library from './pages/Library';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Parse location hash on mount & update active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'services', 'portfolio', 'ailab', 'assistant', 'library', 'achievements', 'contact'].includes(hash)) {
        setActiveTab(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Call once initially to set tab based on current hash
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Back to top visibility listener
  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About setActiveTab={setActiveTab} />;
      case 'services':
        return <Services setActiveTab={setActiveTab} />;
      case 'portfolio':
        return <Portfolio setActiveTab={setActiveTab} />;
      case 'ailab':
        return <AiLab setActiveTab={setActiveTab} />;
      case 'assistant':
        return <Assistant setActiveTab={setActiveTab} />;
      case 'library':
        return <Library setActiveTab={setActiveTab} />;
      case 'achievements':
        return <Achievements setActiveTab={setActiveTab} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-neutral-950 text-white font-sans selection:bg-brand selection:text-black antialiased">
      
      {/* Premium background grid visual */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} onCvClick={() => setIsCvOpen(true)} />

      {/* Dynamic Content Frame with fade-in animation */}
      <main className="relative z-10 flex-1 animate-in fade-in duration-500">
        {renderActivePage()}
      </main>

      {/* Global persistent Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Mobile Quick Navigation Bar */}
      <MobileQuickNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Interactive Resume/CV Modal */}
      <CVModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />

      {/* Floating Back-To-Top Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-24 lg:bottom-6 left-6 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-neutral-900/90 text-brand shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-brand hover:text-black hover:shadow-[0_0_15px_rgba(245,180,0,0.3)] cursor-pointer"
          title="العودة للأعلى"
        >
          <ArrowUp size={18} />
        </button>
      )}

    </div>
  );
}
