import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    
    <footer className="footer-container">
      <div className="left-section">
        <img src="/images/company-logo.png" alt="Company Logo" />
      </div>
      <div className="middle-section">
        <h4>Resources</h4>
        <ul>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="right-section">
        <h4>Products</h4>
        <ul>
          <li>Talk to Code</li>
          <li>InterviewGPT</li>
          <li>PrivacyDOC</li>
          <li>Sales Call Evaluator</li>
        </ul>
        <div className="social-icons">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
