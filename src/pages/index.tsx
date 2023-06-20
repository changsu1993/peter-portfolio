import React, { useState } from 'react';

import SideBar from '@components/SideBar';
// import Section01 from '@components/\bIndex/Section01';
import Header from '@components/Header';
import Section from '@components/\bIndex/Section';
import Section02 from '@components/\bIndex/Section02';

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header setOpen={setOpen} open={open} />
      <SideBar open={open} />
      {/* <Section01 /> */}
      <Section />
      <Section02 />
    </>
  );
};

export default Main;
