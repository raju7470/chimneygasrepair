import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { commonIssues } from '../data/content';
import { services } from '../data/services';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function ServicesPage() {
  useDocumentMeta({
    title: 'Chimney & Gas Repair Services in Bhopal',
    description:
      'Chimney repair, kitchen chimney cleaning, gas stove repair and gas appliance service in Bhopal, MP Nagar. Doorstep service available.',
  });

  return (
    <>
      <PageHero
        eyebrow="Chimney &amp; gas appliance services — Bhopal"
        title="Chimney Repair, Chimney Cleaning &amp; Gas Appliance Services in Bhopal."
        description="From kitchen chimney repair and gas stove repair to gas geyser repair — each service follows the same diagnosis-first approach across MP Nagar and Bhopal."
        image="/images/service-burner.webp"
      />

      <section className="section section--warm">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Chimney repair, chimney service &amp; gas appliance repair"
              title="Choose the closest match to your appliance."
              description="If you are searching for chimney service near me or gas stove repair near me in Bhopal, select the nearest category and describe the issue."
            />
          </Reveal>
          <div className="service-grid service-grid--detail">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 55}>
                <article className="service-card service-card--detail">
                  <div className="service-card__media">
                    <img src={service.image} alt={service.altText} width="900" height="650" loading="lazy" />
                    <span>{service.tag}</span>
                  </div>
                  <div className="service-card__body">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <ul className="service-card__bullets">
                      <li><Icon name="check" size={15} /> Inspection before repair</li>
                      <li><Icon name="check" size={15} /> Clear approval point</li>
                      <li><Icon name="check" size={15} /> Functional handover check</li>
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container issue-layout">
          <Reveal>
            <span className="eyebrow">Common symptoms</span>
            <h2>Not sure what to call the problem?</h2>
            <p>
              That is normal. A symptom is enough for the booking stage. The actual fault should be determined during inspection.
            </p>
          </Reveal>
          <div className="issue-grid">
            {commonIssues.map((issue, index) => (
              <Reveal key={issue} delay={index * 35}>
                <div className="issue-chip"><span>{String(index + 1).padStart(2, '0')}</span>{issue}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container service-note">
          <Reveal>
            <span className="eyebrow eyebrow--light">Safety note</span>
            <h2>A gas smell is not a routine repair appointment.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              If the smell is strong, leave the area and use the appropriate emergency or gas-supply service. Avoid flames and electrical switches. Routine booking should only happen after the immediate hazard is addressed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--warm centered-cta">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Next step</span>
            <h2>Tell us the appliance and the symptom.</h2>
            <p>That is enough to start the booking process.</p>
            <Link className="button button--primary" to="/contact">
              Request service <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
