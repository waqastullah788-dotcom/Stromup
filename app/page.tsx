"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const whyMetrics = [
  { icon: "⚡", label: "Average Load Time", val: "0.8s", sub: "— Top 5% globally" },
  { icon: "📦", label: "Projects Delivered On Time", val: "96%", sub: "on-schedule rate" },
  { icon: "🔄", label: "Returning Clients", val: "84%", sub: "come back for more" },
  { icon: "🌍", label: "Countries Served", val: "18+", sub: "countries worldwide" },
];

const whyItems = [
  { title: "Deadline-Driven Team", desc: "We treat your launch date like our own. No excuses, no delays — just consistent delivery." },
  { title: "Transparent Communication", desc: "Weekly updates, Slack access, and live project boards. You're always in the loop." },
  { title: "Full Stack Capability", desc: "One team for design, development, and deployment. No handoffs, no gaps." },
  { title: "Scalable from Day One", desc: "We build with growth in mind. Your product won't crack under pressure when it takes off." },
];

const portfolio = [
  { grad: "linear-gradient(135deg,#0D1F5C,#0a0d14)", tag: "SaaS Dashboard", title: "Analytiq Platform", desc: "A real-time analytics dashboard for a fintech startup. Built with Next.js + D3.js, handling 2M+ data points daily." },
  { grad: "linear-gradient(135deg,#1a0a2e,#0a0d14)", tag: "E-Commerce", title: "Luxora Store", desc: "A premium e-commerce experience for a fashion brand. Custom Shopify + headless CMS with 3x conversion improvement." },
  { grad: "linear-gradient(135deg,#0a2010,#0a0d14)", tag: "Mobile App", title: "Trackify Health", desc: "A React Native health tracking app with AI insights. 50K+ downloads, 4.8 star rating on both stores." },
];

const steps = [
  { num: "01", title: "Discovery", desc: "We understand your goals, audience, and technical needs before writing a single line of code." },
  { num: "02", title: "Design", desc: "Wireframes and high-fidelity Figma prototypes. You approve every screen before development begins." },
  { num: "03", title: "Build", desc: "Agile sprints with weekly demos. Clean code, tested thoroughly, and built to scale." },
  { num: "04", title: "Launch", desc: "Deployed, monitored, and handed over with full documentation. We don't disappear post-launch." },
];

const testimonials = [
  { stars: 5, text: "Stromup delivered our platform 2 weeks ahead of schedule. The quality was exceptional — it felt like they cared more about the product than we did.", initials: "AK", name: "Amir Khalid", role: "CEO, Analytiq", grad: "linear-gradient(135deg,#3B7BFF,#00E5FF)" },
  { stars: 5, text: "We've worked with 4 agencies before Stromup. None of them communicated as clearly or delivered as consistently. They're our permanent dev partner now.", initials: "SR", name: "Sarah Reeves", role: "Founder, Luxora", grad: "linear-gradient(135deg,#8B5CF6,#3B7BFF)" },
  { stars: 5, text: "Our app went from idea to App Store in 3 months. The team handled everything — design, dev, and deployment. Absolutely seamless experience.", initials: "JP", name: "James Park", role: "CTO, Trackify", grad: "linear-gradient(135deg,#10B981,#3B7BFF)" },
];

