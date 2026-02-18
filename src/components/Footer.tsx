export default function Footer() {
  return (
    <footer>
      <div className="footer-glow" />
      <div className="footer-marquee">
        <div className="marquee-track">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i}>
              SitthidetSR <span className="accent">✦</span>{" "}
            </span>
          ))}
        </div>
      </div>
      <div className="max-container footer-main">
        <div className="footer-brand">
          <h3>
            Sitthidet<span className="accent">SR</span>
          </h3>
          <p>Crafting digital experiences with passion &amp; precision</p>
          <div className="footer-socials">
            <a href="#" className="footer-social-btn" aria-label="GitHub">
              GH
            </a>
            <a href="#" className="footer-social-btn" aria-label="LinkedIn">
              IN
            </a>
            <a href="#" className="footer-social-btn" aria-label="Twitter">
              TW
            </a>
            <a href="#" className="footer-social-btn" aria-label="Instagram">
              IG
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#">Web Development</a>
          <a href="#">UI/UX Design</a>
          <a href="#">AI Integration</a>
          <a href="#">Consulting</a>
        </div>
        <div className="footer-col">
          <h4>Status</h4>
          <div className="footer-status">
            <div className="footer-status-dot" />
            All systems operational
          </div>
          <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 8 }}>
            Last updated: Feb 2026
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 SitthidetSR. Crafted with 💜 in Bangkok</p>
        <div className="footer-tech">
          <span className="tech-badge">Next.js</span>
          <span className="tech-badge">React</span>
          <span className="tech-badge">Tailwind</span>
          <span className="tech-badge">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
