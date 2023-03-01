import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="partners" className={`${styles.flexCenter} my-4`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] my-5`}>
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
