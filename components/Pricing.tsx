"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const plans = [
  {
    name: "Starter", monthly: 799, yearly: 639,
    desc: "Perfect for small businesses needing a clean, fast website to get online.",
    features: [
      { text: "Up to 5 pages", included: true },
      { text: "Mobile responsive", included: true },
      { text: "SEO optimized", included: true },
      { text: "Contact form", included: true },
      { text: "30 days support", included: true },
      { text: "Custom animations", included: false },
      { text: "CMS integration", included: false },
      { text: "Backend / API", included: false },
    ],
    popular: false,
  },
  {
    name: "Growth", monthly: 2499, yearly: 1999,
    desc: "For growing businesses that need a powerful web presence with custom features.",
    features: [
      { text: "Up to 15 pages", included: true },
      { text: "Custom animations", included: true },
      { text: "CMS integration", included: true },
      { text: "Blog / portfolio", included: true },
      { text: "Performance audit", included: true },
      { text: "90 days support", included: true },
      { text: "Analytics setup", included: true },
      { text: "Backend / API", included: false },
    ],
    popular: true,
  },
  {
    name: "Scale", monthly: 5999, yearly: 4799,
    desc: "Full-stack product development for startups and businesses ready to scale.",
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Custom backend & API", included: true },
      { text: "Database design", included: true },
      { text: "Auth & user accounts", included: true },
      { text: "Admin dashboard", included: true },
      { text: "6 months support", included: true },
      { text: "Deployment & DevOps", included: true },
      { text: "Priority response", included: true },
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" style={{ padding: "6rem 5%", background: "var(--black)" }}>
      <div style={{ textAlign: "center" }}>
        <Reveal><span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B7BFF" }}>Pricing</span></Reveal>
        <Reveal delay={0.1}><h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0.5rem 0" }}>Clear, Honest Pricing</h2></Reveal>
        <Reveal delay={0.2}><p style={{ color: "#6B7590", maxWidth: 520, margin: "0 auto" }}>No hidden fees, no surprises. Pick the plan that fits your project.</p></Reveal>
      </div>

      {/* Toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center", margin: "2rem 0 3rem" }}>
        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: !yearly ? "#F0F4FF" : "#6B7590" }}>Monthly</span>
        <div onClick={() => setYearly(!yearly)} style={{
          width: 52, height: 28, background: "#3B7BFF", borderRadius: 999,
          cursor: "pointer", position: "relative", transition: "background 0.3s",
        }}>
          <div style={{
            position: "absolute", top: 4, left: 4, width: 20, height: 20,
            background: "white", borderRadius: "50%",
            transform: yearly ? "translateX(24px)" : "none",
            transition: "transform 0.3s",
          }} />
        </div>
        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: yearly ? "#F0F4FF" : "#6B7590" }}>Yearly</span>
        <span style={{ background: "linear-gradient(135deg,#10B981,#059669)", color: "white", fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: 999 }}>Save 20%</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div style={{
              background: p.popular ? "linear-gradient(160deg,#0f1628 0%,var(--card) 60%)" : "var(--card)",
              border: `1px solid ${p.popular ? "#3B7BFF" : "#1E2330"}`,
              borderRadius: 20, padding: "2.2rem", position: "relative", overflow: "hidden",
              transition: "transform 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "none")}
            >
              {p.popular && (
                <div style={{
                  display: "inline-block", background: "#3B7BFF", color: "white",
                  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", padding: "0.3rem 0.9rem",
                  borderRadius: 999, marginBottom: "1.2rem",
                }}>⚡ Most Popular</div>
              )}
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.4rem" }}>{p.name}</div>
              <div style={{ fontSize: "0.85rem", color: "#6B7590", marginBottom: "1.5rem", lineHeight: 1.6 }}>{p.desc}</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "0.3rem", marginBottom: "1.8rem" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#6B7590", marginBottom: "0.4rem" }}>$</span>
                <span style={{ fontFamily: "var(--font-syne)", fontSize: "3rem", fontWeight: 800, lineHeight: 1, transition: "all 0.3s" }}>
                  {(yearly ? p.yearly : p.monthly).toLocaleString()}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#6B7590", marginBottom: "0.4rem" }}>/project</span>
              </div>
              <div style={{ height: 1, background: "#1E2330", marginBottom: "1.5rem" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {p.features.map((f) => (
                  <li key={f.text} style={{ display: "flex", alignItems: "center", gap: "0.7rem", fontSize: "0.88rem", color: f.included ? "#F0F4FF" : "#6B7590" }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.6rem",
                      background: f.included ? "rgba(59,123,255,0.18)" : "var(--card)",
                      border: `1px solid ${f.included ? "#1A3A80" : "#1E2330"}`,
                      color: f.included ? "#3B7BFF" : "#6B7590",
                    }}>{f.included ? "✓" : "–"}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <button style={{
                display: "block", width: "100%", textAlign: "center",
                padding: "0.85rem", borderRadius: 8, fontWeight: 700,
                fontSize: "0.9rem", cursor: "pointer", fontFamily: "var(--font-space)",
                transition: "all 0.2s",
                background: p.popular ? "#3B7BFF" : "transparent",
                color: "#F0F4FF",
                border: p.popular ? "none" : "1px solid #1E2330",
                boxShadow: p.popular ? "0 0 24px rgba(59,123,255,0.4)" : "none",
              }}>Get Started →</button>
            </div>
          </Reveal>
        ))}
      </div>
      <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.82rem", color: "#6B7590" }}>
        Need something custom? <span style={{ color: "#3B7BFF", cursor: "pointer" }}>Let&apos;s talk →</span> Every project is unique and we price accordingly.
      </p>
    </section>
  );
}
