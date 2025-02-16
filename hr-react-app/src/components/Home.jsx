import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Home() {
  const navigate = useNavigate(); // Hook to navigate to the dashboard

  // Function to navigate back to the dashboard
  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to My Home Page</h1>
      </header>

      <section className="content">
        <h5>Home</h5>
        <p>This is a simple home page layout.</p>
      </section>

      {/* Back to Dashboard Button */}
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

export default Home;
