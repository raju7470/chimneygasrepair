import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { FaqAccordion } from '../features/faq/FaqAccordion';
import { faqs } from '../data/content';
import { siteConfig } from '../config/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function FaqPage() {
  useDocumentMeta({
    title: 'FAQ',
    description: 'Answers to common questions about gas appliance and kitchen chimney service, appointments and safety.',
  });

  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Clear answers before you book."
        description="The practical details customers usually want to understand before scheduling gas appliance or kitchen chimney service."
        image="/images/service-stove.webp"
      />

      <section className="section section--warm">
        <div className="container faq-layout">
          <Reveal className="faq-aside">
            <span className="eyebrow">Need direct help?</span>
            <h2>Talk to the service desk.</h2>
            <p>If your situation does not fit the questions here, call or send the issue on WhatsApp.</p>
            <a className="button button--dark button--full" href={`tel:${siteConfig.phoneHref}`}>
              <Icon name="phone" size={18} /> Call now
            </a>
            <Link className="button button--outline button--full" to="/contact">
              Book online <Icon name="arrow" size={18} />
            </Link>
          </Reveal>

          <Reveal delay={90}>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container safety-panel">
          <Reveal>
            <Icon name="shield" size={32} />
            <span className="eyebrow eyebrow--light">Important safety distinction</span>
            <h2>Strong gas smell? Treat it as an immediate safety issue.</h2>
            <p>
              Avoid flames and electrical switches, ventilate if safe and leave the area if the smell is strong. Use the appropriate emergency or gas-supply service rather than waiting for a standard repair booking.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
