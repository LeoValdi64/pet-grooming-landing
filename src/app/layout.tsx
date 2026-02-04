import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawfect Grooming | Professional Pet Care & Grooming Services",
  description: "Premium pet grooming services with certified groomers. Bath & brush, full groom, nail trim, teeth cleaning, and spa treatments. Cage-free environment with natural products. Book your appointment today!",
  keywords: "pet grooming, dog grooming, cat grooming, pet spa, nail trimming, teeth cleaning, professional groomers",
  openGraph: {
    title: "Pawfect Grooming | Professional Pet Care & Grooming Services",
    description: "Premium pet grooming services with certified groomers. Cage-free environment with natural products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawfect Grooming | Professional Pet Care",
    description: "Premium pet grooming services with certified groomers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
