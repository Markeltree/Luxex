import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Info from "@/components/Layout/Info/Info";
import AboutUs from "@/components/Layout/AboutUs/AboutUs";
import Separator from "@/components/UI/Separator/Separator";
import Testimonials from "@/components/Layout/Testimonials/Testimonials";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Hero from "@/components/Layout/Hero/Hero";
import Footer from "@/components/Layout/Footer/Footer";
import CustomAccordion from "@/components/UI/CustomAccordion/CustomAccordion";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";
import { lightVideo } from "@/data/navigation";

const meta = {
  title: "Luxex - Spa & Relaxation",
  description: "Indulge in rejuvenating treatments at the Luxex Spa, designed to refresh your body, mind, and spirit.",
};

function Spa() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightVideo} />

      <Hero
        slides={[
          {
            media: "/assets/images/facilities/spa/1.webp",
            topText: "",
            title: "Spa Center",
            buttonText: "The Etiquette",
            buttonLink: "#etiquette",
          },
        ]}
      />

      <Section background="var(--color-background-secondary)" fluid={true}>
        <Separator />

        <AboutUs
          image="/assets/images/facilities/2.webp"
          number="01"
          topTitle="Explore our"
          title="Spa Center"
          description="Step into a sanctuary of calm. Our spa offers signature massages, advanced facials and hydrotherapy rituals using natural, organic products, delivered by expert therapists in tranquil private suites."
          phoneNumber="+1 (800) 589-3939"
        />

        <Separator />
      </Section>

      <Section id="etiquette">
        <Info number="02" topTitle="Read the" title="Etiquette Guide" />
      </Section>

      <CustomAccordion
        data={[
          {
            title: "Arrive 15 Minutes Early",
            description:
              "Please arrive at least 15 minutes before your appointment to check in, change into your robe and relax in the lounge. Late arrivals may result in a shortened treatment.",
          },
          {
            title: "Shower Before Your Treatment",
            description:
              "Showering before your treatment helps you relax and allows our oils and products to absorb properly. Fresh towels and amenities are provided in the changing rooms.",
          },
          {
            title: "Avoid Strong Fragrances",
            description:
              "Our spa is a shared, scent-sensitive environment. We kindly ask that you avoid perfume and cologne so every guest can enjoy our natural aromatherapy.",
          },
          {
            title: "Remove Jewellery & Skincare Products",
            description:
              "Please remove jewellery and skincare products before your treatment so your therapist can work freely and our products can be most effective.",
          },
          {
            title: "Silence Your Mobile Phone",
            description:
              "Silence is part of the spa experience. Please switch your phone to silent or leave it in your locker to keep the space calm for all guests.",
          },
          {
            title: "Keep Your Valuables in a Locker",
            description:
              "Lockers are provided for your belongings. We recommend leaving valuables in your in-room safe; Luxex cannot accept responsibility for unattended items.",
          },
        ]}
      />

      <Separator />

      <Testimonials
        media="/assets/images/background/parallax-image-bg-2.webp"
        buttonLink="https://www.youtube.com/watch?v=4_y9pwXjkkQ"
        testimonials={[
          "“The signature massage melted away months of stress. I left feeling like a completely new person.” — Natalie C., London",
          "“A peaceful, beautifully designed sanctuary. The therapists are true professionals.” — Fatima Z., Abu Dhabi",
          "“We booked the couples ritual on our last day and wished we had done it on the first.” — Lucas & Mia P., Amsterdam",
          "“Calm, clean and utterly indulgent. The hydrotherapy circuit is a must.” — Grace O., Singapore",
        ]}
      />

      <Footer />

      <VerticalLines />
      <ToTopArrow />
    </>
  );
}

export default Spa;
