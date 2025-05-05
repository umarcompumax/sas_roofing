export const metadata = {
  title: "Roofing & Waterproofing Projects | SAS Roofing & Waterproofing",
  description:
    "Explore completed roofing and waterproofing projects by SAS Roofing & Waterproofing in New York. View our expert work in residential and commercial buildings.",
  keywords:
    "roofing projects Brooklyn, waterproofing contractors Brooklyn, roof repair Manhattan, commercial roofing Manhattan, residential roofing Queens, waterproofing services Queens, flat roof repair Brooklyn, roof waterproofing Manhattan, Queens roofing contractors, Brooklyn Manhattan Queens roofing projects",
  openGraph: {
    title: "Roofing & Waterproofing Projects | SAS Roofing & Waterproofing",
    description:
      "Explore completed roofing and waterproofing projects by SAS Roofing & Waterproofing in New York. View our expert work in residential and commercial buildings.",
    url: "https://www.sasroofingwaterproofing.com/projects.html",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
        alt: "SAS Roofing & Waterproofing",
      },
    ],
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Explore completed roofing and waterproofing projects by SAS Roofing & Waterproofing in New York. View our expert work in residential and commercial buildings."
        />
        <meta
          name="keywords"
          content="roofing projects Brooklyn, waterproofing contractors Brooklyn, roof repair Manhattan, commercial roofing Manhattan, residential roofing Queens, waterproofing services Queens, flat roof repair Brooklyn, roof waterproofing Manhattan, Queens roofing contractors, Brooklyn Manhattan Queens roofing projects"
        />
        <link
          rel="canonical"
          href="https://www.sasroofingwaterproofing.com/projects.html"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Roofing & Waterproofing Projects | SAS Roofing & Waterproofing"
        />
        <meta
          name="twitter:description"
          content="Explore completed roofing and waterproofing projects by SAS Roofing & Waterproofing in New York. View our expert work in residential and commercial buildings."
        />
        <meta
          name="twitter:image"
          content="https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png"
        />
        <meta
          property="og:title"
          content="Roofing & Waterproofing Projects | SAS Roofing & Waterproofing"
        />
        <meta
          property="og:description"
          content="Explore completed roofing and waterproofing projects by SAS Roofing & Waterproofing in New York. View our expert work in residential and commercial buildings."
        />
        <meta
          property="og:image"
          content="https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png"
        />
        <meta
          property="og:url"
          content="https://www.sasroofingwaterproofing.com/projects.html"
        />
        <meta property="og:type" content="website" />
      </head>
      <body>{children}</body>
    </html>
  );
}
