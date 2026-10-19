import { useState, type FormEvent, type ChangeEvent } from 'react';
import { SITE, SOCIAL_LINKS, AVAILABILITY } from '../data/site';
import { isValidEmail } from '../utils/helpers';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const INITIAL_FORM: FormData = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim()) {
      next.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      next.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) next.subject = 'Subject is required';
    if (!formData.message.trim()) next.message = 'Message is required';
    return next;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleMailtoFallback = () => {
    const body = encodeURIComponent(
      `From: ${formData.name} <${formData.email}>\n\n${formData.message}`,
    );
    const subject = encodeURIComponent(formData.subject);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    setStatusMessage('Your email client should open — if not, email me directly.');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!formspreeEndpoint) {
      handleMailtoFallback();
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Message sent — I\'ll get back to you soon.');
        setFormData(INITIAL_FORM);
        setErrors({});
      } else {
        setStatus('error');
        setStatusMessage('Something went wrong. Try emailing me directly.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Try emailing me directly.');
    }
  };

  const contactLinks = [
    { icon: '', title: SITE.email, link: `mailto:${SITE.email}` },
    { icon: '', title: 'vile.cx', link: SITE.url },
    { icon: '', title: 'Pleiades', link: SITE.pleiades },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className="section-title">
          get in touch
        </h2>

        <p className="availability-statement">{AVAILABILITY}</p>

        <div className="contact-content">
          <div className="contact-form">
            <h3>Send a message</h3>
            {!formspreeEndpoint && (
              <p className="form-notice" role="status">
                No form endpoint configured — submitting will open your email client.
              </p>
            )}
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  autoComplete="name"
                />
                {errors.name && (
                  <span id="name-error" className="form-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  autoComplete="email"
                />
                {errors.email && (
                  <span id="email-error" className="form-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <span id="subject-error" className="form-error" role="alert">
                    {errors.subject}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="form-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Honeypot for spam protection */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'loading'}
                aria-busy={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'success' && (
                <p className="form-feedback form-feedback-success" role="status">
                  {statusMessage}
                </p>
              )}
              {status === 'error' && (
                <p className="form-feedback form-feedback-error" role="alert">
                  {statusMessage}{' '}
                  <a href={`mailto:${SITE.email}`}>Email me directly</a>
                </p>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-details">
              <h3>Direct links</h3>
              {contactLinks.map((info) =>
                info.link ? (
                  <a key={info.title} href={info.link} className="contact-item">
                    <span className="contact-icon" aria-hidden="true">
                      {info.icon}
                    </span>
                    <div>
                      <h4>{info.title}</h4>
                    </div>
                  </a>
                ) : (
                  <div key={info.title} className="contact-item">
                    <span className="contact-icon" aria-hidden="true">
                      {info.icon}
                    </span>
                    <div>
                      <h4>{info.title}</h4>
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="social-links">
              <h3>Elsewhere</h3>
              <div className="social-grid">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon" aria-hidden="true">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
