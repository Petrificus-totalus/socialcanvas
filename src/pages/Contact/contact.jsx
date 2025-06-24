"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import { fadeInLeft } from "@/constant";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Enquiry from ${form.name}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0ABusiness: ${form.business}%0D%0AEnquiry: ${form.enquiry}`;
    window.location.href = `mailto:your@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <section className={styles.section}>
      <Image
        src="/contact.jpg"
        alt="background"
        fill
        className={styles.bg}
        priority
      />

      <motion.h2 className={styles.title} {...fadeInLeft()}>
        GET IN TOUCH
      </motion.h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.column}>
          <motion.input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            {...fadeInLeft()}
          />
          <motion.input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            {...fadeInLeft(0.1)}
          />
        </div>

        <div className={styles.column}>
          <motion.input
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            {...fadeInLeft(0.1)}
          />
          <motion.input
            name="business"
            placeholder="Your Business"
            value={form.business}
            onChange={handleChange}
            {...fadeInLeft(0.15)}
          />
          <motion.textarea
            name="enquiry"
            placeholder="Your Enquiry"
            rows={5}
            value={form.enquiry}
            onChange={handleChange}
            {...fadeInLeft(0.15)}
          />
          <motion.button
            type="submit"
            className={styles.submit}
            {...fadeInLeft(0.15)}
          >
            SUBMIT
          </motion.button>
        </div>
      </form>
    </section>
  );
}
