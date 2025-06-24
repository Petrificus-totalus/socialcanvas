"use client";

import styles from "./FrontPage.module.css";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState, useRef, useEffect } from "react";

export default function FrontPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const burgerRef = useRef(null);

  const jellyRef = useRef(null);
  const [jellyPos, setJellyPos] = useState({ top: 0, left: 0 });
  const [originalPos, setOriginalPos] = useState({ top: 0, left: 0 });

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

  useEffect(() => {
    const contactEl = document.querySelector(".contact-link");
    if (contactEl && jellyRef.current) {
      const rect = contactEl.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const left = rect.left + window.scrollX;
      setJellyPos({ top, left });
      setOriginalPos({ top, left });
    }
  }, []);
  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 400);
  };

  const moveJelly = (targetId) => {
    const link = document.getElementById(targetId);
    console.log(link);

    if (!link || !jellyRef.current) return;
    const rect = link.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    setJellyPos({ top, left });
    jellyRef.current.classList.add(styles.bounce);
    setTimeout(() => {
      jellyRef.current.classList.remove(styles.bounce);
    }, 600);
  };

  const resetJelly = () => {
    setJellyPos(originalPos);
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

        <div className={styles.menu} onMouseLeave={resetJelly}>
          <div
            ref={jellyRef}
            className={styles.jellyBg}
            style={{ top: jellyPos.top, left: jellyPos.left }}
          />
          <div
            id="service"
            className={styles.menuItem}
            onMouseEnter={() => moveJelly("service")}
          >
            <Link to="service" smooth duration={600}>
              Our Service
            </Link>
          </div>
          <div
            id="team"
            className={styles.menuItem}
            onMouseEnter={() => moveJelly("team")}
          >
            <Link to="team" smooth duration={600}>
              Our Team
            </Link>
          </div>
          <div
            id="contact"
            className={styles.menuItem}
            onMouseEnter={() => moveJelly("contact")}
          >
            <Link
              to="contact"
              smooth
              duration={600}
              className={`${styles.contact} contact-link`}
            >
              Contact Us
            </Link>
          </div>
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
