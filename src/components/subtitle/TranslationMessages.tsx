
import React from "react";

const TranslationMessages = () => {
  // Mock data for translation messages
  const messages = [
    {
      id: 1,
      type: "info",
      content: "Starting translation batch #1 (subtitles 1-30)",
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: 2,
      type: "processing",
      content: "Processing subtitle 12/30...",
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: 3,
      type: "reasoning",
      content: "The phrase 'took the world by storm' is an idiom meaning something became suddenly popular or controversial. The Chinese equivalent would be '风靡全球'.",
      timestamp: new Date(Date.now() - 180000)
    },
    {
      id: 4,
      type: "translation",
      content: "Subtitle #12 translated: '一年前，这个难以置信的威尔·史密斯说意大利面的视频风靡全球。'",
      timestamp: new Date(Date.now() - 120000)
    },
    {
      id: 5,
      type: "success",
      content: "Batch #1 completed successfully. Translated 30 subtitles.",
      timestamp: new Date(Date.now() - 60000)
    },
    {
      id: 6,
      type: "error",
      content: "API rate limit exceeded. Waiting 10 seconds before retry...",
      timestamp: new Date(Date.now() - 30000)
    },
    {
      id: 7,
      type: "info",
      content: "Starting translation batch #2 (subtitles 31-60)",
      timestamp: new Date()
    }
  ];

  // Function to get message style based on type
  const getMessageStyle = (type: string) => {
    switch (type) {
      case "info":
        return "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800";
      case "processing":
        return "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800";
      case "reasoning":
        return "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800";
      case "translation":
        return "bg-cyan-50 border-cyan-200 dark:bg-cyan-900/20 dark:border-cyan-800";
      case "success":
        return "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800";
      case "error":
        return "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800";
      default:
        return "bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800";
    }
  };

  // Function to format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Translation Messages</h3>
      
      <div className="space-y-3">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`p-3 border rounded-md ${getMessageStyle(message.type)}`}
          >
            <div className="text-xs text-muted-foreground mb-1">
              {formatTime(message.timestamp)}
            </div>
            <div className="text-sm">
              {message.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between text-sm text-muted-foreground mt-4">
        <button className="hover:text-blue-600 transition-colors">
          Clear Messages
        </button>
        <div>
          <span>Batch 2/5</span>
          <button className="ml-2 hover:text-blue-600 transition-colors">
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationMessages;
