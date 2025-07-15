import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/layout/TopNavbar";
import BottomNavbar from "@/layout/BottomNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Attendance App",
  description: "Track student attendance efficiently",
  themeColor: "#4A148C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="https://www.oplyx.tech/oplyxlogo2.svg"
        />
        <meta name="theme-color" content="#000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <TopNavbar />
        {children}
        <BottomNavbar />
      </body>
    </html>
  );
}
