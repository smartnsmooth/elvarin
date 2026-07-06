import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
      <MobileNav />
    </>
  );
}
