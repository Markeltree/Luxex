import Hero from "@/components/Layout/Hero/Hero";
import ImageGallery from "@/components/Galleries/ImageGallery/ImageGallery";
import Navigation from "@/components/Layout/Navigation/Navigation";
import ToTopArrow from "@/components/UI/ToTopArrow/ToTopArrow";
import Testimonials from "@/components/Layout/Testimonials/Testimonials";
import VerticalLines from "@/components/UI/VerticalLines/VerticalLines";
import PageMeta from "@/components/Special/PageMeta";
import { lightVideo } from "@/data/navigation";
import Footer from "@/components/Layout/Footer/Footer";

const meta = {
  title: "Luxex - Photo Gallery",
  description: "Explore our gallery and experience the ambiance of Luxex through captivating images of our spaces and amenities.",
};

function Gallery() {
  return (
    <>
      <PageMeta {...meta} />
      <Navigation data={lightVideo} />

      <Hero
        slides={[
          {
            media: "/assets/images/gallery/1.webp",
            topText: "Check out the",
            title: "Photo Gallery",
            buttonText: "View Gallery",
            buttonLink: "#gallery",
          },
        ]}
      />

      <ImageGallery
        id="gallery"
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

      <Footer />

      <ToTopArrow />
      <VerticalLines />
    </>
  );
}

export default Gallery;
