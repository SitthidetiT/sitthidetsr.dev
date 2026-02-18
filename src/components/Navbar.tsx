"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="header-container">
      <nav id="navbar" className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="logo">
          <div className="logo-icon">S</div>
          Sitthidet<span>SR</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/portfolio" className={pathname === "/portfolio" ? "active" : ""}>Portfolio</Link></li>
          <li><Link href="/blog" className={pathname === "/blog" ? "active" : ""}>Blog</Link></li>
          <li><Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
