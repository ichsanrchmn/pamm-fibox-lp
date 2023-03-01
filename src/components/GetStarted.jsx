import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-scroll";

const GetStarted = () => (
  <Link to={navLinks.find((link) => link.id === "introduction").id} smooth={true} duration={500}>
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-main-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full hover:bg-transparent duration-300`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1 ml-3">
            <span className="text-gradient">Gabung</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrow" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient ">Sekarang</span>
        </p>
      </div>
    </div>
  </Link>
);

export default GetStarted;
