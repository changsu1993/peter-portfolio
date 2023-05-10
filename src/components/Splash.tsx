import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useAnimation } from '@hooks/useAnimation';

const Splash = () => {
  const navigate = useNavigate();
  const { transition } = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      navigate('/main', { replace: false });
    }, 3000);
  }, []);

  return (
    <motion.div
      className="z-[99] w-screen h-screen absolute flex flex-col align-middle justify-center overflow-hidden cursor-none bg-blue-700"
      exit={{ opacity: 0, translateY: '200%', transition: { duration: 1 } }}
    >
      {[['hello'], ['test'], ['my'], ['portfolio']].map(([title]) =>
        title === 'hello' ? (
          <motion.div key={title} className="flex flex-col w-full py-[8vw]">
            <motion.p
              className="text-[9vw] normal-case"
              initial={{ translateX: '200%', opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ...transition, delay: 0.6 }}
            >
              HELLO, I AM PETER
            </motion.p>
          </motion.div>
        ) : title === 'test' ? (
          <motion.div key={title} className="flex flex-col w-full py-[8vw]">
            <motion.p
              className="text-[9vw] normal-case"
              initial={{ translateY: '-200%', opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ ...transition, delay: 0.8 }}
            >
              A FRONTEND DEVELOPER
            </motion.p>
          </motion.div>
        ) : title === 'my' ? (
          <motion.div key={title} className="flex flex-col w-full py-[8vw]">
            <motion.p
              className="text-[9vw] normal-case"
              initial={{ translateX: '-200%', opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ ...transition, delay: 1 }}
            >
              who&apos;s not afraid to
            </motion.p>
          </motion.div>
        ) : (
          <motion.div key={title} className="flex flex-col w-full py-[8vw]">
            <motion.p
              className="text-[9vw] normal-case"
              initial={{ translateY: '200%', opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ ...transition, delay: 1.2 }}
            >
              challenge
            </motion.p>
          </motion.div>
        ),
      )}
    </motion.div>
  );
};

export default Splash;
