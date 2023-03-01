import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../style";
import { testi1, testi2, testi3, testi4 } from "../assets";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <div className="flex justify-between flex-col px-2 py-2 rounded-[10px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img src={testi1} alt="testimoni-pamm-fibox-gold" className="rounded-[10px] w-[350px]" />
        </div>
        <div className="flex justify-center flex-col px-2 py-2 rounded-[10px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img src={testi2} alt="testimoni-pamm-fibox-gold" className="rounded-[10px] w-[350px]" />
        </div>
        <div className="flex justify-center flex-col px-2 py-2 rounded-[10px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img src={testi3} alt="testimoni-pamm-fibox-gold" className="rounded-[10px] w-[350px]" />
        </div>
        <div className="flex justify-center flex-col px-2 py-2 rounded-[10px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
          <img src={testi4} alt="testimoni-pamm-fibox-gold" className="rounded-[10px] w-[350px]" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
