import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header fade-in">
          <h2 className="section__subtitle">Get in touch</h2>
          <h3 className="section__title">Contact</h3>
          <p className="section__description">
            Have a project in mind? Want to know more about my work?
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__form-wrapper slide-right">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Type your message here..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn--primary btn--full">
                Send Message
              </button>
            </form>

            <div className="form-info">
              <p>
                <span className="info-icon"><FaLock /></span>
                Your information is safe. 
                I don't share your data with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
