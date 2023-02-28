import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="pricing" className={layout.section} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique incidunt corrupti ducimus facere temporibus cumque, id fugit quasi hic!</p>
        {/* <a href="https://api.whatsapp.com/send?phone=6281850778557&text=Halo%20admin,%20saya%20butuh%20bantuan%20mengenai%20PAMM%20Fibox." target="_blank"> */}
        <Button styles="mt-10" text="Konsultasikan bersama Admin" />
        {/* </a> */}
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
