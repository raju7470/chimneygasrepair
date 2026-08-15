import { Link } from 'react-router-dom';
import { Icon } from '../components/ui/Icon';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function NotFoundPage() {
  useDocumentMeta({
    title: 'Page Not Found',
    description: 'The requested page could not be found.',
  });

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">404</span>
        <h1>This page does not exist.</h1>
        <p>The link may be outdated, or the page may have moved.</p>
        <Link className="button button--primary" to="/">
          Return home <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}
