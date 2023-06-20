import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Main from '@pages/index';
import Splash from './Splash';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Splash />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
