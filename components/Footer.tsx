export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid #1E2330", padding: "3rem 5% 2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "2.5rem" }}>
        <div>
          <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", background: "linear-gradient(135deg,#F0F4FF 40%,#3B7BFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Strom<span style={{ WebkitTextFillColor: "#3B7BFF" }}>up</span>
          </div>
          <p style={{ color: "#6B7590", fontSize: "0.85rem", maxWidth: 260, marginTop: "0.5rem", lineHeight: 1.6 }}>
            We build powerful digital products for ambitious businesses. Web, apps, and software — all under one roof.
          </p>
        </div>
        {[
          { title: "Services", links: ["Website Development", "Mobile Apps", "Dev Tools", "UI/UX Design"] },
          { title: "Company", links: ["About Us", "Our Work", "Process", "Contact"] },
          { title: "Connect", links: ["Twitter / X", "LinkedIn", "GitHub", "hello@stromup.com"] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7590", marginBottom: "1rem" }}>{col.title}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {col.links.map(l => (
                <li key={l}><a href="#" style={{ color: "#6B7590", textDecoration: "none", fontSize: "0.88rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F0F4FF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6B7590")}
                >{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid #1E2330", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: "0.8rem", color: "#6B7590" }}>© 2025 <span style={{ color: "#3B7BFF" }}>Stromup</span>. All rights reserved.</p>
        <p style={{ fontSize: "0.8rem", color: "#6B7590" }}>Built with ⚡ by Stromup</p>
      </div>
    </footer>
  );
}
