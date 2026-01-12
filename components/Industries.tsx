
import React from 'react';
import { Landmark, Stethoscope, ShoppingBag, Truck, Building2, Factory, ArrowRight, Activity, BarChart3, Heart } from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';

const Industries: React.FC = () => {
  const { t } = useI18n();
  const sectors = [
    {
      title: "NGOs & Associations",
      icon: <Heart className="w-8 h-8" />,
      description: "Optimizing donor management, fundraising platforms, and impact dashboards.",
      features: ["Donor CRM", "Fundraising Portals", "Impact Analytics"],
      iconColor: "text-yellow-500"
    },
    {
      title: "FinTech & Banking",
      icon: <Landmark className="w-8 h-8" />,
      description: "Secure payment systems, banking compliance, and high-frequency trading tools.",
      features: ["PCI DSS Security", "Blockchain", "AI Fraud Detection"],
      iconColor: "text-yellow-500"
    },
    {
      title: "Healthcare (MedTech)",
      icon: <Stethoscope className="w-8 h-8" />,
      description: "Digitalizing patient records, telemedicine, and health system interoperability.",
      features: ["GDPR/HIPAA Compliance", "Medical IoT", "Teleconsultation"],
      iconColor: "text-yellow-500"
    },
    {
      title: "Logistics & Supply Chain",
      icon: <Truck className="w-8 h-8" />,
      description: "Fleet optimization, real-time tracking, and automated warehouse management.",
      features: ["Geolocation", "Route Optimization", "Inventory Control"],
      iconColor: "text-yellow-500"
    },
    {
      title: "Retail & E-Commerce",
      icon: <ShoppingBag className="w-8 h-8" />,
      description: "Unified shopping experiences, custom marketplaces, and loyalty programs.",
      features: ["Omnichannel Flow", "Mobile Payments", "Predictive UX"],
      iconColor: "text-yellow-500"
    },
    {
      title: "Industry 4.0",
      icon: <Factory className="w-8 h-8" />,
      description: "Production control, predictive maintenance, and digital twins.",
      features: ["Industrial IoT", "Big Data Architecture", "AI Maintenance"],
      iconColor: "text-yellow-500"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-800 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Activity className="w-3 h-3 text-yellow-500" />
            <span>{t('industries.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t('industries.title').split('\n').map((line, i) => (
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
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {t('industries.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="group relative rounded-[2.5rem] bg-white border border-slate-100 p-8 hover:border-yellow-200 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center ${sector.iconColor} mb-6 shadow-sm group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300`}>
                  {sector.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-yellow-600 transition-colors">
                  {sector.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 h-16">
                  {sector.description}
                </p>

                <div className="space-y-3 border-t border-slate-50 pt-6">
                  {sector.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-2 flex items-center text-xs font-black text-slate-900 uppercase tracking-[0.2em] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {t('industries.caseStudy')} <ArrowRight className="w-4 h-4 ml-2 text-yellow-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px] -z-0"></div>
            <div className="flex items-center gap-6 relative z-10">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 shadow-xl group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white">{t('industries.sectorNotListed.title')}</h4>
                    <p className="text-slate-400 text-sm mt-1">{t('industries.sectorNotListed.description')}</p>
                </div>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-yellow-500 text-slate-900 font-black rounded-xl hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 whitespace-nowrap transform hover:-translate-y-1 relative z-10"
            >
                {t('industries.sectorNotListed.button')}
            </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
