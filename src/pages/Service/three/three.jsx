"use client";

import styles from "./three.module.css";
import Image from "next/image";

export default function Three() {
  return (
    <section className={styles.section}>
      <div className={styles.hand}>
        <Image
          src="/Hand2.svg"
          alt="Hand with Magnifier"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className={styles.heading}>
        <div className={styles.white}>BRAND IDENTITY</div>
        <div className={styles.purple}>WEBSITE / SEO</div>
        <div className={styles.white}>SOCIAL MEDIA</div>
      </div>

      {/* 中间 icon + paragraph */}
      <div className={styles.content}>
        <div className={styles.iconRow}>
          <div className={styles.icon}>
            <Image
              src="/Quote_White.svg"
              alt="Chat Icon 1"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src="/Quote_White.svg"
              alt="Chat Icon 2"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <p className={styles.paragraph}>
          We design and build websites that not only look great but perform
          seamlessly. From initial wireframes to final launch, we create
          user-focused, responsive sites tailored to your brand and business
          goals. Every site we build is optimised for speed, accessibility, and
          mobile experience. Our SEO foundations ensure your website is
          discoverable, helping you rank higher and reach the right audience.
          Whether it’s a new build or a redesign, we deliver websites that are
          ready to grow with you.
        </p>
      </div>
    </section>
  );
}
