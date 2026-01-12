
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WebDevelopment from './components/WebDevelopment';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import WebDesignPage from './components/WebDesignPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import { I18nProvider } from './contexts/i18nContext';
import { translations } from './translations';

export type ViewType = 'home' | 'web-design' | 'seo' | 'marketing' | 'product-design' | 'crm-erp' | 'ecommerce';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <Services onSelectWebDesign={() => setCurrentView('web-design')} />
            <Industries />
            <WebDevelopment />
            <Testimonials />
            <Contact />
          </>
        );
      case 'web-design':
        return <WebDesignPage onBack={() => setCurrentView('home')} />;
      case 'seo':
        return <ServiceDetailPage serviceType="seo" onBack={() => setCurrentView('home')} />;
      case 'marketing':
        return <ServiceDetailPage serviceType="marketing" onBack={() => setCurrentView('home')} />;
      case 'product-design':
        return <ServiceDetailPage serviceType="product-design" onBack={() => setCurrentView('home')} />;
      case 'crm-erp':
        return <ServiceDetailPage serviceType="crm-erp" onBack={() => setCurrentView('home')} />;
      case 'ecommerce':
        return <ServiceDetailPage serviceType="ecommerce" onBack={() => setCurrentView('home')} />;
      default:
        return null;
    }
  };

  return (
    <I18nProvider translations={translations}>
      <div className="min-h-screen text-white selection:bg-yellow-200 selection:text-slate-900 transition-colors duration-500 relative overflow-hidden" style={{ backgroundColor: '#001B3A' }}>
        <Navbar onNavigate={(view) => setCurrentView(view)} />
        <main>
          {renderView()}
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
