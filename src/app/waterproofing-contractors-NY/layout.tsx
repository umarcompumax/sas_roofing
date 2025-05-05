export const metadata = {
  title: "Waterproofing Contractors in Brooklyn, Queens & Manhattan",
  description:
    "Looking for professional waterproofing contractors in Brooklyn, Queens, or Manhattan? SAS Roofing & Waterproofing offers expert waterproofing services, including basement waterproofing, exterior waterproofing, roof waterproofing, and foundation waterproofing. Contact us today for reliable waterproofing solutions.",
  keywords:
    "Waterproofing Services Brooklyn, Basement Waterproofing Brooklyn, Exterior Waterproofing Manhattan, Waterproofing Contractors in Queens, Waterproofing Solutions Brooklyn, Foundation Waterproofing Manhattan, Waterproofing Experts Queens, Waterproof Basement Brooklyn, Roof Waterproofing Brooklyn, Commercial Waterproofing Manhattan",
  openGraph: {
    title: "Waterproofing Contractors in Brooklyn, Queens & Manhattan",
    description:
      "Looking for professional waterproofing contractors in Brooklyn, Queens, or Manhattan? SAS Roofing & Waterproofing offers expert waterproofing services, including basement waterproofing, exterior waterproofing, roof waterproofing, and foundation waterproofing. Contact us today for reliable waterproofing solutions.",
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
          content="Looking for professional waterproofing contractors in Brooklyn, Queens, or Manhattan? SAS Roofing & Waterproofing offers expert waterproofing services, including basement waterproofing, exterior waterproofing, roof waterproofing, and foundation waterproofing. Contact us today for reliable waterproofing solutions."
        />
        <meta
          name="keywords"
          content="Waterproofing Services Brooklyn, Basement Waterproofing Brooklyn, Exterior Waterproofing Manhattan, Waterproofing Contractors in Queens, Waterproofing Solutions Brooklyn, Foundation Waterproofing Manhattan, Waterproofing Experts Queens, Waterproof Basement Brooklyn, Roof Waterproofing Brooklyn, Commercial Waterproofing Manhattan"
        />
        <link
          rel="canonical"
          href="https://www.sasroofingwaterproofing.com/roofing-contractors-brooklyn"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Waterproofing Contractors in Brooklyn, Queens & Manhattan"
        />
        <meta
          name="twitter:description"
          content="Looking for professional waterproofing contractors in Brooklyn, Queens, or Manhattan? SAS Roofing & Waterproofing offers expert waterproofing services, including basement waterproofing, exterior waterproofing, roof waterproofing, and foundation waterproofing. Contact us today for reliable waterproofing solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png"
        />
        <meta
          property="og:title"
          content="Waterproofing Contractors in Brooklyn, Queens & Manhattan"
        />
        <meta
          property="og:description"
          content="Looking for professional waterproofing contractors in Brooklyn, Queens, or Manhattan? SAS Roofing & Waterproofing offers expert waterproofing services, including basement waterproofing, exterior waterproofing, roof waterproofing, and foundation waterproofing. Contact us today for reliable waterproofing solutions."
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
