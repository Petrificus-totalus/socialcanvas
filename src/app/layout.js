import "./globals.css";
import Favicon from "/public/favicon.svg";
import VideoWrapper from "./clientwrapper";

const siteUrl = "https://www.socialcanvas.com.au";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Canberra IT Website Design & SEO | Social Canvas",
    template: "%s | Social Canvas",
  },
  description:
    "Social Canvas — Canberra experts in website design, development, SEO, and software solutions. Elevate your business online with our creative team.",
  icons: [{ rel: "icon", url: Favicon.src }],
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VideoWrapper>{children}</VideoWrapper>
      </body>
    </html>
  );
}
