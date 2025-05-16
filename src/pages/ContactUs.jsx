import React from 'react';
import './ContactUs.css';
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src="https://logos.textgiraffe.com/logos/logo-name/Elisha-designstyle-friday-m.png" alt="Elisha Fashion Studio" className="logo" />
      </div>

      <div className="contact-right">
        <h2>Contact us</h2>

        <form className="contact-form">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>E-mail</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea rows="4" placeholder="Your message..."></textarea>

          <div className="form-bottom">
            <button type="submit">Contact us :</button>
            <div className="social-icons">
              <FaFacebookF />
              <FaTiktok />
              <FaInstagram />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
