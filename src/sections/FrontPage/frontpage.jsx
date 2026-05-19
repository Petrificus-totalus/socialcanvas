"use client";

import styles from "./FrontPage.module.css";
import Image from "next/image";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInLeft } from "@/constant";

export default function FrontPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const burgerRef = useRef(null);
  const contentRef = useRef(null);
  const hintRef = useRef(null);

  const menuItems = [
    { label: "Our Service", to: "scroll_service", type: "scroll" },
    { label: "Our Team", to: "scroll_team", type: "scroll" },
    { label: "Our Work", to: "/work", type: "page" },
    { label: "Blog", to: "/blog", type: "page" },
    { label: "FAQ", to: "/faq", type: "page" },
    { label: "Contact Us", to: "scroll_contact", type: "scroll" },
  ];

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

        <div className={styles.menu}>
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`${styles.menuItem} ${
                hoveredItem === item.label ||
                (!hoveredItem && item.label === "Contact Us")
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={styles.jellyBg}></div>

              {item.type === "scroll" ? (
                <ScrollLink to={item.to} smooth duration={600}>
                  {item.label}
                </ScrollLink>
              ) : (
                <NextLink href={item.to}>{item.label}</NextLink>
              )}
            </div>
          ))}
        </div>

        {/* 汉堡按钮 */}
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          ref={burgerRef}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {(menuOpen || closing) && (
        <div className={styles.overlay} onClick={closeMenu}>
          <div
            className={`${styles.overlayBackground} ${
              closing ? styles.shrink : ""
            }`}
          />

          {menuOpen && !closing && (
            <div className={styles.overlayMenu}>
              {menuItems.map((item) =>
                item.type === "scroll" ? (
                  <ScrollLink
                    key={item.label}
                    to={item.to}
                    smooth
                    duration={600}
                    className={
                      item.label === "Contact Us" ? styles.contact : ""
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <NextLink key={item.label} href={item.to} onClick={closeMenu}>
                    {item.label}
                  </NextLink>
                )
              )}
            </div>
          )}
        </div>
      )}

      <main className={styles.contentWrapper}>
        <div className={styles.content} ref={contentRef}>
          <motion.h1 className={styles.headline} {...fadeInLeft()}>
            WE DESIGN BRANDS<br />THAT GET NOTICED
          </motion.h1>
          <motion.span className={styles.tagline} {...fadeInLeft()}>
            Branding · Web Design · Digital Marketing
          </motion.span>
          <motion.p className={styles.description} {...fadeInLeft()}>
            A Canberra-based creative agency helping small businesses
            and startups stand out with bold, effective design.
          </motion.p>
        </div>
      </main>

      {/* 向下箭头 */}
      <div className={styles.scrollArea}>
        <div className={styles.hintWrapper}>
          <motion.div
            className={styles.scrollHint}
            ref={hintRef}
            {...fadeInLeft()}
          >
            See our services, team, and recent work
          </motion.div>
        </div>

        <div className={styles.arrow}></div>
      </div>
    </div>
  );
}
