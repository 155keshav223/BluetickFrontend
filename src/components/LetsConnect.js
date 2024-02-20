import React from 'react';
import './LetsConnect.css';

const LetsConnect = () => {
  return (
    <div className="lets-connect-container">
      <h1>Let’s connect</h1>
      <form className="contact-form">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="contactNumber">Contact Number</label>
        <input type="tel" id="contactNumber" name="contactNumber" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default LetsConnect;
