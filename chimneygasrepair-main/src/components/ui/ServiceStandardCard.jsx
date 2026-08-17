import { Icon } from './Icon';

export function ServiceStandardCard({ item, variant = 'dark', headingLevel = 'h3' }) {
  const Heading = headingLevel;

  return (
    <article className={`standard-card standard-card--${variant}`}>
      <div className="standard-card__top">
        <span className="standard-card__number">{item.number}</span>
        <span className="standard-card__icon" aria-hidden="true">
          <Icon name={item.icon ?? 'shield'} size={20} />
        </span>
      </div>

      <div className="standard-card__content">
        <Heading>{item.title}</Heading>
        <p>{item.text}</p>
      </div>

      <div className="standard-card__proof">
        <Icon name="check" size={15} />
        <span>{item.proof}</span>
      </div>
    </article>
  );
}
