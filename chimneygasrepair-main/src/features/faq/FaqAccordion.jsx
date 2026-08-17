import { useState } from 'react';

export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <article key={item.question} className={`accordion__item ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
              >
                <span>{item.question}</span>
                <b aria-hidden="true">{isOpen ? '−' : '+'}</b>
              </button>
            </h3>
            <div
              id={panelId}
              className="accordion__answer"
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
            >
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
