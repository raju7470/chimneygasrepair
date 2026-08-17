import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceStandardCard } from '../components/ui/ServiceStandardCard';
import { strengths } from '../data/content';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function WhyUsPage() {
  useDocumentMeta({
    title: 'Why Us',
    description: 'See the service standards that shape the FlameFix repair experience.',
  });

  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        title="Designed to feel considered at every touchpoint."
        description="The difference is not one dramatic feature. It is a collection of disciplined details that make the service easier to trust."
        image="/images/service-range.webp"
      />

      <section className="section section--warm">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="The standard"
              title="Six details that make the experience stronger."
              description="Each one is simple. Together they create a professional, repeatable service model."
            />
          </Reveal>
          <div className="strength-grid">
            {strengths.map((item, index) => (
              <Reveal key={item.number} delay={index * 45}>
                <ServiceStandardCard item={item} variant="light" headingLevel="h2" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container comparison">
          <Reveal>
            <span className="eyebrow eyebrow--light">Service architecture</span>
            <h2>Every stage has a purpose.</h2>
            <p>Professionalism becomes easier to maintain when the workflow itself prevents rushed decisions.</p>
          </Reveal>
          <Reveal className="comparison__list" delay={100}>
            {[
              ['Capture', 'Appliance, symptom, area and contact details are captured before the visit.'],
              ['Confirm', 'The appointment window and visit expectations are confirmed clearly.'],
              ['Diagnose', 'Inspection is performed before repair recommendations are made.'],
              ['Approve', 'The customer remains in control of whether repair proceeds.'],
              ['Verify', 'Operation is checked before the job is closed.'],
            ].map(([label, text]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container premium-quote">
          <Reveal>
            <span className="premium-quote__mark" aria-hidden="true">“</span>
            <p>Premium service is not about making repair complicated. It is about making every decision clear.</p>
            <small>FlameFix service philosophy</small>
          </Reveal>
        </div>
      </section>

      <section className="section section--warm centered-cta">
        <div className="container">
          <Reveal>
            <span className="eyebrow">See it in practice</span>
            <h2>Review the full service journey.</h2>
            <p>From first message to final handover, every stage is visible.</p>
            <Link className="button button--primary" to="/how-it-works">
              How it works <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
