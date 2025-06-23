"use client";

import styles from "./four.module.css";
import Image from "next/image";

export default function Four() {
  return (
    <section className={styles.section}>
      <div className={styles.hand}>
        <Image
          src="/Hand3.svg"
          alt="Hand with Magnifier"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className={styles.heading}>
        <div className={styles.purple}>BRAND IDENTITY</div>
        <div className={styles.purple}>WEBSITE / SEO</div>
        <div className={styles.white}>SOCIAL MEDIA</div>
      </div>

      {/* 中间 icon + paragraph */}
      <div className={styles.content}>
        <div className={styles.iconRow}>
          <div className={styles.icon}>
            <Image
              src="/Quote_Pink.svg"
              alt="Chat Icon 1"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src="/Quote_Pink.svg"
              alt="Chat Icon 2"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src="/Quote_Pink.svg"
              alt="Chat Icon 3"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <p className={styles.paragraph}>
          We help brands show up, stand out, and stay consistent across the
          platforms that matter most. Our social media management services cover
          strategy, content creation, scheduling, community engagement, and
          performance tracking. Whether you’re looking to build awareness, drive
          traffic, or grow a loyal following, we tailor our approach to align
          with your goals and voice. Let us handle the day-to-day, so you can
          focus on running your business while your online presence thrives.
        </p>
      </div>
    </section>
  );
}
