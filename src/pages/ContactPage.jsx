import { PageHero } from '../components/layout/PageHero';
import { Icon } from '../components/ui/Icon';
import { Reveal } from '../components/ui/Reveal';
import { BookingForm } from '../features/booking/BookingForm';
import { siteConfig } from '../config/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function ContactPage() {
  useDocumentMeta({
    title: 'Contact & Book Chimney or Gas Repair in Bhopal',
    description:
      'Book a doorstep chimney repair or gas stove repair in Bhopal. Call or WhatsApp for chimney and gas appliance service in MP Nagar.',
  });

  return (
    <>
      <PageHero
        eyebrow="Contact & booking"
        title="Book chimney or gas appliance repair in Bhopal."
        description="Share the appliance, symptom and your area in Bhopal or MP Nagar. We prepare a structured WhatsApp message so the first conversation starts with useful context."
        image="/images/cta.webp"
      />

      <section className="section section--warm">
        <div className="container contact-layout">
          <Reveal className="contact-info">
            <span className="eyebrow">Direct contact</span>
            <h2>Choose the channel that is easiest for you.</h2>
            <p>Use the form for a structured request, or contact the service desk directly.</p>

            <div className="contact-cards">
              <a href={`tel:${siteConfig.phoneHref}`}>
                <span><Icon name="phone" size={20} /></span>
                <div><small>Phone</small><strong>{siteConfig.phoneDisplay}</strong></div>
              </a>
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">
                <span><Icon name="whatsapp" size={20} /></span>
                <div><small>WhatsApp</small><strong>Start a chat</strong></div>
              </a>
              <a href={`mailto:${siteConfig.email}`}>
                <span><Icon name="mail" size={20} /></span>
                <div><small>Email</small><strong>{siteConfig.email}</strong></div>
              </a>
              <div>
                <span><Icon name="pin" size={20} /></span>
                <div><small>Service area</small><strong>{siteConfig.serviceArea}</strong></div>
              </div>
              <div>
                <span><Icon name="clock" size={20} /></span>
                <div><small>Working hours</small><strong>{siteConfig.hours}</strong></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <BookingForm title="Request a service visit" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
