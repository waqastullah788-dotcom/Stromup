import Reveal from "./Reveal";

const services = [
  { icon: "🌐", title: "Website Development", desc: "Fast, modern websites built with Next.js, React, or WordPress. Optimized for speed, SEO, and conversions from day one.", tag: "Core Service" },
  { icon: "📱", title: "Mobile Apps", desc: "Cross-platform iOS and Android apps using React Native. Native performance, single codebase, shipped faster.", tag: "Apps" },
  { icon: "⚙️", title: "Dev Tools & Software", desc: "Custom internal tools, dashboards, and SaaS platforms built to automate your workflow and scale your business.", tag: "Software" },
  { icon: "🎨", title: "UI/UX Design", desc: "User interfaces that don't just look good — they convert. Figma prototypes, design systems, and pixel-perfect delivery.", tag: "Design" },
  { icon: "🔌", title: "API & Backend", desc: "Robust APIs, databases, and backend systems. Node.js, Python, PostgreSQL — built to handle real traffic.", tag: "Backend" },
  { icon: "🚀", title: "Maintenance & Growth", desc: "We don't disappear after launch. Ongoing support, updates, performance monitoring, and feature development.", tag: "Support" },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "6rem 5%", background: "var(--surface)" }}>
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <Reveal><span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B7BFF" }}>What We Do</span></Reveal>
        <Reveal delay={0.1}><h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0.5rem 0" }}>Services Built to Perform</h2></Reveal>
        <Reveal delay={0.2}><p style={{ color: "#6B7590", maxWidth: 520, margin: "0 auto" }}>From your first website to complex software — Stromup handles the full stack.</p></Reveal>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5px", border: "1.5px solid #1E2330", borderRadius: 16, overflow: "hidden",
      }}>
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div style={{
              background: "var(--card)", padding: "2.2rem", height: "100%",
              transition: "background 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "#181C28")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--card)")}
            >
              <div style={{
                width: 48, height: 48, background: "rgba(59,123,255,0.18)",
                border: "1px solid #1A3A80", borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", marginBottom: "1.5rem",
              }}>{s.icon}</div>
              <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.7rem" }}>{s.title}</h3>
              <p style={{ color: "#6B7590", fontSize: "0.9rem", lineHeight: 1.65 }}>{s.desc}</p>
              <span style={{
                display: "inline-block", marginTop: "1.2rem",
                fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "#3B7BFF",
                background: "rgba(59,123,255,0.18)", border: "1px solid #1A3A80",
                padding: "0.25rem 0.7rem", borderRadius: 4,
              }}>{s.tag}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
