import React, { useState } from 'react';
import StudentNavbar from '../../components/navbar';

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle changes when an option is selected
  const handleOptionChange = (question, option) => {
    setAnswers({ ...answers, [question]: option });
  };

  // Check if the form is complete
  const isFormComplete = Object.keys(answers).length === 5;

  // Handle quiz submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    console.log("Submitted Answers:", answers);
    alert("Quiz Submitted Successfully!");
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <StudentNavbar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Java Full Stack Development Quiz</h1>

        {/* Quiz Form */}
        <form onSubmit={handleSubmit}>
          {/* Question 1 */}
          <div className="mb-6 bg-white p-4 shadow-md rounded-md">
            <h3 className="font-semibold">1. Which of the following is NOT a feature of Java?</h3>
            <ul className="mt-2 space-y-2">
              {[
                "Platform Independent",
                "Object-Oriented",
                "Memory Management",
                "Machine Dependent",
              ].map((option, idx) => (
                <li key={idx}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="question1"
                      value={option}
                      onChange={() => handleOptionChange("question1", option)}
                      checked={answers.question1 === option}
                    />
                    <span>{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Question 2 */}
          <div className="mb-6 bg-white p-4 shadow-md rounded-md">
            <h3 className="font-semibold">2. Which of these is a popular Java-based framework for web applications?</h3>
            <ul className="mt-2 space-y-2">
              {["Django", "Flask", "Spring Boot", "Ruby on Rails"].map((option, idx) => (
                <li key={idx}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="question2"
                      value={option}
                      onChange={() => handleOptionChange("question2", option)}
                      checked={answers.question2 === option}
                    />
                    <span>{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Question 3 */}
          <div className="mb-6 bg-white p-4 shadow-md rounded-md">
            <h3 className="font-semibold">3. Which of the following is used for version control in a full-stack project?</h3>
            <ul className="mt-2 space-y-2">
              {["Maven", "Git", "Docker", "Jenkins"].map((option, idx) => (
                <li key={idx}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="question3"
                      value={option}
                      onChange={() => handleOptionChange("question3", option)}
                      checked={answers.question3 === option}
                    />
                    <span>{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Question 4 */}
          <div className="mb-6 bg-white p-4 shadow-md rounded-md">
            <h3 className="font-semibold">4. In ReactJS, which method is used to update state in a functional component?</h3>
            <ul className="mt-2 space-y-2">
              {["setState", "this.state", "useState", "updateState"].map((option, idx) => (
                <li key={idx}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="question4"
                      value={option}
                      onChange={() => handleOptionChange("question4", option)}
                      checked={answers.question4 === option}
                    />
                    <span>{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Question 5 */}
          <div className="mb-6 bg-white p-4 shadow-md rounded-md">
            <h3 className="font-semibold">5. Which of the following is NOT a JavaScript framework/library?</h3>
            <ul className="mt-2 space-y-2">
              {["React", "Angular", "Vue.js", "Hibernate"].map((option, idx) => (
                <li key={idx}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="question5"
                      value={option}
                      onChange={() => handleOptionChange("question5", option)}
                      checked={answers.question5 === option}
                    />
                    <span>{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormComplete || isSubmitted}
            className={`${
              !isFormComplete || isSubmitted ? "bg-gray-400" : "bg-green-500 hover:bg-green-700"
            } text-white px-4 py-2 rounded-md`}
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizPage;
