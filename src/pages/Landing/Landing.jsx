import styles from "./Landing.module.scss";

import LandingHero from "@/pages/Landing/components/LandingHero/LandingHero";

import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Separator from "@/components/UI/Separator/Separator";
import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Counter from "@/components/UI/Counter/Counter";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";
import LandingNavigation from "@/pages/Landing/components/LandingNavigation/LandingNavigation";
import LandingFooter from "@/pages/Landing/components/LandingFooter/LandingFooter";
import LandingAbout from "@/pages/Landing/components/LandingAbout/LandingAbout";
import LandingSteps from "@/pages/Landing/components/LandingSteps/LandingSteps";
import LandingPromo from "@/pages/Landing/components/LandingPromo/LandingPromo";
import LandingCards from "@/pages/Landing/components/LandingCards/LandingCards";

const meta = {
  title: "Luxex - Landing Page",
  description: "Welcome to Luxex, where timeless design meets modern comfort. Discover an unforgettable luxury experience tailored to you.",
};

const landingLinks = {
  links: [
    { text: "Home", link: "#home" },
    { text: "About", link: "#about" },
    { text: "Demos", link: "#demos" },
    { text: "3-Step Method", link: "#method" },
    { text: "Purchase", link: "#" },
  ],
};

import hero from "./assets/hero/1.webp";
import promo from "./assets/promo/1.webp";

import demo1 from "./assets/demos/1.webp";
import demo2 from "./assets/demos/2.webp";
import demo3 from "./assets/demos/3.webp";
import demo4 from "./assets/demos/4.webp";

const demos = [
  {
    id: 1,
    name: "Image Slider",
    path: "/light-slider",
    img: demo1,
  },
  {
    id: 2,
    name: "Images & Video Slider",
    path: "/light-video-slider",
    img: demo3,
  },
  {
    id: 3,
    name: "Single Image",
    path: "/light-single",
    img: demo4,
  },
  {
    id: 4,
    name: "HTML5 Video",
    path: "/light-video",
    img: demo2,
  },
];

function Landing() {
  return (
    <>
      <PageMeta {...meta} />
      <LandingNavigation data={landingLinks} />

      <div className={styles.landing}>
        <LandingHero
          id="home"
          slides={[
            {
              media: hero,
              topText: "Ex Nihilo's",
              title: "Luxex",
              buttonText: "Live Demos",
              buttonLink: "#demos",
            },
          ]}
        />

        <Section id="about" fluid={true}>
          <Separator color="#b2b2b2" />

          <LandingAbout
            title="Luxex"
            subtitle="A fully responsive template"
            description="Luxex is a fully responsive template with a modern design suitable for all types of luxury hotels and resorts. Featuring powerful fullscreen background video and imagery, making it the perfect choice for hotel owners."
          />
        </Section>

        <Separator color="#b2b2b2" />

        <Counter className={styles.counterContainer} title="Ready" number={4} unit="Demos" />

        <Section id="demos" fluid={true}>
          <Separator color="#b2b2b2" />
          <LandingAbout title="The Demos" subtitle="By all means, choose your style" />

          <LandingCards demos={demos} />
        </Section>

        <Section id="method" fluid={true}>
          <Separator color="#b2b2b2" />

          <LandingAbout title="The 3-Step Method" subtitle="Download, edit, go live" />

          <LandingSteps
            steps={[
              { title: "Download", description: "Download purchased item via your ThemeForest downloads section." },
              { title: "Edit", description: "Read the documentation file (user guide) and make your edits." },
              { title: "Go Live", description: "Upload files to a web server and showcase your work in style." },
            ]}
          />
        </Section>

        <Separator color="#b2b2b2" />

        <LandingPromo
          id="purchase"
          image={promo}
          link="https://themeforest.net/item/luxex-the-hotel-react-template/61949090"
          topText="Purchase Luxex"
          title="and build excitement around your brand"
          subtitle="Style is Everything"
        />

        <Separator color="#b2b2b2" />

        <LandingFooter />

        <VerticalLines className={styles.lines} />
        <ToTopArrow className={styles.topArrow} />
      </div>
    </>
  );
}

export default Landing;
