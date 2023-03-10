import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`} data-aos="fade-up" data-aos-duration="1000">
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            Diskon deposit <span className="text-white">50%</span> khusus periode <span className="text-white">Maret 2023</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Advanced <br className="sm:block hidden" /> <span className="text-gradient">Profit</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Machine.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Raih keuntungan dengan cara yang lebih mudah! Layanan PAMM Fibox Gold menyediakan fasilitas yang profesional juga responsif untuk memudahkan Anda dalam melakukan trading forex.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient top-0 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bttom-20 top-0 gold__gradient"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
