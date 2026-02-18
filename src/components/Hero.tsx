"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />

      <div className="hero-content">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hero-tag"
        >
          Available for work · 2026
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hero-name"
        >
          Sitthidet<br />
          <span className="line2">Seerueng.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hero-sub"
        >
          นักพัฒนา · นักออกแบบ · IT Enthusiast ผู้สร้างประสบการณ์ดิจิทัลที่น่าจดจำ ด้วยเทคโนโลยีและความคิดสร้างสรรค์
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hero-actions"
        >
          <a href="#portfolio" className="btn-primary">ดูผลงาน →</a>
          <a href="#contact" className="btn-outline">ติดต่อฉัน</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hero-stats"
        >
          <div className="stat-item">
            <div className="stat-num">30+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2+</div>
            <div className="stat-label">Years Exp.</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100%</div>
            <div className="stat-label">Passion</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="scroll-indicator"
      >
        <p>Scroll</p>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
