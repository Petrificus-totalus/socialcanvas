"use client";

import Image from "next/image";
import styles from "./one.module.css";
import { Link } from "react-scroll";

export default function One() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/service.jpg" // 替换为你的图片文件名
        alt="Service Background"
        fill
        className={styles.bg}
        priority
      />
      <div className={styles.text}>
        <Link to="two" smooth={true} duration={500} className={styles.link}>
          BRAND IDENTITY
        </Link>
        <Link to="three" smooth={true} duration={500} className={styles.link}>
          WEBSITE / SEO
        </Link>
        <Link to="four" smooth={true} duration={500} className={styles.link}>
          SOCIAL MEDIA
        </Link>
      </div>
    </div>
  );
}
