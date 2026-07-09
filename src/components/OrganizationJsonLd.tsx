import { branding, hasPhone, hasRegisteredAddress } from "@/lib/branding";

export default function OrganizationJsonLd() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: branding.company,
    url: branding.siteUrl,
    logo: `${branding.siteUrl}${branding.logo.src}`,
    email: branding.email,
    description: branding.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: branding.email,
      availableLanguage: "English",
    },
  };

  if (hasPhone()) {
    (schema.contactPoint as Record<string, unknown>).telephone = branding.phone;
  }

  if (hasRegisteredAddress()) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: branding.registeredAddress,
      addressCountry: "GB",
    };
  }

  if (branding.companiesHouseNumber) {
    schema.identifier = {
      "@type": "PropertyValue",
      name: "Companies House Registration Number",
      value: branding.companiesHouseNumber,
    };
  }

  if (branding.vatNumber) {
    schema.vatID = branding.vatNumber;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
