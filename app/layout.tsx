import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { siteMetadataConfig } from "@/constants";

const inter = Inter({ subsets: ["latin"] });
const cinzel_decorative = Cinzel_Decorative({
  weight: ["400" , "700" , "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
});

export const metadata: Metadata = {
  title: "Sabarish - Portfolio",
  description: "Sabarish is a Next.js developer based in Kerala, India.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sabarish",
    title:
      "Sabarish - Portfolio",
    description:
      "Sabarish is a Next.js developer based in Kerala, India.",
    images: siteMetadataConfig.ogImage,
    url: "https://sabarishs.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sabarish - Portfoio",
    description:
      "Sabarish is a Next.js developer based in Kerala, India.",
    images: siteMetadataConfig.ogImage,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cinzel_decorative.variable}>
        <div className="max-sm:hidden">
          <Cursor />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
