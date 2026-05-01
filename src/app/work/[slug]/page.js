import { notFound } from "next/navigation";
import { works } from "@/data/works";
import WorkDetailClient from "./WorkDetailClient";
import Footer from "@/component/Footer/footer";

const siteUrl = "https://socialcanvas.com.au";
const siteName = "Social Canvas";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const work = works.find((item) => item.slug === slug);

  if (!work) {
    return {
      title: "Project Not Found",
    };
  }

  const description =
    work.description?.[0] ||
    `${work.title} project case study, including brand identity, website design and digital design work.`;

  return {
    title: `${work.title} | Our Work`,
    description,
    alternates: {
      canonical: `/work/${work.slug}`,
    },
    openGraph: {
      title: `${work.title} | Our Work`,
      description,
      url: `/work/${work.slug}`,
      siteName,
      type: "article",
      images: [
        {
          url: work.cover || work.logo,
          width: 1200,
          height: 630,
          alt: `${work.title} project preview`,
        },
      ],
    },
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;

  const work = works.find((item) => item.slug === slug);

  if (!work) {
    notFound();
  }

  const workSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.title,
    description:
      work.description?.join(" ") || `${work.title} project case study.`,
    url: `${siteUrl}/work/${work.slug}`,
    image: `${siteUrl}${work.cover || work.logo}`,
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workSchema),
        }}
      />

      <WorkDetailClient work={work} />
      <Footer />
    </>
  );
}
