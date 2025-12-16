import React from 'react';
import { FileText } from 'lucide-react';

export default function RecentMessages() {
  const messages = [
    {
      id: 1,
      sender: 'Jenny Rio.',
      date: 'Sep 24, 2025',
      subject: 'Work inquiry from google.',
      preview: "Hello, This is Jenny from google. We'r the largest online platform offer...",
      hasDocument: true,
    },
    {
      id: 2,
      sender: 'Jenny Rio.',
      date: 'Sep 24, 2025',
      subject: 'Work inquiry from google.',
      preview: "Hello, This is Jenny from google. We'r the largest online platform offer...",
      hasDocument: false,
    },
    {
      id: 3,
      sender: 'Jenny Rio.',
      date: 'Sep 24, 2025',
      subject: 'Work inquiry from google.',
      preview: "Hello, This is Jenny from google. We'r the largest online platform offer...",
      hasDocument: false,
    },
     {
      id: 4,
      sender: 'John Dw.',
      date: 'jan 14, 2025',
      subject: 'Work inquiry from google.',
      preview: "Hello, This is Jenny from google. We'r the largest online platform offer...",
      hasDocument: false,
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className=" bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Recent Message
        </h2>

        <div className="space-y-4">
          {messages.map((message, index) => (
            <div 
              key={message.id}
              className={`p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer ${
                index !== messages.length - 1 ? 'mb-4' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <p className="text-sm text-gray-600">{message.sender}</p>
                <p className="text-sm text-gray-500">{message.date}</p>
              </div>

              {/* Subject */}
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {message.subject}
              </h3>

              {/* Preview */}
              <p className="text-sm text-gray-600 mb-3">
                {message.preview}
              </p>

              {/* Document Badge */}
              {message.hasDocument && (
                <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <FileText className="w-4 h-4" />
                  <span>Document</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}