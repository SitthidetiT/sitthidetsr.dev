"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contact">
      <div className="max-container">
        <Reveal>
          <div className="section-header" style={{ justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title" style={{ marginBottom: 28 }}>มาร่วมงานกัน</h2>
          </div>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <div className="contact-info">
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 30, fontFamily: "var(--font-noto-thai), 'Noto Sans Thai', sans-serif", fontWeight: 300 }}>
                สนใจร่วมงาน หรืออยากปรึกษาโปรเจค? ติดต่อผมได้เลยครับ ยินดีพูดคุยทุกโอกาส
              </p>
              <div className="contact-links">
                <a href="mailto:hello@sitthidet.com" className="contact-link">
                  <div className="contact-link-icon">📧</div>
                  <div className="contact-link-text">
                    <div>Email</div>
                    <span>hello@sitthidet.com</span>
                  </div>
                </a>
                <a href="tel:+66123456789" className="contact-link">
                  <div className="contact-link-icon">📱</div>
                  <div className="contact-link-text">
                    <div>Phone</div>
                    <span>+66 12 345 6789</span>
                  </div>
                </a>
                <a href="#" className="contact-link">
                  <div className="contact-link-icon">📍</div>
                  <div className="contact-link-text">
                    <div>Location</div>
                    <span>Bangkok, Thailand 🇹🇭</span>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="ชื่อของคุณ" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-input" placeholder="อีเมลของคุณ" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="หัวข้อ" />
              </div>
              <div className="form-group">
                <textarea className="form-textarea" rows={6} placeholder="รายละเอียด..." required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", padding: "16px 32px" }}>
                ส่งข้อความ 🚀
              </button>
              {success && (
                <div style={{
                  marginTop: 16,
                  padding: "14px 20px",
                  background: "rgba(138,43,226,.15)",
                  border: "1px solid var(--accent)",
                  borderRadius: 12,
                  textAlign: "center",
                  color: "var(--accent)",
                  fontFamily: "var(--font-noto-thai), 'Noto Sans Thai', sans-serif",
                }}>
                  ✅ ส่งข้อความเรียบร้อยแล้ว! จะตอบกลับโดยเร็วที่สุดครับ
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
