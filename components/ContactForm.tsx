"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contactSection } from "@/constants/content";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="label-md mb-2 block text-on-surface-variant">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-high px-4 py-3 text-on-surface outline-none transition-all focus:border-gold-accent focus:ring-1 focus:ring-gold-accent"
        />
      </div>
      <div>
        <label htmlFor="company" className="label-md mb-2 block text-on-surface-variant">
          Company
        </label>
        <input
          id="company"
          name="company"
          placeholder="Organization or company name"
          className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-high px-4 py-3 text-on-surface outline-none transition-all focus:border-gold-accent focus:ring-1 focus:ring-gold-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="label-md mb-2 block text-on-surface-variant">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="email@company.com"
          className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-high px-4 py-3 text-on-surface outline-none transition-all focus:border-gold-accent focus:ring-1 focus:ring-gold-accent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="label-md mb-2 block text-on-surface-variant">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+234 ..."
          className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-high px-4 py-3 text-on-surface outline-none transition-all focus:border-gold-accent focus:ring-1 focus:ring-gold-accent"
        />
      </div>
      <div>
        <label htmlFor="service" className="label-md mb-2 block text-on-surface-variant">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-high px-4 py-3 text-on-surface outline-none transition-all focus:border-gold-accent focus:ring-1 focus:ring-gold-accent"
        >
          <option value="">Select a service</option>
          {contactSection.serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="label-md mb-2 block text-on-surface-variant">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Describe your security, intelligence, or protection requirements..."
          className="w-full resize-none rounded-xl border border-outline-variant/30 bg-surface-container-high px-4 py-3 text-on-surface outline-none transition-all focus:border-gold-accent focus:ring-1 focus:ring-gold-accent"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold-accent py-4 label-md text-background transition-all hover:scale-[1.01] gold-glow-hover disabled:opacity-60"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : status === "success" ? (
          "Message Sent — We'll Be In Touch"
        ) : (
          <>
            {contactSection.formCta} <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
