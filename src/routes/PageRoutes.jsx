import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import ScrollToTop from "@/components/Special/ScrollToTop/ScrollToTop";
import Loader from "@/components/Common/Loader/Loader";

import Landing from "@/pages/Landing/Landing";

const LightSingleHome = lazy(() => import("@/pages/LightSingle/Home.jsx"));
const LightSingleAbout = lazy(() => import("@/pages/LightSingle/About.jsx"));
const LightSingleRooms = lazy(() => import("@/pages/LightSingle/Rooms.jsx"));
const LightSingleGallery = lazy(() => import("@/pages/LightSingle/Gallery.jsx"));
const LightSingleContact = lazy(() => import("@/pages/LightSingle/Contact.jsx"));
const LightSingleSpa = lazy(() => import("@/pages/LightSingle/Spa.jsx"));
const LightSingleFitness = lazy(() => import("@/pages/LightSingle/Fitness.jsx"));
const LightSinglePool = lazy(() => import("@/pages/LightSingle/Pool.jsx"));
const LightSingleRestaurant = lazy(() => import("@/pages/LightSingle/Restaurant.jsx"));
const LightSingleDeluxeDoubleRoom = lazy(() => import("@/pages/LightSingle/Rooms/DeluxeDoubleRoom.jsx"));
const LightSingleFamilySuite = lazy(() => import("@/pages/LightSingle/Rooms/FamilySuite.jsx"));
const LightSinglePresidentialPenthouse = lazy(() => import("@/pages/LightSingle/Rooms/PresidentialPenthouse.jsx"));
const LightSingleSingleRoom = lazy(() => import("@/pages/LightSingle/Rooms/SingleRoom.jsx"));

const LightVideoHome = lazy(() => import("@/pages/LightVideo/Home.jsx"));
const LightVideoAbout = lazy(() => import("@/pages/LightVideo/About.jsx"));
const LightVideoRooms = lazy(() => import("@/pages/LightVideo/Rooms.jsx"));
const LightVideoGallery = lazy(() => import("@/pages/LightVideo/Gallery.jsx"));
const LightVideoContact = lazy(() => import("@/pages/LightVideo/Contact.jsx"));
const LightVideoSpa = lazy(() => import("@/pages/LightVideo/Spa.jsx"));
const LightVideoFitness = lazy(() => import("@/pages/LightVideo/Fitness.jsx"));
const LightVideoPool = lazy(() => import("@/pages/LightVideo/Pool.jsx"));
const LightVideoRestaurant = lazy(() => import("@/pages/LightVideo/Restaurant.jsx"));
const LightVideoDeluxeDoubleRoom = lazy(() => import("@/pages/LightVideo/Rooms/DeluxeDoubleRoom.jsx"));
const LightVideoFamilySuite = lazy(() => import("@/pages/LightVideo/Rooms/FamilySuite.jsx"));
const LightVideoPresidentialPenthouse = lazy(() => import("@/pages/LightVideo/Rooms/PresidentialPenthouse.jsx"));
const LightVideoSingleRoom = lazy(() => import("@/pages/LightVideo/Rooms/SingleRoom.jsx"));

const LightSliderHome = lazy(() => import("@/pages/LightSlider/Home.jsx"));
const LightSliderAbout = lazy(() => import("@/pages/LightSlider/About.jsx"));
const LightSliderRooms = lazy(() => import("@/pages/LightSlider/Rooms.jsx"));
const LightSliderGallery = lazy(() => import("@/pages/LightSlider/Gallery.jsx"));
const LightSliderContact = lazy(() => import("@/pages/LightSlider/Contact.jsx"));
const LightSliderSpa = lazy(() => import("@/pages/LightSlider/Spa.jsx"));
const LightSliderFitness = lazy(() => import("@/pages/LightSlider/Fitness.jsx"));
const LightSliderPool = lazy(() => import("@/pages/LightSlider/Pool.jsx"));
const LightSliderRestaurant = lazy(() => import("@/pages/LightSlider/Restaurant.jsx"));
const LightSliderDeluxeDoubleRoom = lazy(() => import("@/pages/LightSlider/Rooms/DeluxeDoubleRoom.jsx"));
const LightSliderFamilySuite = lazy(() => import("@/pages/LightSlider/Rooms/FamilySuite.jsx"));
const LightSliderPresidentialPenthouse = lazy(() => import("@/pages/LightSlider/Rooms/PresidentialPenthouse.jsx"));
const LightSliderSingleRoom = lazy(() => import("@/pages/LightSlider/Rooms/SingleRoom.jsx"));

const LightVideoSliderHome = lazy(() => import("@/pages/LightVideoSlider/Home.jsx"));
const LightVideoSliderAbout = lazy(() => import("@/pages/LightVideoSlider/About.jsx"));
const LightVideoSliderRooms = lazy(() => import("@/pages/LightVideoSlider/Rooms.jsx"));
const LightVideoSliderGallery = lazy(() => import("@/pages/LightVideoSlider/Gallery.jsx"));
const LightVideoSliderContact = lazy(() => import("@/pages/LightVideoSlider/Contact.jsx"));
const LightVideoSliderSpa = lazy(() => import("@/pages/LightVideoSlider/Spa.jsx"));
const LightVideoSliderFitness = lazy(() => import("@/pages/LightVideoSlider/Fitness.jsx"));
const LightVideoSliderPool = lazy(() => import("@/pages/LightVideoSlider/Pool.jsx"));
const LightVideoSliderRestaurant = lazy(() => import("@/pages/LightVideoSlider/Restaurant.jsx"));
const LightVideoSliderDeluxeDoubleRoom = lazy(() => import("@/pages/LightVideoSlider/Rooms/DeluxeDoubleRoom.jsx"));
const LightVideoSliderFamilySuite = lazy(() => import("@/pages/LightVideoSlider/Rooms/FamilySuite.jsx"));
const LightVideoSliderPresidentialPenthouse = lazy(() => import("@/pages/LightVideoSlider/Rooms/PresidentialPenthouse.jsx"));
const LightVideoSliderSingleRoom = lazy(() => import("@/pages/LightVideoSlider/Rooms/SingleRoom.jsx"));

