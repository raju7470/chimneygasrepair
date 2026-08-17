import { useEffect, useRef } from 'react';

/**
 * Reveal — fade-in-up animation triggered by IntersectionObserver.
 *
 * Props:
 *   eager  {boolean} — skip invisible start state for above-fold critical content
 *                      (prevents CLS/LCP penalty on hero elements)
 *   delay  {number}  — animation delay in ms (ignored when eager=true)
 *   as     {string}  — HTML tag to render
 */
export function Reveal({ children, className = '', delay = 0, as: Component = 'div', eager = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Eager mode: skip the animation — content is visible from the start.
    if (eager) {
      node.classList.add('is-visible');
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <Component
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={eager ? undefined : { '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
