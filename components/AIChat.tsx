"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messagesEndRef]);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `👋 Welcome!
  
  I can help you with:
  
  • Google Ads Strategy
  • Amazon PPC Optimization
  • GA4 Analytics
  • ROAS Improvement
  • AI Marketing Automation
  
  Ask me a question or request a free growth recommendation.`,
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

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
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl hover:scale-105 active:scale-95"
      >
        {open ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Chat Popup */}
      {open && (
        <div
       className="fixed bottom-24 right-4 left-4 md:left-auto md:right-6 z-[9999] flex h-[70vh] md:h-[550px] w-auto md:w-[380px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/95 shadow-2xl backdrop-blur-xl"
       >
       

          {/* Header */}
          <div className="border-b border-white/10 px-5 py-4">
            <h2 className="text-lg font-semibold text-white">
              AI Marketing Assistant
            </h2>

            <p className="text-xs text-slate-400">
              Ask about growth, ads, analytics & automation
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
  {[
    "How can I improve ROAS?",
    "Audit my Google Ads strategy",
    "How do I reduce CPA?",
  ].map((question) => (
    <button
      key={question}
      onClick={() => setInput(question)}
      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 hover:bg-white/10"
    >
      {question}
    </button>
  ))}
</div>
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

  {messages.length > 4 && (
    <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-3">
      <p className="text-xs text-slate-300">
        Need a detailed growth strategy?
      </p>

      <a
        href="#ai-audit"
        className="mt-2 inline-block text-sm font-medium text-orange-400"
      >
        Get Free AI Growth Audit →
      </a>
    </div>
  )}

  {loading && (
    <div className="text-sm text-slate-400">
      AI is typing...
    </div>
  )}

  <div ref={messagesEndRef} />
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
