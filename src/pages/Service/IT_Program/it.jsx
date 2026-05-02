"use client";

import styles from "./it.module.css";
import Image from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeIn } from "@/constant";

export default function Four() {
  const handRef = useRef(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: handRef,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-30vw", "0vw"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v >= 1) {
        controls.start({
          x: "0vw",
          transition: { duration: 0.6, ease: "easeOut" },
        });
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, controls]);

  return (
    <section className={styles.section} id="four">
      <motion.div
        className={styles.hand}
        ref={handRef}
        initial={{ x: "-30vw" }}
        animate={controls}
        style={{ x }}
      >
        <Image
          src="/Hand3.svg"
          alt="Hand with Magnifier"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </motion.div>

      <div className={styles.heading}>
        <div className={styles.purple}>BRAND IDENTITY</div>
        <div className={styles.purple}>WEBSITE / SEO</div>
        <div className={styles.purple}>SOCIAL MEDIA</div>
        <div className={styles.white}>IT PROGRAM</div>
        <div className={styles.purple}>CUSTOMISED STATIONERY</div>
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
          <div className={styles.icon}>
            <Image
              src="/Quote_Pink.svg"
              alt="Chat Icon 4"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <motion.p className={styles.paragraph} {...fadeIn()}>
          We provide custom enterprise software solutions tailored to the
          specific needs of each business. Supported by our experienced UX
          design team and technical development specialists, we create intuitive
          and scalable digital products including web platforms, mobile apps,
          and desktop software. Our approach focuses on usability, reliability,
          and long-term adaptability, ensuring each solution integrates smoothly
          into existing workflows while supporting future growth.
        </motion.p>
      </div>
    </section>
  );
}
