"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  { q: "How long does it take to build a website?", a: "It depends on the scope. A Starter website typically takes 2–3 weeks. A Growth project runs 4–6 weeks. Full-stack Scale projects range from 8–16 weeks. We always agree on a timeline before starting and stick to it.", cat: "process" },
  { q: "What do you need from me to get started?", a: "Just a clear idea of what you want to build, your target audience, and any examples you like. We handle the rest — design, tech decisions, hosting setup, and deployment. A discovery call is always the first step.", cat: "process" },
  { q: "Do you offer payment plans?", a: "Yes. We typically work on a 50% upfront, 50% on delivery basis. For larger Scale projects we can split into 3 milestones. We accept bank transfer, Stripe, and PayPal. Get in touch to discuss what works for you.", cat: "pricing" },
  { q: "Are there any hidden fees?", a: "Never. Our quotes are fixed-price and cover everything agreed in scope. If you request additional features mid-project, we quote those separately before starting them. No surprises on the final invoice.", cat: "pricing" },
  { q: "What technologies do you use?", a: "Our primary stack is Next.js, React, Tailwind CSS for frontend. For backends we use Node.js, Python, PostgreSQL, and Supabase. Mobile apps are built in React Native. We pick the best tool for each project, not the trendiest one.", cat: "tech" },
  { q: "Will I be able to edit the website myself after launch?", a: "Absolutely. We integrate a CMS (like Sanity or Contentful) so you can edit text, images, and blog posts without touching code. We also provide a short handover session and written documentation.", cat: "tech" },
  { q: "What happens after the project is launched?", a: "Every project includes a free support period (30, 90, or 180 days depending on your plan) where we fix any bugs and make minor adjustments at no extra charge. After that, we offer flexible monthly retainer packages.", cat: "support" },
  { q: "Do you work with clients outside your country?", a: "Yes — we are a fully remote team and have worked with clients in 18+ countries. We communicate via Slack and schedule calls around your timezone. Distance has never been a problem for us.", cat: "support" },
];

const cats = ["all", "process", "pricing", "tech", "support"];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCat, setActiveCat] = useState("all");

  const filtered = faqs.filter(f => activeCat === "all" || f.cat === activeCat);

  return (
    <section id="faq" style={{ padding: "6rem 5%", background: "var(--black)" }}>
      <div style={{ textAlign: "center" }}>
        <Reveal><span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B7BFF" }}>FAQ</span></Reveal>
        <Reveal delay={0.1}><h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0.5rem 0" }}>Questions We Get Asked</h2></Reveal>
        <Reveal delay={0.2}><p style={{ color: "#6B7590", maxWidth: 520, margin: "0 auto" }}>Everything you need to know before working with us.</p></Reveal>
      </div>

      {/* Category pills */}
      <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap", margin: "2rem 0 2.5rem" }}>
        {cats.map(c => (
          <button key={c} onClick={() => { setActiveCat(c); setOpenIndex(null); }} style={{
            padding: "0.4rem 1rem", borderRadius: 999, cursor: "pointer",
            fontFamily: "var(--font-space)", fontSize: "0.8rem", fontWeight: 600,
            textTransform: "capitalize", transition: "all 0.2s",
            background: activeCat === c ? "rgba(59,123,255,0.18)" : "var(--card)",
            border: `1px solid ${activeCat === c ? "#3B7BFF" : "#1E2330"}`,
            color: activeCat === c ? "#3B7BFF" : "#6B7590",
          }}>{c}</button>
        ))}
      </div>

      {/* Accordion */}
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {filtered.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={f.q} delay={i * 0.07}>
              <div style={{
                border: `1px solid ${isOpen ? "#1A3A80" : "#1E2330"}`,
                borderRadius: 12, marginBottom: "1rem", overflow: "hidden",
                transition: "border-color 0.3s",
              }}>
                <div onClick={() => setOpenIndex(isOpen ? null : i)} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "1.4rem 1.6rem", cursor: "pointer", gap: "1rem",
                  background: isOpen ? "#0f1628" : "var(--card)", transition: "background 0.2s",
                }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.4, flex: 1, margin: 0 }}>{f.q}</h3>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    background: isOpen ? "#3B7BFF" : "rgba(59,123,255,0.18)",
                    border: `1px solid ${isOpen ? "#3B7BFF" : "#1A3A80"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: isOpen ? "white" : "#3B7BFF", fontSize: "1.1rem",
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "transform 0.35s, background 0.2s",
                  }}>+</div>
                </div>
                <div style={{
                  maxHeight: isOpen ? 300 : 0, overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(.22,1,.36,1)",
                  background: "var(--card)",
                }}>
                  <p style={{ padding: "0 1.6rem 1.4rem", fontSize: "0.9rem", color: "#6B7590", lineHeight: 1.75, margin: 0 }}>{f.a}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <Reveal delay={0.2}>
        <div style={{
          textAlign: "center", marginTop: "3rem", padding: "2rem",
          background: "var(--card)", border: "1px solid #1E2330",
          borderRadius: 16, maxWidth: 760, marginInline: "auto",
        }}>
          <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Still have questions?</h3>
          <p style={{ color: "#6B7590", fontSize: "0.88rem", marginBottom: "1.2rem" }}>We reply to every message within 24 hours. No bots, no templates — just a real answer from our team.</p>
          <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} style={{
            background: "#3B7BFF", color: "#fff", border: "none",
            padding: "0.85rem 2rem", borderRadius: 8, fontWeight: 600,
            fontSize: "0.95rem", cursor: "pointer", fontFamily: "var(--font-space)",
            boxShadow: "0 0 24px rgba(59,123,255,0.4)",
          }}>Ask Us Anything →</button>
        </div>
      </Reveal>
    </section>
  );
}
