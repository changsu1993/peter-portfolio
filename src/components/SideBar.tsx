import React from "react";


const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col justify-between w-32 h-screen bg-dark-grey ">
      <div className="relative w-full bg-black h-44">
        <p className="absolute font-semibold top-1 left-10 text-light-teal text-8xl">
          P
        </p>
        <p className="absolute font-semibold top-1 left-12 text-light-pink text-8xl">
          P
        </p>
        <p className="absolute text-3xl font-semibold text-white bottom-11 left-8">
          Peter
        </p>
        <p className="absolute w-full text-sm font-semibold text-light-grey bottom-4 left-4">
          Web Developer
        </p>
      </div>
      <nav className="flex flex-col items-center ">
        {[
          ['About', '/about'],
          ['My Skills', '/skills'],
          ['Work', '/work'],
          ['Contact', '/contact'],
        ].map(([title, url]) => (
          <a key={title} rel={title} href={url} className="text-center text-light-grey leading-15">{title}</a>
        ))}
        <a rel="Blog" href="/blog" className="text-center text-light-teal leading-15">Blog</a>
      </nav>
      <ul>

      </ul>
    </div>
  );
}

export default SideBar;