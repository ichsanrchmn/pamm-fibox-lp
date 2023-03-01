import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimYellow`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ml-2">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24x] mb-1 ml-2">{content}</p>
    </div>
  </div>
);

const Business = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={layout.section} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Jangan lewatkan keunggulan <br className="sm:block hidden" /> dari <span className="text-gradient">PAMM Fibox Gold</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Trading forex bisa menjadi aktivitas yang rumit dan berisiko. Maka dari itu, ini waktu yang tepat untuk Anda peroleh keuntungan maksimal dari trading forex melalui <span className="text-gradient">PAMM Fibox Gold</span>! Raih
          beragam kemudahan di sini
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
