const iconPaths = {
  arrow: ['M5 12h14', 'm13 6 6 6-6 6'],
  phone: [
    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z',
  ],
  clock: ['M12 7v5l3.5 2'],
  pin: ['M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z'],
  shield: ['M12 3 20 6v5c0 5.2-3.4 8.5-8 10-4.6-1.5-8-4.8-8-10V6l8-3Z', 'm8.7 12 2.1 2.1 4.7-4.7'],
  check: ['m5 12 4 4L19 6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['m6 6 12 12', 'M18 6 6 18'],
  spark: ['m13 2-2 8h6l-7 12 2-9H6l7-11Z'],
  mail: ['m4 7 8 6 8-6'],
  wrench: ['M14.7 6.3a4 4 0 0 0-5.1 5.1L3 18l3 3 6.6-6.6a4 4 0 0 0 5.1-5.1l-2.5 2.5-3-3 2.5-2.5Z'],
  star: ['m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L12 3Z'],
  whatsapp: [
    'M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z',
    'M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.8 1.4 1.9 2.5 3.3 3.2.3.2.5.1.7-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .4-.2 1.3-.9 1.8-.6.5-1.4.8-2.4.6-1.1-.2-2.7-.7-4.6-2.4-1.6-1.4-2.7-3.2-3-4.3-.3-1-.1-2 .3-2.6Z',
  ],
};

export function Icon({ name = 'arrow', size = 20, className = '' }) {
  const paths = iconPaths[name] ?? iconPaths.arrow;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === 'clock' && <circle cx="12" cy="12" r="9" />}
      {name === 'pin' && <circle cx="12" cy="10" r="2.5" />}
      {name === 'mail' && <rect x="3" y="5" width="18" height="14" rx="2" />}
      {paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
