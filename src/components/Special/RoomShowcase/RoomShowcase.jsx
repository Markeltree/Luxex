import Separator from "@/components/UI/Separator/Separator";
import RoomHeading from "@/components/Special/RoomHeading/RoomHeading";
import Description from "@/components/UI/Description/Description";
import Section from "@/components/Common/Section/Section";

import AnimatedButton from "@/components/UI/AnimatedButton/AnimatedButton";
import RoomFeaturesGrid from "@/components/Special/RoomFeaturesGrid/RoomFeaturesGrid";
import ImageShowcase from "@/components/Galleries/ImageShowcase/ImageShowcase";

function RoomShowcase({ className = "", id, roomData }) {
  if (!roomData) return null;

  return (
    <div id={id} className={className}>
      <Section>
        <Separator />

        <RoomHeading title={roomData.name} />

        <RoomFeaturesGrid features={roomData.amenities} />

        <Description text={roomData.description} />
      </Section>
      <Separator />

      <ImageShowcase name={roomData.name} image={roomData.mainImage} />

      <AnimatedButton text="Details" href={roomData.id} newTab={false} />
    </div>
  );
}

export default RoomShowcase;
