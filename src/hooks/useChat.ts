// hooks/useChat.ts
import { useState } from 'react';
import { sendMessageToAPI } from '../api';
import { Message } from '../types';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (text: string) => {
    const userMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);

    const response = await sendMessageToAPI([...messages, userMessage]);
    setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
  };

  return { messages, sendMessage };
};
