"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { posts, categoryColor } from "@/data/posts";

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

export default function Blog() {
  return (
    <section id="blog">
      <div className="max-container">
        <Reveal>
          <div className="section-header">
            <div>
              <div className="section-label">IT News &amp; Insights</div>
              <h2 className="section-title">Blog ล่าสุด</h2>
            </div>
          </div>
        </Reveal>

        <div className="bl-grid">
          {posts.map((p, i) => {
            const cat = categoryColor[p.category] ?? { bg: "rgba(136,146,164,0.12)", text: "#8892a4" };
            return (
              <Reveal key={p.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <Link href={`/blog/${p.slug}`} className="bl-card-link">
                  <article className="bl-card">
                    <div className="bl-cover" style={{ background: p.coverGrad }}>
                      <div className="bl-cover-emoji">{p.cover}</div>
                      <div className="bl-cover-cat" style={{ background: cat.bg, color: cat.text, borderColor: cat.text + "44" }}>
                        {p.category}
                      </div>
                    </div>
                    <div className="bl-body">
                      <h3 className="bl-title">{p.title}</h3>
                      <p className="bl-excerpt">{p.excerpt}</p>
                      <div className="bl-meta">
                        <div className="bl-meta-left">
                          <span className="bl-date">📅 {p.date}</span>
                          <span className="bl-dot">·</span>
                          <span className="bl-time">⏱ {p.readTime}</span>
                        </div>
                        <span className="bl-read">อ่านต่อ →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

