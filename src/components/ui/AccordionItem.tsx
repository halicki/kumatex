"use client";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <button onClick={onToggle} className="flex w-full items-center justify-between p-5 text-left text-lg font-medium text-dark hover:bg-gray-50 transition-colors">
        {question}
        <span className="ml-4 text-primary text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
