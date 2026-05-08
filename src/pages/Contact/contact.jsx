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

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Your enquiry has been sent successfully.");
      setForm({
        name: "",
        email: "",
        phone: "",
        business: "",
        enquiry: "",
      });
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Failed to send enquiry.");
    }
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
      <div className={styles.overlay} />

      <div className={styles.card}>
        <motion.h2 className={styles.title} {...fadeInLeft()}>
          GET IN TOUCH
        </motion.h2>
        <motion.p className={styles.subtitle} {...fadeInLeft(0.05)}>
          Have a project in mind? We&apos;d love to hear from you.
        </motion.p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <motion.input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            {...fadeInLeft(0.1)}
          />
          <motion.input
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            {...fadeInLeft(0.1)}
          />
          <motion.input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            {...fadeInLeft(0.15)}
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
            placeholder="Tell us about your project..."
            rows={5}
            value={form.enquiry}
            onChange={handleChange}
            required
            className={styles.fullWidth}
            {...fadeInLeft(0.2)}
          />
          <motion.button
            type="submit"
            className={styles.submit}
            disabled={status === "loading"}
            {...fadeInLeft(0.25)}
          >
            {status === "loading" ? "SENDING..." : "SUBMIT"}
          </motion.button>

          {message && (
            <p
              className={
                status === "success"
                  ? styles.successMessage
                  : styles.errorMessage
              }
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
