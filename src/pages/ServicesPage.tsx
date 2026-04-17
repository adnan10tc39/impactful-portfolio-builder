import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/sections/Services";

const ServicesPage = () => (
  <>
    <PageHeader
      eyebrow="Services"
      title="Enterprise AI Solutions"
      description="End-to-end AI/ML engineering — from strategy and architecture to production deployment and ongoing optimization."
    />
    <Services />
  </>
);

export default ServicesPage;
