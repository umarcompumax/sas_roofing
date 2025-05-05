export const metadata = {
  title: "Expert Roofing Contractors in Brooklyn | Roof Repair & Installation",
  description:
    "Looking for reliable roofing contractors in Brooklyn? SAS Roofing & Waterproofing offers expert roof repair, roof installation, and commercial roofing services in Brooklyn, Queens, and Manhattan. Affordable and high-quality solutions for all your roofing needs.",
  keywords:
    "Best Roof Repair Brooklyn, Brooklyn Roof Installation, Commercial Roofing Brooklyn, Residential Roofing Brooklyn, Roof Replacement Queens, Roof Repair Manhattan, Affordable Roofing Manhattan, Flat Roofs Brooklyn, Roofing Contractors in Queens",
  openGraph: {
    title:
      "Expert Roofing Contractors in Brooklyn | Roof Repair & Installation",
    description:
      "Looking for reliable roofing contractors in Brooklyn? SAS Roofing & Waterproofing offers expert roof repair, roof installation, and commercial roofing services in Brooklyn, Queens, and Manhattan.",
    url: "https://www.sasroofingwaterproofing.com/roofing-contractors-brooklyn",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
        alt: "SAS Roofing & Waterproofing",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Looking for reliable roofing contractors in Brooklyn? SAS Roofing & Waterproofing offers expert roof repair, roof installation, and commercial roofing services in Brooklyn, Queens, and Manhattan. Affordable and high-quality solutions for all your roofing needs."
        />
        <meta
          name="keywords"
          content="Best Roof Repair Brooklyn, Brooklyn Roof Installation, Commercial Roofing Brooklyn, Residential Roofing Brooklyn, Roof Replacement Queens, Roof Repair Manhattan, Affordable Roofing Manhattan, Flat Roofs Brooklyn, Roofing Contractors in Queens"
        />
        <link
          rel="canonical"
          href="https://www.sasroofingwaterproofing.com/roofing-contractors-brooklyn"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Expert Roofing Contractors in Brooklyn | Roof Repair & Installation"
        />
        <meta
          name="twitter:description"
          content="Looking for reliable roofing contractors in Brooklyn? SAS Roofing & Waterproofing offers expert roof repair, roof installation, and commercial roofing services in Brooklyn, Queens, and Manhattan."
        />
        <meta
          name="twitter:image"
          content="https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png"
        />
        <meta
          property="og:title"
          content="Expert Roofing Contractors in Brooklyn | Roof Repair & Installation"
        />
        <meta
          property="og:description"
          content="Looking for reliable roofing contractors in Brooklyn? SAS Roofing & Waterproofing offers expert roof repair, roof installation, and commercial roofing services in Brooklyn, Queens, and Manhattan."
        />
        <meta
          property="og:image"
          content="https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png"
        />
        <meta
          property="og:url"
          content="https://www.sasroofingwaterproofing.com/roofing-contractors-brooklyn"
        />
        <meta property="og:type" content="website" />
      </head>
      <body>{children}</body>
    </html>
  );
}
