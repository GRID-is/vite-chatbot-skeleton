// components/Messages.tsx
import { Message } from '../types';

export const Messages = ({ messages }: { messages: Message[] }) => (
  <div className="overflow-y-auto flex-1 p-4 scrollbar-hide">
    {messages.map((msg, idx) => (
      <div
        key={idx}
        className={`my-2 p-3 rounded ${
          msg.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'
        }`}
      >
        {msg.content}
      </div>
    ))}
  </div>
);