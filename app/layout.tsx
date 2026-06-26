import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stromup — Built to Rise",
  description: "Stromup crafts high-performance websites, apps, and dev tools for ambitious clients.",
  keywords: ["web development", "mobile apps", "dev tools", "agency", "stromup"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
