"use client";

import { useState } from "react";

export default function LeadQualification() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const [formData, setFormData] = useState({
    business: "",
    adSpend: "",
    goals: "",
  });

  const handleSubmit = async () => {
    setLoading(true);

    const response = await fetch("/api/qualify", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    const data = await response.json();

    setResult(data.result);

    setLoading(false);
  };

  return (
    <section
      id="ai-audit"
      className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        AI Growth Audit
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Business Type"
          className="w-full rounded-xl bg-white/5 p-4 text-white"
          onChange={(e) =>
            setFormData({
              ...formData,
              business: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Monthly Ad Spend"
          className="w-full rounded-xl bg-white/5 p-4 text-white"
          onChange={(e) =>
            setFormData({
              ...formData,
              adSpend: e.target.value,
            })
          }
        />

        <textarea
          placeholder="What are your growth goals?"
          className="w-full rounded-xl bg-white/5 p-4 text-white"
          rows={5}
          onChange={(e) =>
            setFormData({
              ...formData,
              goals: e.target.value,
            })
          }
        />

        <button
          onClick={handleSubmit}
          className="rounded-xl bg-orange-500 px-6 py-4 text-white"
        >
          {loading ? "Analyzing..." : "Get AI Audit"}
        </button>

        {result && (
          <div className="rounded-2xl bg-white/5 p-5 text-slate-300 whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
      </section>
  );
}