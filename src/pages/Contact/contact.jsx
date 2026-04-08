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
              type="email"
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
              required
              {...fadeInLeft(0.15)}
            />
            <motion.button
              type="submit"
              className={styles.submit}
              disabled={status === "loading"}
              {...fadeInLeft(0.15)}
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
          </div>
        </form>
      </section>
  );
}
