import { publishedBlogPosts } from "@/data/blogPosts";

export default function sitemap() {
  const blogRoutes = publishedBlogPosts.map((post) => ({
    url: `https://www.socialcanvas.com.au/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: "https://www.socialcanvas.com.au",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.socialcanvas.com.au/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...blogRoutes,
  ];
}
