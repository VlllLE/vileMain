import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'email',
      value: 'm@vile.cx',
      link: 'mailto:m@vile.cx'
    },
    {
      icon: '📍',
      title: 'location',
      value: 'glasgow, scotland',
      link: '#'
    }
  ];

  const socialLinks = [
    { name: 'github', icon: '🐙', url: 'https://github.com/VlllLE' },
    { name: 'twitch', icon: '📺', url: 'https://twitch.tv/benzos' },
    { name: 'bluesky', icon: '🦋' , url: 'https://bsky.app/profile/51m.bsky.social' },
    { name: 'soundcloud', icon: '🌐', url: 'https://soundcloud.com/500grams' }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">reach out</h2>
        <div className="contact-content">
          <div className="contact-form">
            <h3>msg me</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                send message
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="contact-details">
              <h3>find me here</h3>
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-item">
                  <span className="contact-icon">{info.icon}</span>
                  <div>
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="social-links">
              <h3>or here</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">{social.icon}</span>
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
