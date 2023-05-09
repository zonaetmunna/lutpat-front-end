import React from "react";
interface Props {
  text: string;
  isBot: boolean;
}
const ChatMessage = ({ text, isBot }: Props) => {
  return (
    <div className={`my-2 ${isBot ? "text-right" : "text-left"}`}>
      <span
        className={`inline-block rounded-lg px-3 py-1 ${
          isBot ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default ChatMessage;
