import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hari Krishna | Web Application Developer",
  description:
    "Portfolio of Hari Krishna – Web Application Developer skilled in Next.js, Nest.js, Java, and modern databases. 2+ years of experience building scalable web apps.",
  keywords: ["Hari Krishna", "Web Developer", "Next.js", "Nest.js", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Hari Krishna", url: "https://github.com/Harikrishna656" }],
  openGraph: {
    title: "Hari Krishna | Web Application Developer",
    description: "Motivated developer skilled in Next.js, Nest.js, Java, and modern databases.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a0a0f] text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
