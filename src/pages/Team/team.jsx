"use client";

import styles from "./team.module.css";
import Image from "next/image";
import { fadeInLeft } from "@/constant";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "KAI",
    role: "Business Director",
    avatar: "/Team_Kai.svg",
  },
  {
    name: "ALEX",
    role: "Creative Director",
    avatar: "/Team_Alex.svg",
  },
  {
    name: "JIN",
    role: "Digital Coordinator",
    avatar: "/Team_Jin.svg",
  },
  {
    name: "KRISTY",
    role: "Graphic Designer",
    avatar: "/Team_kristy.svg",
  },
  {
    name: "LISA",
    role: "Media Specialist",
    avatar: "/Team_Lisa.svg",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <Image
        src="/Team.jpg"
        alt="Background"
        fill
        className={styles.bg}
        priority
      />
      <motion.h2 className={styles.title} {...fadeInLeft()}>
        BEHIND THE MAGIC
      </motion.h2>

      <div className={styles.grid}>
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            className={styles.card}
            {...fadeInLeft(0.1 * i)}
          >
            <div className={styles.avatar}>
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.name}>{member.name}</div>
            <div className={styles.role}>{member.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
