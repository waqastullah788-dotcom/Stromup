"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((sec) => {
        if (window.scrollY >= (sec as HTMLElement).offsetTop - 120)
          setActive(sec.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.2rem 5%",
        background: scrolled ? "rgba(8,10,15,0.97)" : "rgba(8,10,15,0.85)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(59,123,255,0.2)" : "1px solid #1E2330",
        transition: "all 0.3s",
      }}
    >
      <div style={{
        fontFamily: "var(--font-syne)", fontSize: "1.5rem", fontWeight: 800,
        letterSpacing: "-0.03em",
        background: "linear-gradient(135deg, #F0F4FF 40%, #3B7BFF)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>
        Strom<span style={{ WebkitTextFillColor: "#3B7BFF" }}>up</span>
      </div>

      {/* Desktop links */}
      <ul style={{ listStyle: "none", display: "flex", gap: "2.2rem", margin: 0, padding: 0 }}
        className="hidden md:flex">
        {links.map((l) => (
          <li key={l.href}>
            <button onClick={() => scrollTo(l.href)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#" + l.href === "#" + active ? "#F0F4FF" : "#6B7590",
              fontSize: "0.9rem", fontWeight: 500,
              fontFamily: "var(--font-space)",
              transition: "color 0.2s",
            }}>
              {l.label}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => scrollTo("#contact")} style={{
            background: "#3B7BFF", color: "#fff", border: "none",
            padding: "0.5rem 1.3rem", borderRadius: "6px",
            fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
            fontFamily: "var(--font-space)", transition: "opacity 0.2s",
          }}>
            Get a Quote
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px" }}
      >
        {[0,1,2].map(i => (
          <span key={i} style={{ width: 24, height: 2, background: "#F0F4FF", borderRadius: 2, display: "block" }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(8,10,15,0.98)", borderBottom: "1px solid #1E2330",
          padding: "1rem 5%", display: "flex", flexDirection: "column", gap: "1rem",
        }}>
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#F0F4FF", fontSize: "1rem", fontWeight: 500,
              fontFamily: "var(--font-space)", textAlign: "left",
            }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo("#contact")} style={{
            background: "#3B7BFF", color: "#fff", border: "none",
            padding: "0.7rem 1.3rem", borderRadius: "6px",
            fontWeight: 600, fontSize: "0.95rem", cursor: "pointer",
            fontFamily: "var(--font-space)",
          }}>
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
}
