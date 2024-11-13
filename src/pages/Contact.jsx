import React, { useState } from 'react';
import '../styles/contactSytles.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',  // Updated key to match the input name attribute
    from_email: '', // Updated key to match the input name attribute
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleBlur = (field, value) => {
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: 'This field is required',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kg0h8nr', 'template_xwxts6q', e.target, 'oJYn056XuORmYfCO8')
      .then((result) => {
        alert("Message Sent Successfully!");
        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
      }, (error) => {
        alert("An error occurred, please try again.");
      });
  };

  return (
    <div className="contact-page">
      <section className="contact-page-content">
        <div className="contact-heading">
          <h2>Contact Me</h2>
          <p>If you have any questions or would like to get in touch, please fill out the form below.</p>
        </div>

        <form className='contactForm' onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name', formData.name)}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <input
            type="email"
            name="from_email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email', formData.email)}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message', formData.message)}
            required
          />
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;