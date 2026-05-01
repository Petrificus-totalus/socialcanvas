"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/constant";
import styles from "./detail.module.css";

export default function WorkDetailClient({ work }) {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>{work.title}</h1>

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

          <div className={styles.logoBox}>
            <Image
              src={work.logo}
              alt={`${work.title} logo`}
              width={420}
              height={260}
              className={styles.logo}
            />
          </div>
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
