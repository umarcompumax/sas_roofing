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
  title: "Expert Roofing, Waterproofing & Masonry in Brooklyn & NYC",
  description:
    "SAS Roofing Waterproofing provides expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens. We specialize in roof repair, installation, replacement, basement waterproofing, and masonry services for residential and commercial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light only" />

        {/* SEO Meta */}
        <meta
          name="description"
          content="SAS Roofing Waterproofing provides expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens. We specialize in roof repair, installation, replacement, basement waterproofing, and masonry services for residential and commercial projects."
        />
        <meta
          name="keywords"
          content="Roofing Contractors in Queens, Roofing Contractors Brooklyn, Roofing Contractors Manhattan, Roofing Contractors in Queens, Roofing Contractors Brooklyn, Roofing Contractors Manhattan, Waterproofing Services in Brooklyn, Masonry Services in Brooklyn, Roof Repair Manhattan, Roof Installation Brooklyn, Commercial Roofing in NYC, Waterproofing Brooklyn, Foundation Waterproofing Manhattan"
        />
        <link rel="canonical" href="https://www.sasroofingwaterproofing.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Expert Roofing, Waterproofing & Masonry in Brooklyn & NYC"
        />
        <meta
          property="og:description"
          content="SAS Roofing Waterproofing provides expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens. We specialize in roof repair, installation, replacement, basement waterproofing, and masonry services for residential and commercial projects."
        />
        <meta
          property="og:image"
          content="https://www.sasroofingwaterproofing.com/og-image.jpg"
        />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />
        <meta
          property="og:url"
          content="https://www.sasroofingwaterproofing.com/"
        />
        <meta property="og:site_name" content="SAS Roofing & Waterproofing" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Expert Roofing, Waterproofing & Masonry in Brooklyn & NYC"
        />
        <meta
          name="twitter:description"
          content="SAS Roofing Waterproofing provides expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens. We specialize in roof repair, installation, replacement, basement waterproofing, and masonry services for residential and commercial projects."
        />
        <meta
          name="twitter:image"
          content="https://www.sasroofingwaterproofing.com/og-image.jpg"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              url: "https://www.sasroofingwaterproofing.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.sasroofingwaterproofing.com/search?q={search_term}",
                },
                "query-input": "required name=search_term",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "LocalBusiness",
              name: "SAS Roofing & Waterproofing",
              url: "https://www.sasroofingwaterproofing.com",
              image: "https://www.sasroofingwaterproofing.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "552 Rugby Rd",
                addressLocality: "Brooklyn",
                addressRegion: "NY",
                postalCode: "11230",
                addressCountry: "US",
              },
              telephone: "+13472216549",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
