import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* 左侧 Logo */}
      <div className={styles.logo}>
        <img src="/Logo_White.svg" alt="Logo" />
      </div>

      <div className={styles.contactInfo}>
        <p>Level 2, 40 Marcus Clarke Street</p>
        <p>Canberra, ACT 2600</p>
      </div>
    </div>
  );
};

export default Footer;
