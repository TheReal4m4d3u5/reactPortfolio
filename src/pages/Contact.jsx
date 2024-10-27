import React, { useState }  from 'react';
import '../../contactSytles.css';


function Contact() {

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



  return (
    <div className="contact-page">
      <div className="contact-heading">
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to get in touch, please fill out the form below.</p>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            onBlur={(e) => handleBlur('name', e.target.value)}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onBlur={(e) => handleBlur('email', e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Enter your message"
            onBlur={(e) => handleBlur('message', e.target.value)}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;