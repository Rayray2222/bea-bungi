import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="contact-container">
     
      <button 
        onClick={handleBack} 
        className="back-button"
      >
        &lt; Back
      </button>

      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! If you have any questions, concerns, or suggestions,
        feel free to reach out to us. You can contact us via the following methods:
      </p>
      <ul>
        <li>
          <strong>Email:</strong> support@example.com
        </li>
        <li>
          <strong>Phone:</strong> +123-456-7890
        </li>
        <li>
          <strong>Address:</strong> 1234 Example St, City, Country
        </li>
      </ul>
      <p>
        We aim to respond to all inquiries within 24-48 hours. Thank you for reaching out!
      </p>
    </div>
  );
};

export default Contact;
