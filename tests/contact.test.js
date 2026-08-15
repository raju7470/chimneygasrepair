import test from 'node:test';
import assert from 'node:assert/strict';
import { buildWhatsAppUrl, digitsOnly } from '../src/utils/contact.js';

test('digitsOnly normalizes formatted phone numbers', () => {
  assert.equal(digitsOnly('+91 98765-43210'), '919876543210');
});

test('buildWhatsAppUrl creates a safe encoded booking message', () => {
  const url = buildWhatsAppUrl(
    {
      name: 'Asha',
      phone: '+91 90000 00000',
      appliance: 'Gas stove',
      area: 'Central',
      issue: 'Low yellow flame',
    },
    '+91 98765 43210',
  );

  assert.ok(url.startsWith('https://wa.me/919876543210?text='));
  assert.match(decodeURIComponent(url), /Name: Asha/);
  assert.match(decodeURIComponent(url), /Issue: Low yellow flame/);
});
