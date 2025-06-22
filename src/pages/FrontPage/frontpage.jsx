"use client";

import styles from "./FrontPage.module.css";
import Image from "next/image";
import { Link } from "react-scroll";

export default function FrontPage() {
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
