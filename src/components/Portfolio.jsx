import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="portfolio" className={layout.sectionReverse} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="portfolio-pamm-fibox-trading-forex" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full gold__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Portfolio trading lengkap <br className="sm:block hidden" /> dari sumber terpercaya.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Performa yang konsisten bisa secara langsung dimonitor melalui portofolio yang selalu di update, sehingga Anda dapat memastikan bagaimana konsistensi dan perkembangan transaksi setiap harinya secara efektif dan tepat waktu.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="https://www.mql5.com/en/signals/1800326" target="_blank">
            <Button text="Cek Portfolio"></Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
