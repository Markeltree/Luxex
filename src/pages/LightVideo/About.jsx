import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Hero from "@/components/Layout/Hero/Hero";
import AboutUs from "@/components/Layout/AboutUs/AboutUs";
import Separator from "@/components/UI/Separator/Separator";
import Testimonials from "@/components/Layout/Testimonials/Testimonials";
import Info from "@/components/Layout/Info/Info";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Highlight from "@/components/Layout/Highlight/Highlight";
import Footer from "@/components/Layout/Footer/Footer";
import Team from "@/components/Layout/Team/Team";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";

import { lightVideo } from "@/data/navigation";

const meta = {
  title: "Luxex - About",
  description: "Learn more about Luxex and our mission to deliver premium experiences.",
};

function About() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightVideo} />

      <Hero
        slides={[
          {
            media: "/assets/images/about/1.webp",
            topText: "",
            title: "The Luxex",
            buttonText: "Our Services",
            buttonLink: "#services",
          },
        ]}
      />

      <Section background="var(--color-background-secondary)" fluid={true}>
        <Separator />

        <AboutUs
          image="/assets/images/about/1.webp"
          number="01"
          topTitle="Our Hotel"
          title="The Luxex"
          description="Founded on the belief that true luxury is personal, Luxex welcomes guests from around the world with refined rooms, exceptional dining and genuinely attentive service. Our team works quietly behind the scenes so that every stay feels effortless, restorative and entirely your own."
          phoneNumber="+1 (800) 589-3939"
        />

        <Separator />

        <Testimonials
          media="https://www.11-76.com/html5-videos-22/luxex/luxex.mp4"
          buttonLink="https://www.youtube.com/watch?v=4_y9pwXjkkQ"
          testimonials={[
            "“From the moment we arrived, every detail felt considered. By the second morning the staff knew our names and exactly how we took our coffee.” — Emma R., London",
            "“The most restful stay we have had in years. The suite was immaculate and waking up to that ocean view was simply breathtaking.” — Daniel & Sofia K., Milan",
            "“Luxex sets the standard for quiet luxury: impeccable service that never once felt stiff or formal.” — James T., New York",
            "“We came for a long weekend and extended to a full week. The spa alone is worth the journey.” — Aisha M., Dubai",
          ]}
        />
      </Section>

      <Section id="services" background="var(--color-background-primary)" fluid={true}>
        <Info number="02" topTitle="Explore The" title="Services" />

        <Highlight
          background="var(--color-background-secondary)"
          slides={[
            {
              image: "/assets/images/about/services/1.webp",
              topTitle: "",
              title: "In Room Dining",
              timeOpen: "Available 24 Hours",
              description:
                "Enjoy our full restaurant menu in the comfort and privacy of your room, day or night, served with crisp linen and silver service.",
            },
            {
              image: "/assets/images/about/services/2.webp",
              topTitle: "",
              title: "Room Cleaning",
              timeOpen: "Daily: 8:00 AM to 6:00 PM",
              description:
                "Daily housekeeping and an evening turndown service, with fresh towels, linens and amenities refreshed to your preference.",
            },
            {
              image: "/assets/images/about/services/3.webp",
              topTitle: "",
              title: "Free Parking",
              timeOpen: "Available 24 Hours",
              description:
                "Complimentary secure on-site parking with valet service for every guest, plus electric vehicle charging points.",
            },
            {
              image: "/assets/images/about/services/4.webp",
              topTitle: "",
              title: "Secure Vault",
              timeOpen: "Available 24 Hours",
              description:
                "In-room digital safes and a monitored front-desk vault keep your valuables and documents protected throughout your stay.",
            },
          ]}
        />

        <Separator />
      </Section>

      <Section id="team" background="var(--color-background-secondary)" fluid={true}>
        <Info number="03" topTitle="Meet The" title="Hotel Staff" />
        <Team />
        <Separator />
      </Section>

      <Footer />

      <ToTopArrow />
      <VerticalLines />
    </>
  );
}

export default About;
