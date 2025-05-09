// src/components/ChatWidget.jsx
export default function ChatWidget() {
    const messages = ["How do I sell my license?", "Is this platform safe?"];
    return (
      <div className="fixed bottom-4 right-4 p-4 shadow rounded bg-white w-64">
        <div className="text-center mx-auto">
        <h4 className="font-bold mb-2">Ask Us</h4>
        <ul className="space-y-2">
          {messages.map((msg, i) => (
            <li key={i} className="bg-gray-100 p-2 rounded cursor-pointer">{msg}</li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
  