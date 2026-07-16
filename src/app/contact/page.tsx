import SiteShell from "@/components/SiteShell";
import ContactPageContent from "@/components/pages/ContactPageContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact VinextAI for business inquiries, project proposals, and questions about enterprise IT services. We reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactPageContent />
    </SiteShell>
  );
}
