import styles from "./Menu.module.scss";
import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import menuData from "@/data/menu";

function Menu() {
  const [isOpen, setIsOpen] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(menuData[0].category);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy(); // safe destroy if already initialized
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef.current, prevRef.current, nextRef.current]);
  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.sliderButtonWrapper}>
          <button ref={prevRef} className={`${styles.prevArrow} ${isBeginning ? styles.disabled : ""}`}>
            <IoIosArrowBack size="16px" />
          </button>
        </div>

        <Lightbox
          open={!!isOpen}
          close={() => setIsOpen(null)}
          carousel={{ finite: true }}
          slides={isOpen ? [{ src: isOpen.image, title: isOpen.name }] : []}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true,
          }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
        />

        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 50 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            0: { slidesPerView: 1, spaceBetween: 20 },
          }}
          touchStartPreventDefault={false}
          centerInsufficientSlides={true}
          watchOverflow={true}
          speed={500}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className={styles.slideContainer}
        >
          {menuData.map((section) => (
            <SwiperSlide key={section.category} className={styles.slideItem}>
              <button onClick={() => setSelectedCategory(section.category)} className={styles.categoryButton}>
                {section.category}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.sliderButtonWrapper}>
          <button ref={nextRef} className={`${styles.nextArrow} ${isEnd ? styles.disabled : ""}`}>
            <IoIosArrowForward size="16px" />
          </button>
        </div>
      </div>
      <div className={styles.menuItems}>
        {menuData
          .filter((section) => section.category === selectedCategory)
          .map((section) =>
            section.items.map((item) => (
              <div key={item.name} className={styles.menuItem}>
                <div className={styles.menuItemTitle}>
                  <img src={item.image} alt={`${item.name} Image`} onClick={() => setIsOpen(item)} />
                  <h3>{item.name}</h3>
                  <hr className={styles.menuLine} />
                  <span>${item.price}</span>
                </div>
                <div className={styles.menuItemText}>
                  <p>{item.description}</p>
                </div>
              </div>
            )),
          )}
      </div>
    </>
  );
}

export default Menu;
