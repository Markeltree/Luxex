import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Info from "@/components/Layout/Info/Info";
import AboutUs from "@/components/Layout/AboutUs/AboutUs";
import Separator from "@/components/UI/Separator/Separator";
import Testimonials from "@/components/Layout/Testimonials/Testimonials";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Hero from "@/components/Layout/Hero/Hero";
import Footer from "@/components/Layout/Footer/Footer";
import Menu from "@/components/Special/Menu/Menu";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";
import { lightSingle } from "@/data/navigation";

const meta = {
  title: "Luxex - Fine Dining & Cuisine",
  description: "Savor exquisite flavors crafted by our chefs at Luxex Restaurant — where every dish is an experience.",
};

function Restaurant() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightSingle} />

      <Hero
        slides={[
          {
            media: "/assets/images/facilities/restaurant/1.webp",
            topText: "",
            title: "Restaurant",
            buttonText: "Explore Menu",
            buttonLink: "#menu",
          },
        ]}
      />

      <Section background="var(--color-background-secondary)" fluid={true}>
        <Separator />

        <AboutUs
          image="/assets/images/facilities/1.webp"
          number="01"
          topTitle="Explore our"
          title="Restaurant"
          description="Seasonal, ingredient-led cuisine crafted by our executive chef and served in an elegant dining room or al fresco on the ocean terrace. Join us for breakfast, lunch and dinner, or reserve a private table for a special occasion."
          phoneNumber="+1 (800) 589-3939"
        />

        <Separator />
      </Section>

      <Section id="menu">
        <Info number="02" topTitle="What's on the" title="Table Menu" />

        <Menu />
      </Section>

      <Separator />

      <Testimonials
        media="https://www.11-76.com/html5-videos-22/luxex/luxex-3.mp4"
        buttonLink="https://www.youtube.com/watch?v=4_y9pwXjkkQ"
        testimonials={[
          "“The tasting menu was a journey from start to finish, and the wine pairing was spot on.” — Thomas G., Zurich",
          "“Best breakfast I have had at any hotel, anywhere. Fresh pastries, perfect eggs and a view to match.” — Sarah L., Boston",
          "“The wagyu ribeye was cooked to perfection. Attentive, knowledgeable staff who clearly love what they do.” — Hiroshi M., Osaka",
          "“An elegant room, a relaxed atmosphere and food that rivals the best restaurants in the city.” — Elena V., Madrid",
        ]}
      />

      <Footer />

      <VerticalLines />
      <ToTopArrow />
    </>
  );
}

export default Restaurant;
