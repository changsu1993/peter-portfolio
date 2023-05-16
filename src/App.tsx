import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from '@components/AnimatedRoutes';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
