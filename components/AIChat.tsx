"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function AIChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-2xl transition-transform hover:scale-110"
      >
        {open ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Popup Chat Window */}
      {open && (
        <div className="fixed bottom-28 right-6 z-[9999] w-[380px] rounded-3xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <h2 className="text-lg font-semibold text-white">
                AI Marketing Assistant
              </h2>
              <p className="text-xs text-slate-400">
                Ask about ads, ROAS, GA4 & growth
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto px-5 py-4 space-y-4">
            <div className="rounded-2xl bg-white/5 p-4 text-sm text-slate-300">
              👋 Hi! I’m Rahul’s AI assistant.

              <br />
              <br />

              Ask me about:
              <ul className="mt-2 list-disc pl-5 text-slate-400">
                <li>Google Ads</li>
                <li>Amazon PPC</li>
                <li>GA4 Analytics</li>
                <li>ROAS optimization</li>
                <li>AI automation</li>
              </ul>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />

              <button className="rounded-xl bg-orange-500 px-5 py-3 text-white hover:bg-orange-600 transition">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
