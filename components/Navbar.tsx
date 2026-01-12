
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { ViewType } from '../App';
import { useI18n } from '../contexts/i18nContext';

interface NavbarProps {
  onNavigate: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { t, language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToOrNavigate = (id: string) => {
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  const productItems: { label: string; view: ViewType; highlight?: boolean }[] = [
    { label: t('nav.conversionWebDesign'), view: 'web-design', highlight: true },
    { label: t('nav.marketingAdvertising'), view: 'marketing' },
    { label: t('nav.ecommerce'), view: 'ecommerce' },
    { label: t('nav.customCRMERP'), view: 'crm-erp' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2"
      style={{ backgroundColor: '#001B3A' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
            <img 
              src="/Logo/Adobe Express - file.png" 
              alt="Coris Digital Logo" 
              className="h-20 w-20 md:h-24 md:w-24 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-white uppercase -ml-6 -mt-2">
              Coris Digital®
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => onNavigate('home')} className="text-white hover:text-yellow-400 font-medium text-sm transition-colors">{t('nav.home')}</button>
              
              <div className="relative group/menu">
                <button className="flex items-center gap-1 text-white hover:text-yellow-400 font-medium text-sm transition-colors">
                  {t('nav.products')} <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full -left-4 w-64 pt-4 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200">
                  <div className="bg-white border border-slate-100 rounded-xl shadow-xl p-2 overflow-hidden">
                    {productItems.map((item, idx) => (
                      <button 
                        key={idx}
                        onClick={() => { onNavigate(item.view); setIsOpen(false); }} 
                        className={`w-full text-left px-4 py-3 rounded-lg text-[10px] font-bold transition-all uppercase tracking-wider ${
                          item.highlight 
                            ? 'text-yellow-600 hover:bg-yellow-50 bg-yellow-50/30' 
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => scrollToOrNavigate('industries')} 
                className="text-white hover:text-yellow-400 font-medium text-sm transition-colors relative group"
              >
                {t('nav.expertise')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToOrNavigate('contact')} 
                className="text-white hover:text-yellow-400 font-medium text-sm transition-colors relative group"
              >
                {t('nav.contact')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToOrNavigate('contact')}
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-yellow-500/20 transition-all transform hover:scale-105 hover:shadow-xl active:scale-95"
              >
                {t('nav.launchProject')}
              </button>
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1 text-white hover:text-yellow-400 font-medium text-sm transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {language.toUpperCase()}
                </button>
                {langMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden min-w-[100px]">
                    <button
                      onClick={() => { setLanguage('fr'); setLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${language === 'fr' ? 'bg-yellow-50 text-yellow-600 font-semibold' : 'text-slate-700'}`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => { setLanguage('en'); setLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${language === 'en' ? 'bg-yellow-50 text-yellow-600 font-semibold' : 'text-slate-700'}`}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`} style={{ backgroundColor: '#001B3A' }}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="block w-full text-left px-4 py-3 text-base font-medium text-white">{t('nav.home')}</button>
          <div className="px-4 py-2 space-y-1 rounded-xl mx-2 border border-white/10">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">{t('nav.products')}</p>
            {productItems.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => { onNavigate(item.view); setIsOpen(false); }} 
                className={`block w-full text-left py-2 text-sm font-bold uppercase transition-colors ${item.highlight ? 'text-yellow-400' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => { scrollToOrNavigate('industries'); setIsOpen(false); }} className="block w-full text-left px-4 py-3 text-base font-medium text-white">{t('nav.expertise')}</button>
          <button onClick={() => { scrollToOrNavigate('contact'); setIsOpen(false); }} className="block w-full text-left px-4 py-3 text-base font-medium text-white">{t('nav.contact')}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
