"use client";
import { useEffect, useState } from "react";

const words = ["Websites", "Mobile Apps", "Dev Tools", "SaaS Products", "Anything"];

const stats = [
  { num: 120, suffix: "+", label: "Projects Delivered" },
  { num: 98, suffix: "%", label: "Client Satisfaction" },
  { num: 5, suffix: "yr", label: "In The Industry" },
  { num: 24, suffix: "h", label: "Response Time" },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("Websites");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60);
      } else {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", textAlign: "center",
      padding: "8rem 5% 5rem", position: "relative", overflow: "hidden",
    }}>
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(#1E2330 1px, transparent 1px), linear-gradient(90deg, #1E2330 1px, transparent 1px)",
        backgroundSize: "60px 60px", opacity: 0.35,
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 400,
        background: "radial-gradient(ellipse, rgba(59,123,255,0.22) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", maxWidth: 860 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(59,123,255,0.18)", border: "1px solid #1A3A80",
          color: "#3B7BFF", padding: "0.4rem 1rem", borderRadius: 999,
          fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
          textTransform: "uppercase", marginBottom: "2rem",
        }}>
          <span style={{ width: 6, height: 6, background: "#3B7BFF", borderRadius: "50%", display: "inline-block" }} />
          Digital Agency &amp; Dev Studio
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-syne)", fontWeight: 800,
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.05,
          letterSpacing: "-0.04em", marginBottom: "1.5rem",
        }}>
          We <span style={{ color: "#3B7BFF" }}>Build</span>
          <br />
          <span style={{ color: "#3B7BFF", borderRight: "2px solid #3B7BFF", paddingRight: 3 }}>
            {displayed}
          </span>
        </h1>

        <p style={{ fontSize: "1.1rem", color: "#6B7590", maxWidth: 540, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Stromup crafts high-performance websites, apps, and dev tools for ambitious clients. From concept to launch — we storm through execution.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("#contact")} style={{
            background: "#3B7BFF", color: "#fff", padding: "0.85rem 2rem",
            borderRadius: 8, fontWeight: 600, fontSize: "0.95rem",
            border: "none", cursor: "pointer", fontFamily: "var(--font-space)",
            boxShadow: "0 0 28px rgba(59,123,255,0.4)", transition: "box-shadow 0.2s, transform 0.2s",
          }}>Start a Project →</button>
          <button onClick={() => scrollTo("#portfolio")} style={{
            background: "transparent", color: "#F0F4FF",
            padding: "0.85rem 2rem", borderRadius: 8,
            border: "1px solid #1E2330", fontWeight: 600, fontSize: "0.95rem",
            cursor: "pointer", fontFamily: "var(--font-space)", transition: "border-color 0.2s",
          }}>View Our Work</button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "4rem", flexWrap: "wrap" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em" }}>
                <span style={{ color: "#3B7BFF" }}>{s.num}</span>{s.suffix}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#6B7590", marginTop: "0.2rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
