// src/Pages/Landing.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();  // Hook to navigate to other routes

  const handleAttemptQuiz = () => {
    navigate('/quiz');  // Navigate to the Quiz page when the button is clicked
  };

  return (
    <div>
      <h1>Welcome to the Quiz Application</h1>
      <button onClick={handleAttemptQuiz}>Attempt Quiz</button>
    </div>
  );
};

export default LandingPage;
