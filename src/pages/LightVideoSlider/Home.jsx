import ImageGallery from "@/components/Galleries/ImageGallery/ImageGallery";
import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Info from "@/components/Layout/Info/Info";
import AboutUs from "@/components/Layout/AboutUs/AboutUs";
import Separator from "@/components/UI/Separator/Separator";
import Testimonials from "@/components/Layout/Testimonials/Testimonials";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Hero from "@/components/Layout/Hero/Hero";
import Highlight from "@/components/Layout/Highlight/Highlight";
import Footer from "@/components/Layout/Footer/Footer";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";
import ContactCard from "@/components/Layout/ContactCard/ContactCard";

import { lightVideoSlider } from "@/data/navigation";

const meta = {
  title: "Luxex - Home",
  description: "Welcome to Luxex, where timeless design meets modern comfort. Discover an unforgettable luxury experience tailored to you.",
};

function Home() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightVideoSlider} />

      <Hero
        showReservation={true}
        slides={[
          {
            media: "/assets/images/background/hero-bg-1.webp",
            title: "Step Into Luxury",
            buttonText: "Explore Rooms",
            buttonLink: "#rooms",
          },
          {
            media: "https://www.11-76.com/html5-videos-22/luxex/luxex.mp4",
            title: "A 5 Star Experience",
            buttonText: "Our Facilities",
            buttonLink: "#facilities",
          },
          {
            media: "/assets/images/background/hero-bg-4.webp",
            title: "A Perfect Getaway",
            buttonText: "Get in Touch",
            buttonLink: "#contact",
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
          description="Set on a serene stretch of coastline, Luxex is a boutique luxury hotel where timeless design meets warm, personal hospitality. From sunrise breakfasts on your private balcony to evenings by the pool, every detail is arranged so you can simply arrive and unwind."
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

        <Section id="rooms" fluid={true}>
          <Info number="02" topTitle="Inside The" title="Rooms & Suites" />

          <Highlight
            slides={[
              {
                image: "/assets/images/rooms/rooms-single/1.webp",
                stars: true,
                title: "Deluxe Double Room",
                description:
                  "A light-filled retreat with a king-size bed, fine Italian linens and floor-to-ceiling windows framing the coastline. Perfect for couples seeking calm and comfort.",
                buttonText: "Details",
                buttonLink: "/light-video-slider-rooms/deluxe-double-room",
              },
              {
                image: "/assets/images/rooms/rooms-single/2.webp",
                stars: true,
                title: "Family Suite",
                description:
                  "Two separate bedrooms, a spacious living lounge and terrace access give families and groups plenty of room to relax together or enjoy their own space.",
                buttonText: "Details",
                buttonLink: "/light-video-slider-rooms/family-suite",
              },
              {
                image: "/assets/images/rooms/rooms-single/3.webp",
                stars: true,
                title: "Presidential Penthouse",
                description:
                  "Our crown jewel: a top-floor residence with panoramic ocean views, three master suites, a private elevator and dedicated butler service around the clock.",
                buttonText: "Details",
                buttonLink: "/light-video-slider-rooms/presidential-penthouse",
              },
              {
                image: "/assets/images/rooms/rooms-single/4.webp",
                stars: true,
                title: "Single Room",
                description:
                  "Elegant and efficient, designed for the solo traveller or business guest with a plush bed, dedicated workspace and high-speed fiber Wi-Fi.",
                buttonText: "Details",
                buttonLink: "/light-video-slider-rooms/single-room",
              },
            ]}
          />
        </Section>

        <Separator />

        <Testimonials
          media="https://www.11-76.com/html5-videos-22/luxex/luxex-2.mp4"
          buttonLink="https://www.youtube.com/watch?v=4_y9pwXjkkQ"
          testimonials={[
            "“Dinner on the terrace at sunset was the highlight of our honeymoon. Thank you to the whole team for making it unforgettable.” — Laura & Ben H., Sydney",
            "“Spotless rooms, a wonderfully calm atmosphere and a concierge who seemed to anticipate everything before we asked.” — Kenji S., Tokyo",
            "“Travelling with two children is never easy, but the Family Suite and the staff made it feel effortless.” — Priya N., Toronto",
            "“I stay in hotels every week for work. Luxex is the one I genuinely look forward to coming back to.” — Marc D., Paris",
          ]}
        />
      </Section>

      <Section id="facilities" background="var(--color-background-primary)" fluid={true}>
        <Info number="03" topTitle="Explore Our" title="Facilities" />

        <Highlight
          background="var(--color-background-secondary)"
          slides={[
            {
              image: "/assets/images/facilities/1.webp",
              topTitle: "",
              title: "Restaurant",
              timeOpen: "Opening Hours: 7:00 AM to 11:00 PM",
              description:
                "Seasonal, ingredient-led cuisine from our executive chef, served in an elegant dining room or al fresco on the ocean terrace.",
              buttonText: "View More",
              buttonLink: "/light-video-slider-restaurant",
            },
            {
              image: "/assets/images/facilities/2.webp",
              topTitle: "",
              title: "Spa Center",
              timeOpen: "Opening Hours: 10:00 AM to 9:00 PM",
              description:
                "Signature massages, facials and hydrotherapy rituals using natural, organic products in tranquil private treatment suites.",
              buttonText: "View More",
              buttonLink: "/light-video-slider-spa",
            },
            {
              image: "/assets/images/facilities/3.webp",
              topTitle: "",
              title: "Fitness Center",
              timeOpen: "Open 24 Hours",
              description:
                "Premium cardio and strength equipment, free weights and personal training sessions available on request, day or night.",
              buttonText: "View More",
              buttonLink: "/light-video-slider-fitness",
            },
            {
              image: "/assets/images/facilities/4.webp",
              topTitle: "",
              title: "Indoor Pool",
              timeOpen: "Opening Hours: 7:00 AM to 10:00 PM",
              description:
                "A heated indoor pool with soft ambient lighting, comfortable loungers and a poolside bar for a relaxing swim in any season.",
              buttonText: "View More",
              buttonLink: "/light-video-slider-pool",
            },
          ]}
        />

        <Separator />
      </Section>

      <Section id="gallery" background="var(--color-background-secondary)">
        <Info number="04" topTitle="Check Out The" title="Photo Gallery" />
      </Section>

      <ImageGallery
        images={[
          "/assets/images/photoswipe/photos/large/1.webp",
          "/assets/images/photoswipe/photos/large/2.webp",
          "/assets/images/photoswipe/photos/large/3.webp",
          "/assets/images/photoswipe/photos/large/4.webp",
          "/assets/images/photoswipe/photos/large/5.webp",
          "/assets/images/photoswipe/photos/large/6.webp",
        ]}
      />

      <Testimonials
        media="/assets/images/background/parallax-image-bg-1.webp"
        buttonLink="https://www.youtube.com/watch?v=4_y9pwXjkkQ"
        testimonials={[
          "“A true hidden gem. Beautiful design, exceptional food and service that feels personal rather than scripted.” — Olivia W., Edinburgh",
          "“The penthouse exceeded every expectation. Our butler arranged a private dinner that our guests are still talking about.” — Rashid A., Doha",
          "“Every corner of this hotel is photo-worthy, but it is the warmth of the people that we will remember most.” — Chiara B., Rome",
          "“Five stars is not enough. We have already booked our anniversary for next year.” — Michael & Hannah F., Berlin",
        ]}
      />

      <Footer>
        <ContactCard />
      </Footer>

      <VerticalLines />
      <ToTopArrow />
    </>
  );
}

export default Home;
