
import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Check,
  ArrowRight,
  Plus,
  Minus,
  Search,
  MapPin,
  FileText,
  Settings,
  PieChart,
  Workflow,
  Database as DbIcon,
  ShoppingBag,
  CreditCard,
  Package,
  Lightbulb,
  TrendingUp,
  Target,
  Zap,
  Star,
  Layers
} from 'lucide-react';
import { ViewType } from '../App';
import { useI18n } from '../contexts/i18nContext';
import { sendEmail, FormData } from '../utils/emailService';

interface ServiceDetailPageProps {
  serviceType: ViewType;
  onBack: () => void;
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-left group">
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all ${isOpen ? 'bg-yellow-500/20 rotate-180' : 'bg-white/5'}`}>
          {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-slate-400" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-300 leading-relaxed text-sm">{answer}</p>
      </div>
    </div>
  );
};

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceType, onBack }) => {
  const { t } = useI18n();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);

  const getServiceData = () => {
    // Map serviceType to translation key format
    const translationKeyMap: Record<string, string> = {
      'seo': 'seo',
      'marketing': 'marketing',
      'crm-erp': 'crmErp',
      'ecommerce': 'ecommerce',
      'product-design': 'productDesign'
    };
    const translationKey = translationKeyMap[serviceType] || serviceType;
    const baseKey = `servicedetail.${translationKey}`;
    
    // Debug log
    console.log('[ServiceDetailPage] serviceType:', serviceType, 'translationKey:', translationKey, 'baseKey:', baseKey);
    console.log('[ServiceDetailPage] Testing translation:', t(`${baseKey}.title`));
    
    if (serviceType === 'seo' || serviceType === 'marketing' || serviceType === 'crm-erp' || serviceType === 'ecommerce' || serviceType === 'product-design') {
      // Common structure for all service types
      const getCommonData = (customBaseKey: string) => {
        return {
          title: t(`${customBaseKey}.title`),
          subtitle: t(`${customBaseKey}.subtitle`),
          description: t(`${customBaseKey}.description`),
          whatIs: {
            title: t(`${customBaseKey}.whatIs.title`),
            description: t(`${customBaseKey}.whatIs.description`)
          },
          whyImportant: {
            title: t(`${customBaseKey}.whyImportant.title`),
            points: [
              t(`${customBaseKey}.whyImportant.point1`),
              t(`${customBaseKey}.whyImportant.point2`),
              t(`${customBaseKey}.whyImportant.point3`),
              t(`${customBaseKey}.whyImportant.point4`)
            ]
          },
          howItWorks: {
            title: t(`${customBaseKey}.howItWorks.title`),
            steps: [
              t(`${customBaseKey}.howItWorks.step1`),
              t(`${customBaseKey}.howItWorks.step2`),
              t(`${customBaseKey}.howItWorks.step3`),
              t(`${customBaseKey}.howItWorks.step4`)
            ]
          },
          benefits: {
            title: t(`${customBaseKey}.benefits.title`),
            points: [
              t(`${customBaseKey}.benefits.point1`),
              t(`${customBaseKey}.benefits.point2`),
              t(`${customBaseKey}.benefits.point3`),
              t(`${customBaseKey}.benefits.point4`)
            ]
          },
          examples: {
            title: t(`${customBaseKey}.examples.title`),
            items: [
              t(`${customBaseKey}.examples.example1`),
              t(`${customBaseKey}.examples.example2`),
              t(`${customBaseKey}.examples.example3`),
              t(`${customBaseKey}.examples.example4`)
            ]
          },
          faqs: [
            { q: t(`${customBaseKey}.faq.q1`), a: t(`${customBaseKey}.faq.a1`) },
            { q: t(`${customBaseKey}.faq.q2`), a: t(`${customBaseKey}.faq.a2`) },
            { q: t(`${customBaseKey}.faq.q3`), a: t(`${customBaseKey}.faq.a3`) },
            { q: t(`${customBaseKey}.faq.q4`), a: t(`${customBaseKey}.faq.a4`) }
          ]
        };
      };
      
      if (serviceType === 'seo') {
        return {
          ...getCommonData(baseKey),
          pillars: [
          { 
            title: t(`${baseKey}.pillars.pillar1.title`), 
            desc: t(`${baseKey}.pillars.pillar1.desc`), 
            icon: <MapPin className="w-6 h-6" /> 
          },
          { 
            title: t(`${baseKey}.pillars.pillar2.title`), 
            desc: t(`${baseKey}.pillars.pillar2.desc`), 
            icon: <Layers className="w-6 h-6" /> 
          },
          { 
            title: t(`${baseKey}.pillars.pillar3.title`), 
            desc: t(`${baseKey}.pillars.pillar3.desc`), 
            icon: <Search className="w-6 h-6" /> 
          },
          { 
            title: t(`${baseKey}.pillars.pillar4.title`), 
            desc: t(`${baseKey}.pillars.pillar4.desc`), 
            icon: <FileText className="w-6 h-6" /> 
          }
        ],
        accentColor: "from-emerald-500 to-teal-600"
      };
    } else if (serviceType === 'marketing') {
      return {
        ...getCommonData(baseKey),
        pillars: [
          { 
            title: t(`${baseKey}.pillars.pillar1.title`), 
            desc: t(`${baseKey}.pillars.pillar1.desc`), 
            icon: <Settings className="w-6 h-6" /> 
          },
          { 
            title: t(`${baseKey}.pillars.pillar2.title`), 
            desc: t(`${baseKey}.pillars.pillar2.desc`), 
            icon: <PieChart className="w-6 h-6" /> 
          }
        ],
        accentColor: "from-blue-500 to-indigo-600"
      };
    } else if (serviceType === 'crm-erp') {
      return {
        ...getCommonData(baseKey),
        pillars: [
          { 
            title: t(`${baseKey}.pillars.pillar1.title`), 
            desc: t(`${baseKey}.pillars.pillar1.desc`), 
            icon: <Workflow className="w-6 h-6" /> 
          },
          { 
            title: t(`${baseKey}.pillars.pillar2.title`), 
            desc: t(`${baseKey}.pillars.pillar2.desc`), 
            icon: <DbIcon className="w-6 h-6" /> 
          }
        ],
        comparison: {
          generic: {
            title: t(`${baseKey}.comparison.generic.title`),
            points: [
              t(`${baseKey}.comparison.generic.point1`),
              t(`${baseKey}.comparison.generic.point2`),
              t(`${baseKey}.comparison.generic.point3`),
              t(`${baseKey}.comparison.generic.point4`)
            ]
          },
          custom: {
            title: t(`${baseKey}.comparison.custom.title`),
            points: [
              t(`${baseKey}.comparison.custom.point1`),
              t(`${baseKey}.comparison.custom.point2`),
              t(`${baseKey}.comparison.custom.point3`),
              t(`${baseKey}.comparison.custom.point4`)
            ]
          }
        },
        accentColor: "from-indigo-600 to-purple-700"
      };
    } else if (serviceType === 'ecommerce') {
      return {
        ...getCommonData(baseKey),
        products: {
          title: t(`${baseKey}.products.title`),
          points: [
            t(`${baseKey}.products.point1`),
            t(`${baseKey}.products.point2`),
            t(`${baseKey}.products.point3`),
            t(`${baseKey}.products.point4`)
          ]
        },
        training: {
          title: t(`${baseKey}.training.title`),
          points: [
            t(`${baseKey}.training.point1`),
            t(`${baseKey}.training.point2`),
            t(`${baseKey}.training.point3`),
            t(`${baseKey}.training.point4`)
          ]
        },
        features: {
          title: t(`${baseKey}.features.title`),
          items: [
            t(`${baseKey}.features.feature1`),
            t(`${baseKey}.features.feature2`),
            t(`${baseKey}.features.feature3`),
            t(`${baseKey}.features.feature4`),
            t(`${baseKey}.features.feature5`),
            t(`${baseKey}.features.feature6`),
            t(`${baseKey}.features.feature7`),
            t(`${baseKey}.features.feature8`)
          ]
        },
        advantages: {
          title: t(`${baseKey}.advantages.title`),
          points: [
            t(`${baseKey}.advantages.point1`),
            t(`${baseKey}.advantages.point2`),
            t(`${baseKey}.advantages.point3`),
            t(`${baseKey}.advantages.point4`)
          ]
        },
        pillars: [
          { 
            title: t(`${baseKey}.pillars.pillar1.title`), 
            desc: t(`${baseKey}.pillars.pillar1.desc`), 
            icon: <Target className="w-6 h-6" /> 
          },
          { 
            title: t(`${baseKey}.pillars.pillar2.title`), 
            desc: t(`${baseKey}.pillars.pillar2.desc`), 
            icon: <CreditCard className="w-6 h-6" /> 
          },
          { 
            title: t(`${baseKey}.pillars.pillar3.title`), 
            desc: t(`${baseKey}.pillars.pillar3.desc`), 
            icon: <Package className="w-6 h-6" /> 
          },
          { 
            title: t(`${baseKey}.pillars.pillar4.title`), 
            desc: t(`${baseKey}.pillars.pillar4.desc`), 
            icon: <ShoppingBag className="w-6 h-6" /> 
          }
        ],
        accentColor: "from-purple-600 to-pink-600"
      };
    }
    }
    return null;
  };

  const data = getServiceData();
  if (!data) return null;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const emailData: FormData = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      message: formState.message,
      service: serviceType,
      formType: 'service-detail'
    };
    
    const success = await sendEmail(emailData);
    
    if (success) {
      alert(t('servicedetail.contactUs.successMessage'));
      setFormState({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="pt-24 min-h-screen pb-20 relative" style={{ backgroundColor: '#001B3A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={onBack} className="group flex items-center gap-2 text-slate-300 hover:text-white font-bold text-sm mb-12 bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-white/10">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('servicedetail.backHome')}
        </button>

        {/* Hero Section */}
        <div className="text-center mb-32 reveal reveal-active">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-bold uppercase text-[10px] tracking-widest mb-6">
            {data.subtitle}
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-white mb-8 tracking-tighter leading-[1.0] max-w-5xl mx-auto">
            {data.title}
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light mb-12">
            {data.description}
          </p>
        </div>

        {/* What Is Section */}
        {data.whatIs && (
          <div className="mb-40 bg-white/5 rounded-[2.5rem] p-12 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
              <img 
                src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                alt="Corporate background"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
                {data.whatIs.title}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
                {data.whatIs.description}
              </p>
            </div>
          </div>
        )}

        {/* Why Important Section */}
        {data.whyImportant && (
          <div className="mb-40">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12 text-center">
              {data.whyImportant.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.whyImportant.points.map((point, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 flex items-start gap-4 relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <img 
                      src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                      alt="Corporate background"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10 flex items-start gap-4 w-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How It Works Section */}
        {data.howItWorks && (
          <div className="mb-40">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12 text-center">
              {data.howItWorks.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.howItWorks.steps.map((step, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <img 
                      src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                      alt="Corporate background"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                      {i + 1}
                    </div>
                    <p className="text-slate-300 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits Section */}
        {data.benefits && (
          <div className="mb-40">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12 text-center">
              {data.benefits.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.benefits.points.map((point, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 flex items-start gap-4 relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <img 
                      src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                      alt="Corporate background"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10 flex items-start gap-4 w-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Examples Section */}
        {data.examples && (
          <div className="mb-40">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12 text-center">
              {data.examples.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.examples.items.map((example, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <img 
                      src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                      alt="Corporate background"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10 flex items-start gap-4">
                    <Star className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <p className="text-slate-300 text-lg leading-relaxed">{example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Section (E-commerce only) */}
        {data.products && (
          <div className="mb-40">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12 text-center">
              {data.products.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.products.points.map((point, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 flex items-start gap-4 relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <img 
                      src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                      alt="Corporate background"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10 flex items-start gap-4 w-full">
                    <Check className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <p className="text-slate-300 text-lg leading-relaxed">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Training Section (E-commerce only) */}
        {data.training && (
          <div className="mb-40">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12 text-center">
              {data.training.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.training.points.map((point, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 flex items-start gap-4 relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <img 
                      src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                      alt="Corporate background"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10 flex items-start gap-4 w-full">
                    <Check className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <p className="text-slate-300 text-lg leading-relaxed">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Section (E-commerce only) */}
        {data.features && (
          <div className="mb-40">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12 text-center">
              {data.features.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.features.items.map((feature, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <img 
                      src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                      alt="Corporate background"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <Check className="w-5 h-5 text-yellow-500 mb-3" />
                    <p className="text-slate-300 text-sm leading-relaxed">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Advantages Section (E-commerce only) */}
        {data.advantages && (
          <div className="mb-40">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12 text-center">
              {data.advantages.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.advantages.points.map((point, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 flex items-start gap-4 relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <img 
                      src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                      alt="Corporate background"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10 flex items-start gap-4 w-full">
                    <Zap className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                    <p className="text-slate-300 text-lg leading-relaxed">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Methodology/Pillars Section */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4 uppercase tracking-tighter">
              {t('servicedetail.methodology.title')}
            </h2>
            <p className="text-slate-300">{t('servicedetail.methodology.subtitle')}</p>
          </div>
          <div className={`grid md:grid-cols-2 ${data.pillars.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-4'} gap-8`}>
            {data.pillars.map((pillar, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-yellow-500/50 transition-all group h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                  <img 
                    src="/Logo/Gemini_Generated_Image_gheznvgheznvghez.jpg"
                    alt="Corporate background"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-gradient-to-br ${data.accentColor} group-hover:text-white transition-all mb-6`}>
                    {pillar.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 transition-colors">{pillar.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section (CRM/ERP only) */}
        {data.comparison && (
          <div className="mb-40">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-red-500/10 rounded-[2.5rem] p-10 border border-red-500/20">
                <h3 className="text-2xl font-bold text-red-400 mb-6">{data.comparison.generic.title}</h3>
                <ul className="space-y-4">
                  {data.comparison.generic.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <Minus className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-500/10 rounded-[2.5rem] p-10 border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">{data.comparison.custom.title}</h3>
                <ul className="space-y-4">
                  {data.comparison.custom.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form Section */}
        <div className="mb-40">
          <div className="max-w-2xl mx-auto bg-white/5 rounded-[2.5rem] p-10 md:p-14 border border-white/10">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4 tracking-tight">
                {t('servicedetail.contactUs.title')}
              </h2>
              <p className="text-slate-300">{t('servicedetail.contactUs.subtitle')}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 block mb-2">
                  {t('servicedetail.contactUs.fullName')}
                </label>
                <input 
                  type="text" 
                  required 
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 outline-none transition-all" 
                  placeholder={t('servicedetail.contactUs.fullName')}
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 block mb-2">
                  {t('servicedetail.contactUs.email')}
                </label>
                <input 
                  type="email" 
                  required 
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 outline-none transition-all" 
                  placeholder={t('servicedetail.contactUs.email')}
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 block mb-2">
                  {t('servicedetail.contactUs.phone')}
                </label>
                <input 
                  type="tel" 
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 outline-none transition-all" 
                  placeholder={t('servicedetail.contactUs.phone')}
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 block mb-2">
                  {t('servicedetail.contactUs.message')}
                </label>
                <textarea 
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 outline-none transition-all resize-none" 
                  placeholder={t('servicedetail.contactUs.message')}
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-slate-900 font-black text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? 'Envoi...' : t('servicedetail.contactUs.button')}
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section - At the Bottom */}
        {data.faqs && data.faqs.length > 0 && (
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12 text-center">
              {t('servicedetail.faq.title')}
            </h2>
            <div className="max-w-4xl mx-auto bg-white/5 rounded-[2.5rem] p-10 border border-white/10">
              {data.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailPage;
