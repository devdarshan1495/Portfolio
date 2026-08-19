"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Failed to send message. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="bg-pg-contact min-h-full">
      {/* Header + Illustration */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pt-12 md:pt-16 pb-8 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
            <div>
              <p className="font-mono text-sm tracking-widest uppercase text-charcoal/50 mb-4">
                Contact
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-lg">
                Have a question or want to collaborate? Fill out the form below.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-80 lg:h-[420px]">
                <Image
                  src="/images/illustrations/contact-dev.png"
                  alt="Pixel art illustration of Devdarshan waving"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pb-16">
          <div className="max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-sm font-semibold tracking-wide uppercase text-charcoal mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-charcoal/15 rounded-lg text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-charcoal/20 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-sm font-semibold tracking-wide uppercase text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-charcoal/15 rounded-lg text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-charcoal/20 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block font-mono text-sm font-semibold tracking-wide uppercase text-charcoal mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-charcoal/15 rounded-lg text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-charcoal/20 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-sm font-semibold tracking-wide uppercase text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-charcoal/15 rounded-lg text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-charcoal/20 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-6 py-3 bg-charcoal text-cream font-mono text-sm tracking-wide rounded-lg hover:bg-charcoal/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
              {status === "success" && (
                <p className="text-sm text-green-700 bg-green-50 px-4 py-3 rounded-lg">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-700 bg-red-50 px-4 py-3 rounded-lg">
                  {errorMsg}
                </p>
              )}
            </form>

            {/* Prefer email fallback */}
            <div className="mt-8 pt-8 border-t border-charcoal/10">
              <p className="text-sm text-charcoal/60">
                Prefer email?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-charcoal underline underline-offset-2 hover:text-charcoal/70 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
