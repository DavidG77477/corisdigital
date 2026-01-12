
import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';
import { useI18n } from '../contexts/i18nContext';

const Footer: React.FC = () => {
  const { t } = useI18n();
  return (
    <footer className="pt-16 pb-8 text-white border-t border-white/10" style={{ backgroundColor: '#001B3A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/Logo/Adobe Express - file.png" 
                alt="Coris Digital Logo" 
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
              <span className="text-2xl font-bold text-white tracking-widest uppercase">Coris Digital®</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{t('nav.contact')}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-500" />
                {t('footer.email')}
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="flex items-center gap-2">
                  {t('footer.address')}
                  <span className="flex items-center gap-1.5 ml-2">
                    <span className="text-[14px]" title="États-Unis">🇺🇸</span>
                    <span className="text-[14px]" title="Europe">🇪🇺</span>
                    <span className="text-[14px]" title="Afrique">🌍</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('nav.expertise')}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.expertise.webDesign')}</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.expertise.marketing')}</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.expertise.software')}</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">{t('footer.expertise.productDesign')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Coris Digital®. {t('footer.copyright')}
          </p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
               <span className="font-bold text-xs">in</span>
             </div>
             <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
               <span className="font-bold text-xs">X</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
