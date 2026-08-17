import { useMemo, useState } from 'react';
import { siteConfig } from '../../config/site';
import { buildWhatsAppUrl } from '../../utils/contact';
import { Icon } from '../../components/ui/Icon';

const initialValues = {
  name: '',
  phone: '',
  appliance: '',
  area: '',
  issue: '',
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!/^\+?[0-9\s()-]{8,18}$/.test(values.phone.trim())) errors.phone = 'Enter a valid phone number.';
  if (!values.appliance.trim()) errors.appliance = 'Choose an appliance.';
  if (!values.area.trim()) errors.area = 'Enter your area.';
  if (!values.issue.trim()) errors.issue = 'Briefly describe the issue.';
  return errors;
}

export function BookingForm({ compact = false, title = 'Request a service visit' }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const fieldIds = useMemo(
    () => ({
      name: `booking-name-${compact ? 'compact' : 'full'}`,
      phone: `booking-phone-${compact ? 'compact' : 'full'}`,
      appliance: `booking-appliance-${compact ? 'compact' : 'full'}`,
      area: `booking-area-${compact ? 'compact' : 'full'}`,
      issue: `booking-issue-${compact ? 'compact' : 'full'}`,
    }),
    [compact],
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = event.currentTarget.querySelector('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    const url = buildWhatsAppUrl(values, siteConfig.whatsappNumber);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className={`booking-form ${compact ? 'booking-form--compact' : ''}`} onSubmit={handleSubmit} noValidate>
      <div className="booking-form__intro">
        <span className="eyebrow">Easy booking</span>
        <h2>{title}</h2>
        <p>{siteConfig.visitFeeText}</p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor={fieldIds.name}>Your name</label>
          <input
            id={fieldIds.name}
            name="name"
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${fieldIds.name}-error` : undefined}
            placeholder="Full name"
          />
          {errors.name && <small id={`${fieldIds.name}-error`}>{errors.name}</small>}
        </div>

        <div className="field">
          <label htmlFor={fieldIds.phone}>Phone number</label>
          <input
            id={fieldIds.phone}
            name="phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={handleChange}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${fieldIds.phone}-error` : undefined}
            placeholder="+91 98xxx xxxxx"
          />
          {errors.phone && <small id={`${fieldIds.phone}-error`}>{errors.phone}</small>}
        </div>

        <div className="field">
          <label htmlFor={fieldIds.appliance}>Appliance</label>
          <select
            id={fieldIds.appliance}
            name="appliance"
            value={values.appliance}
            onChange={handleChange}
            aria-invalid={Boolean(errors.appliance)}
            aria-describedby={errors.appliance ? `${fieldIds.appliance}-error` : undefined}
          >
            <option value="">Select appliance</option>
            <option>Gas stove</option>
            <option>Built-in hob</option>
            <option>Gas cooktop</option>
            <option>Cooking range</option>
            <option>Kitchen chimney / hood</option>
            <option>Commercial appliance</option>
            <option>Other</option>
          </select>
          {errors.appliance && <small id={`${fieldIds.appliance}-error`}>{errors.appliance}</small>}
        </div>

        <div className="field">
          <label htmlFor={fieldIds.area}>Service area</label>
          <input
            id={fieldIds.area}
            name="area"
            value={values.area}
            onChange={handleChange}
            autoComplete="address-level2"
            aria-invalid={Boolean(errors.area)}
            aria-describedby={errors.area ? `${fieldIds.area}-error` : undefined}
            placeholder="Area / locality"
          />
          {errors.area && <small id={`${fieldIds.area}-error`}>{errors.area}</small>}
        </div>

        <div className="field field--wide">
          <label htmlFor={fieldIds.issue}>What is the issue?</label>
          <textarea
            id={fieldIds.issue}
            name="issue"
            value={values.issue}
            onChange={handleChange}
            rows={compact ? 3 : 4}
            aria-invalid={Boolean(errors.issue)}
            aria-describedby={errors.issue ? `${fieldIds.issue}-error` : undefined}
            placeholder="Example: low flame or weak chimney suction"
          />
          {errors.issue && <small id={`${fieldIds.issue}-error`}>{errors.issue}</small>}
        </div>
      </div>

      <button className="button button--primary button--full" type="submit">
        Continue on WhatsApp <Icon name="whatsapp" size={19} />
      </button>
      <p className="form-note">No payment is collected through this form.</p>
    </form>
  );
}
