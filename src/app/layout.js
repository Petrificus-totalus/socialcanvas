import "./globals.css";
import Favicon from "/public/favicon.svg";

export const metadata = {
  title: "Social Canvas",
  description: "Social Canvas",
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
      <body>{children}</body>
    </html>
  );
}
