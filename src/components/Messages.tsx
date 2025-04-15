// components/Messages.tsx
import { Message } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useRef } from 'react';

export const Messages = ({ messages }: { messages: Message[] }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="overflow-y-auto flex-1 p-4 scrollbar-hide">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`my-2 p-3 rounded ${
            msg.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'
          }`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};