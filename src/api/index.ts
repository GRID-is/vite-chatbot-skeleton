// api/index.ts
import { Message } from '../types';

const API_URL = 'http://localhost:8881';

export async function sendMessageToAPI(messages: Message[]): Promise<string> {
  const res = await fetch(`${API_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  const data = await res.json();
  return data.reply;
}