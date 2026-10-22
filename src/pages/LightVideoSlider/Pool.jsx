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
import { lightVideoSlider } from "@/data/navigation";

const meta = {
  title: "Luxex - Infinity Pool Experience",
  description: "Relax and unwind by the Luxex infinity pool, surrounded by serene views and world-class comfort.",
};

function Pool() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightVideoSlider} />

      <Hero
        slides={[
          {
            media: "https://www.11-76.com/html5-videos-22/luxex/luxex-2.mp4",
            topText: "",
            title: "Indoor Pool",
            buttonText: "The Etiquette",
            buttonLink: "#etiquette",
          },
        ]}
      />

      <Section background="var(--color-background-secondary)" fluid={true}>
        <Separator />

        <AboutUs
          image="/assets/images/facilities/4.webp"
          number="01"
          topTitle="Explore our"
          title="Indoor Pool"
          description="Our heated indoor pool is a peaceful retreat in every season, with soft ambient lighting, comfortable loungers and a poolside bar serving fresh juices, light bites and signature mocktails."
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
            title: "Wear a Swimwear",
            description:
              "Proper swimwear is required in the pool at all times. For hygiene reasons, street clothes, cotton T-shirts and gym wear are not permitted in the water. Swimwear is available to purchase at the spa boutique.",
          },
          {
            title: "Wear Clean Slippers",
            description:
              "Please wear clean slippers around the pool deck to keep the area hygienic and to prevent slipping on wet surfaces. Complimentary slippers are provided in every room.",
          },
          {
            title: "Don't Wear Perfume",
            description:
              "Strong perfumes and colognes can affect water quality and the comfort of other guests. We kindly ask you to avoid fragrances before visiting the pool.",
          },
          {
            title: "Remove Skincare Products",
            description:
              "Please shower and remove lotions, oils and makeup before entering the pool. This keeps the water crystal clear and comfortable for everyone.",
          },
          {
            title: "Leave Out Your Mobile Phone",
            description:
              "The pool is a place to relax. Please keep mobile phones on silent and take calls outside the pool area to preserve the peaceful atmosphere.",
          },
          {
            title: "Keep Your Valuables in a Locker",
            description:
              "Complimentary lockers are available in the changing rooms. Luxex is not responsible for valuables left unattended on loungers or in the pool area.",
          },
        ]}
      />

      <Separator />

      <Testimonials
        media="/assets/images/background/parallax-image-bg-4.webp"
        buttonLink="https://www.youtube.com/watch?v=4_y9pwXjkkQ"
        testimonials={[
          "“The pool is stunning: warm water, soft lighting and so peaceful in the early morning.” — Hannah S., Vienna",
          "“Our kids loved the pool and we loved the poolside bar. Everyone was happy.” — David & Ana R., Lisbon",
          "“Swimming laps before breakfast became my favourite ritual of the whole trip.” — Omar F., Cairo",
          "“Relaxing, beautifully maintained and never overcrowded. Pure bliss.” — Julia T., Stockholm",
        ]}
      />

      <Footer />

      <VerticalLines />
      <ToTopArrow />
    </>
  );
}

export default Pool;
