import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, categoryColor } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: `${post.title} — SitthidetSR Blog` };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCode = false;
  let codeLines: string[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCode) {
        elements.push(
          <pre key={key++} className="blog-code-block">
            <code>{codeLines.join("\n")}</code>
          </pre>
        );
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }
    if (inCode) { codeLines.push(line); continue; }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="blog-detail-h2">{line.slice(3)}</h2>);
    } else if (line.startsWith("| ")) {
      // table row — simplified
      const cells = line.split("|").filter((c) => c.trim() && !c.match(/^[-\s]+$/));
      if (cells.length > 0) {
        elements.push(
          <div key={key++} className="blog-table-row">
            {cells.map((c, i) => <span key={i} className="blog-table-cell">{c.trim()}</span>)}
          </div>
        );
      }
    } else if (/^\d+\.\s/.test(line)) {
      elements.push(<li key={key++} className="blog-detail-li numbered">{line.replace(/^\d+\.\s/, "")}</li>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={key++} className="blog-detail-li">{line.slice(2)}</li>);
    } else if (line.trim() === "") {
      elements.push(<br key={key++} />);
    } else {
      // inline code
      const parts = line.split(/(`[^`]+`)/g);
      elements.push(
        <p key={key++} className="blog-detail-p">
          {parts.map((part, i) =>
            part.startsWith("`") && part.endsWith("`")
              ? <code key={i} className="blog-inline-code">{part.slice(1, -1)}</code>
              : part
          )}
        </p>
      );
    }
  }
  return elements;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const cat = categoryColor[post.category] ?? { bg: "rgba(136,146,164,0.12)", text: "#8892a4" };

  return (
    <div className="detail-page">
      {/* Cover */}
      <div className="detail-hero" style={{ background: post.coverGrad }}>
        <div className="detail-hero-emoji">{post.cover}</div>
        <div className="detail-hero-overlay" />
      </div>

      <div className="max-container detail-container">
        <Link href="/blog" className="detail-back">← กลับไป Blog</Link>

        <div className="detail-header">
          <div className="detail-meta-row">
            <span className="bl-cover-cat" style={{ background: cat.bg, color: cat.text, borderColor: cat.text + "44", position: "static" }}>
              {post.category}
            </span>
            <span className="detail-year">📅 {post.date}</span>
            <span className="detail-year">⏱ {post.readTime}</span>
          </div>
          <h1 className="detail-title">{post.title}</h1>
          <p className="detail-desc" style={{ marginTop: 12 }}>{post.excerpt}</p>
        </div>

        <div className="detail-body">
          <div className="detail-main blog-content">
            {renderContent(post.content)}
          </div>

          <div className="detail-sidebar">
            <div className="detail-sidebar-card">
              <h3>เกี่ยวกับบทความ</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
                <div className="sidebar-info-row"><span>หมวดหมู่</span><span style={{ color: cat.text }}>{post.category}</span></div>
                <div className="sidebar-info-row"><span>วันที่</span><span>{post.date}</span></div>
                <div className="sidebar-info-row"><span>เวลาอ่าน</span><span>{post.readTime}</span></div>
              </div>
            </div>
            <div className="detail-sidebar-card" style={{ marginTop: 16 }}>
              <h3>แชร์บทความ</h3>
              <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                <a href="#" className="detail-cta-btn" style={{ background: "rgba(108,99,255,0.15)", color: "#6c63ff", flex: 1 }}>Twitter</a>
                <a href="#" className="detail-cta-btn" style={{ background: "rgba(0,245,196,0.1)", color: "#00f5c4", flex: 1 }}>Copy Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
