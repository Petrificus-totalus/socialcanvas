"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";

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

      <h2 className={styles.title}>GET IN TOUCH</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.column}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.column}>
          <input
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            name="business"
            placeholder="Your Business"
            value={form.business}
            onChange={handleChange}
          />
          <textarea
            name="enquiry"
            placeholder="Your Enquiry"
            rows={5}
            value={form.enquiry}
            onChange={handleChange}
          />
          <button type="submit" className={styles.submit}>
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
}
