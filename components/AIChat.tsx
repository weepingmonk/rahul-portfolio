"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { MessageSquare, X } from "lucide-react";
import { DefaultChatTransport, isTextUIPart, type UIMessage } from "ai";

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter(isTextUIPart)
    .map((part) => part.text)
    .join("");
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const { messages, sendMessage, status, error, clearError } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl hover:scale-110 transition"
      >
        {open ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-28 right-6 z-[9999] w-[380px] rounded-3xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="border-b border-white/10 px-5 py-4">
            <h2 className="text-lg font-semibold text-white">
              AI Marketing Assistant
            </h2>

            <p className="text-xs text-slate-400">
              Ask about ads, ROAS, GA4 & growth
            </p>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto px-5 py-4 space-y-4">
            {messages.length === 0 && (
              <div className="rounded-2xl bg-white/5 p-4 text-sm text-slate-300">
                👋 Hi! Ask me anything about:
                <ul className="mt-2 list-disc pl-5 text-slate-400">
                  <li>Google Ads</li>
                  <li>Amazon PPC</li>
                  <li>GA4 Analytics</li>
                  <li>ROAS Optimization</li>
                </ul>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`rounded-2xl p-3 text-sm ${
                  m.role === "user"
                    ? "bg-orange-500 text-white ml-auto max-w-[80%]"
                    : "bg-white/5 text-slate-300 max-w-[80%]"
                }`}
              >
                {getMessageText(m as UIMessage)}
              </div>
            ))}

            {status === "error" && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">
                {error?.message ?? "Chatbot error. Please try again."}
                <button
                  type="button"
                  onClick={clearError}
                  className="ml-3 underline underline-offset-2 text-red-100 hover:text-white"
                >
                  Dismiss
                </button>
              </div>
            )}

            {isLoading && (
              <div className="text-sm text-slate-400">
                AI is typing...
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const trimmed = text.trim();
              if (!trimmed || isLoading) return;
              if (status === "error") clearError();
              sendMessage({ text: trimmed });
              setText("");
            }}
            className="border-t border-white/10 p-4 flex gap-3"
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="rounded-xl bg-orange-500 px-5 py-3 text-white hover:bg-orange-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
