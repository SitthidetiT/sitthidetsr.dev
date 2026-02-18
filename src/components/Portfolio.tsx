"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects, statusColor } from "@/data/projects";

function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio">
      <div className="max-container">
        <Reveal>
          <div className="section-header">
            <div>
              <div className="section-label">My Work</div>
              <h2 className="section-title">ผลงานที่ผ่านมา</h2>
            </div>
          </div>
        </Reveal>

        <div className="pf-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div
                className={`pf-card${hovered === i ? " hovered" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="pf-card-glow" style={{ "--card-accent": p.accent } as React.CSSProperties} />
                <div className="pf-thumb" style={{ background: p.gradient }}>
                  <div className="pf-emoji">{p.emoji}</div>
                  <div className="pf-year">{p.year}</div>
                  <div className="pf-status" style={{ color: statusColor[p.status], borderColor: statusColor[p.status] }}>
                    <span className="pf-status-dot" style={{ background: statusColor[p.status] }} />
                    {p.status}
                  </div>
                </div>
                <div className="pf-body">
                  <div className="pf-type" style={{ color: p.accent }}>{p.type}</div>
                  <h3 className="pf-title">{p.title}</h3>
                  <p className="pf-desc">{p.desc}</p>
                  <div className="pf-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="pf-tag" style={{ borderColor: p.accent + "33", color: p.accent }}>{t}</span>
                    ))}
                  </div>
                  <div className="pf-footer">
                    <Link href={`/portfolio/${p.slug}`} className="pf-link">ดูรายละเอียด →</Link>
                    {p.githubUrl && <a href={p.githubUrl} className="pf-link pf-link-muted">GitHub</a>}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
