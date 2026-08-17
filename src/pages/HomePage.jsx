import { Link } from 'react-router-dom';
import { BookingForm } from '../features/booking/BookingForm';
import { siteConfig } from '../config/site';
import { services } from '../data/services';
import { processSteps, strengths } from '../data/content';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceStandardCard } from '../components/ui/ServiceStandardCard';

export default function HomePage() {
  useDocumentMeta({
    title: 'Chimney & Gas Repair in Bhopal | MP Nagar Service',
    description:
      'Expert chimney repair, kitchen chimney cleaning and gas stove repair in Bhopal. Doorstep gas appliance service in MP Nagar and nearby areas.',
  });

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <img src="/images/hero.webp" alt="" width="1920" height="1180" fetchPriority="high" />
        </div>
        <div className="home-hero__overlay" aria-hidden="true" />
        <div className="hero-orb hero-orb--one" aria-hidden="true" />
        <div className="hero-orb hero-orb--two" aria-hidden="true" />

        <div className="container home-hero__grid">
          {/* eager=true: hero is above-fold — don't hide it until JS runs (prevents CLS) */}
          <Reveal className="home-hero__copy" eager>
            <span className="eyebrow eyebrow--light">Doorstep chimney &amp; gas appliance care — Bhopal</span>
            <h1>
              Chimney &amp; Gas Repair Services in Bhopal.
              <span>Precise. Local. Reliable.</span>
            </h1>
            <p>
              Professional chimney repair, kitchen chimney cleaning and gas stove repair in Bhopal — with a clear service process from booking to handover. Serving MP Nagar and nearby areas.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/contact">
                Book a service visit <Icon name="arrow" size={18} />
              </Link>
              <a className="button button--glass" href={`tel:${siteConfig.phoneHref}`}>
                <Icon name="phone" size={18} /> {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="hero-proof" aria-label="Service highlights">
              <span><Icon name="shield" size={16} /> Safety-first checks</span>
              <span><Icon name="check" size={16} /> Upfront approval</span>
              <span><Icon name="spark" size={16} /> Clean handover</span>
            </div>
          </Reveal>

          <Reveal className="home-hero__booking" delay={120} eager>
            <BookingForm compact title="Book your visit" />
          </Reveal>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service commitments">
        <div className="container trust-strip__inner">
          {[
            ['01', 'Doorstep support', siteConfig.serviceArea],
            ['02', 'Clear diagnosis', 'Know the issue before repair'],
            ['03', 'Convenient hours', siteConfig.hours],
            ['04', 'Direct booking', 'Phone, form or WhatsApp'],
          ].map(([number, title, text]) => (
            <div className="trust-item" key={number}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Chimney &amp; gas appliance services"
              title="Chimney Repair &amp; Gas Appliance Services in Bhopal."
              description="From kitchen chimney repair and chimney cleaning to gas stove and gas geyser repair — each service follows the same diagnosis-first approach across MP Nagar and Bhopal."
            />
          </Reveal>

          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 55}>
                <article className="service-card">
                  <div className="service-card__media">
                    <img
                      src={service.image}
                      alt={service.altText}
                      width="900"
                      height="650"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span>{service.tag}</span>
                  </div>
                  <div className="service-card__body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to="/services">
                      Explore service <Icon name="arrow" size={17} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-story">
          <Reveal className="story-media">
            <div className="story-media__frame">
              <img src="/images/about.webp" alt="Chimney and gas appliance repair technician in Bhopal" width="1100" height="900" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="story-media__badge">
              <span>Built around</span>
              <strong>clarity</strong>
              <small>not guesswork</small>
            </div>
          </Reveal>

          <Reveal className="story-copy" delay={100}>
            <span className="eyebrow">A better service experience</span>
            <h2>Chimney and gas repair Bhopal residents can trust.</h2>
            <p>
              Our chimney and gas repair service in Bhopal is built around one idea: remove uncertainty. You know how to book, what happens at inspection, when approval is needed and how the appliance is verified before handover.
            </p>
            <div className="mini-checks">
              <span><Icon name="check" size={17} /> Diagnose before repair</span>
              <span><Icon name="check" size={17} /> Explain the repair path</span>
              <span><Icon name="check" size={17} /> Verify before completion</span>
            </div>
            <Link className="text-link" to="/about">
              Discover our approach <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="Why Bhopal chooses our chimney &amp; gas repair service."
              description="Not decorative promises — a service model built around practical, repeatable standards for chimney and gas appliance repair in MP Nagar and Bhopal."
            />
          </Reveal>

          <div className="strength-grid">
            {strengths.map((item, index) => (
              <Reveal key={item.number} delay={index * 45}>
                <ServiceStandardCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="The process"
              title="Five steps. No mystery."
              description="A structured path keeps the experience efficient while making approval points clear."
              align="center"
            />
          </Reveal>
          <div className="process-line">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} className="process-card" delay={index * 70}>
                <span className="process-card__no">{step.number}</span>
                <span className="process-card__dot" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="section-action">
            <Link className="button button--dark" to="/how-it-works">
              See how it works <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas — local SEO section */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Service areas"
              title="Chimney repair near me? We serve Bhopal."
              description="Our chimney and gas repair service covers MP Nagar and the wider Bhopal area in Madhya Pradesh. If you are searching for chimney service near me or gas stove repair near me in Bhopal, book a doorstep visit today."
            />
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__media" aria-hidden="true">
          <img src="/images/cta.webp" alt="" width="1800" height="780" loading="lazy" />
        </div>
        <div className="cta-band__shade" aria-hidden="true" />
        <div className="container cta-band__inner">
          <Reveal>
            <span className="eyebrow eyebrow--light">Ready when you are</span>
            <h2>Bring your kitchen back to a confident flame.</h2>
            <p>Share the issue, choose a visit window and continue directly on WhatsApp.</p>
            <div className="cta-band__actions">
              <Link className="button button--primary" to="/contact">
                Request a visit <Icon name="arrow" size={18} />
              </Link>
              <a className="button button--glass" href={`tel:${siteConfig.phoneHref}`}>
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
