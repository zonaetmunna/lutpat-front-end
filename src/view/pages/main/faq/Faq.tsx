import React, { useState } from "react";

interface Question {
  question: string;
  answer: string;
}
const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions: Question[] = [
    {
      question: "What is your return policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const handleClick = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h1>
        {questions.map((question: Question, index: number) => (
          <div key={index}>
            <button
              className="w-full text-left p-4 font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
              onClick={() => handleClick(index)}
            >
              <span className="flex items-center justify-between">
                <span>{question.question}</span>
                <svg
                  className={`w-5 h-5 ${
                    activeQuestion === index ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 14.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`${
                activeQuestion === index ? "block" : "hidden"
              } bg-gray-100 p-4 mt-2 rounded-md`}
            >
              <p className="text-gray-800">{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
