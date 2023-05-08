import React from "react";

import { motion } from "framer-motion";


const Splash = () => {
  return (
  <motion.div className="z-[99] w-screen h-screen absolute flex flex-col align-middle justify-center overflow-hidden cursor-none bg-blue-700" exit={{opacity: 0, translateY: '200%', transition: {duration: 1}}}>
    {[
      ['hello'],
      ['test'],
      ['my'],
      ['portfolio']
    ].map(([title]) => (
      title === 'hello' ? 
      <motion.div className="flex flex-col w-full py-[8vw]">
        <motion.p className="text-[9vw] normal-case" initial={{translateX: '200%', opacity: 0}} animate={{translateX: 0, opacity: 1}}>
          asd
        </motion.p>
      </motion.div>
      : title === 'test' ?
      <motion.div className="flex flex-col w-full py-[8vw]">
        <motion.p className="text-[9vw] normal-case">
        dsf
        </motion.p>
      </motion.div>
      : title === 'my' ?
      <motion.div className="flex flex-col w-full py-[8vw]">
        <motion.p className="text-[9vw] normal-case">
          dsf
        </motion.p>
      </motion.div>
      : 
      <motion.div className="flex flex-col w-full py-[8vw]">
        <motion.p className="text-[9vw] normal-case">
          dsf
        </motion.p>
      </motion.div>
    ))}
  </motion.div>
  );
}

export default Splash;