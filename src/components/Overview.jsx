import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { overview } from "../assets";
import styles, { layout } from "../style";

const Overview = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="overview" className={layout.section} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Apa itu <span className="text-gradient">PAMM</span>?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          PAMM (Percentage Allocation Management Module) merupakan layanan spesial yang memudahkan investor untuk meraih keuntungan tanpa harus trading sendiri. Investor cukup transfer dana kepada akun Trader Manager untuk selanjutnya
          hasil/keuntungan dari trading diteruskan kepada akun investor masing-masing dalam jangka waktu yang telah disepakati.
        </p>
      </div>

      <div className={layout.sectionImg}>
        <img src={overview} alt="portfolio-pamm-fibox-trading-forex" className="w-[100%] h-[100%] relative z-[5] rounded-xl" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full gold__gradient" />
      </div>
    </section>
  );
};

export default Overview;
