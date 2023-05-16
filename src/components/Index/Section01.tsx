import React from 'react';
import { motion } from 'framer-motion';

const Section01 = () => {
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <h1 aria-label=" Hi, I'm Peter, Frontend Developer" className="text-9xl">
        <motion.ul variants={list} initial="hidden" animate="visible">
          {[
            ['H'],
            ['i'],
            [','],
            ['I'],
            ["'"],
            ['m'],
            [' P'],
            ['e'],
            ['t'],
            ['e'],
            ['r'],
          ].map(([title, idx]) => (
            <motion.span
              variants={item}
              key={idx}
              // className="inline-block"
              // initial={{ opacity: 0, scale: 0 }}
              // animate={{
              //   opacity: 1,
              //   scale: 1,
              //   // rotateZ: 360,
              // }}
              // transition={{
              //   // duration: 2,
              //   when: 'beforeChildren',
              //   type: 'spring',
              //   times: [0, 0.2, 0.5, 0.8, 1],
              // }}
            >
              {title === 'I' && <br />}
              {title}
            </motion.span>
          ))}
        </motion.ul>
        {/* <motion.span
          className="inline-block"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: 1,
            rotate: [-30, 0],
          }}
          transition={{
            duration: 2,
            type: 'spring',
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        ></motion.span> */}
      </h1>
    </div>
  );
};

export default Section01;
