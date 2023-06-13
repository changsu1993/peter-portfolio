import React from 'react';
// import { motion } from 'framer-motion';
import Logo from '../../assets/images/name.png';

const Section = () => {
  return (
    <section className="flex items-center min-h-screen pl-[1.5rem]">
      <div>
        <h1 className="text-[3.2rem] tracking-[-3px]">
          Hi, <br /> I&#39;m{' '}
          <img className="inline" src={Logo} alt="P" width="53" height="72" />
          eter,
          <br /> web Developer
        </h1>
        <p className="relative mt-[30px] text-[14px] text-[#a2a2a3] tracking-[3px]">
          Front End Developer / Wordpress Expert
        </p>
        <br />

        <a
          href="#"
          className="group block relative mt-[50px] no-underline w-full max-w-[200px] h-[40px] leading-[40px] tracking-[3px] text-center"
        >
          <div className="relative w-full h-full overflow-hidden transition-all duration-300 ease-in-out text-[#08fdd8]">
            <span className="w-[0%] h-full absolute left-[-5px] top-0 transition-all duration-300 ease-in-out bg-[#08fdd8] group-hover:w-[110%] skew-x-[-19deg]"></span>
            <span className="box-border absolute left-0 w-full h-full border-[#08fdd8] border-solid border-[1px]"></span>
            <span className="absolute top-0 left-0 w-full h-full group-hover:text-[#1d1d1d]">
              Contact me!
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Section;
