"use client";

import styles from "./three.module.css";
import Image from "next/image";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { fadeIn } from "@/constant";

export default function Three() {
  const ref = useRef(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 30%"], // 滚到页面占据视口约 70% 开始到达终点
  });

  const handX = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      if (v >= 1) {
        controls.start({
          rotate: [0, -6, 6, -4, 4, -2, 2, 0],
          transition: { duration: 1, ease: "easeInOut" },
        });
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, controls]);

  return (
    <section className={styles.section} id="three" ref={ref}>
      <motion.div
        className={styles.hand}
        style={{ x: handX }}
        animate={controls}
      >
        <Image
          src="/Hand2.svg"
          alt="Hand with Magnifier"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </motion.div>

      <div className={styles.heading}>
        <div className={styles.white}>BRAND IDENTITY</div>
        <div className={styles.purple}>WEBSITE / SEO</div>
        <div className={styles.white}>SOCIAL MEDIA</div>
      </div>

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

        <motion.p className={styles.paragraph} {...fadeIn()}>
          We design and build websites that not only look great but perform
          seamlessly. From initial wireframes to final launch, we create
          user-focused, responsive sites tailored to your brand and business
          goals. Every site we build is optimised for speed, accessibility, and
          mobile experience. Our SEO foundations ensure your website is
          discoverable, helping you rank higher and reach the right audience.
          Whether it's a new build or a redesign, we deliver websites that are
          ready to grow with you.
        </motion.p>
      </div>
    </section>
  );
}
