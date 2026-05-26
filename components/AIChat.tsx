"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hi! I’m Rahul’s AI marketing assistant. Ask me about Google Ads, Amazon PPC, GA4, ROAS optimization, or AI automation.",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.content || "No response from AI.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl hover:scale-110 transition"
      >
        {open ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-28 right-6 z-[9999] flex h-[550px] w-[380px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/95 shadow-2xl backdrop-blur-xl">

          {/* Header */}
          <div className="border-b border-white/10 px-5 py-4">
            <h2 className="text-lg font-semibold text-white">
              AI Marketing Assistant
            </h2>

            <p className="text-xs text-slate-400">
              Ask about growth, ads, analytics & automation
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                  message.role === "user"
                    ? "ml-auto bg-orange-500 text-white"
                    : "bg-white/5 text-slate-300"
                }`}
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="text-sm text-slate-400">
                AI is typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-4">
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask me anything..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="rounded-xl bg-orange-500 px-5 py-3 text-white transition hover:bg-orange-600 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
