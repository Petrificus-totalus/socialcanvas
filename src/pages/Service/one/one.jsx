"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./one.module.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "@/constant";

const lines = [
  {
    text: "BRAND IDENTITY",
    to: "section_brand",
    direction: "down",
    delay: 0.2,
  },
  { text: "WEBSITE / SEO", to: "section_web", direction: "up", delay: 0.6 },
  {
    text: "SOCIAL MEDIA",
    to: "section_social",
    direction: "up",
    delay: 1,
  },
];

// 计算所有行完成fadeIn动画的最大时间（最后一行延迟 + 动画持续时间）
const MAX_FADEIN_DELAY = Math.max(...lines.map((line) => line.delay)) + 0.5; // 0.5秒是动画持续时间

export default function One() {
  const [scanStarted, setScanStarted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const fadeInTimeout = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            console.log(
              "Section is in view, waiting for fadeIn to complete..."
            );
          }
        });
      },
      {
        threshold: 0.1, // 当10%的元素可见时触发
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (fadeInTimeout.current) {
        clearTimeout(fadeInTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && !scanStarted) {
      // 等待所有行的fadeIn动画完成
      fadeInTimeout.current = setTimeout(() => {
        setScanStarted(true);
        console.log("All fadeIn animations completed, starting scan");
      }, MAX_FADEIN_DELAY * 1000);
    }

    return () => {
      if (fadeInTimeout.current) {
        clearTimeout(fadeInTimeout.current);
      }
    };
  }, [isInView, scanStarted]);

  return (
    <div className={styles.wrapper} ref={sectionRef}>
      <Image
        src="/service.jpg"
        alt="Service Background"
        fill
        className={styles.bg}
        priority
      />

      <div className={styles.text}>
        {lines.map(({ text, to, direction, delay }) => (
          <motion.div key={to} {...fadeIn(direction, delay)}>
            <Link to={to} smooth={true} duration={500} className={styles.link}>
              {text.split("").map((char, i) => {
                const len = text.length;
                const delay = scanStarted
                  ? (() => {
                      if (i === 0) return 0;
                      return 0.1 + (i - 1) * 0.04; // 剩下的快扫
                    })()
                  : 0;

                return (
                  <span
                    key={i}
                    className={`${styles.char} ${
                      scanStarted ? styles.scan : ""
                    }`}
                    style={{ animationDelay: `${delay}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                );
              })}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
