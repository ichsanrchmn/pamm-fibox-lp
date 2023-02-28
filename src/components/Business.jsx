import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimYellow`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24x] mb-1">{content}</p>
    </div>
  </div>
);

const Business = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="features" className={layout.section} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards in the market.</p>
        <Button styles="mt-10" text="Join PAMM Fibox Sekarang!" />
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
