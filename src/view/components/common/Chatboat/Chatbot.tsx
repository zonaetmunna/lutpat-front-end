import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";

interface ChatMessage {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [input, setInput] = useState<string>("");
  const [chat, setChat] = useState<ChatMessage[]>([
    {
      text: "Hi, how can I help you today?",
      isBot: true,
    },
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input !== "") {
      setChat([...chat, { text: input, isBot: false }]);
      setInput("");
    }
  };

  const handleBotResponse = () => {
    // Replace this with your bot's logic
    const response = "I'm sorry, I didn't understand that.";
    setChat([...chat, { text: response, isBot: true }]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (input !== "") {
      setChat([...chat, { text: input, isBot: false }]);
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="h-64 overflow-auto">
          {chat.map((message, index) => (
            <ChatMessage
              key={index}
              text={message.text}
              isBot={message.isBot}
            />
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Type your message"
              className="w-full px-4 py-2 text-gray-700 focus:outline-none"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
