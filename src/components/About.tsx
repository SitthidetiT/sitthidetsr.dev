"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function Reveal({ children }: { children: React.ReactNode }) {
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
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="max-container">
        <div className="about-grid">
          <Reveal>
            <div className="about-visual">
              <div className="avatar-frame">
                <Image
                  src="/profile.jpg"
                  alt="Sitthidet Seerueng"
                  fill
                  style={{ objectFit: "cover", borderRadius: 24 }}
                />
              </div>
              <div className="floating-badge badge1">⚡ Full-Stack Dev</div>
              <div className="floating-badge badge2">🤖 AI Enthusiast</div>
            </div>
          </Reveal>
          <Reveal>
            <div className="about-text">
              <div className="section-label">About me</div>
              <h2 className="section-title" style={{ marginBottom: 28 }}>
                สวัสดีครับ<br />ผม Sitthidet
              </h2>
              <p>
                นักพัฒนาซอฟต์แวร์ที่หลงใหลในเทคโนโลยีและการสร้างสรรค์ผลงานที่มีคุณภาพ
                มีประสบการณ์ด้าน Full-Stack Development และ AI Integration
              </p>
              <p>
                ชอบติดตามข่าวสาร IT ล่าสุด และแชร์ความรู้ผ่าน Blog
                เพื่อสร้างชุมชนนักพัฒนาที่แข็งแกร่ง
              </p>
              <div className="skills-grid">
                {["React", "Node.js", "Python", "AI/ML", "TypeScript", "Docker", "AWS", "UI/UX", "PostgreSQL", "Next.js"].map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
