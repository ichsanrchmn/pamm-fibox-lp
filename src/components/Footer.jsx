import React from "react";
import styles from "../style";
import { logo, facebook, instagram } from "../assets";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <a href="/">
            <img src={logo} alt="pamm-fibox-trading-forex" className="w-[220px] object-contain" />
          </a>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, realiable and secure.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">Partner</h4>
            <ul className="list-none mt-4">
              <li className="font-poppins font-normal text-[16px] mb-3 text-dimWhite duration-300 cursor-pointer hover:text-secondary">
                <a href="https://ts-markets.com/" target="_blank">
                  Broker Partner
                </a>
              </li>
              <li className="font-poppins font-normal text-[16px] mb-3 text-dimWhite duration-300 cursor-pointer hover:text-secondary">
                <a href="https://client.ts-trades.tech/signup?ref=549973" target="_blank">
                  Registrasi Akun Trading
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45] xs:mb-[60px]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">2023 PAMM Fibox Gold. All Rights Reserved.</p>
        <div id="socials" className="flex flex-row md:mt-0 mt-6">
          <a href="https://www.facebook.com/fauzi.fibox" target="_blank">
            <img src={facebook} alt="facebook-fauzi-fibox" className="w-[21px] h-[21px] object-contain cursor-pointer mr-4" />
          </a>
          <a href="https://www.instagram.com/fauzifibox/" target="_blank">
            <img src={instagram} alt="facebook-fauzi-fibox" className="w-[21px] h-[21px] object-contain cursor-pointer mr-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
