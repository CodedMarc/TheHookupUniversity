import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Hook Up Barber University",
  description: "The Hook Up University was founded to provide aspiring barbers with professional training that focuses on both technical skills and business knowledge. Our approach prepares students for successful careers in the barbering industry.",
};

const favicons = [
  { rel: "apple-touch-icon", sizes:"180x180", href: "/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
  { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
  { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

const renderFavicons = () => {
  return favicons.map((favicon) => (
    <link
      key={favicon.href}
      rel={favicon.rel}
      sizes={favicon.sizes}
      href={favicon.href}
      type={favicon.type}
    />
  ));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {renderFavicons()}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
