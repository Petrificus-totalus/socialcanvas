import FrontPage from "@/pages/FrontPage/frontpage";
import Service from "@/pages/Service/service";
import Contact from "@/pages/Contact/contact";
import Team from "@/pages/Team/team";

import Footer from "@/component/Footer/footer";

export const metadata = {
  keywords: [
    "canberra",
    "IT",
    "website",
    "design",
    "develop",
    "seo",
    "software",
    "Social Canvas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Canberra IT Website Design & SEO | Social Canvas",
    description:
      "Canberra-based IT team for website design, development, SEO, and software. Grow your business with Social Canvas.",
    url: "/",
    siteName: "Social Canvas",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/Home.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canberra IT Website Design & SEO | Social Canvas",
    description:
      "Canberra-based IT team for website design, development, SEO, and software. Grow your business with Social Canvas.",
    images: ["/Home.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <section id="frontpage">
        <FrontPage />
      </section>

      <section id="scroll_service">
        <Service />
      </section>
      <section id="scroll_team">
        <Team />
      </section>
      <section id="scroll_contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