const blogPosts = [
  { bg: "linear-gradient(135deg,#0D1F5C,#080A0F)", icon: "⚡", tag: "Performance", date: "Jun 10, 2025", title: "Why Your Website Loads Slow (And How to Fix It in a Weekend)", desc: "We audited 50 client sites and found the same 6 issues killing performance. Here's the fix for each one.", author: "Adam K.", initials: "AK", grad: "linear-gradient(135deg,#3B7BFF,#00E5FF)", read: "5 min read" },
  { bg: "linear-gradient(135deg,#1a0a2e,#080A0F)", icon: "🎨", tag: "Design", date: "May 28, 2025", title: "The 7 UI Mistakes That Make Clients Look Unprofessional", desc: "Small design decisions that silently destroy trust with visitors — and exactly how to fix them.", author: "Sara R.", initials: "SR", grad: "linear-gradient(135deg,#8B5CF6,#3B7BFF)", read: "7 min read" },
  { bg: "linear-gradient(135deg,#0a2010,#080A0F)", icon: "🚀", tag: "Dev Tools", date: "May 15, 2025", title: "Next.js vs Remix in 2025 — Which Should You Build On?", desc: "We've shipped production apps on both. Here's our honest, no-BS comparison for real projects.", author: "James P.", initials: "JP", grad: "linear-gradient(135deg,#10B981,#3B7BFF)", read: "9 min read" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />

      {/* WHY US */}
      <section id="why" style={{ padding: "6rem 5%", background: "var(--black)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "5rem", alignItems: "center" }}>
          <div>
            <Reveal direction="left"><span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B7BFF" }}>Why Stromup</span></Reveal>
            <Reveal direction="left" delay={0.1}><h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0.5rem 0 1rem" }}>Built Different.<br />Delivered Right.</h2></Reveal>
            <Reveal direction="left" delay={0.15}><p style={{ color: "#6B7590", lineHeight: 1.7, marginBottom: "2rem" }}>We don&apos;t just write code. We understand your business, solve real problems, and build products that last.</p></Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {whyItems.map((w, i) => (
                <Reveal key={w.title} direction="left" delay={0.2 + i * 0.1}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: 22, height: 22, background: "rgba(59,123,255,0.18)", border: "1px solid #3B7BFF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#3B7BFF", flexShrink: 0, marginTop: 2 }}>✓</div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.2rem" }}>{w.title}</h4>
                      <p style={{ fontSize: "0.85rem", color: "#6B7590", lineHeight: 1.6 }}>{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="right">
            <div style={{ background: "var(--card)", border: "1px solid #1E2330", borderRadius: 20, padding: "2.5rem" }}>
              {whyMetrics.map((m) => (
                <div key={m.label} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.2rem", background: "var(--surface)", border: "1px solid #1E2330", borderRadius: 10, marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{m.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "#6B7590" }}>{m.label}</div>
                    <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.3rem", fontWeight: 800 }}>
                      <span style={{ color: "#3B7BFF" }}>{m.val}</span> {m.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: "6rem 5%", background: "var(--surface)" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <Reveal><span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B7BFF" }}>Our Work</span></Reveal>
          <Reveal delay={0.1}><h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0.5rem 0" }}>Products We&apos;re Proud Of</h2></Reveal>
          <Reveal delay={0.2}><p style={{ color: "#6B7590", maxWidth: 520, margin: "0 auto" }}>A selection of projects that show what Stromup is capable of.</p></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem" }}>
          {portfolio.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div
                style={{ background: "var(--card)", border: "1px solid #1E2330", borderRadius: 16, overflow: "hidden", transition: "transform 0.3s, border-color 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#1A3A80"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "#1E2330"; }}
              >
                <div style={{ height: 200, background: p.grad, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "85%", background: "#0a0d14", border: "1px solid #1E2330", borderRadius: 8, overflow: "hidden" }}>
                    <div style={{ background: "#12151e", padding: "0.4rem 0.7rem", display: "flex", gap: "0.4rem" }}>
                      {["#ff5f57","#febc2e","#28c840"].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />)}
                    </div>
                    <div style={{ height: 90, padding: 10 }}>
                      <div style={{ height: 40, borderRadius: 4, background: "rgba(59,123,255,0.2)", marginBottom: 8 }} />
                      <div style={{ height: 12, borderRadius: 3, background: "#1E2330", marginBottom: 6 }} />
                      <div style={{ height: 12, borderRadius: 3, background: "#1E2330", width: "60%" }} />
                    </div>
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3B7BFF", marginBottom: "0.5rem" }}>{p.tag}</div>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#6B7590", lineHeight: 1.6, marginBottom: "1rem" }}>{p.desc}</p>
                  <a href="#" style={{ fontSize: "0.82rem", fontWeight: 600, color: "#3B7BFF", textDecoration: "none" }}>View Case Study →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "6rem 5%", background: "var(--black)" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <Reveal><span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B7BFF" }}>How We Work</span></Reveal>
          <Reveal delay={0.1}><h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0.5rem 0" }}>From Idea to Launch</h2></Reveal>
          <Reveal delay={0.2}><p style={{ color: "#6B7590", maxWidth: 520, margin: "0 auto" }}>A clear, proven process that keeps projects on track and clients in control.</p></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div style={{ textAlign: "center", padding: "0 1.5rem" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--card)", border: "1px solid #1A3A80", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontFamily: "var(--font-syne)", fontSize: "1.1rem", fontWeight: 800, color: "#3B7BFF" }}>{s.num}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#6B7590", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "6rem 5%", background: "var(--surface)" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <Reveal><span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B7BFF" }}>Client Love</span></Reveal>
          <Reveal delay={0.1}><h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0.5rem 0" }}>What Our Clients Say</h2></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div style={{ background: "var(--card)", border: "1px solid #1E2330", borderRadius: 16, padding: "2rem", position: "relative" }}>
                <div style={{ position: "absolute", top: "1rem", right: "1.5rem", fontFamily: "var(--font-syne)", fontSize: "5rem", fontWeight: 800, color: "#1A3A80", lineHeight: 1, pointerEvents: "none" }}>&quot;</div>
                <div style={{ color: "#FFB800", fontSize: "0.85rem", letterSpacing: 2, marginBottom: "1rem" }}>{"★".repeat(t.stars)}</div>
                <p style={{ fontSize: "0.9rem", color: "#6B7590", lineHeight: 1.7, marginBottom: "1.5rem" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.grad, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>{t.initials}</div>
                  <div>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{t.name}</h4>
                    <span style={{ fontSize: "0.78rem", color: "#6B7590" }}>{t.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Pricing />

      {/* BLOG */}
      <section id="blog" style={{ padding: "6rem 5%", background: "var(--surface)" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <Reveal><span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B7BFF" }}>From The Team</span></Reveal>
          <Reveal delay={0.1}><h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0.5rem 0" }}>Insights &amp; Resources</h2></Reveal>
          <Reveal delay={0.2}><p style={{ color: "#6B7590", maxWidth: 520, margin: "0 auto" }}>Practical guides, tips, and thinking from the Stromup team.</p></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem" }}>
          {blogPosts.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div
                style={{ background: "var(--card)", border: "1px solid #1E2330", borderRadius: 16, overflow: "hidden", transition: "transform 0.3s, border-color 0.3s", cursor: "pointer" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#1A3A80"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "#1E2330"; }}
              >
                <div style={{ height: 180, background: b.bg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontSize: "3.5rem", position: "relative", zIndex: 1 }}>{b.icon}</span>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, var(--card))" }} />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "0.8rem" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3B7BFF", background: "rgba(59,123,255,0.18)", border: "1px solid #1A3A80", padding: "0.2rem 0.6rem", borderRadius: 4 }}>{b.tag}</span>
                    <span style={{ fontSize: "0.78rem", color: "#6B7590" }}>{b.date}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.35, marginBottom: "0.6rem" }}>{b.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#6B7590", lineHeight: 1.65, marginBottom: "1.2rem" }}>{b.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid #1E2330" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: b.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, color: "#fff" }}>{b.initials}</div>
                      <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>{b.author}</span>
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "#6B7590" }}>{b.read}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#" style={{ background: "transparent", color: "#F0F4FF", padding: "0.85rem 2rem", borderRadius: 8, border: "1px solid #1E2330", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", display: "inline-block" }}>View All Articles →</a>
        </div>
      </section>

      <FAQ />

      {/* CTA BANNER */}
      <section style={{ background: "linear-gradient(135deg,#0D1F5C 0%,#0a1240 100%)", borderTop: "1px solid #1A3A80", borderBottom: "1px solid #1A3A80", padding: "5rem 5%", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, background: "radial-gradient(ellipse,rgba(59,123,255,0.3),transparent 70%)", pointerEvents: "none" }} />
        <Reveal>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", position: "relative", marginBottom: "1rem" }}>Ready to Build Something Great?</h2>
          <p style={{ color: "rgba(240,244,255,0.65)", position: "relative", marginBottom: "2rem" }}>Let&apos;s talk about your project. First consultation is always free.</p>
          <a href="#contact" style={{ background: "#3B7BFF", color: "#fff", padding: "0.85rem 2rem", borderRadius: 8, fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", display: "inline-block", boxShadow: "0 0 28px rgba(59,123,255,0.4)", position: "relative" }}>
            Start the Conversation →
          </a>
        </Reveal>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
