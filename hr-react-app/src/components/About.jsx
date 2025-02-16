import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation to other pages

const About = () => {
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Back button functionality
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="about-container">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="back-button"
      >
        &lt; Back
      </button>

      {/* About Content */}
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a passionate team dedicated to providing the best user experiences
        and innovative solutions. Our mission is to create products that make a positive impact on people's lives.
      </p>
      <p>
        Our team is made up of experienced professionals who are experts in design, development, and customer service.
        We aim to continually improve and evolve in order to meet the ever-changing needs of our users.
      </p>
      <p>
        Thank you for visiting our page! We look forward to connecting with you.
      </p>
    </div>
  );
};

export default About;
