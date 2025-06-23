"use client";

import styles from "./FrontPage.module.css";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState, useRef, useEffect } from "react";

export default function FrontPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const burgerRef = useRef(null);

  useEffect(() => {
    if ((menuOpen || closing) && burgerRef.current) {
      const rect = burgerRef.current.getBoundingClientRect();
      const root = document.documentElement;
      root.style.setProperty("--burger-top", `${rect.top + rect.height / 2}px`);
      root.style.setProperty(
        "--burger-left",
        `${rect.left + rect.width / 2}px`
      );
    }
  }, [menuOpen, closing]);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 400);
  };

  return (
    <div className={styles.wrapper}>
      <Image
        src="/Home.jpg"
        alt="background"
        fill
        className={styles.bg}
        priority
      />

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/Logo_Home.svg"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => {
            if (menuOpen) closeMenu();
            else setMenuOpen(true);
          }}
          ref={burgerRef}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>

        <div className={styles.menu}>
          <Link to="service" smooth={true} duration={600}>
            Our Service
          </Link>
          <Link to="team" smooth={true} duration={600}>
            Our Team
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            className={styles.contact}
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {(menuOpen || closing) && (
        <div className={styles.overlay} onClick={closeMenu}>
          <div
            className={`${styles.overlayBackground} ${
              closing ? styles.shrink : ""
            }`}
          />
          {menuOpen && !closing && (
            <div className={styles.overlayMenu}>
              <Link to="service" smooth duration={600} onClick={closeMenu}>
                Our Service
              </Link>
              <Link to="team" smooth duration={600} onClick={closeMenu}>
                Our Team
              </Link>
              <Link
                to="contact"
                smooth
                duration={600}
                className={styles.contact}
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      )}

      <main className={styles.content}>
        <p>
          We're a passionate team of digital design experts dedicated to helping
          your business stand out. From building your brand to boosting your
          online presence, we craft bold, effective solutions that make your
          business shine.
        </p>
      </main>

      <div className={styles.scrollHint}>
        Scroll down to discover how we can help you grow.
      </div>
    </div>
  );
}
