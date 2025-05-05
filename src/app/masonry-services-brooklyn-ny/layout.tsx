export const metadata = {
  title:
    "Expert Masonry Services in Brooklyn, Queens & Manhattan | sasroofingwaterproofing.com",
  description:
    "Need professional masonry services in Brooklyn? SAS Roofing & Waterproofing specializes in high-quality brickwork, stone masonry, and concrete masonry across Brooklyn, Queens, and Manhattan. We offer masonry repair, custom designs, and residential masonry services. Reach out to the top masonry contractors for trusted and durable solutions today.",
  keywords:
    "Masonry Services Brooklyn, Brickwork Contractors Brooklyn, Stone Masonry Brooklyn, Masonry Repair Queens, Masonry Construction Manhattan, Best Masonry Contractors Brooklyn, Brick Masonry Manhattan, Concrete Masonry Brooklyn, Custom Masonry in Queens, Residential Masonry Services Manhattan",
  openGraph: {
    title:
      "Expert Masonry Services in Brooklyn, Queens & Manhattan | sasroofingwaterproofing.com",
    description:
      "Need professional masonry services in Brooklyn? SAS Roofing & Waterproofing specializes in high-quality brickwork, stone masonry, and concrete masonry across Brooklyn, Queens, and Manhattan. We offer masonry repair, custom designs, and residential masonry services. Reach out to the top masonry contractors for trusted and durable solutions today.",
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
          content="Need professional masonry services in Brooklyn? SAS Roofing & Waterproofing specializes in high-quality brickwork, stone masonry, and concrete masonry across Brooklyn, Queens, and Manhattan. We offer masonry repair, custom designs, and residential masonry services. Reach out to the top masonry contractors for trusted and durable solutions today."
        />
        <meta
          name="keywords"
          content="Masonry Services Brooklyn, Brickwork Contractors Brooklyn, Stone Masonry Brooklyn, Masonry Repair Queens, Masonry Construction Manhattan, Best Masonry Contractors Brooklyn, Brick Masonry Manhattan, Concrete Masonry Brooklyn, Custom Masonry in Queens, Residential Masonry Services Manhattan"
        />
        <link
          rel="canonical"
          href="https://www.sasroofingwaterproofing.com/roofing-contractors-brooklyn"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Expert Masonry Services in Brooklyn, Queens & Manhattan | sasroofingwaterproofing.com"
        />
        <meta
          name="twitter:description"
          content="Need professional masonry services in Brooklyn? SAS Roofing & Waterproofing specializes in high-quality brickwork, stone masonry, and concrete masonry across Brooklyn, Queens, and Manhattan. We offer masonry repair, custom designs, and residential masonry services. Reach out to the top masonry contractors for trusted and durable solutions today."
        />
        <meta
          name="twitter:image"
          content="https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png"
        />
        <meta
          property="og:title"
          content="Expert Masonry Services in Brooklyn, Queens & Manhattan | sasroofingwaterproofing.com"
        />
        <meta
          property="og:description"
          content="Need professional masonry services in Brooklyn? SAS Roofing & Waterproofing specializes in high-quality brickwork, stone masonry, and concrete masonry across Brooklyn, Queens, and Manhattan. We offer masonry repair, custom designs, and residential masonry services. Reach out to the top masonry contractors for trusted and durable solutions today."
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
