import Footer from "@/components/Layout/Footer/Footer";
import Hero from "@/components/Layout/Hero/Hero";
import Navigation from "@/components/Layout/Navigation/Navigation";
import RoomShowcase from "@/components/Special/RoomShowcase/RoomShowcase";
import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import PageMeta from "@/components/Special/PageMeta";
import Section from "@/components/Common/Section/Section";

import { lightSlider } from "@/data/navigation";

import { deluxeDoubleRoom, familySuite, presidentialPenthouse, singleRoom } from "@/data/rooms";
/* Import room data here*/

const meta = {
  title: "Luxex - Rooms & Suites",
  description: "Discover elegant rooms and suites offering refined design, comfort, and breathtaking views for your perfect stay.",
};

function Rooms() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightSlider} />

      <Hero
        showReservation={true}
        slides={[
          {
            media: "/assets/images/rooms/rooms-intro/1.webp",
            title: "Rooms & Suites",
            buttonText: "Explore Rooms",
            buttonLink: "#rooms",
          },
        ]}
      />

      <Section id="rooms" fluid="true">
        <RoomShowcase roomData={deluxeDoubleRoom} />
        <RoomShowcase roomData={familySuite} />
        <RoomShowcase roomData={presidentialPenthouse} />
        <RoomShowcase roomData={singleRoom} />
      </Section>

      <Footer />

      <ToTopArrow />

      <VerticalLines />
    </>
  );
}

export default Rooms;
