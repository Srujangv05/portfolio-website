import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingGeometry from "@/components/FloatingGeometry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srujan G V | Software Engineer",
  description:
    "Portfolio of Srujan G V — Software Engineer specializing in backend development, building scalable platforms and applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        <Navbar />
        <FloatingGeometry />
        <main>{children}</main>
      </body>
    </html>
  );
}
