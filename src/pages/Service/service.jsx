"use client";

import Four from "./four/four";
import One from "./one/one";
import Three from "./three/three";
import Two from "./two/two";
import Head from "next/head";

export default function Service() {
  return (
    <>
      <Head>
        <title>Our Services | Canberra Website Design, SEO & Software</title>
        <meta name="description" content="Discover our Canberra-based IT services: website design, development, SEO, and software solutions for your business growth." />
        <meta name="keywords" content="canberra, IT, website, design, develop, seo, software, services" />
        <meta property="og:title" content="Our Services | Canberra Website Design, SEO & Software" />
        <meta property="og:description" content="Explore our IT services in Canberra: website design, SEO, software development and more." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/service.jpg" />
        <meta property="og:url" content="https://yourdomain.com/service" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Canberra Website Design, SEO & Software" />
        <meta name="twitter:description" content="Explore our IT services in Canberra: website design, SEO, software development and more." />
        <meta name="twitter:image" content="/service.jpg" />
      </Head>
      <One />
      <Two />
      <Three />
      <Four />
    </>
  );
}
