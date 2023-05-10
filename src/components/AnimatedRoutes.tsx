import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Main from '@pages/index';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/main" element={<Main />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
