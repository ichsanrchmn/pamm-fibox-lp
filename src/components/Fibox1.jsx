import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="introduction" className={layout.section} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Selamat datang di layanan <br className="sm:block hidden" /> kemudahan <span className="text-gradient">trading forex</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <span className="text-gradient">PAMM Fibox Gold</span> hadir memberikan kemudahan bagi Anda yang ingin mencapai tujuan investasi di pasar Forex. Dapatkan teknik yang efektif, portofolio ter-update, juga transparansi profit yang
          paling sesuai dengan kebutuhan investasi Anda.
        </p>
        <a href="https://api.whatsapp.com/send?phone=6281850778557&text=Halo%20admin,%20saya%20berminat%20untuk%20join%20PAMM%20Fibox.%20Bagaimana%20caranya?" target="_blank">
          <Button styles="mt-10" text="Join PAMM Fibox Sekarang!" />
        </a>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="pamm-fibox-trading-forex" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
