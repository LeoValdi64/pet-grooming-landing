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
  title: "Pawfect Grooming | Professional Pet Grooming",
  description: "Professional pet grooming with certified groomers. Bath, full groom, nail trim, teeth cleaning, and spa treatments in a cage-free environment.",
  keywords: "pet grooming, dog grooming, cat grooming, pet spa, nail trimming, teeth cleaning, professional groomers",
  alternates: {
    canonical: "https://pet-grooming-landing.vercel.app",
  },
  openGraph: {
    title: "Pawfect Grooming | Professional Pet Grooming",
    description: "Professional pet grooming with certified groomers. Cage-free environment with natural products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawfect Grooming | Professional Pet Grooming",
    description: "Professional pet grooming with certified groomers.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pawfect Grooming",
              description:
                "Professional pet grooming with certified groomers in a cage-free environment.",
              url: "https://pet-grooming-landing.vercel.app",
              telephone: "+15557295683",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Pet Lane",
                addressLocality: "Petville",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$15-$120",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
