
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, ShieldCheck, ChevronDown, Send } from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';
import { sendEmail, FormData } from '../utils/emailService';

const Hero: React.FC = () => {
  const { t } = useI18n();
  const [trustedCount, setTrustedCount] = useState(0);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = 2000;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if(start >= end) {
            setTrustedCount(end);
            clearInterval(timer);
        } else {
            setTrustedCount(Math.ceil(start));
        }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20" style={{ backgroundColor: '#001B3A' }}>
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Logo/image.png" 
          alt="Background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      {/* Filtre bleu par-dessus l'image */}
      <div className="absolute inset-0 bg-blue-600/80 z-[1]"></div>
      
      {/* Motifs africains en arrière-plan */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-[2]">
        {/* Motif géométrique africain - Haut gauche */}
        <svg className="absolute top-20 left-10 w-64 h-64 text-yellow-400/20" viewBox="0 0 200 200" fill="currentColor">
          <path d="M50 50 L150 50 L150 150 L50 150 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M75 75 L125 75 L125 125 L75 125 Z" fill="currentColor"/>
          <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 50 L100 100 M150 50 L100 100 M150 150 L100 100 M50 150 L100 100" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        
        {/* Motif triangulaire africain - Bas gauche */}
        <svg className="absolute bottom-32 left-20 w-80 h-80 text-emerald-400/15" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 20 L180 160 L20 160 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M100 60 L140 140 L60 140 Z" fill="currentColor"/>
          <path d="M100 90 L120 130 L80 130 Z" fill="currentColor"/>
        </svg>
        
        {/* Motif zigzag africain - Droite */}
        <svg className="absolute top-40 right-20 w-72 h-72 text-purple-400/15" viewBox="0 0 200 200" fill="currentColor">
          <path d="M20 50 L60 90 L100 50 L140 90 L180 50" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M20 110 L60 150 L100 110 L140 150 L180 110" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="60" cy="90" r="8" fill="currentColor"/>
          <circle cx="140" cy="150" r="8" fill="currentColor"/>
        </svg>
        
        {/* Motif losange africain - Centre droit */}
        <svg className="absolute top-1/2 right-32 w-96 h-96 -translate-y-1/2 text-yellow-500/10" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 20 L180 100 L100 180 L20 100 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M100 50 L150 100 L100 150 L50 100 Z" fill="currentColor" opacity="0.5"/>
          <path d="M100 70 L130 100 L100 130 L70 100 Z" fill="currentColor"/>
        </svg>
        
        {/* Motif répétitif africain - Bas droite */}
        <svg className="absolute bottom-20 right-10 w-64 h-64 text-teal-400/15" viewBox="0 0 200 200" fill="currentColor">
          <rect x="20" y="20" width="40" height="40" fill="currentColor" opacity="0.6"/>
          <rect x="80" y="20" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="140" y="20" width="40" height="40" fill="currentColor" opacity="0.6"/>
          <rect x="20" y="80" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.4"/>
          <rect x="140" y="80" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="20" y="140" width="40" height="40" fill="currentColor" opacity="0.6"/>
          <rect x="80" y="140" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="140" y="140" width="40" height="40" fill="currentColor" opacity="0.6"/>
        </svg>
      </div>

      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-yellow-200/40 via-yellow-400/10 to-transparent rounded-full blur-[120px] animate-pulse-slow z-[1]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="flex flex-col items-start text-left reveal reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm mb-8 animate-float shadow-lg" style={{ backgroundColor: '#001B3A' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
              </span>
              <span className="text-xs text-white font-bold tracking-widest uppercase">{t('hero.badge')}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter leading-[1.0]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-white">{t('hero.title.line1')}</span> <br/>
              <span className="text-4xl md:text-5xl lg:text-6xl text-green-400 font-bold">{t('hero.title.line2')}</span><br/>
              <span className="text-4xl md:text-5xl lg:text-6xl text-white font-bold whitespace-nowrap">{t('hero.title.line3')}</span><br/>
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 pb-2">
                 {t('hero.title.line4')}
                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7206 2.45711 77.3073 -2.2605 198.003 3.49998" stroke="currentColor" strokeWidth="3"></path></svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-light">
              {t('hero.description')
                .replace('{websites}', `__WEBSITES__`)
                .replace('{productDesign}', `__PRODUCTDESIGN__`)
                .replace('{businessSoftware}', `__BUSINESSSOFTWARE__`)
                .split(/(__WEBSITES__|__PRODUCTDESIGN__|__BUSINESSSOFTWARE__)/)
                .map((part, i) => {
                  if (part === '__WEBSITES__') {
                    return <strong key={i} className="text-white font-medium">{t('hero.websites')}</strong>;
                  }
                  if (part === '__PRODUCTDESIGN__') {
                    return <strong key={i} className="text-white font-medium">{t('hero.productDesign')}</strong>;
                  }
                  if (part === '__BUSINESSSOFTWARE__') {
                    return <strong key={i} className="text-white font-medium">{t('hero.businessSoftware')}</strong>;
                  }
                  return <React.Fragment key={i}>{part}</React.Fragment>;
                })}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-12">
              <button 
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-slate-900 rounded-2xl font-bold text-lg shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-600/60 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden transform hover:-translate-y-1"
              >
                {t('hero.freeConsultation')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                 onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                 className="px-8 py-4 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors border-2 border-white/30 shadow-sm"
                 style={{ backgroundColor: '#001B3A' }}
              >
                {t('hero.ourServices')}
              </button>
            </div>

             <div className="flex items-center gap-6 pt-8 border-t border-white/20 w-full max-w-md">
                <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                       <div key={i} className="w-12 h-12 rounded-full border-4 border-white shadow-md overflow-hidden ring-1 ring-white/20" style={{ backgroundColor: '#001B3A' }}>
                           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 55}`} alt="avatar" className="w-full h-full object-cover" />
                       </div>
                   ))}
                   <div className="w-12 h-12 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center text-xs font-bold border-4 border-white shadow-md ring-1 ring-yellow-400">+{trustedCount >= 2000 ? '2k' : trustedCount}</div>
                </div>
                <div>
                    <div className="flex text-yellow-500 mb-1 drop-shadow-sm">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                    <span className="text-sm text-slate-300 font-semibold tracking-tight">{t('hero.trustedBy')}</span>
                </div>
             </div>
          </div>

          <div className="relative w-full max-w-lg mx-auto lg:mr-0 animate-float [animation-delay:1s] reveal reveal-right">
             <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 via-indigo-500 to-slate-900 rounded-[2rem] blur opacity-40"></div>
             
             <div className="relative bg-white/95 backdrop-blur-xl rounded-[1.75rem] p-8 shadow-2xl border border-slate-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-[100px] pointer-events-none"></div>
                
                <div className="mb-8 relative z-10 text-slate-900">
                  <div className="flex items-center gap-2 mb-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                     <span className="text-yellow-600 text-[10px] font-bold tracking-widest uppercase">{t('hero.consultationAvailable')}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">{t('hero.bookStrategy')}</h3>
                  <p className="text-slate-500 text-sm font-light">{t('hero.bookStrategyDesc')}</p>
                </div>
                
                <form className="space-y-4 relative z-10" onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  
                  const emailData: FormData = {
                    name: formState.name,
                    email: formState.email,
                    service: formState.service,
                    message: formState.message,
                    formType: 'hero'
                  };
                  
                  const success = await sendEmail(emailData);
                  
                  if (success) {
                    alert(t('hero.thankYouMessage'));
                    setFormState({ name: '', email: '', service: '', message: '' });
                  } else {
                    alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
                  }
                  
                  setIsSubmitting(false);
                }}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5 group">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-focus-within:text-yellow-600 transition-colors ml-1">{t('hero.fullName')}</label>
                            <input 
                              type="text" 
                              required 
                              placeholder="John Doe" 
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-1 focus:ring-yellow-500 outline-none transition-all text-sm" 
                            />
                        </div>
                        <div className="space-y-1.5 group">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-focus-within:text-yellow-600 transition-colors ml-1">{t('hero.email')}</label>
                            <input 
                              type="email" 
                              required 
                              placeholder="john@company.com" 
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-1 focus:ring-yellow-500 outline-none transition-all text-sm" 
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5 group relative">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-focus-within:text-yellow-600 transition-colors ml-1">{t('hero.howCanWeHelp')}</label>
                        <div className="relative">
                          <select 
                            required 
                            value={formState.service}
                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                            className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-1 focus:ring-yellow-500 outline-none transition-all text-sm"
                          >
                            <option value="" disabled>{t('hero.selectService')}</option>
                            <option value="web-dev">{t('hero.service.webDev')}</option>
                            <option value="seo">{t('hero.service.seo')}</option>
                            <option value="software">{t('hero.service.software')}</option>
                            <option value="design">{t('hero.service.design')}</option>
                            <option value="other">{t('hero.service.other')}</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                    
                    <div className="space-y-1.5 group">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-focus-within:text-yellow-600 transition-colors ml-1">{t('hero.projectDetails')}</label>
                        <textarea 
                          rows={3} 
                          placeholder={t('hero.describeGoals')} 
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-1 focus:ring-yellow-500 outline-none transition-all resize-none text-sm"
                        ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full mt-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-extrabold py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
                    >
                         {isSubmitting ? 'Envoi...' : t('hero.secureSpot')}
                         {!isSubmitting && <Send className="w-5 h-5 text-yellow-500" />}
                    </button>
                    
                    <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-4 font-bold">{t('hero.confidential')}</p>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
