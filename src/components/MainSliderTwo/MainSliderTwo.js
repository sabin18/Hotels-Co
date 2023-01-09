import mainSliderTwoData from "@/data/mainSliderTwoData";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import DestinationsOne from "../DestinationsOne/DestinationsOne";

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSliderTwo = () => {
  return (
    <section className="main-slider tour-details-slider">
      <DestinationsOne />
    </section>
  );
};

export default MainSliderTwo;
