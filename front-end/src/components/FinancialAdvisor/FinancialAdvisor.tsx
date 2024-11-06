/**
 * This code was generated by Builder.io
 */
"use client";
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export interface Message {
  text: string;
  isUser: boolean;
}

const FinancialAdvisor: React.FC<{ visible: boolean, handleCloseAdvisor: any }> = ({ visible, handleCloseAdvisor }) => {
  const [messages, setMessages] = useState<Message[]>([]); // Message list state

  // Function to add a new message
  const addMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div
      className={`absolute top-0 left-full h-screen w-80 bg-zinc-800 shadow-lg 
        transform duration-300 ease-in-out
        ${visible ? 'translate-x-0 opacity-100 z-10' : '-translate-x-full opacity-0 pointer-events-none z-10'
        }`}
    >
      <main className="flex flex-col mx-auto w-full h-full rounded-none max-w-[480px] ">
        <section className="flex flex-col w-full h-full rounded-none shadow-sm">
          <header className="flex flex-col w-full text-white rounded-none pt-5
        bg-gradient-to-r from-gradients-green-start to-gradients-green-end">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0615e85ede486eec0d6790357dc27201b9481754705d0d688d75e3564cb8fdf2?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
              alt=""
              className="object-contain self-end mr-8 w-3.5 aspect-square"
              onClick={handleCloseAdvisor}
            />
            <div className="flex flex-col items-start px-6 pt-12 pb-8 w-full">
              <h1 className="text-2xl font-bold">AI Financial Advisor</h1>
              <p className="mt-6 text-sm leading-6">
                Ask your Hourglass advisor a question by typing into the chat box
                below.
              </p>
            </div>
          </header>
          <div className="flex flex-col items-start space-between px-8 mt-8 w-full text-sm text-black">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {(messages.some((message) => message.isUser === false)) && (<button className="btn">
              Go to Dashboard
            </button>)}
          </div>
        </section>
        <ChatInput onSendMessage={addMessage} />
      </main>
    </div>
  );
};

export default FinancialAdvisor;