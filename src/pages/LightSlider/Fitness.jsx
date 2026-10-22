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
import { lightSlider } from "@/data/navigation";

const meta = {
  title: "Luxex - Fitness & Wellness Center",
  description: "Stay active in our state-of-the-art fitness center equipped with premium gear and designed for your ultimate well-being.",
};

function Fitness() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightSlider} />

      <Hero
        slides={[
          {
            media: "/assets/images/facilities/fitness/1.webp",
            topText: "",
            title: "Fitness Center",
            buttonText: "The Etiquette",
            buttonLink: "#etiquette",
          },
        ]}
      />

      <Section background="var(--color-background-secondary)" fluid={true}>
        <Separator />

        <AboutUs
          image="/assets/images/facilities/3.webp"
          number="01"
          topTitle="Explore our"
          title="Fitness Center"
          description="Our state-of-the-art fitness center features premium cardio and strength equipment, free weights and a dedicated stretching area. Personal training sessions and guided yoga classes are available on request."
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
            title: "Wear Proper Athletic Attire",
            description:
              "Please wear suitable athletic clothing and closed-toe training shoes for your safety and comfort. Sandals, slippers and swimwear are not permitted on the gym floor.",
          },
          {
            title: "Bring a Towel",
            description:
              "Complimentary towels are available at the entrance. Please use one on benches and mats during your workout and place it in the linen basket when finished.",
          },
          {
            title: "Wipe Down Equipment After Use",
            description:
              "Sanitising wipes are available throughout the center. Kindly wipe down machines, benches and mats after use so they are ready for the next guest.",
          },
          {
            title: "Return Weights to the Rack",
            description:
              "Please return dumbbells, plates and accessories to their racks after use. A tidy floor keeps everyone safe and lets others find what they need.",
          },
          {
            title: "Keep Phone Calls Outside",
            description:
              "Out of respect for other guests, please keep phone calls outside the fitness center and use headphones for music or videos.",
          },
          {
            title: "Store Bags in a Locker",
            description:
              "Lockers are available in the changing rooms. Please keep bags and personal items out of walkways and off the equipment.",
          },
        ]}
      />

      <Separator />

      <Testimonials
        media="/assets/images/background/parallax-image-bg-3.webp"
        buttonLink="https://www.youtube.com/watch?v=4_y9pwXjkkQ"
        testimonials={[
          "“A properly equipped gym, not the usual hotel afterthought. Everything I needed for my training.” — Ryan J., Melbourne",
          "“Having the gym open 24 hours was perfect with my jet lag. Spotless and never crowded.” — Ahmed K., Riyadh",
          "“The personal trainer session was excellent: tailored, motivating and great fun.” — Isabelle M., Lyon",
          "“Fresh towels, chilled water and a great view while you run. What more could you want?” — Chris B., Chicago",
        ]}
      />

      <Footer />

      <VerticalLines />
      <ToTopArrow />
    </>
  );
}

export default Fitness;
