import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, statusColor } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: `${project.title} — SitthidetSR` };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const sc = statusColor[project.status];

  return (
    <div className="detail-page">
      {/* Hero */}
      <div className="detail-hero" style={{ background: project.gradient }}>
        <div className="detail-hero-emoji">{project.emoji}</div>
        <div className="detail-hero-overlay" />
      </div>

      <div className="max-container detail-container">
        {/* Back */}
        <Link href="/portfolio" className="detail-back">← กลับไป Portfolio</Link>

        {/* Header */}
        <div className="detail-header">
          <div className="detail-meta-row">
            <span className="detail-type" style={{ color: project.accent }}>{project.type}</span>
            <span className="detail-status" style={{ color: sc, borderColor: sc }}>
              <span className="detail-status-dot" style={{ background: sc }} />
              {project.status}
            </span>
            <span className="detail-year">{project.year}</span>
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-tags">
            {project.tags.map((t) => (
              <span key={t} className="pf-tag" style={{ borderColor: project.accent + "44", color: project.accent }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="detail-body">
          {/* Left: Description + Features */}
          <div className="detail-main">
            <p className="detail-desc">{project.longDesc}</p>

            <h2 className="detail-section-title">ฟีเจอร์หลัก</h2>
            <ul className="detail-features">
              {project.features.map((f) => (
                <li key={f} className="detail-feature-item">
                  <span className="detail-feature-dot" style={{ background: project.accent }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Links */}
          <div className="detail-sidebar">
            <div className="detail-sidebar-card">
              <h3>Links</h3>
              {project.demoUrl && (
                <a href={project.demoUrl} className="detail-cta-btn" style={{ background: project.accent, color: "#050810" }}>
                  🚀 View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} className="detail-cta-btn detail-cta-outline" style={{ borderColor: project.accent, color: project.accent }}>
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
