// app/layout.js

// Global Styles
import Navbar from "@/Shared/Navbar/Navbar";
import "./globals.css";

// Fonts
import { Geist, Geist_Mono } from "next/font/google";

// Font - Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Font - Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "DA Hotel",
  description: "A hotel management system built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
