"use client";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ padding: "6rem 5%", background: "var(--black)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>
        <Reveal direction="left">
          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B7BFF" }}>Get In Touch</span>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0.5rem 0 1rem" }}>
              Let&apos;s Build<br />Your Next Big Thing
            </h2>
            <p style={{ color: "#6B7590", lineHeight: 1.7, marginBottom: "2rem" }}>
              Tell us about your project and we&apos;ll get back to you within 24 hours with a plan and a quote.
            </p>
            {[
              { icon: "📧", label: "hello@stromup.com", sub: "Drop us an email anytime" },
              { icon: "⚡", label: "24h Response Guarantee", sub: "We get back to every inquiry" },
              { icon: "🌍", label: "Remote-First Team", sub: "Working across all timezones" },
            ].map(d => (
              <div key={d.label} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ width: 40, height: 40, background: "rgba(59,123,255,0.18)", border: "1px solid #1A3A80", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>{d.icon}</div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.95rem" }}>{d.label}</strong>
                  <span style={{ fontSize: "0.9rem", color: "#6B7590" }}>{d.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {["First Name", "Last Name"].map(label => (
                <div key={label}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#6B7590", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{label}</label>
                  <input placeholder={label === "First Name" ? "John" : "Doe"} style={{ width: "100%", background: "var(--card)", border: "1px solid #1E2330", color: "#F0F4FF", padding: "0.85rem 1rem", borderRadius: 8, fontFamily: "var(--font-space)", fontSize: "0.9rem", outline: "none" }} />
                </div>
              ))}
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#6B7590", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Email</label>
              <input placeholder="john@company.com" style={{ width: "100%", background: "var(--card)", border: "1px solid #1E2330", color: "#F0F4FF", padding: "0.85rem 1rem", borderRadius: 8, fontFamily: "var(--font-space)", fontSize: "0.9rem", outline: "none" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#6B7590", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Service Needed</label>
              <select style={{ width: "100%", background: "var(--card)", border: "1px solid #1E2330", color: "#F0F4FF", padding: "0.85rem 1rem", borderRadius: 8, fontFamily: "var(--font-space)", fontSize: "0.9rem", outline: "none" }}>
                {["Website Development", "Mobile App", "Dev Tools / Software", "UI/UX Design", "API & Backend", "Other"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#6B7590", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Tell us about your project</label>
              <textarea placeholder="Describe your idea, goals, timeline, and budget..." style={{ width: "100%", height: 120, background: "var(--card)", border: "1px solid #1E2330", color: "#F0F4FF", padding: "0.85rem 1rem", borderRadius: 8, fontFamily: "var(--font-space)", fontSize: "0.9rem", outline: "none", resize: "none" }} />
            </div>
            <button onClick={() => { setSent(true); setTimeout(() => setSent(false), 3000); }} style={{
              background: sent ? "#10B981" : "#3B7BFF", color: "#fff",
              padding: "0.9rem", borderRadius: 8, fontWeight: 700,
              fontSize: "0.95rem", border: "none", cursor: "pointer",
              fontFamily: "var(--font-space)", transition: "all 0.3s",
              boxShadow: sent ? "0 0 30px rgba(16,185,129,0.5)" : "0 0 24px rgba(59,123,255,0.4)",
            }}>
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
