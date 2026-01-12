
import React, { useEffect } from 'react';
import { 
  Check, 
  ArrowLeft, 
  Zap, 
  Rocket, 
  ShieldCheck, 
  Globe, 
  Star, 
  Target, 
  MousePointer2, 
  BarChart, 
  Smartphone,
  Cpu,
  Layers,
  Search,
  TrendingUp,
  Users,
  Clock,
  ShoppingCart,
  Building2,
  Award,
  LineChart,
  Eye,
  DollarSign
} from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';

interface WebDesignPageProps {
  onBack: () => void;
}

const WebDesignPage: React.FC<WebDesignPageProps> = ({ onBack }) => {
  const { t } = useI18n();
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="pt-24 min-h-screen bg-white">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm transition-all mb-12 bg-white/50 backdrop-blur-sm p-2 rounded-lg border border-slate-100"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('webdesign.backToOverview')}
        </button>

        <div className="text-center mb-32 reveal reveal-bottom">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-700 font-bold uppercase text-[10px] tracking-widest mb-6">
             <Target className="w-3 h-3" />
             {t('webdesign.badge')}
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            {t('webdesign.title').split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {i === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">{line}</span>
                ) : (
                  line
                )}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light mb-12">
            {t('webdesign.description').split('__PSYCHOLOGY__').map((part, i) => {
              if (i === 0) return <React.Fragment key={i}>{part}</React.Fragment>;
              const parts = part.split('__PATHWAYS__');
              return (
                <React.Fragment key={i}>
                  <strong className="text-slate-900 font-medium">{t('webdesign.customerPsychology')}</strong>
                  {parts[0]}
                  <strong className="text-slate-900 font-medium">{t('webdesign.conversionPathways')}</strong>
                  {parts[1]}
                </React.Fragment>
              );
            })}
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex -space-x-3">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 shadow-sm overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 12}`} alt="User" />
                 </div>
               ))}
            </div>
            <div className="text-left">
              <div className="flex text-yellow-500 h-4 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t('webdesign.trustedBy')}</p>
            </div>
          </div>
        </div>

        <div className="mb-40 reveal">
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('webdesign.whyCustom.title')}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t('webdesign.whyCustom.description')}
              </p>
              <div className="space-y-6">
                 {[
                   { title: t('webdesign.features.cleanCode.title'), desc: t('webdesign.features.cleanCode.desc'), icon: <Cpu className="w-5 h-5" /> },
                   { title: t('webdesign.features.scalability.title'), desc: t('webdesign.features.scalability.desc'), icon: <Layers className="w-5 h-5" /> },
                   { title: t('webdesign.features.designLimits.title'), desc: t('webdesign.features.designLimits.desc'), icon: <MousePointer2 className="w-5 h-5" /> }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 justify-center items-start">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-600">
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="mb-40 reveal reveal-bottom">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('webdesign.pillars.title')}</h2>
              <p className="text-slate-500">{t('webdesign.pillars.subtitle')}</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: t('webdesign.pillars.speed.title'), value: t('webdesign.pillars.speed.value'), desc: t('webdesign.pillars.speed.desc'), icon: <Zap className="w-6 h-6" /> },
                { title: t('webdesign.pillars.mobile.title'), value: t('webdesign.pillars.mobile.value'), desc: t('webdesign.pillars.mobile.desc'), icon: <Smartphone className="w-6 h-6" /> },
                { title: t('webdesign.pillars.seo.title'), value: t('webdesign.pillars.seo.value'), desc: t('webdesign.pillars.seo.desc'), icon: <Search className="w-6 h-6" /> },
                { title: t('webdesign.pillars.flow.title'), value: t('webdesign.pillars.flow.value'), desc: t('webdesign.pillars.flow.desc'), icon: <MousePointer2 className="w-6 h-6" /> }
              ].map((pill, i) => (
                <div key={i} className="relative bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-yellow-300 transition-all group overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                    <img
                      src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                      alt="Business illustration"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                   <div className="relative z-10">
                     <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-yellow-600 group-hover:bg-yellow-50 transition-all mb-6">
                        {pill.icon}
                     </div>
                     <div className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-1">{pill.value}</div>
                     <h4 className="text-xl font-bold text-slate-900 mb-3">{pill.title}</h4>
                     <p className="text-sm text-slate-500 leading-relaxed">{pill.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden reveal">
           <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('webdesign.guarantee.title')}</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                {t('webdesign.guarantee.description').split('__UNLIMITED__').map((part, i) => {
                  if (i === 0) return <React.Fragment key={i}>{part}</React.Fragment>;
                  return (
                    <React.Fragment key={i}>
                      <strong className="text-yellow-400">{t('webdesign.guarantee.unlimitedRevisions')}</strong>
                      {part}
                    </React.Fragment>
                  );
                })}
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1"
              >
                {t('webdesign.guarantee.button')}
                <BarChart className="w-5 h-5" />
              </button>
           </div>
        </div>

        {/* Why Website is Essential Today */}
        <div className="mb-40 reveal reveal-bottom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t('webdesign.essential.title')}</h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">{t('webdesign.essential.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Eye className="w-8 h-8" />, 
                title: t('webdesign.essential.card1.title'),
                desc: t('webdesign.essential.card1.desc'),
                stat: '93%',
                statLabel: t('webdesign.essential.card1.stat')
              },
              { 
                icon: <ShoppingCart className="w-8 h-8" />, 
                title: t('webdesign.essential.card2.title'),
                desc: t('webdesign.essential.card2.desc'),
                stat: '88%',
                statLabel: t('webdesign.essential.card2.stat')
              },
              { 
                icon: <Building2 className="w-8 h-8" />, 
                title: t('webdesign.essential.card3.title'),
                desc: t('webdesign.essential.card3.desc'),
                stat: '75%',
                statLabel: t('webdesign.essential.card3.stat')
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-[2rem] border border-slate-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 rounded-2xl bg-yellow-100 border border-yellow-200 flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{item.stat}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">{item.statLabel}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Without Website Section */}
        <div className="mb-40 bg-gradient-to-br from-slate-900 to-slate-950 rounded-[3rem] p-12 md:p-20 relative overflow-hidden reveal reveal-bottom">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px]"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('webdesign.without.title')}</h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">{t('webdesign.without.subtitle')}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <Users className="w-6 h-6" />, text: t('webdesign.without.point1') },
                { icon: <DollarSign className="w-6 h-6" />, text: t('webdesign.without.point2') },
                { icon: <Clock className="w-6 h-6" />, text: t('webdesign.without.point3') },
                { icon: <TrendingUp className="w-6 h-6" />, text: t('webdesign.without.point4') }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-500/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-40 reveal reveal-bottom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t('webdesign.benefits.title')}</h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">{t('webdesign.benefits.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Globe className="w-6 h-6" />, title: t('webdesign.benefits.benefit1.title'), desc: t('webdesign.benefits.benefit1.desc') },
              { icon: <Clock className="w-6 h-6" />, title: t('webdesign.benefits.benefit2.title'), desc: t('webdesign.benefits.benefit2.desc') },
              { icon: <LineChart className="w-6 h-6" />, title: t('webdesign.benefits.benefit3.title'), desc: t('webdesign.benefits.benefit3.desc') },
              { icon: <Award className="w-6 h-6" />, title: t('webdesign.benefits.benefit4.title'), desc: t('webdesign.benefits.benefit4.desc') },
              { icon: <BarChart className="w-6 h-6" />, title: t('webdesign.benefits.benefit5.title'), desc: t('webdesign.benefits.benefit5.desc') },
              { icon: <Target className="w-6 h-6" />, title: t('webdesign.benefits.benefit6.title'), desc: t('webdesign.benefits.benefit6.desc') },
              { icon: <Zap className="w-6 h-6" />, title: t('webdesign.benefits.benefit7.title'), desc: t('webdesign.benefits.benefit7.desc') },
              { icon: <ShieldCheck className="w-6 h-6" />, title: t('webdesign.benefits.benefit8.title'), desc: t('webdesign.benefits.benefit8.desc') }
            ].map((item, i) => (
              <div key={i} className="relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                  <img
                    src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                    alt="Business illustration"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-yellow-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-40 bg-gradient-to-br from-yellow-50 to-white rounded-[3rem] p-12 md:p-20 border border-yellow-100 reveal reveal-bottom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t('webdesign.stats.title')}</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">{t('webdesign.stats.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '4.9B+', label: t('webdesign.stats.stat1') },
              { value: '75%', label: t('webdesign.stats.stat2') },
              { value: '68%', label: t('webdesign.stats.stat3') },
              { value: '24/7', label: t('webdesign.stats.stat4') }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-600 to-yellow-500 mb-3">{stat.value}</div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Web Trends */}
        <div className="mb-40 reveal reveal-bottom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t('webdesign.trends.title')}</h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">{t('webdesign.trends.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Smartphone className="w-8 h-8" />, title: t('webdesign.trends.trend1.title'), desc: t('webdesign.trends.trend1.desc') },
              { icon: <Zap className="w-8 h-8" />, title: t('webdesign.trends.trend2.title'), desc: t('webdesign.trends.trend2.desc') },
              { icon: <Search className="w-8 h-8" />, title: t('webdesign.trends.trend3.title'), desc: t('webdesign.trends.trend3.desc') }
            ].map((item, i) => (
              <div key={i} className="relative bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-yellow-300 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                  <img
                    src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                    alt="Business illustration"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignPage;
