"use client";

import styles from "./two.module.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "@/constant";
import Head from "next/head";

export default function Two() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"], // 进入到视口和滑出时
  });

  // 视差移动：从 -100px 到 0
  const handY = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <>
      <Head>
        <title>Website & SEO | Canberra IT Services</title>
        <meta name="description" content="Professional website design and SEO services in Canberra. Boost your online presence with Social Canvas IT experts." />
        <meta name="keywords" content="canberra, IT, website, design, develop, seo, software, web development" />
        <meta property="og:title" content="Website & SEO | Canberra IT Services" />
        <meta property="og:description" content="Professional website design and SEO services in Canberra. Boost your online presence with Social Canvas IT experts." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/service.jpg" />
        <meta property="og:url" content="https://yourdomain.com/service/two" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website & SEO | Canberra IT Services" />
        <meta name="twitter:description" content="Professional website design and SEO services in Canberra. Boost your online presence with Social Canvas IT experts." />
        <meta name="twitter:image" content="/service.jpg" />
      </Head>
      <section className={styles.section} id="two" ref={ref}>
        {/* 左上角手的图片，加入 motion.div 包裹 */}
        <motion.div className={styles.hand} style={{ y: handY }}>
          <Image
            src="/Hand1.svg"
            alt="Hand with Magnifier"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>

        <div className={styles.heading}>
          <div className={styles.white}>BRAND IDENTITY</div>
          <div className={styles.purple}>WEBSITE / SEO</div>
          <div className={styles.purple}>SOCIAL MEDIA</div>
        </div>

        <div className={styles.content}>
          <div className={styles.icon}>
            <Image
              src="/Quote_Pink.svg"
              alt="Chat Icon"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <motion.p className={styles.paragraph} {...fadeIn()}>
            Your brand identity is the foundation of how your business is seen and
            remembered. We create distinctive, strategically driven identities
            that go beyond aesthetics—reflecting your values, voice, and vision.
            From logos and colour systems to typography, imagery, and brand tone,
            we develop complete identity systems that ensure consistency and
            clarity across all platforms. Whether you’re starting fresh or
            refreshing an existing brand, we help you make a lasting impression.
          </motion.p>
        </div>
      </section>
    </>
  );
}
