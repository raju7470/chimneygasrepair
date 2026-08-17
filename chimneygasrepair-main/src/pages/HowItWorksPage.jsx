import { BookingForm } from '../features/booking/BookingForm';
import { PageHero } from '../components/layout/PageHero';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { processSteps } from '../data/content';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function HowItWorksPage() {
  useDocumentMeta({
    title: 'How It Works',
    description: 'Understand the FlameFix service workflow from booking through diagnosis, repair and handover.',
  });

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A repair process you can understand before the visit starts."
        description="Five clear stages create a predictable experience without turning a simple home service into unnecessary complexity."
        image="/images/service-cooktop.webp"
      />

      <section className="section">
        <div className="container process-detail">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} className="process-detail__row" delay={index * 45}>
              <div className="process-detail__number">{step.number}</div>
              <div>
                <span className="eyebrow">{step.kicker}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
                <small>{index === 2 ? 'Repair should not begin until the proposed path is understood.' : 'A clear checkpoint in the service journey.'}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--ink">
        <div className="container appointment-grid">
          <Reveal>
            <span className="eyebrow eyebrow--light">Before the technician arrives</span>
            <h2>Three things make diagnosis faster.</h2>
          </Reveal>
          <div className="appointment-grid__cards">
            {[
              ['01', 'Keep the appliance accessible', 'Remove loose items around the stove or hob so inspection can begin safely.'],
              ['02', 'Share the exact symptom', 'Mention what happens, when it happens and whether the issue is intermittent.'],
              ['03', 'Do not dismantle gas parts', 'Leave valves, jets and gas-line components untouched before professional inspection.'],
            ].map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 60}>
                <article>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container booking-standalone">
          <Reveal>
            <BookingForm title="Start the process now" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
