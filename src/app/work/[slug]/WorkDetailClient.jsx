"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/constant";
import styles from "./detail.module.css";

export default function WorkDetailClient({ work }) {
  const backgroundColor = work.backgroundColor || "#ffffff";
  const titleColor = work.titleColor || "#000000";

  const isDark =
    backgroundColor.toLowerCase() === "#000" ||
    backgroundColor.toLowerCase() === "#000000";

  return (
    <main
      className={`${styles.page} ${isDark ? styles.dark : styles.light}`}
      style={{ backgroundColor }}
    >
      <section className={styles.container}>
        <header className={styles.header}>
          <h1 style={{ color: titleColor }}>{work.title}</h1>

          <Link href="/work" className={styles.back}>
            &lt; OUR WORK
          </Link>
        </header>

        <section className={styles.intro}>
          <div className={styles.text}>
            {work.description.map((paragraph, index) => (
              <motion.p key={index} {...fadeInUp(0.1 * index)}>
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div className={styles.logoBox} {...fadeInUp(0.2)}>
            <Image
              src={work.logo}
              alt={`${work.title} logo`}
              width={420}
              height={260}
              className={styles.logo}
            />
          </motion.div>
        </section>

        <section className={styles.gallery}>
          {work.images.map((image, index) => (
            <motion.div
              className={styles.imageBox}
              key={index}
              {...fadeInUp(0.1 * index)}
            >
              <Image
                src={image}
                alt={`${work.title} project image ${index + 1}`}
                width={800}
                height={520}
                className={styles.projectImage}
              />
            </motion.div>
          ))}
        </section>
      </section>
    </main>
  );
}
