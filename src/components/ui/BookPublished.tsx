"use client";

import React, {  useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { imageUrl: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_1.jpg", alt: "Project 1" },
  { imageUrl: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_2.jpg", alt: "Project 3" },
  { imageUrl: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_3.jpg", alt: "Project 4" },
  { imageUrl: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_1.jpg", alt: "Project 1" },
  { imageUrl: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_2.jpg", alt: "Project 3" },
  { imageUrl: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_3.jpg", alt: "Project 4" },
  { imageUrl: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_1.jpg", alt: "Project 1" },
  { imageUrl: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_2.jpg", alt: "Project 3" },
  { imageUrl: "https://www.iamrakeshbansal.com/wp-content/uploads/2022/08/rkb_book_3.jpg", alt: "Project 4" },
];

export default function BookPublished() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  }, [swiperInstance]);

  const handleNext = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  }, [swiperInstance]);

  const handleSlideChange = useCallback(() => {
    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  }, [swiperInstance]);

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{ backgroundImage: `url('/images/services-tab-bg.png')` }}
        aria-hidden="true"
      />
      <div className="container pt-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-green-100 relative">
          PUBLISHED BOOK
            <span
              className="absolute inset-0 text-green-200 text-opacity-10"
              aria-hidden="true"
            >
             PUBLISHED BOOK
            </span>
          </h2>
          <h3 className="text-accent text-xs md:text-sm mb-1.5 font-semibold -mt-5 relative">
            PUBLISHED BOOK
          </h3>
          <h4 className="text-2xl font-semibold mt-2">
            The Best Projects That We
            <br />
            <span className="text-accent">Have Delivered</span>
          </h4>
          <p className="text-tertiary-foreground mt-2 lg:max-w-[590px] lg:mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative w-full max-w-5xl mx-auto py-16">
            <Swiper
              onSwiper={setSwiperInstance}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2.5}
              spaceBetween={0}
              initialSlide={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 250,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
              className="swiper-container"
              onSlideChange={handleSlideChange}
              breakpoints={{
                320: {
                  slidesPerView: 1.5,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2.5,
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="relative w-full h-[300px]  sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={slide.imageUrl}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handlePrev}
              className={`absolute top-1/2 -left-9 sm:-left-10 lg:-left-20 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full transition-all duration-300 ${
                isBeginning
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-80"
              }`}
              aria-label="Previous slide"
              disabled={isBeginning}
            >
              <Image
                src={
                  isBeginning
                    ? "/images/portfolio-prev.webp"
                    : "/images/portfolio-prev.webp"
                }
                alt="Previous"
                width={45}
                height={45}
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
              />
            </button>
            <button
              onClick={handleNext}
              className={`absolute top-1/2 -right-9 sm:-right-10 lg:-right-20 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full transition-all duration-300 ${
                isEnd ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
              }`}
              aria-label="Next slide"
              disabled={isEnd}
            >
              <Image
                src={
                  isEnd
                    ? "/images/portfolio-next.webp"
                    : "/images/portfolio-next.webp"
                }
                alt="Next"
                width={45}
                height={45}
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}