export interface Project {
  slug: string;
  emoji: string;
  gradient: string;
  accent: string;
  type: string;
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  year: string;
  status: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "shopx-platform",
    emoji: "🛒",
    gradient: "linear-gradient(135deg,#0d1220 0%,#0a1a35 50%,#0d2040 100%)",
    accent: "#00f5c4",
    type: "E-Commerce",
    title: "ShopX Platform",
    desc: "ระบบ E-Commerce ครบวงจรพร้อม AI Recommendation Engine ช่วยเพิ่มยอดขาย 40%",
    longDesc: "ShopX Platform คือระบบ E-Commerce ที่พัฒนาขึ้นด้วย Next.js และ Node.js โดยมี AI Recommendation Engine ที่วิเคราะห์พฤติกรรมผู้ใช้แบบ Real-time เพื่อแนะนำสินค้าที่ตรงใจ ระบบรองรับผู้ใช้พร้อมกันกว่า 10,000 คน พร้อม Dashboard ผู้ขายแบบ Drag & Drop และระบบชำระเงินผ่าน 15+ ช่องทาง",
    tags: ["Next.js", "Node.js", "AI/ML", "PostgreSQL"],
    year: "2025",
    status: "Live",
    features: [
      "AI Product Recommendation Engine (Collaborative Filtering)",
      "Real-time Inventory Management",
      "Multi-vendor Dashboard พร้อม Analytics",
      "Payment Gateway 15+ ช่องทาง",
      "รองรับ 10,000+ Concurrent Users",
      "SEO-optimized Product Pages",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "dataviz-pro",
    emoji: "📊",
    gradient: "linear-gradient(135deg,#0d1220 0%,#150d30 50%,#1a1040 100%)",
    accent: "#6c63ff",
    type: "Dashboard",
    title: "DataViz Pro",
    desc: "Real-time Analytics Dashboard สำหรับธุรกิจขนาดกลาง รองรับข้อมูล 10M rows",
    longDesc: "DataViz Pro คือ Analytics Dashboard ที่ออกแบบมาสำหรับธุรกิจขนาดกลาง สามารถ Visualize ข้อมูลกว่า 10 ล้าน rows ได้แบบ Real-time ผ่าน WebSocket ด้วย D3.js Chart Library ที่ Custom ขึ้นมา รองรับ Export ข้อมูลเป็น PDF/Excel และแจ้งเตือนผ่าน Line/Email อัตโนมัติ",
    tags: ["React", "D3.js", "WebSocket", "Redis"],
    year: "2025",
    status: "Live",
    features: [
      "Real-time Data Streaming ผ่าน WebSocket",
      "Custom D3.js Charts (20+ Chart Types)",
      "Data Caching ด้วย Redis",
      "Export PDF / Excel / CSV",
      "Alert System ผ่าน Line & Email",
      "Role-based Access Control",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "chatbot-builder",
    emoji: "🤖",
    gradient: "linear-gradient(135deg,#0d1220 0%,#0a2018 50%,#0d2820 100%)",
    accent: "#00f5c4",
    type: "AI App",
    title: "ChatBot Builder",
    desc: "แพลตฟอร์ม No-Code สร้าง AI Chatbot ใช้งานได้ภายใน 5 นาที",
    longDesc: "ChatBot Builder เป็นแพลตฟอร์ม No-Code สำหรับสร้าง AI Chatbot โดยไม่ต้องเขียนโค้ด ผู้ใช้สามารถสร้าง Chatbot ได้ภายใน 5 นาที ด้วย Drag & Drop Flow Builder และเชื่อมต่อกับ LLM ชั้นนำอย่าง GPT-4, Claude, Gemini ได้ทันที พร้อม Deploy ลง LINE OA, Facebook, Website ได้ในคลิกเดียว",
    tags: ["Python", "LLM", "Vue.js", "FastAPI"],
    year: "2024",
    status: "Beta",
    features: [
      "Drag & Drop Flow Builder",
      "รองรับ GPT-4, Claude, Gemini",
      "Deploy ลง LINE OA / Facebook / Web",
      "Analytics Dashboard สำหรับ Chatbot",
      "Custom Knowledge Base (RAG)",
      "Multi-language Support",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "vaultguard",
    emoji: "🔐",
    gradient: "linear-gradient(135deg,#0d1220 0%,#1a1010 50%,#2a1010 100%)",
    accent: "#ff6b6b",
    type: "Security",
    title: "VaultGuard",
    desc: "Password Manager แบบ Self-Hosted พร้อมการเข้ารหัส AES-256",
    longDesc: "VaultGuard คือ Password Manager แบบ Self-Hosted ที่เน้นความปลอดภัยสูงสุด ข้อมูลทั้งหมดถูกเข้ารหัสด้วย AES-256 ก่อนบันทึก ไม่มีข้อมูลส่งออกไปยัง Cloud รองรับ 2FA, Biometric Login และการ Share Password แบบ Encrypted ระหว่างทีม",
    tags: ["Rust", "React", "SQLite", "E2E Encrypt"],
    year: "2024",
    status: "Open Source",
    features: [
      "AES-256 End-to-End Encryption",
      "Self-Hosted ข้อมูลอยู่ในมือคุณ 100%",
      "2FA & Biometric Authentication",
      "Secure Password Sharing",
      "Auto-fill Browser Extension",
      "Zero-Knowledge Architecture",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "beatflow",
    emoji: "🎵",
    gradient: "linear-gradient(135deg,#0d1220 0%,#10101a 50%,#181030 100%)",
    accent: "#6c63ff",
    type: "Mobile App",
    title: "BeatFlow",
    desc: "แอป Stream เพลง Lossless พร้อม AI DJ Mix อัตโนมัติ",
    longDesc: "BeatFlow คือแอป Streaming เพลงคุณภาพ Lossless สำหรับ iOS และ Android ที่มาพร้อม AI DJ Mix ที่สามารถมิกซ์เพลงแบบ Auto-transition และปรับ BPM อัตโนมัติ รองรับ Offline Mode และ Collaborative Playlist กับเพื่อน",
    tags: ["React Native", "Node.js", "S3", "AI"],
    year: "2026",
    status: "In Dev",
    features: [
      "Lossless Audio Streaming (FLAC/WAV)",
      "AI Auto-DJ Mix & BPM Matching",
      "Collaborative Playlist",
      "Offline Download Mode",
      "Lyrics Sync Real-time",
      "Social Listening Party",
    ],
    demoUrl: "#",
  },
  {
    slug: "linksphere",
    emoji: "🌐",
    gradient: "linear-gradient(135deg,#0d1220 0%,#0a1518 50%,#0d2025 100%)",
    accent: "#00f5c4",
    type: "SaaS",
    title: "LinkSphere",
    desc: "Link-in-Bio Tool สำหรับ Creator พร้อม Analytics แบบ Real-time",
    longDesc: "LinkSphere คือ Link-in-Bio Platform สำหรับ Content Creator ที่ไม่ใช่แค่รวมลิงก์ แต่มี Analytics แบบ Real-time ให้รู้ว่าลิงก์ไหนถูกคลิกมากที่สุด, ผู้เข้าชมมาจากที่ไหน และช่วงเวลาไหนที่ Active ที่สุด รองรับ Custom Domain และ Theme Builder",
    tags: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    year: "2026",
    status: "Coming Soon",
    features: [
      "Drag & Drop Link Builder",
      "Real-time Analytics Dashboard",
      "Custom Domain Support",
      "Theme Builder 50+ Templates",
      "QR Code Generator",
      "A/B Testing สำหรับ Links",
    ],
  },
];

export const statusColor: Record<string, string> = {
  Live: "#00f5c4",
  Beta: "#6c63ff",
  "Open Source": "#ff9f43",
  "In Dev": "#ffd32a",
  "Coming Soon": "#8892a4",
};
