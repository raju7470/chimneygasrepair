import { Reveal } from '../ui/Reveal';

export function PageHero({ eyebrow, title, description, image = '/images/hero.webp' }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media" aria-hidden="true">
        <img src={image} alt="" width="1920" height="1180" fetchPriority="high" />
      </div>
      <div className="page-hero__shade" aria-hidden="true" />
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container page-hero__inner">
        <Reveal>
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
