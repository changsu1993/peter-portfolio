import React from 'react';
import Talgut from '../../assets/images/talgut.png';

const Section02 = () => {
  return (
    <>
      <section className="py-[5rem] pl-[1.5rem] pr-[0] relative min-[1200px]:w-[85%] min-[1200px]:my-0 min-[1200px]:mr-[30px] min-[1200px]:ml-auto min-[1200px]:flex min-[1200px]:flex-col">
        <div className="text-[3rem] text-[#08fdd8] mb-[30px] font-bold min-[1200px]:text-[2.5rem]">
          <h2>My Portfolio</h2>
        </div>
        <div className="min-[1200px]:flex min-[1200px]:justify-between min-[1200px]:items-center">
          <div>
            <p className="leading-[1.5] min-[1200px]:w-[700px] min-[1200px]:text-[14px] min-[1200px]:leading-[1.5rem]">
              A small gallery of recent projects chosen by me. II&#39;mve done
              them all together with amazing people from compaines around the
              global ItI&#39;ms only a drop in the ocean compared to the entire
              list.
              <br />
              interested to see some more? Visit
              <a href="#" className="text-[#08fdd8]">
                my work
              </a>
              page
            </p>
          </div>
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
        <div className="text-[12rem] font-bold absolute text-[#2d2d2e] left-[10px] bottom-[-70px] tracking-[-10px] z-[-999] min-[1200px]:text-[25rem] min-[1200px]:font-bold min-[1200px]:left-[644px] min-[1200px]:top-[-111px]">
          Work
        </div>
      </section>
      <div className="bg-image-color min-[1200px]:pl-[8.5rem]">
        <ul className="flex flex-wrap list-none">
          <li className="w-[161px] h-[160px] relative list-item overflow-hidden group min-[1200px]:w-[242px] min-[1200px]:h-[236px]">
            <div className="absolute top-0 bottom-0 left-0 right-0 transition-all duration-500 group-hover:scale-[1.14]">
              <img
                src={Talgut}
                alt="talgut"
                className="object-cover w-full h-full"
              />
              <div></div>
              <a
                href="#"
                className="absolute top-0 left-0 block w-full h-full transition-all duration-150 ease-out opacity-0 bg-circle-pattern bg-no-repeat bg-center scale-[0.2] group-hover:scale-[0.6] group-hover:opacity-[1]"
              ></a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Section02;
