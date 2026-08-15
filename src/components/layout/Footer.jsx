import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { navigationItems } from '../../data/navigation';
import { Icon } from '../ui/Icon';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo inverse />
          <p>
            Thoughtful doorstep service for gas stoves, hobs, cooktops, burners and cooking ranges.
          </p>
          <a className="footer__phone" href={`tel:${siteConfig.phoneHref}`}>
            <Icon name="phone" size={18} /> {siteConfig.phoneDisplay}
          </a>
        </div>

        <div>
          <h3>Explore</h3>
          {navigationItems.slice(0, 4).map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Service</h3>
          <Link to="/services">Gas stove repair</Link>
          <Link to="/services">Built-in hob service</Link>
          <Link to="/services">Burner & ignition</Link>
          <Link to="/services">Commercial support</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>{siteConfig.serviceArea}</p>
          <p>{siteConfig.hours}</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {siteConfig.copyrightYear} {siteConfig.businessName}. All rights reserved.</span>
        <span>Independent appliance service website.</span>
      </div>
    </footer>
  );
}
