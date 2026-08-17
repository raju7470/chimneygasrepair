import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceStandardCard } from '../components/ui/ServiceStandardCard';
import { strengths } from '../data/content';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function AboutPage() {
  useDocumentMeta({
    title: 'About Our Bhopal Gas Repair Service',
    description:
      'Learn about our chimney and gas appliance repair service in Bhopal. Trusted chimney and gas repair in MP Nagar, Madhya Pradesh.',
  });

  return (
    <>
      <PageHero
        eyebrow="About our Bhopal repair service"
        title="Trusted chimney &amp; gas repair service in Bhopal."
        description="Clear communication, careful diagnosis and disciplined handover — providing reliable gas appliance repair across MP Nagar and Bhopal, Madhya Pradesh."
        image="/images/about.webp"
      />

      <section className="section">
        <div className="container split-story split-story--wide">
          <Reveal className="story-copy">
            <span className="eyebrow">Our philosophy</span>
            <h2>Good repair work starts before a tool touches the appliance.</h2>
            <p>
              A professional visit should begin with context: what the appliance is doing, how the issue started,
              what has already been tried and whether any safety concern exists. That information shapes the inspection.
            </p>
            <p>
              From there, the service should stay simple: diagnose, explain, get approval, complete the work and verify
              the result. The customer should never be guessing which stage they are in.
            </p>
            <Link className="text-link" to="/how-it-works">
              See the service process <Icon name="arrow" size={18} />
            </Link>
          </Reveal>

          <Reveal className="story-media" delay={100}>
            <div className="story-media__frame story-media__frame--landscape">
              <img src="/images/service-hob.webp" alt="Gas hob service in Bhopal" width="900" height="650" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our principles"
              title="Standards that shape every visit."
              description="A premium-looking website only matters if the underlying service promise is equally structured."
            />
          </Reveal>
          <div className="principle-grid">
            {strengths.slice(0, 6).map((item, index) => (
              <Reveal key={item.number} delay={index * 45}>
                <ServiceStandardCard item={item} variant="light" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container comparison">
          <Reveal>
            <span className="eyebrow eyebrow--light">What we optimize for</span>
            <h2>Less uncertainty. Better decisions.</h2>
            <p>
              The service model is intentionally built around visible checkpoints instead of a rushed, opaque repair experience.
            </p>
          </Reveal>
          <Reveal className="comparison__list" delay={100}>
            {[
              ['Before', 'Appointment details, area and issue are captured clearly.'],
              ['During', 'Diagnosis and repair approval remain separate steps.'],
              ['After', 'Operation is checked and the customer receives a clean handover.'],
            ].map(([label, text]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--warm centered-cta">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Need a visit?</span>
            <h2>Start with a clear description of the issue.</h2>
            <p>We will use that information to guide the first stage of the service process.</p>
            <Link className="button button--primary" to="/contact">
              Book a visit <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
