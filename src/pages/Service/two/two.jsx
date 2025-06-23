"use client";

import styles from "./two.module.css";
import Image from "next/image";

export default function Two() {
  return (
    <section className={styles.section}>
      {/* 左上角手的图片 */}
      <div className={styles.hand}>
        <Image
          src="/Hand1.svg"
          alt="Hand with Magnifier"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* 右上角标题区 */}
      <div className={styles.heading}>
        <div className={styles.white}>BRAND IDENTITY</div>
        <div className={styles.purple}>WEBSITE / SEO</div>
        <div className={styles.purple}>SOCIAL MEDIA</div>
      </div>

      {/* 中间 icon + paragraph */}
      <div className={styles.content}>
        <div className={styles.icon}>
          <Image
            src="/Quote_Pink.svg"
            alt="Chat Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className={styles.paragraph}>
          Your brand identity is the foundation of how your business is seen and
          remembered. We create distinctive, strategically driven identities
          that go beyond aesthetics—reflecting your values, voice, and vision.
          From logos and colour systems to typography, imagery, and brand tone,
          we develop complete identity systems that ensure consistency and
          clarity across all platforms. Whether you’re starting fresh or
          refreshing an existing brand, we help you make a lasting impression.
        </p>
      </div>
    </section>
  );
}
