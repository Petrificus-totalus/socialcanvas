import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/component/Footer/footer";
import { publishedBlogPosts } from "@/data/blogPosts";
import styles from "./detail.module.css";

const siteUrl = "https://www.socialcanvas.com.au";

function getPost(slug) {
  return publishedBlogPosts.find((post) => post.slug === slug);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function generateStaticParams() {
  return publishedBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      siteName: "Social Canvas",
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [{ url: `${siteUrl}${post.cover}` }] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    articleSection: post.category,
    url: `${siteUrl}/blog/${post.slug}`,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Social Canvas",
      url: siteUrl,
    },
    image: post.images?.map((image) => `${siteUrl}${image.src}`) || [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <main className={styles.page}>
        <article className={styles.article}>
          <header className={styles.header}>
            <Link href="/blog" className={styles.back}>
              <span className={styles.backArrow}>←</span> BACK TO BLOG
            </Link>

            <div className={styles.meta}>
              <span>{post.category}</span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime}</span>
            </div>

            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </header>

          {post.cover && (
            <div className={styles.heroImage}>
              <Image
                src={post.cover}
                alt={`${post.title} hero image`}
                fill
                priority
                sizes="(max-width: 920px) 100vw, 920px"
              />
            </div>
          )}

          <div className={styles.content}>
            {post.sections?.length
              ? post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))
              : post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
          </div>

          {post.images?.length > 0 && (
            <section className={styles.gallery} aria-label="Article images">
              {post.images.map((image, index) => (
                <figure className={styles.imageCard} key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <figcaption>{image.alt}</figcaption>
                </figure>
              ))}
            </section>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
