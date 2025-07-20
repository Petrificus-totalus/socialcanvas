"use client";

import styles from "./FrontPage.module.css";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInLeft } from "@/constant";
import Head from "next/head";

export default function FrontPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const burgerRef = useRef(null);
  const contentRef = useRef(null);
  const hintRef = useRef(null);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 400);
  };

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
    const handleScroll = () => {
      console.log(contentRef.current.style.transform);

      const y = window.scrollY;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${y * -1}px)`;
      }
      if (hintRef.current) {
        hintRef.current.style.transform = `translateX(${y}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Canberra IT Website Design & SEO | Social Canvas</title>
        <meta name="description" content="Social Canvas - Canberra IT experts in website design, development, SEO, and software solutions. Elevate your business online with our creative team." />
        <meta name="keywords" content="canberra, IT, website, design, develop, seo, software" />
        <meta property="og:title" content="Canberra IT Website Design & SEO | Social Canvas" />
        <meta property="og:description" content="Canberra-based IT team for website design, development, SEO, and software. Grow your business with Social Canvas." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Home.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Canberra IT Website Design & SEO | Social Canvas" />
        <meta name="twitter:description" content="Canberra-based IT team for website design, development, SEO, and software. Grow your business with Social Canvas." />
        <meta name="twitter:image" content="/Home.jpg" />
      </Head>
      <div className={styles.wrapper}>
        <Image
          src="/Home.jpg"
          alt="background"
          fill
          className={styles.bg}
          priority
        />

        {/* 顶部导航栏 */}
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
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            ref={burgerRef}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>

          <div className={styles.menu}>
            {["scroll_service", "scroll_team", "scroll_contact"].map(
              (id, index) => (
                <div
                  key={id}
                  className={`${styles.menuItem} ${
                    hoveredItem === id ||
                    (!hoveredItem && id === "scroll_contact")
                      ? styles.active
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className={styles.jellyBg}></div>
                  <Link to={id} smooth duration={600}>
                    {["Our Service", "Our Team", "Contact Us"][index]}
                  </Link>
                </div>
              )
            )}
          </div>
        </nav>

        {/* 移动端 overlay 菜单 */}
        {(menuOpen || closing) && (
          <div className={styles.overlay} onClick={closeMenu}>
            <div
              className={`${styles.overlayBackground} ${
                closing ? styles.shrink : ""
              }`}
            />
            {menuOpen && !closing && (
              <div className={styles.overlayMenu}>
                <Link
                  to="scroll_service"
                  smooth
                  duration={600}
                  onClick={closeMenu}
                >
                  Our Service
                </Link>
                <Link to="scroll_team" smooth duration={600} onClick={closeMenu}>
                  Our Team
                </Link>
                <Link
                  to="scroll_contact"
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

        {/* 首页正文内容 */}
        <main className={styles.contentWrapper}>
          <div className={styles.content} ref={contentRef}>
            <motion.p {...fadeInLeft()}>
              We're a passionate team of digital design experts dedicated to
              helping your business stand out. From building your brand to
              boosting your online presence, we craft bold, effective solutions
              that make your business shine.
            </motion.p>
          </div>
        </main>

        {/* 向下滚动提示 + 箭头 */}
        <div className={styles.scrollArea}>
          <div className={styles.hintWrapper}>
            <motion.div
              className={styles.scrollHint}
              ref={hintRef}
              {...fadeInLeft()}
            >
              Scroll down to discover how we can help you grow.
            </motion.div>
          </div>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </>
  );
}
