"use client";

import styles from "./cs.module.css";
import Image from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeIn } from "@/constant";

export default function CS() {
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
    <section className={styles.section} id="section_stationery">
      <motion.div
        className={styles.hand}
        ref={handRef}
        initial={{ x: "-30vw" }}
        animate={controls}
        style={{ x }}
      >
        <Image
          src="/cs.svg"
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
        <div className={styles.purple}>IT PROGRAM</div>
        <div className={styles.white}>STATIONERY</div>
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
          <div className={styles.icon}>
            <Image
              src="/Quote_Pink.svg"
              alt="Chat Icon 5"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <motion.p className={styles.paragraph} {...fadeIn()}>
          We also offer custom branded stationery and promotional products to
          help strengthen your business identity across everyday touchpoints.
          Our services include branded coffee cups, pens, T-shirts, stamps,
          banners, mouse pads, acrylic fridge magnets and more—ideal for
          corporate use, events, marketing campaigns, and client gifts. With a
          focus on high-quality materials and consistent brand presentation, our
          custom business stationery solutions help reinforce professionalism,
          improve brand recognition, and reflect the quality of your services.
        </motion.p>
      </div>
    </section>
  );
}
