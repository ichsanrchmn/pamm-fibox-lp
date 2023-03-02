import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../style";
import { testi1, testi2, testi3, testi4 } from "../assets";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const slides = [{ testi: testi1 }, { testi: testi2 }, { testi: testi3 }, { testi: testi4 }];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full gold__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Pengalaman Trading yang menguntungkan <br className="sm:block hidden" /> bersama layanan <span className="text-gradient">PAMM Fibox Gold</span>
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Sudah banyak member yang rasakan kemudahan dan konsistensi profit dari program PAMM Fibox Gold, sekarang saatnya giliran Anda yang juga rasakan pengalaman menguntungkan bersama member lainnya!
          </p>
        </div>
      </div>

      <div className="max-w-[380px] w-full m-auto px-4 relative z-[5]">
        <div className="w-full h-full rounded-lg bg-center bg-cover duration-500">
          <img src={`${slides[currentIndex].testi}`} />
        </div>
        {/* Left Arrow */}
        <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => {
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer z-[5]">
              <RxDotFilled />
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
