
import React, { useState } from 'react';
import { Cloud, Database, ShieldCheck } from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';
import { sendEmail, FormData } from '../utils/emailService';

const Contact: React.FC = () => {
  const { t } = useI18n();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const emailData: FormData = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      message: formState.message,
      formType: 'contact'
    };
    
    const success = await sendEmail(emailData);
    
    if (success) {
      alert(t('contact.thankYouMessage').replace('{name}', formState.name));
      setFormState({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden"> 
      <div className="absolute inset-0 bg-grid-slate-100 opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 reveal reveal-bottom">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-800 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
                {t('contact.title')}
             </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-tight mx-auto">
              {t('contact.heading').split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed mx-auto max-w-2xl">
              {t('contact.description')}
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl relative reveal reveal-bottom"> 
            <div className="mb-10 text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                {t('contact.formTitle')}
              </h3>
              <p className="text-slate-500 text-sm">
                {t('contact.formSubtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1 group">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-yellow-600 transition-colors">{t('contact.fullName')}</label>
                <input 
                  type="text" name="name" placeholder="John Doe" required
                  value={formState.name} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder-slate-400 focus:border-yellow-500 outline-none transition-all"
                />
              </div>
              
              <div className="space-y-1 group">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-yellow-600 transition-colors">{t('contact.email')}</label>
                <input 
                  type="email" name="email" placeholder="john@enterprise.com" required
                  value={formState.email} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder-slate-400 focus:border-yellow-500 outline-none transition-all"
                />
              </div>
              
              <div className="space-y-1 group">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-yellow-600 transition-colors">{t('contact.message')}</label>
                <textarea 
                  name="message" placeholder={t('contact.messagePlaceholder')} rows={3}
                  value={formState.message} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder-slate-400 focus:border-yellow-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-5 rounded-xl shadow-xl mt-4 transition-all transform active:scale-[0.98] text-lg uppercase tracking-widest"
              >
                {t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
