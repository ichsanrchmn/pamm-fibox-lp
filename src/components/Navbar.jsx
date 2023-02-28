import React, { useState } from "react";
import { close, menu } from "../assets";
import LogoNavbar from "../assets/logoNavbar2.png";
import { navLinks } from "../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <img src={LogoNavbar} alt="pamm-fibox" className="w-[220px] h-[full]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white mr-10 hover:text-secondary duration-300`}>
            <Link to={nav.id} smooth={true} duration={500}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain mb-3" onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mr-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-white mr-10`}>
                <Link to={nav.id} smooth={true} duration={500}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
