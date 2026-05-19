"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./blog.module.css";

export default function BlogClient({ posts }) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return posts;
    }

    return posts.filter((post) => {
      const searchableText = [
        post.title,
        post.category,
        post.excerpt,
        post.readTime,
        ...post.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(search);
    });
  }, [posts, query]);

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(date));

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <h1>BLOG</h1>
            <p>
              Practical notes on branding, websites, SEO, digital marketing,
              and software.
            </p>
          </div>

          <Link href="/" className={styles.back}>
            <span className={styles.backArrow}>←</span> BACK
          </Link>
        </motion.header>

        <motion.div
          className={styles.searchBar}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <label htmlFor="blog-search">Search articles</label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by topic, category, or keyword"
          />
        </motion.div>

        <div className={styles.metaRow}>
          <span>
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
          </span>

          {query && (
            <button type="button" onClick={() => setQuery("")}>
              Clear search
            </button>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div className={styles.list}>
            {filteredPosts.map((post, index) => (
              <motion.div
                className={styles.cardWrap}
                key={post.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link href={`/blog/${post.slug}`} className={styles.card}>
                  {post.cover && (
                    <div className={styles.thumbnail}>
                      <Image
                        src={post.cover}
                        alt={`${post.title} cover image`}
                        fill
                        sizes="(max-width: 768px) 100vw, 280px"
                      />
                    </div>
                  )}

                  <div className={styles.cardBody}>
                    <div className={styles.cardTop}>
                      <span className={styles.category}>{post.category}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>

                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>

                    <div className={styles.cardBottom}>
                      <span>{post.readTime}</span>
                      <div className={styles.tags}>
                        {post.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>No articles found</h2>
            <p>Try searching for branding, website, SEO, software, or content.</p>
          </div>
        )}
      </section>
    </main>
  );
}
