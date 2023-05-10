import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import SideBar from '@components/SideBar';
import Splash from '@components/Splash';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Splash />
    </Router>
  );
}

export default App;
