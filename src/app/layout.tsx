import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import Carecature from "@/components/ui/Carecature";
import SocialMediaSidebar from "@/components/SocialMediaSidebar";
import GoogleTagManagerScript from "@/components/GoogleTagManagerScript";
import GoogleTagManagerNoscript from "@/components/GoogleTagManagerNoScript";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rakesh Bansal - Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="manifest" href="/manifest.json" />
        <GoogleTagManagerScript/>
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
      <GoogleTagManagerNoscript/>
        <header>
          <Navbar />
        </header>

        <main className="pt-[64px] lg:pt-[80px] overflow-hidden">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        <Carecature />
        <SocialMediaSidebar />
      </body>
    </html>
  );
}
