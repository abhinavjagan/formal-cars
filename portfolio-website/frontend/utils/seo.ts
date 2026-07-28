import type { Metadata } from 'next';

export const generateMetadata = (title: string, description: string, path: string): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  return {
    title: `${title} | Abhinav Jagan Polimera`,
    description,
    keywords: "software developer, distributed systems, machine learning, full-stack",
    openGraph: {
      title: `${title} | Abhinav Jagan Polimera`,
      description,
      url: `${baseUrl}${path}`,
      siteName: "Abhinav Jagan Polimera",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Abhinav Jagan Polimera`,
      description,
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  };
};

export const structuredData = (type: string, data: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  if (type === "person") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abhinav Jagan Polimera",
      url: baseUrl,
      jobTitle: "Software Developer",
      sameAs: [
        "https://linkedin.com/in/abhinavpolimera",
        "https://github.com/abhinavjagan",
        "https://twitter.com/abhinavpolimera",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-XXX-XXX-XXXX",
        contactType: "General",
        email: "abhinavpolimera@gmail.com",
      },
    };
  }

  if (type === "webpage") {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data.title,
      description: data.description,
      url: `${baseUrl}${data.path}`,
      datePublished: data.datePublished || new Date().toISOString(),
    };
  }

  return null;
};
