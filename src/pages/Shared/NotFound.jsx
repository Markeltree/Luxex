import Navigation from "@/components/Layout/Navigation/Navigation";
import Hero from "@/components/Layout/Hero/Hero";
import PageMeta from "@/components/Special/PageMeta";
import { lightSingle } from "@/data/navigation";

const meta = {
  title: "Luxex - Not Found",
  description: "404 - Not Found",
};

function NotFound() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightSingle} />

      <Hero
        slides={[
          {
            media: "/assets/images/photoswipe/photos/large/1.webp",
            topText: "",
            title: "404 - Not Found",
            buttonText: "Back Home",
            buttonLink: "/",
          },
        ]}
      />
    </>
  );
}

export default NotFound;
