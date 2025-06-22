"use client";

import Image from "next/image";
import styles from "./one.module.css";

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
        <p>BRAND IDENTITY</p>
        <p>WEBSITE / SEO</p>
        <p>SOCIAL MEDIA</p>
      </div>
    </div>
  );
}
