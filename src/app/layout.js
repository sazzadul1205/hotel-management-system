// app/layout.js

// Global Styles
import "./globals.css";

// Shared
import Footer from "@/Shared/Footer/Footer";
import Navbar from "@/Shared/Navbar/Navbar";
import ToTopButton from "@/Shared/ToTopButton/ToTopButton";

// Providers
import QueryProvider from "@/providers/QueryProvider";

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
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        <Navbar />

        <QueryProvider className="flex flex-col min-h-screen bg-white">
          {children}
        </QueryProvider>
        <Footer />

        <ToTopButton />
      </body>
    </html>
  );
}
