import { notFound } from "next/navigation";
import { NAVBAR_CONSTANT } from "@/components/ui/Navbar/constant";
import Services from "@/components/Services/Services";
import FAQ from "@/components/ui/Faq";
import Footer from "@/components/ui/Footer/Footer";

export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = NAVBAR_CONSTANT.find(
    (group) => group.title === "Services"
  )?.items.find((item) => item.href.endsWith(params.service));

  console.log(`ye lo params: ${service}`);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <Services param={params.service} />
      <FAQ />
      <Footer />
    </div>
  );
}