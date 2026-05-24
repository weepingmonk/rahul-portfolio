"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link2, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/[0.03] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Scale Your Brand Together"
          description="Ready to improve ROAS, lower CPA, or automate your reporting? Drop a message and let's talk growth."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <GlassCard className="p-6" glow>
              <h3 className="font-semibold text-white mb-6">Get in touch</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-white hover:text-orange-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                      className="text-sm text-white hover:text-orange-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm text-white">{personalInfo.location}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Link2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">LinkedIn</p>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-orange-400 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                <p className="text-xs font-medium text-emerald-400">
                  {personalInfo.availability}
                </p>
              </div>
            </GlassCard>

            {/* Quick metrics reminder */}
            <GlassCard className="p-5">
              <p className="text-xs text-slate-500 mb-3">What I deliver</p>
              <div className="space-y-2">
                {["20–40% ROAS growth", "CPA optimization", "ACOS < 20%", "40% automation gains"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 md:p-8" glow>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white">Message sent!</h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-slate-400 mb-2">
                      Company / Brand
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-slate-400 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0a1628]">Select a service</option>
                      <option value="google-ads" className="bg-[#0a1628]">Google Ads Management</option>
                      <option value="amazon-ppc" className="bg-[#0a1628]">Amazon PPC Optimization</option>
                      <option value="amazon-dsp" className="bg-[#0a1628]">Amazon DSP Support</option>
                      <option value="ga4" className="bg-[#0a1628]">GA4 Analytics</option>
                      <option value="ai" className="bg-[#0a1628]">AI Workflow Automation</option>
                      <option value="tracking" className="bg-[#0a1628]">Conversion Tracking</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your brand, goals, and current ad spend..."
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-colors"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto cursor-pointer">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
