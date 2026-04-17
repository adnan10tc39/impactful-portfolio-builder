import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/sections/Contact";

const ContactPage = () => (
  <>
    <PageHeader
      eyebrow="Contact"
      title="Let's Work Together"
      description="Ready to build intelligent systems that solve real problems? Book a call or send a quote request."
    />
    <Contact />
  </>
);

export default ContactPage;
