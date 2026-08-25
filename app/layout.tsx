import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/section/Navbar";
import Footer from "./components/section/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "MKS Industrial Solutions",
    template: "%s | MKS Industrial Solutions",
  },

  description:
    "MKS Industrial Solutions delivers engineered process, evaporation, drying, water treatment and industrial solutions.",

  icons: {
    icon: "/images/mks.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children} <Footer/>
      </body>
    </html>
  );
}
