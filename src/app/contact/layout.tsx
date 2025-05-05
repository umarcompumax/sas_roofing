export const metadata = {
  title:
    "(347) 221-6549 SAS Roofing & Waterproofing | Serving Brooklyn, Manhattan & Queens",
  description:
    "Get in touch with SAS Roofing & Waterproofing for expert roofing and waterproofing services in Brooklyn, Manhattan, and Queens. Call or message us today for a free estimate.",
  keywords:
    "contact roofing contractor Brooklyn, waterproofing company Manhattan, Queens roofing experts, SAS Roofing contact, roof repair Brooklyn NY, waterproofing services Queens, roofing company Manhattan NY, emergency roof repair NYC, best waterproofing contractor Brooklyn, SAS Roofing phone number",
  openGraph: {
    title:
      "(347) 221-6549 SAS Roofing & Waterproofing | Serving Brooklyn, Manhattan & Queens",
    description:
      "Get in touch with SAS Roofing & Waterproofing for expert roofing and waterproofing services in Brooklyn, Manhattan, and Queens. Call or message us today for a free estimate.",
    url: "https://www.sasroofingwaterproofing.com/contact-us.html",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
        alt: "SAS Roofing & Waterproofing",
      },
    ],
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Get in touch with SAS Roofing & Waterproofing for expert roofing and waterproofing services in Brooklyn, Manhattan, and Queens. Call or message us today for a free estimate."
        />
        <meta
          name="keywords"
          content="contact roofing contractor Brooklyn, waterproofing company Manhattan, Queens roofing experts, SAS Roofing contact, roof repair Brooklyn NY, waterproofing services Queens, roofing company Manhattan NY, emergency roof repair NYC, best waterproofing contractor Brooklyn, SAS Roofing phone number"
        />
        <link
          rel="canonical"
          href="https://www.sasroofingwaterproofing.com/contact-us.html"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="(347) 221-6549 SAS Roofing & Waterproofing | Serving Brooklyn, Manhattan & Queens"
        />
        <meta
          name="twitter:description"
          content="Get in touch with SAS Roofing & Waterproofing for expert roofing and waterproofing services in Brooklyn, Manhattan, and Queens. Call or message us today for a free estimate."
        />
        <meta
          name="twitter:image"
          content="https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png"
        />
        <meta
          property="og:title"
          content="(347) 221-6549 SAS Roofing & Waterproofing | Serving Brooklyn, Manhattan & Queens"
        />
        <meta
          property="og:description"
          content="Get in touch with SAS Roofing & Waterproofing for expert roofing and waterproofing services in Brooklyn, Manhattan, and Queens. Call or message us today for a free estimate."
        />
        <meta
          property="og:image"
          content="https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png"
        />
        <meta
          property="og:url"
          content="https://www.sasroofingwaterproofing.com/contact-us.html"
        />
        <meta property="og:type" content="website" />
      </head>
      <body>{children}</body>
    </html>
  );
}
