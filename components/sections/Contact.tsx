"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Link2,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn, toAbsoluteUrl } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/30 disabled:cursor-not-allowed disabled:opacity-50";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(personalInfo.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const message =
          (data && typeof data.error === "string" && data.error) ||
          (Array.isArray(data?.errors) && data.errors[0]?.message) ||
          "Something went wrong. Please try again.";
        setErrorMessage(message);
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
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
                      className="text-sm text-white hover:text-orange-400 transition-colors break-all"
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
                      href={toAbsoluteUrl(personalInfo.linkedin)}
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

            <GlassCard className="p-5">
              <p className="text-xs text-slate-500 mb-3">What I deliver</p>
              <div className="space-y-2">
                {[
                  "20–40% ROAS growth",
                  "CPA optimization",
                  "ACOS < 20%",
                  "40% automation gains",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                    {item}
                  </div>
                ))}
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
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center justify-center py-12 sm:py-16 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircle className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      Message sent successfully!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-slate-400 leading-relaxed">
                      Thanks for reaching out. I&apos;ve received your message and
                      will get back to you within 24 hours.
                    </p>
                    <Button
                      variant="secondary"
                      size="md"
                      className="mt-8"
                      onClick={resetForm}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-slate-300"
                        >
                          Full Name <span className="text-orange-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          disabled={status === "loading"}
                          placeholder="Rahul Kumar"
                          className={inputClassName}
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-slate-300"
                        >
                          Email Address{" "}
                          <span className="text-orange-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          disabled={status === "loading"}
                          placeholder="you@company.com"
                          className={inputClassName}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Message <span className="text-orange-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        disabled={status === "loading"}
                        placeholder="Tell me about your brand, goals, and current ad spend..."
                        className={cn(inputClassName, "resize-none min-h-[140px]")}
                      />
                    </div>

                    <AnimatePresence>
                      {status === "error" && errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          role="alert"
                          aria-live="assertive"
                          className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3"
                        >
                          <AlertCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                          <p className="text-sm text-red-300">{errorMessage}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
