export function digitsOnly(value = '') {
  return String(value).replace(/\D/g, '');
}

export function buildWhatsAppUrl(fields, whatsappNumber) {
  const number = digitsOnly(whatsappNumber);
  const lines = [
    'Hello, I would like to book a gas appliance service visit.',
    '',
    `Name: ${fields.name?.trim() || 'Not provided'}`,
    `Phone: ${fields.phone?.trim() || 'Not provided'}`,
    `Appliance: ${fields.appliance?.trim() || 'Not provided'}`,
    `Area: ${fields.area?.trim() || 'Not provided'}`,
    `Issue: ${fields.issue?.trim() || 'Not provided'}`,
  ];

  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`;
}
