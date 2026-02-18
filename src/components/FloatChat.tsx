"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "ai" | "user";
  text: string;
}

const responses: Record<string, string> = {
  portfolio: "ผมมีประสบการณ์พัฒนา E-Commerce, Dashboard, AI Application และอีกมากมาย ดูได้ที่ส่วน Portfolio ครับ 👆",
  ai: "ปีนี้ AI ที่น่าสนใจมาก ได้แก่ Claude, GPT-4o, Gemini Ultra และ Llama 3 แต่ละตัวมีจุดเด่นต่างกันครับ!",
  work: "รับงาน Freelance และ Full-time ครับ สนใจติดต่อมาได้เลยที่ Contact ด้านบนเลยครับ",
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

export default function FloatChat() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"ai" | "live">("ai");
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "สวัสดีครับ! 👋 ผมเป็น AI ผู้ช่วยของสิทธิเดช ถามเกี่ยวกับทักษะ, ประสบการณ์, ผลงาน หรือการรับงานได้เลยครับ!" },
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
    <>
      {/* Chat Popup */}
      <div className={`floatchat-popup${open ? " open" : ""}`}>
        {/* Header */}
        <div className="floatchat-header">
          <div className="floatchat-header-left">
            <div className="floatchat-avatar-wrap">
              <div className="floatchat-online-dot" />
              <div className="floatchat-avatar-circle">S</div>
            </div>
            <span className="floatchat-name">sitthidetsr</span>
          </div>
          <div className="floatchat-header-tabs">
            <button className={`floatchat-tab${tab === "ai" ? " active" : ""}`} onClick={() => setTab("ai")}>✦ AI ผู้ช่วย</button>
            <button className={`floatchat-tab${tab === "live" ? " active" : ""}`} onClick={() => setTab("live")}>💬 แชทสด</button>
          </div>
          <button className="floatchat-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>

        {/* AI Chat Tab */}
        {tab === "ai" && (
          <>
            <div className="floatchat-messages" ref={messagesRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`floatchat-msg ${msg.role}`}>
                  {msg.role === "ai" && (
                    <div className="floatchat-msg-avatar">S</div>
                  )}
                  <div className="floatchat-bubble">{msg.text}</div>
                </div>
              ))}
              {typing && (
                <div className="floatchat-msg ai">
                  <div className="floatchat-msg-avatar">S</div>
                  <div className="floatchat-bubble">
                    <span className="floatchat-typing">
                      <span /><span /><span />
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="floatchat-input-area">
              <input
                className="floatchat-input"
                type="text"
                placeholder="ถามเกี่ยวกับทักษะ, ผลงาน..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button className="floatchat-send" onClick={sendMessage} aria-label="Send">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </>
        )}

        {/* Live Chat Tab */}
        {tab === "live" && (
          <div className="floatchat-livechat">
            <div className="floatchat-live-icon">💬</div>
            <h4 className="floatchat-live-title">แชทสด</h4>
            <p className="floatchat-live-desc">ขณะนี้ยังไม่มีเจ้าหน้าที่ออนไลน์<br />กรุณาส่งอีเมลหรือติดต่อผ่านช่องทางอื่น</p>
            <a href="/contact" className="floatchat-live-btn">ไปที่หน้า Contact →</a>
          </div>
        )}
      </div>

      {/* Float Button */}
      <button
        className="float-chat"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI Chat"
      >
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}
