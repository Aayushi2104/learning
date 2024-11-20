// src/QuizComponent.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  { id: 1, question: "What is React?", options: ["A library", "A framework", "A language", "A tool"], answer: "A library" },
  { id: 2, question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
  { id: 3, question: "What is JSX?", options: ["JavaScript XML", "JavaScript Extension", "Java Syntax Extension", "JavaScript Express"], answer: "JavaScript XML" },
  { id: 4, question: "Who invented JavaScript?", options: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Bill Gates"], answer: "Brendan Eich" },
  { id: 5, question: "What is a hook in React?", options: ["A lifecycle method", "A special function", "A type of component", "A CSS property"], answer: "A special function" },
  { id: 6, question: "Which company developed React?", options: ["Google", "Facebook", "Microsoft", "Twitter"], answer: "Facebook" },
  { id: 7, question: "What is Babel used for?", options: ["Styling", "Compiling JavaScript", "Creating hooks", "Building UI"], answer: "Compiling JavaScript" },
  { id: 8, question: "What does npm stand for?", options: ["Node Package Manager", "New Programming Model", "Network Package Manager", "None"], answer: "Node Package Manager" },
  { id: 9, question: "What is the command to create a React app?", options: ["npm create-react-app", "npm start-react-app", "react-app start", "react new app"], answer: "npm create-react-app" },
  { id: 10, question: "Which method is used to update state in React?", options: ["updateState", "setState", "changeState", "modifyState"], answer: "setState" },
];

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const containerVariants = {
    initial: { opacity: 0, scale: 0.5 }, // Start scaled down and invisible
    enter: { opacity: 1, scale: 1 }, // Fully visible and normal size
    exit: { opacity: 0, scale: 0.5 }, // Fade out and scale down
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-900 text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-lg w-full text-center">
        <AnimatePresence>
          {showScore ? (
            <motion.div
              key="score"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={containerVariants}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-blue-400"
            >
              You scored {score} out of {questions.length}!
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestion}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={containerVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</div>
              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg"
                    onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizComponent;