/* Import more rooms here */

const NotFound = lazy(() => import("@/pages/Shared/NotFound.jsx"));

function PageRoutes() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/">
              <Route index element={<LightSingleHome />} />
              <Route path="demos" element={<Landing />} />

              {/* Lightmode Single */}
              <Route path="light-single" element={<LightSingleHome />} />
              <Route path="light-single-about" element={<LightSingleAbout />} />
              <Route path="light-single-gallery" element={<LightSingleGallery />} />
              <Route path="light-single-contact" element={<LightSingleContact />} />
              <Route path="light-single-spa" element={<LightSingleSpa />} />
              <Route path="light-single-fitness" element={<LightSingleFitness />} />
              <Route path="light-single-pool" element={<LightSinglePool />} />
              <Route path="light-single-restaurant" element={<LightSingleRestaurant />} />
              <Route path="light-single-rooms">
                <Route index element={<LightSingleRooms />} />
                <Route path="deluxe-double-room" element={<LightSingleDeluxeDoubleRoom />} />
                <Route path="family-suite" element={<LightSingleFamilySuite />} />
                <Route path="presidential-penthouse" element={<LightSinglePresidentialPenthouse />} />
                <Route path="single-room" element={<LightSingleSingleRoom />} />
              </Route>

              {/* Lightmode Video */}
              <Route path="light-video" element={<LightVideoHome />} />
              <Route path="light-video-about" element={<LightVideoAbout />} />
              <Route path="light-video-gallery" element={<LightVideoGallery />} />
              <Route path="light-video-contact" element={<LightVideoContact />} />
              <Route path="light-video-spa" element={<LightVideoSpa />} />
              <Route path="light-video-fitness" element={<LightVideoFitness />} />
              <Route path="light-video-pool" element={<LightVideoPool />} />
              <Route path="light-video-restaurant" element={<LightVideoRestaurant />} />
              <Route path="light-video-rooms">
                <Route index element={<LightVideoRooms />} />
                <Route path="deluxe-double-room" element={<LightVideoDeluxeDoubleRoom />} />
                <Route path="family-suite" element={<LightVideoFamilySuite />} />
                <Route path="presidential-penthouse" element={<LightVideoPresidentialPenthouse />} />
                <Route path="single-room" element={<LightVideoSingleRoom />} />
              </Route>

              {/* Lightmode Slider */}
              <Route path="light-slider" element={<LightSliderHome />} />
              <Route path="light-slider-about" element={<LightSliderAbout />} />
              <Route path="light-slider-gallery" element={<LightSliderGallery />} />
              <Route path="light-slider-contact" element={<LightSliderContact />} />
              <Route path="light-slider-spa" element={<LightSliderSpa />} />
              <Route path="light-slider-fitness" element={<LightSliderFitness />} />
              <Route path="light-slider-pool" element={<LightSliderPool />} />
              <Route path="light-slider-restaurant" element={<LightSliderRestaurant />} />
              <Route path="light-slider-rooms">
                <Route index element={<LightSliderRooms />} />
                <Route path="deluxe-double-room" element={<LightSliderDeluxeDoubleRoom />} />
                <Route path="family-suite" element={<LightSliderFamilySuite />} />
                <Route path="presidential-penthouse" element={<LightSliderPresidentialPenthouse />} />
                <Route path="single-room" element={<LightSliderSingleRoom />} />
              </Route>

              {/* Lightmode Video Slider */}
              <Route path="light-video-slider" element={<LightVideoSliderHome />} />
              <Route path="light-video-slider-about" element={<LightVideoSliderAbout />} />
              <Route path="light-video-slider-gallery" element={<LightVideoSliderGallery />} />
              <Route path="light-video-slider-contact" element={<LightVideoSliderContact />} />
              <Route path="light-video-slider-spa" element={<LightVideoSliderSpa />} />
              <Route path="light-video-slider-fitness" element={<LightVideoSliderFitness />} />
              <Route path="light-video-slider-pool" element={<LightVideoSliderPool />} />
              <Route path="light-video-slider-restaurant" element={<LightVideoSliderRestaurant />} />
              <Route path="light-video-slider-rooms">
                <Route index element={<LightVideoSliderRooms />} />
                <Route path="deluxe-double-room" element={<LightVideoSliderDeluxeDoubleRoom />} />
                <Route path="family-suite" element={<LightVideoSliderFamilySuite />} />
                <Route path="presidential-penthouse" element={<LightVideoSliderPresidentialPenthouse />} />
                <Route path="single-room" element={<LightVideoSliderSingleRoom />} />
              </Route>

              <Route path="*" element={<NotFound />} />

              {/* Add More Pages Here */}
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default PageRoutes;
