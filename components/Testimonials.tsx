
import React, { useEffect, useState, useRef } from 'react';
import { Quote, TrendingUp, Users, Clock, ArrowUpRight, Trophy, Coins, Zap, Activity, BarChart3, ScanLine } from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';

const Counter = ({ end, prefix = "", suffix = "", duration = 2000, delay = 0 }: { end: number, prefix?: string, suffix?: string, duration?: number, delay?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setTimeout(() => {
             setHasAnimated(true);
             let start = 0;
             const increment = end / (duration / 16); 
             const timer = setInterval(() => {
               start += increment;
               if (start >= end) {
                 setCount(end);
                 clearInterval(timer);
               } else {
                 setCount(Math.ceil(start));
               }
             }, 16);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated, delay]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const CircularGauge = ({ percentage, color, icon }: { percentage: number, color: string, icon: React.ReactNode }) => {
    const [progress, setProgress] = useState(0);
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                setTimeout(() => setProgress(percentage), 300);
            }
        });
        const el = document.getElementById(`gauge-${percentage}`);
        if(el) observer.observe(el);
        return () => observer.disconnect();
    }, [percentage]);

    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const getColorHex = (cls: string) => {
        if(cls.includes('green')) return '#4ade80';
        if(cls.includes('blue')) return '#60a5fa';
        if(cls.includes('yellow')) return '#facc15';
        return '#ffffff';
    }
    const shadowColor = getColorHex(color);

    return (
        <div id={`gauge-${percentage}`} className="relative w-24 h-24 flex items-center justify-center group/gauge">
            <div className={`absolute inset-0 rounded-full opacity-20 blur-md transition-all duration-1000 ${color.replace('text-', 'bg-')}`}></div>
            
            <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                <circle cx="48" cy="48" r={radius} stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-800/50" />
                <circle 
                    cx="48" cy="48" r={radius} 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    fill="transparent" 
                    className={`${color} transition-all duration-[2000ms] ease-out`}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ filter: `drop-shadow(0 0 4px ${shadowColor})` }}
                />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner">
                    <div className={`${color} opacity-80 group-hover/gauge:scale-110 transition-transform`}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
  const { t } = useI18n();
  const testimonials = [
    {
      quote: t('testimonials.testimonial1.quote'),
      author: t('testimonials.testimonial1.author'),
      role: t('testimonials.testimonial1.role'),
      metricValue: 215,
      metricPrefix: "+",
      metricSuffix: "%",
      metricLabel: t('testimonials.testimonial1.metricLabel'),
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-green-400",
      borderColor: "group-hover:border-green-500/50",
      gradient: "from-green-500/10 to-transparent"
    },
    {
      quote: t('testimonials.testimonial2.quote'),
      author: t('testimonials.testimonial2.author'),
      role: t('testimonials.testimonial2.role'),
      metricValue: 40,
      metricPrefix: "-",
      metricSuffix: "%",
      metricLabel: t('testimonials.testimonial2.metricLabel'),
      icon: <Coins className="w-5 h-5" />,
      color: "text-blue-400",
      borderColor: "group-hover:border-blue-500/50",
      gradient: "from-blue-500/10 to-transparent"
    },
    {
      quote: t('testimonials.testimonial3.quote'),
      author: t('testimonials.testimonial3.author'),
      role: t('testimonials.testimonial3.role'),
      metricValue: 99,
      metricPrefix: "",
      metricSuffix: "%",
      metricLabel: t('testimonials.testimonial3.metricLabel'),
      icon: <Activity className="w-5 h-5" />,
      color: "text-yellow-400",
      borderColor: "group-hover:border-yellow-500/50",
      gradient: "from-yellow-500/10 to-transparent"
    }
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-600/20 rounded-full blur-[150px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 reveal reveal-bottom">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-8 shadow-lg shadow-yellow-500/5">
             <Trophy className="w-4 h-4 text-yellow-500" />
             <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">{t('testimonials.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            {t('testimonials.title').split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {i === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </React.Fragment>
            ))}
          </h2>
        </div>

        <div className="mb-24 relative group reveal reveal-bottom">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 via-purple-500/30 to-blue-500/30 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-800 p-8 md:p-12 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-yellow-500"></div>
                            <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest font-bold">{t('testimonials.impactReport')}</span>
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {t('testimonials.businessAcceleration.title').split('\n').map((line, i) => (
                              <React.Fragment key={i}>
                                {i > 0 && <br />}
                                {i === 1 ? (
                                  <span className="text-slate-500">{line}</span>
                                ) : (
                                  line
                                )}
                              </React.Fragment>
                            ))}
                        </h3>
                         <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                            {t('testimonials.businessAcceleration.description')}
                         </p>
                         
                         <div className="flex flex-col sm:flex-row gap-4">
                            <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800 flex items-center gap-5 hover:bg-slate-900/60 transition-colors group/stat">
                                <div className="p-3 bg-slate-900 rounded-xl text-yellow-500 border border-slate-800 shadow-inner group-hover/stat:scale-110 transition-transform">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white tracking-tight uppercase">{t('testimonials.highYield')}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{t('testimonials.revenueScaling')}</div>
                                </div>
                            </div>
                            <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800 flex items-center gap-5 hover:bg-slate-900/60 transition-colors group/stat">
                                <div className="p-3 bg-slate-900 rounded-xl text-blue-500 border border-slate-800 shadow-inner group-hover/stat:scale-110 transition-transform">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white tracking-tight uppercase">{t('testimonials.strategic')}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{t('testimonials.resourceOptimization')}</div>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div className="relative h-96 bg-slate-950/80 rounded-3xl border border-slate-800 p-8 flex flex-col justify-end overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 blur-[2px] shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-[scan_3s_linear_infinite] z-20 opacity-50"></div>
                        <style>{`@keyframes scan { 0% { top: 0% } 50% { top: 100% } 100% { top: 0% } }`}</style>
                        
                        <div className="flex items-end justify-between h-56 gap-3 relative z-10 w-full px-2">
                            {[35, 50, 45, 70, 60, 85, 100].map((height, i) => (
                                <div key={i} className="flex-1 bg-slate-900/50 rounded-t-md relative group/bar overflow-hidden backdrop-blur-sm border-t border-x border-slate-800/50">
                                    <div 
                                        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-yellow-600/80 via-yellow-400 to-yellow-200 transition-all duration-[2000ms] ease-out opacity-80 group-hover/bar:opacity-100"
                                        style={{ height: '0%', animation: `growBar 1.5s ease-out ${i * 0.15}s forwards`, '--target-height': `${height}%` } as React.CSSProperties}
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-white/50 blur-[1px]"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-30">
                             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 shadow-lg">
                                 <span className="relative flex h-2 w-2">
                                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                 </span>
                                 <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{t('testimonials.systemOnline')}</span>
                             </div>
                             <div className="text-right">
                                 <div className="text-3xl font-black text-white tracking-tighter drop-shadow-lg uppercase">{t('testimonials.maxVelocity')}</div>
                                 <div className="text-[10px] text-yellow-500 uppercase tracking-wider font-bold">{t('testimonials.marketDominance')}</div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className={`relative group reveal reveal-bottom delay-${idx * 150}`}>
              <div className={`absolute -inset-px bg-gradient-to-b ${item.gradient} rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-700`}></div>
              
              <div className={`relative bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-800 ${item.borderColor} transition-colors duration-500 h-full flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-black/50`}>
                <div className="flex justify-between items-start mb-10">
                    <CircularGauge percentage={item.metricValue} color={item.color} icon={item.icon} />
                    <div className="text-right pt-2">
                        <div className={`text-5xl font-black ${item.color} tracking-tighter drop-shadow-lg`}>
                             <Counter end={item.metricValue} prefix={item.metricPrefix} suffix={item.metricSuffix} delay={500} />
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-2 border-t border-slate-800 pt-1 inline-block">{item.metricLabel}</div>
                    </div>
                </div>

                <div className="relative mb-8 flex-grow">
                    <Quote className="absolute -top-4 -left-2 w-10 h-10 text-slate-800/50 rotate-180" />
                    <p className="relative z-10 text-slate-300 leading-relaxed font-light text-lg">
                      "{item.quote}"
                    </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-800/50">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden shadow-inner ring-2 ring-slate-800/50">
                        <img 
                            src={`https://images.unsplash.com/photo-${1507003211169 + idx * 100}?w=100&h=100&fit=crop&crop=faces`}
                            alt={item.author}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    parent.className = 'w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 font-bold text-lg shadow-inner';
                                    parent.textContent = item.author.charAt(0);
                                }
                            }}
                        />
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm group-hover:text-yellow-500 transition-colors">{item.author}</div>
                        <div className="text-xs text-slate-500">{item.role}</div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
