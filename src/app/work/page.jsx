import Link from "next/link";
import Image from "next/image";
import { works } from "@/data/works";
import styles from "./work.module.css";
import Footer from "@/component/Footer/footer";

export const metadata = {
  title: "Our Work | Brand Design, Website Design & Digital Projects",
  description:
    "Explore our portfolio of brand identity design, logo design, website design, social media design, print design and custom digital projects.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | Brand Design, Website Design & Digital Projects",
    description:
      "View selected branding, website, logo, print and digital design projects created for businesses across different industries.",
    url: "/work",
    siteName: "Social Canvas",
    type: "website",
  },
};

export default function WorkPage() {
  const workSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Work",
    description:
      "A portfolio collection of brand identity, website design, logo design, print design and digital projects.",
    mainEntity: works.map((work) => ({
      "@type": "CreativeWork",
      name: work.title,
      url: `/work/${work.slug}`,
      image: work.cover,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workSchema),
        }}
      />

      <main className={styles.page}>
        <section className={styles.container}>
          <div className={styles.header}>
            <h1>OUR WORK</h1>
            <Link href="/" className={styles.back}>
              &lt; BACK
            </Link>
          </div>

          <div className={styles.grid}>
            {works.map((work, index) => (
              <Link
                href={`/work/${work.slug}`}
                className={styles.card}
                key={work.slug}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Image
                  src={work.cover}
                  alt={`${work.title} project preview`}
                  fill
                  className={styles.image}
                />

                <div className={styles.overlay}>
                  <span>{work.title}</span>
                  <p>View Project</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
