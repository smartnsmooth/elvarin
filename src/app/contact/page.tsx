import SiteShell from "@/components/SiteShell";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata = {
  title: "Contact",
  description: "Contact Elvarin for business inquiries, project proposals, and questions about enterprise IT services.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactPageContent />
    </SiteShell>
  );
}
