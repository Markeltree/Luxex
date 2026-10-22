import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Hero from "@/components/Layout/Hero/Hero";
import ContactForm from "@/components/Layout/ContactForm/ContactForm";
import Footer from "@/components/Layout/Footer/Footer";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Map from "@/components/Special/Map/Map";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";
import { lightSlider } from "@/data/navigation";

const meta = {
  title: "Luxex - Contact Us",
  description: "Get in touch with the Luxex team for inquiries, reservations, or personalized assistance with your stay.",
};

function Contact() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightSlider} />

      <Hero
        showReservation={true}
        slides={[
          {
            media: "/assets/images/contact/1.webp",
            topText: "Let's Talk",
            title: "Contact",
            buttonText: "Watch Video",
            buttonLink: "https://www.youtube.com/watch?v=4_y9pwXjkkQ",
          },
        ]}
      />

      <Section id="contact" fluid={true}>
        <ContactForm />
        <Map />
      </Section>

      <Footer />

      <VerticalLines />
      <ToTopArrow />
    </>
  );
}

export default Contact;
