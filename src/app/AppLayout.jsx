import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Icon } from '../components/ui/Icon';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export function AppLayout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content" key={location.pathname} className="route-page">
        <Outlet />
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={`https://wa.me/${siteConfig.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <Icon name="whatsapp" size={25} />
      </a>
      <div className="mobile-action-bar" aria-label="Quick actions">
        <a href={`tel:${siteConfig.phoneHref}`}>
          <Icon name="phone" size={18} /> Call
        </a>
        <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={18} /> WhatsApp
        </a>
      </div>
    </>
  );
}
