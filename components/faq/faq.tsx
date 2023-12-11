import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className={`cursor-pointer flex justify-between items-center bg-gray-200 p-4 rounded-md transition ${
          isOpen ? 'mb-2' : 'mb-0'
        }`}
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <div
          className={`transform transition ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          ▼
        </div>
      </div>
      {isOpen && (
        <div className="p-4 bg-white rounded-md shadow-md">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
