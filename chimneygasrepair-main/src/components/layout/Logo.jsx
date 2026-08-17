import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';

export function Logo({ inverse = false }) {
  return (
    <Link className={`brand ${inverse ? 'brand--inverse' : ''}`} to="/" aria-label={`${siteConfig.shortName} home`}>
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 64 64">
          <path d="M35 4c2 11-4 17-10 24-4 5-4 11 0 16-12-5-14-16-9-25 4-6 10-10 14-16 0 7 0 11-2 15 6-4 10-8 7-14Z" />
          <path className="brand__drop" d="M33 27c8 8 12 14 9 22-2 7-8 11-15 10-7-1-12-6-12-13 0-6 4-11 10-16-1 7 1 11 6 14-1-6 0-10 2-17Z" />
        </svg>
      </span>
      <span className="brand__text">
        <strong>{siteConfig.shortName}</strong>
        <small>GAS & CHIMNEY</small>
      </span>
    </Link>
  );
}
