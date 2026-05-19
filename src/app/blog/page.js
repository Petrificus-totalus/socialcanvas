import Footer from "@/component/Footer/footer";
import { publishedBlogPosts } from "@/data/blogPosts";
import BlogClient from "./BlogClient";

const siteUrl = "https://www.socialcanvas.com.au";

export const metadata = {
  title: "Blog | Branding, Website Design, SEO & Software Insights",
  description:
    "Read Social Canvas insights on branding, website design, SEO, digital marketing and custom software for growing businesses.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Branding, Website Design, SEO & Software Insights",
    description:
      "Helpful articles about branding, websites, SEO, digital marketing and software from Social Canvas.",
    url: "/blog",
    siteName: "Social Canvas",
    type: "website",
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Social Canvas Blog",
    description:
      "Insights about branding, website design, SEO, digital marketing and custom software.",
    blogPost: publishedBlogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      articleSection: post.category,
      description: post.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      <BlogClient posts={publishedBlogPosts} />

      <Footer />
    </>
  );
}
