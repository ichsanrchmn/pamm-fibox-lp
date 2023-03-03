import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Gabung Sekarang dan Raih Beragam Pilihan Keuntungannya!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Wujudkan passive income anda sekarang juga bersama program <span className="text-gradient">PAMM Fibox Gold</span>!
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <a href="https://api.whatsapp.com/send?phone=6281250778557&text=Halo%20admin,%20saya%20berminat%20untuk%20join%20PAMM%20Fibox.%20Bagaimana%20caranya?" target="_blank">
          <Button text="Gabung Sekarang" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
