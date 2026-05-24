import { personalInfo } from "@/lib/data";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: "Performance Marketing & Growth Analytics Specialist",
    description: personalInfo.headline,
    email: personalInfo.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: personalInfo.location,
    },
    knowsAbout: [
      "Google Ads",
      "Amazon PPC",
      "GA4 Analytics",
      "Performance Marketing",
      "AI Automation",
    ],
    url: "https://rahulkumar.dev",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
