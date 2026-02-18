"use client";

import { useState, useRef, useEffect } from "react";

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

interface Message {
  role: "ai" | "user";
  text: string;
}

const responses: Record<string, string> = {
  portfolio: "ผมมีประสบการณ์พัฒนา E-Commerce, Dashboard, AI Application และอีกมากมาย ดูได้ที่ส่วน Portfolio ครับ 👆",
  ai: "ปีนี้ AI ที่น่าสนใจมาก ได้แก่ Claude, GPT-4o, Gemini Ultra และ Llama 3 แต่ละตัวมีจุดเด่นต่างกันครับ!",
  work: "รับงาน Freelance และ Full-time ครับ สนใจติดต่อมาได้เลยที่ Contact ด้านล่างเลยครับ",
  skill: "ทักษะหลักคือ React, Node.js, Python, AI Integration และ Cloud Architecture ครับ",
  default: "ขอบคุณสำหรับคำถามครับ! ลองถามเรื่อง portfolio, ทักษะ, งาน, หรือ AI เทคโนโลยีได้เลยนะครับ 😊",
};

function getResponse(msg: string) {
  const m = msg.toLowerCase();
  if (m.includes("งาน") || m.includes("work") || m.includes("รับ")) return responses.work;
  if (m.includes("portfolio") || m.includes("ผลงาน") || m.includes("โปรเจค")) return responses.portfolio;
  if (m.includes("ai") || m.includes("เทคโนโลยี")) return responses.ai;
  if (m.includes("ทักษะ") || m.includes("skill")) return responses.skill;
  return responses.default;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "สวัสดีครับ! ผมคือ AI Assistant ของ Sitthidet ยินดีตอบคำถามเกี่ยวกับผลงาน, ทักษะ, หรือเทคโนโลยีที่คุณสนใจครับ 😊" },
    { role: "ai", text: 'ลองถามผมได้เลย เช่น "คุณทำโปรเจคอะไรได้บ้าง?" หรือ "เทคโนโลยี AI ไหนน่าสนใจในปีนี้?"' },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "ai", text: getResponse(text) }]);
    }, 1200);
  };

  return (
    <section id="ai-chat">
      <div className="max-container">
        <Reveal>
          <div className="section-header" style={{ justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <div className="section-label">Powered by AI</div>
            <h2 className="section-title">คุยกับ AI ของฉัน</h2>
            <p style={{ color: "var(--muted)", fontFamily: "var(--font-noto-thai), 'Noto Sans Thai', sans-serif", fontWeight: 300, marginTop: 12, maxWidth: 480 }}>
              ถามอะไรก็ได้เกี่ยวกับงาน, ทักษะ, หรือเทคโนโลยี AI พร้อมตอบตลอด 24/7
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="chat-container">
            <div className="chat-header-bar">
              <div className="chat-avatar">🤖</div>
              <div className="chat-info">
                <h3>SitthidetSR AI</h3>
                <p>Online now</p>
              </div>
            </div>
            <div className="chat-messages" ref={messagesRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`msg ${msg.role === "user" ? "user" : "ai"}`}>
                  <div className={`msg-avatar ${msg.role === "ai" ? "ai-av" : "user-av"}`}>
                    {msg.role === "ai" ? "🤖" : "😊"}
                  </div>
                  <div className="msg-bubble">{msg.text}</div>
                </div>
              ))}
              {typing && (
                <div className="msg ai">
                  <div className="msg-avatar ai-av">🤖</div>
                  <div className="typing-indicator">
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                  </div>
                </div>
              )}
            </div>
            <div className="chat-input-area">
              <input
                type="text"
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="พิมพ์ข้อความของคุณ..."
              />
              <button className="chat-send" onClick={sendMessage}>ส่ง →</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
