'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        BUFFLONE
      </h2>
      {/* <img src="/bufflogo.png" alt="bufflone" /> */}
      <h3 className="font-bold text-[18px] leading-[26px] text-white cursor-pointer">
        Home
      </h3>
      <h3 className="font-bold text-[18px] leading-[26px] text-white cursor-pointer">
        Services
      </h3>
      <h3 className="font-bold text-[18px] leading-[26px] text-white cursor-pointer">
        Hire Developer
      </h3>
      <h3 className="font-bold text-[18px] leading-[26px] text-white cursor-pointer">
        Career
      </h3>
      <h3 className="font-bold text-[18px] leading-[26px] text-white cursor-pointer">
        Talk to Us
      </h3>
      <img
        src="search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <img
        src="menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
