import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { navigationItems } from '../../data/navigation';
import { Icon } from '../ui/Icon';
import { Logo } from './Logo';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__availability">
            <span className="live-dot" aria-hidden="true" />
            {siteConfig.responseText}
          </div>
          <div className="topbar__meta">
            <span>
              <Icon name="clock" size={16} />
              {siteConfig.hours}
            </span>
            <span>
              <Icon name="pin" size={16} />
              {siteConfig.serviceArea}
            </span>
            <a href={`tel:${siteConfig.phoneHref}`}>
              <Icon name="phone" size={16} />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="nav-shell">
        <div className="container nav-shell__inner">
          <Logo />

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a className="phone-chip" href={`tel:${siteConfig.phoneHref}`}>
              <span className="phone-chip__icon">
                <Icon name="phone" />
              </span>
              <span>
                <small>Call for service</small>
                <strong>{siteConfig.phoneDisplay}</strong>
              </span>
            </a>
            <NavLink className="button button--primary button--compact" to="/contact">
              Book a visit <Icon name="arrow" size={18} />
            </NavLink>
          </div>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>

        <div id="mobile-navigation" className={`mobile-panel ${menuOpen ? 'is-open' : ''}`}>
          <nav className="container mobile-panel__inner" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
              >
                <span>{item.label}</span>
                <Icon name="arrow" size={17} />
              </NavLink>
            ))}

            <div className="mobile-panel__utility">
              <a href={`tel:${siteConfig.phoneHref}`}>
                <span className="mobile-panel__utility-icon">
                  <Icon name="phone" size={17} />
                </span>
                <span>
                  <small>Call for service</small>
                  <strong>{siteConfig.phoneDisplay}</strong>
                </span>
              </a>
              <div>
                <span className="mobile-panel__utility-icon">
                  <Icon name="clock" size={17} />
                </span>
                <span>
                  <small>Working hours</small>
                  <strong>{siteConfig.hours}</strong>
                </span>
              </div>
            </div>

            <NavLink className="button button--primary button--full" to="/contact">
              Book a visit <Icon name="arrow" size={17} />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
