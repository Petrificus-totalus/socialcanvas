"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./faq.module.css";

const faqs = [
  {
    question: "What is included in a brand identity design package?",
    answer:
      "A brand identity design package usually includes logo design, colour palette selection, typography, brand elements, and a style guide. It creates a consistent visual system that can be used across websites, social media, print materials, signage, and marketing assets.",
  },
  {
    question: "Why is professional logo design important for a business?",
    answer:
      "Professional logo design helps a business look credible, memorable, and consistent. A well-designed logo builds trust, improves brand recognition, and creates a strong first impression across digital and print platforms.",
  },
  {
    question: "Can you redesign an existing logo?",
    answer:
      "Yes. We can refresh an existing logo while keeping recognisable elements of the original brand. A logo redesign is often a good option for businesses that want a more modern and polished look without losing their identity.",
  },
  {
    question: "How long does a logo design project take?",
    answer:
      "A logo design project usually takes between two and four weeks, depending on the project scope, feedback rounds, and final deliverables. Larger branding projects may take longer if they include a full visual identity system.",
  },
  {
    question: "What file formats do I receive with a logo design?",
    answer:
      "Logo design files are usually supplied in a range of formats for print and digital use, including AI, EPS, PDF, PNG, and JPG. This ensures your logo can be used across websites, social media, signage, stationery, and promotional materials.",
  },
  {
    question: "What is a brand style guide?",
    answer:
      "A brand style guide is a document that explains how to use your logo, colours, fonts, and brand elements correctly. It helps maintain consistency across all business communications, marketing materials, and digital content.",
  },
  {
    question: "Why does my business need a professional website?",
    answer:
      "A professional website helps your business appear trustworthy, accessible, and easy to find online. It gives potential clients a clear understanding of your services and supports long-term visibility through search engines like Google.",
  },
  {
    question: "How long does it take to design a business website?",
    answer:
      "Most business website design projects take between four and eight weeks, depending on the size of the site, the amount of content, and the required functionality. More complex websites may require additional development time.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. A modern business website should be fully responsive, meaning it works well across desktop, tablet, and mobile devices. Mobile-friendly website design is also important for user experience and Google search rankings.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. Website redesign services can improve the appearance, structure, usability, and performance of an existing site. This is useful when a website feels outdated, hard to manage, or no longer reflects the quality of your business.",
  },
  {
    question: "Is SEO included in website design?",
    answer:
      "Basic SEO is usually included as part of website design, including page titles, meta descriptions, heading structure, image optimisation, and keyword-friendly page layout. This gives your website a stronger foundation for Google indexing.",
  },
  {
    question: "Can I update my website myself after launch?",
    answer:
      "Yes. Most business websites are built with an easy-to-use content management system, allowing you to update text, images, blog posts, and basic content without needing ongoing technical support.",
  },
  {
    question: "Can custom software integrate with existing systems?",
    answer:
      "Yes. Custom software can often be integrated with existing business tools such as CRMs, payment systems, booking platforms, databases, and internal management systems. Integration helps improve efficiency and reduce manual work.",
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1>Frequently Asked Questions</h1>

          <Link href="/" className={styles.back}>
            &lt; BACK
          </Link>
        </motion.header>

        <div className={styles.faqList}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className={styles.faqItem}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <button
                  className={`${styles.question} ${
                    isOpen ? styles.active : ""
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className={styles.answerWrap}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className={styles.answer}>
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
