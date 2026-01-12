
import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Zap, Search, ArrowRight, Smartphone, Code2, Database, Cloud, Terminal, CheckCircle2, TrendingDown, Shield, UtensilsCrossed, Building2, Scissors, HeartPulse, Truck, ShoppingBag, GraduationCap, Hotel, Dumbbell, Pill, Home, Sprout, Scale, Calculator, Package, Factory } from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';

const WebDevelopment: React.FC = () => {
  const { t } = useI18n();
  const features = [
    {
      title: t('webdev.features.landingPages.title'),
      description: t('webdev.features.landingPages.description'),
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: t('webdev.features.ecommerce.title'),
      description: t('webdev.features.ecommerce.description'),
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: t('webdev.features.saas.title'),
      description: t('webdev.features.saas.description'),
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  const techStack = [
    { nameKey: "webdev.techStack.frontend", icon: <Code2 className="w-6 h-6" />, tools: ["React.js", "Vue.js", "Next.js", "Tailwind"] },
    { nameKey: "webdev.techStack.backend", icon: <Terminal className="w-6 h-6" />, tools: ["Node.js", "Python", "Go", "GraphQL"] },
    { nameKey: "webdev.techStack.cloud", icon: <Cloud className="w-6 h-6" />, tools: ["AWS", "Google Cloud", "Docker", "Kubernetes"] },
    { nameKey: "webdev.techStack.databases", icon: <Database className="w-6 h-6" />, tools: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] }
  ];

  const [inView, setInView] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
          <div className="reveal reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-800 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <Search className="w-3 h-3 text-yellow-500 animate-spin-slow" />
              <span>{t('webdev.badge')}</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1]">
              {t('webdev.title').split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {i === 1 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">{line}</span>
                  ) : (
                    line
                  )}
                </React.Fragment>
              ))}
            </h2>
            
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-lg">
              {t('webdev.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-white bg-slate-900 hover:bg-slate-800 px-8 py-4 rounded-xl font-bold shadow-lg transition-all hover:-translate-y-1"
              >
                {t('webdev.button')}
                <ArrowRight className="w-4 h-4 text-yellow-500" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-yellow-200 shadow-sm transition-all duration-300 group transform hover:-translate-x-2 reveal reveal-right reveal-delay-${idx * 100}`}>
                <div className="flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-2 text-xl group-hover:text-yellow-600 transition-colors">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-20 text-center reveal reveal-bottom">
           <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95]">
              {t('webdev.badSoftwarePart1')} <span className="text-red-500 line-through">{t('webdev.badSoftwarePart2')}</span>.<br/>
              {t('webdev.goodSoftwarePart1')} <span className="text-green-500">{t('webdev.goodSoftwarePart2')}</span>.
           </h2>
        </div>

        <div className="mb-28 reveal reveal-bottom" ref={chartRef}>
           <div className="relative bg-white rounded-[2.5rem] border border-slate-100 p-8 lg:p-12 shadow-2xl overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
               
               <div className="grid md:grid-cols-2 gap-12 items-center">
                   <div>
                       <div className="inline-flex items-center gap-2 mb-4">
                           <div className="p-1.5 bg-yellow-100 rounded-full text-yellow-600">
                               <TrendingDown className="w-4 h-4" />
                           </div>
                           <span className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono">{t('webdev.endLegacyDebt')}</span>
                       </div>
                       <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                           {t('webdev.whyGeneric.title').split('\n').map((line, i) => (
                             <React.Fragment key={i}>
                               {i > 0 && <br />}
                               {i === 1 ? (
                                 <span className="text-yellow-600">{line}</span>
                               ) : (
                                 line
                               )}
                             </React.Fragment>
                           ))}
                       </h3>
                       <p className="text-slate-500 leading-relaxed mb-6">
                           {t('webdev.whyGeneric.description')}
                       </p>
                   </div>
                   
                   <div className="relative h-full min-h-[350px] bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between overflow-hidden">
                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-[80px]"></div>
                        <div>
                             <h4 className="text-slate-900 font-bold text-lg mb-2 flex items-center gap-2 font-mono">
                                <Shield className="w-5 h-5 text-yellow-500"/> {t('webdev.costAnalysis')}
                             </h4>
                        </div>
                        
                        <div className="space-y-6 mt-8 relative z-10">
                            <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
                                    <span>{t('webdev.genericSaaS')}</span>
                                    <span className="text-yellow-600">{t('webdev.cumulativeHigh')}</span>
                                </div>
                                <div className="h-4 w-full bg-white border border-slate-100 rounded-full overflow-hidden flex">
                                    <div className={`h-full bg-slate-200 transition-all duration-1000 delay-300 ${inView ? 'w-[70%]' : 'w-0'}`}></div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex justify-between text-xs text-slate-900 font-bold mb-2 font-mono uppercase tracking-widest">
                                    <span>{t('webdev.customBuild')}</span>
                                    <span className="text-yellow-600">{t('webdev.optimizedROI')}</span>
                                </div>
                                <div className="h-4 w-full bg-white border border-slate-100 rounded-full overflow-hidden relative">
                                    <div className={`h-full bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-lg transition-all duration-1000 delay-500 ${inView ? 'w-[35%]' : 'w-0'}`}></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
                             <div className="text-center border-r border-slate-200">
                                 <span className="text-2xl font-bold text-slate-900 block">100%</span>
                                 <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t('webdev.ownership')}</span>
                             </div>
                             <div className="text-center">
                                 <span className="text-2xl font-bold text-slate-900 block">0</span>
                                 <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t('webdev.monthlyFees')}</span>
                             </div>
                        </div>
                   </div>
               </div>
           </div>
        </div>

        {/* Custom Software Examples Section */}
        <div className="mb-28 reveal reveal-bottom">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{t('webdev.customSoftware.title')}</h3>
            <p className="text-slate-500 font-light max-w-3xl mx-auto">{t('webdev.customSoftware.description')}</p>
          </div>
          <div className="bg-gradient-to-br from-white via-white to-slate-50/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200/50 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px] -z-0"></div>
            <div className="overflow-x-auto relative z-10">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-300/50 bg-gradient-to-r from-slate-50 to-white">
                    <th className="text-left py-6 px-6 text-slate-900 font-extrabold text-xs uppercase tracking-widest">{t('webdev.customSoftware.table.industry')}</th>
                    <th className="text-left py-6 px-6 text-slate-900 font-extrabold text-xs uppercase tracking-widest">{t('webdev.customSoftware.table.solution')}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { industry: t('webdev.customSoftware.examples.restaurant.industry'), solution: t('webdev.customSoftware.examples.restaurant.solution'), icon: <UtensilsCrossed className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
                    { industry: t('webdev.customSoftware.examples.construction.industry'), solution: t('webdev.customSoftware.examples.construction.solution'), icon: <Building2 className="w-5 h-5" />, color: 'from-amber-600 to-orange-600' },
                    { industry: t('webdev.customSoftware.examples.salon.industry'), solution: t('webdev.customSoftware.examples.salon.solution'), icon: <Scissors className="w-5 h-5" />, color: 'from-pink-500 to-rose-500' },
                    { industry: t('webdev.customSoftware.examples.healthcare.industry'), solution: t('webdev.customSoftware.examples.healthcare.solution'), icon: <HeartPulse className="w-5 h-5" />, color: 'from-red-500 to-pink-500' },
                    { industry: t('webdev.customSoftware.examples.logistics.industry'), solution: t('webdev.customSoftware.examples.logistics.solution'), icon: <Truck className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
                    { industry: t('webdev.customSoftware.examples.retail.industry'), solution: t('webdev.customSoftware.examples.retail.solution'), icon: <ShoppingBag className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' },
                    { industry: t('webdev.customSoftware.examples.education.industry'), solution: t('webdev.customSoftware.examples.education.solution'), icon: <GraduationCap className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
                    { industry: t('webdev.customSoftware.examples.hotel.industry'), solution: t('webdev.customSoftware.examples.hotel.solution'), icon: <Hotel className="w-5 h-5" />, color: 'from-blue-600 to-indigo-600' },
                    { industry: t('webdev.customSoftware.examples.gym.industry'), solution: t('webdev.customSoftware.examples.gym.solution'), icon: <Dumbbell className="w-5 h-5" />, color: 'from-violet-500 to-purple-500' },
                    { industry: t('webdev.customSoftware.examples.pharmacy.industry'), solution: t('webdev.customSoftware.examples.pharmacy.solution'), icon: <Pill className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
                    { industry: t('webdev.customSoftware.examples.realEstate.industry'), solution: t('webdev.customSoftware.examples.realEstate.solution'), icon: <Home className="w-5 h-5" />, color: 'from-cyan-500 to-blue-500' },
                    { industry: t('webdev.customSoftware.examples.agriculture.industry'), solution: t('webdev.customSoftware.examples.agriculture.solution'), icon: <Sprout className="w-5 h-5" />, color: 'from-green-600 to-emerald-600' },
                    { industry: t('webdev.customSoftware.examples.law.industry'), solution: t('webdev.customSoftware.examples.law.solution'), icon: <Scale className="w-5 h-5" />, color: 'from-slate-600 to-gray-600' },
                    { industry: t('webdev.customSoftware.examples.accounting.industry'), solution: t('webdev.customSoftware.examples.accounting.solution'), icon: <Calculator className="w-5 h-5" />, color: 'from-sky-500 to-blue-500' },
                    { industry: t('webdev.customSoftware.examples.transport.industry'), solution: t('webdev.customSoftware.examples.transport.solution'), icon: <Package className="w-5 h-5" />, color: 'from-amber-500 to-orange-500' },
                    { industry: t('webdev.customSoftware.examples.manufacturing.industry'), solution: t('webdev.customSoftware.examples.manufacturing.solution'), icon: <Factory className="w-5 h-5" />, color: 'from-gray-600 to-slate-600' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-transparent transition-all duration-300 group border-b border-slate-100/50 last:border-0">
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${row.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <div className="text-white">{row.icon}</div>
                          </div>
                          <span className="text-slate-900 font-bold text-base group-hover:text-yellow-600 transition-colors">{row.industry}</span>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-28 reveal reveal-bottom">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{t('webdev.techStack.title')}</h3>
            <p className="text-slate-500 font-light">{t('webdev.techStack.description')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-yellow-200 transition-all duration-300 group reveal reveal-bottom reveal-delay-${idx*100} shadow-sm`}>
                <div className="flex items-center gap-4 mb-6 text-slate-400 group-hover:text-yellow-600 transition-colors">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-yellow-50 transition-colors">
                    {stack.icon}
                  </div>
                  <span className="font-bold text-slate-900 text-lg">{t(stack.nameKey)}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="px-3 py-1.5 rounded-md bg-slate-50 text-xs font-bold text-slate-500 border border-slate-100 group-hover:border-yellow-200 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
