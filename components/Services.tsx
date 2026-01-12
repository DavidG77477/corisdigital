
import React from 'react';
import { 
  LayoutDashboard, 
  CreditCard, 
  MessageSquareCode, 
  Search, 
  Smartphone, 
  Database,
  ArrowRight,
  PenTool,
  Monitor,
  Zap
} from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';

interface ServicesProps {
  onSelectWebDesign: () => void;
}

const serviceImages = '/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; index: number; onClick?: () => void; consultationText: string }> = ({ icon, title, description, index, onClick, consultationText }) => {
  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      onClick={handleAction}
      className={`group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2 reveal reveal-delay-${(index % 3) * 100} cursor-pointer overflow-hidden`}
    >
      {/* Image corporate illustrant des entreprises en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
        <img 
          src={serviceImages}
          alt={`Business illustration for ${title}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-yellow-100 transition-colors duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
          <div className="text-slate-900 group-hover:text-white transition-colors duration-500">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm mb-10 flex-grow">
          {description}
        </p>

        <button 
          className="mt-auto w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.15em] hover:bg-yellow-500 hover:text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-slate-900/10 hover:shadow-yellow-500/30"
        >
          {consultationText}
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ onSelectWebDesign }) => {
  const { t } = useI18n();
  const services = [
    {
      icon: <Monitor className="w-7 h-7" />,
      title: t('services.webDesign.title'),
      description: t('services.webDesign.description'),
      onClick: onSelectWebDesign
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: t('services.seo.title'),
      description: t('services.seo.description')
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: t('services.productDesign.title'),
      description: t('services.productDesign.description')
    },
    {
      icon: <LayoutDashboard className="w-7 h-7" />,
      title: t('services.crm.title'),
      description: t('services.crm.description')
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: t('services.payment.title'),
      description: t('services.payment.description')
    },
    {
      icon: <MessageSquareCode className="w-7 h-7" />,
      title: t('services.ai.title'),
      description: t('services.ai.description')
    }
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 relative bg-transparent overflow-hidden">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/30 skew-x-12 opacity-50 -z-10"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-50/50 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24 reveal">
          <div className="inline-block p-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 mb-6">
             <span className="block px-3 py-1 rounded-full bg-white border border-slate-100 text-slate-800 font-bold tracking-widest uppercase text-[10px] shadow-sm">
                {t('services.subtitle')}
             </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-white">{t('services.title')}</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} consultationText={t('services.getConsultation')} />
          ))}
          
          <div className="group relative bg-slate-900 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center overflow-hidden reveal reveal-delay-300 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 z-0"></div>
             
             <div className="relative z-10 p-4">
                <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('services.specificNeed.title')}</h3>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed">{t('services.specificNeed.description')}</p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/20"
                >
                    {t('services.getQuote')}
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
