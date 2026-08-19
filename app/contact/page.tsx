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
      {/* Header — text + illustration side by side */}
      <section className="relative">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pt-12 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <p className="font-mono text-sm font-semibold tracking-widest uppercase text-white/70 mb-4">
                Contact
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
                Have a question or want to collaborate? Fill out the form below.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-40 h-52 md:w-48 md:h-64 lg:w-56 lg:h-72">
                <Image
                  src="/images/illustrations/contact-dev.png"
                  alt="Pixel art illustration of Devdarshan waving"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form — immediately below header */}
      <section>
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-page)] pb-16 pt-0">
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
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/70">
                Prefer email?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
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
