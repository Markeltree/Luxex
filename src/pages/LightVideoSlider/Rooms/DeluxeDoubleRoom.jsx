import Footer from "@/components/Layout/Footer/Footer";
import Hero from "@/components/Layout/Hero/Hero";
import Navigation from "@/components/Layout/Navigation/Navigation";
import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import Section from "@/components/Common/Section/Section";
import PageMeta from "@/components/Special/PageMeta";
import Separator from "@/components/UI/Separator/Separator";
import AnimatedButton from "@/components/UI/AnimatedButton/AnimatedButton";
import ImageSlider from "@/components/Galleries/ImageSlider/ImageSlider";
import Quote from "@/components/UI/Quote/Quote";
import Description from "@/components/UI/Description/Description";
import Counter from "@/components/UI/Counter/Counter";
import RoomFeaturesGrid from "@/components/Special/RoomFeaturesGrid/RoomFeaturesGrid";
import RoomHeading from "@/components/Special/RoomHeading/RoomHeading";

import { lightVideoSlider } from "@/data/navigation";
import { deluxeDoubleRoom } from "@/data/rooms";

const meta = {
  title: `Luxex - ${deluxeDoubleRoom.name}`,
  description: "Welcome to Luxex, where timeless design meets modern comfort. Discover an unforgettable luxury experience tailored to you.",
};

function DeluxeDoubleRoom() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightVideoSlider} />

      <Hero showReservation={true} slides={deluxeDoubleRoom.heroSlides} />

      <Section id="room">
        <Separator />

        <RoomHeading title={deluxeDoubleRoom.name} topTitle="The Amenities" />
        <RoomFeaturesGrid features={deluxeDoubleRoom.amenities} />
        <Quote text={deluxeDoubleRoom.quote} />
        <Description text={deluxeDoubleRoom.description} />
      </Section>

      <Separator />

      <ImageSlider slides={deluxeDoubleRoom.gallery} />

      <Section id="size">
        <Separator />
        <Counter title="Room Size" number={deluxeDoubleRoom.size} unit={deluxeDoubleRoom.unit} />
        <Separator />

        <RoomFeaturesGrid features={deluxeDoubleRoom.details} />

        <Description text={deluxeDoubleRoom.additionalDescription} />
      </Section>

      <Separator />

      <AnimatedButton text="More Rooms" href="../" newTab={false} />

      <Footer />

      <ToTopArrow />

      <VerticalLines />
    </>
  );
}

export default DeluxeDoubleRoom;
