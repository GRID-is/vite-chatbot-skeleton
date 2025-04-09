// components/UserInput.tsx
import { useState } from 'react';

export const UserInput = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-5 flex">
      <input
        className="flex-1 border-none rounded px-3 py-2 mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="Type a message..."
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};