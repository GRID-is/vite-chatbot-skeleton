import { Messages } from './components/Messages';
import { UserInput } from './components/UserInput';
import { useChat } from './hooks/useChat';

function App() {
  const { messages, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col w-full max-w-4xl min-w-[600px] h-full">
        <Messages messages={messages} />
        <UserInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;