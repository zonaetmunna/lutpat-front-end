import axios from "axios";
import React, { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

//
const Chatbot = () => {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");

  const fetchData = async (input: string) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          prompt: `Complete this sentence: "${input}"`,
          model: "text-davinci-003",
          max_tokens: 50,
          n: 1,
          stop: ".",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
        }
      );

      return response.data.choices[0].text;
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong");
    }
  };

  const handleClick = async () => {
    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
      setCompletedSentence("Error: Failed to complete sentence");
    }
  };

  return (
    <div className="container mx-auto py-8 w-1/3">
      <h2>just learning purpose this section</h2>
      <h2 className="text-2xl font-bold mb-4">
        Tell me something, and I'll tell you more
      </h2>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className="w-full h-32 p-2 mb-4 border border-gray-300 rounded"
        placeholder="Type in some words and I'll finish the rest..."
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Complete Sentence
      </button>
      {completedSentence && (
        <p className="mt-4">
          Completed sentence:{" "}
          <span className="font-bold">{completedSentence}</span>
        </p>
      )}
    </div>
  );
};

export default Chatbot;
