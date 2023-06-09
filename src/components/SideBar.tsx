import React from 'react';

const SideBar = ({ open }: { open: boolean }) => {
  return (
    <aside
      className={
        open
          ? 'fixed top-0 left-0 w-full h-[100%] z-[1] overflow-hidden bg-[#191919] '
          : 'fixed top-0 left-0 w-full h-[0%] z-[1] overflow-hidden bg-[#191919] min-[1200px]:w-[10%] min-[1200px]:h-[100%]'
      }
    >
      <div className="flex flex-col items-center justify-between h-screen min-[1200px]:h-[80%]">
        <div className="w-full bg-black min-h-[32vh] items-center justify-center flex-col flex min-[1200px]:min-h-[25vh]">
          <a className="grid text-center no-underline place-items-center min-[1200px]:h-[auto]">
            <p className="font-semibold text-light-teal text-8xl">P</p>
            <p className="mt-[-96px] font-semibold text-light-pink text-8xl ml-4">
              P
            </p>
            <p className="mb-2 text-3xl font-semibold text-white font-[times]">
              Peter
            </p>
            <p className="text-sm font-semibold text-light-grey font-[times]">
              Web Developer
            </p>
          </a>
        </div>
        <nav>
          {[
            ['About', '/about'],
            ['My Skills', '/skills'],
            ['Work', '/work'],
            ['Blog', '/blog'],
            ['Contact', '/contact'],
          ].map(([title, url]) => (
            <a
              key={title}
              rel={title}
              href={url}
              className="block w-full text-center no-underline text-light-grey leading-[3rem] hover:text-light-teal before:w-full before:h-[1px] before:content-[''] before:absolute before:left-0 before:bg-[#2d2d2e]"
            >
              {title}
            </a>
          ))}
        </nav>
        <ul className="flex mb-[30px] list-none min-[1200px]:mb-[0px] w-[60%] justify-between">
          <li className="min-[1200px]:text-center min-[1200px]:text-[1rem]">
            <a
              rel="Github"
              href="https://github.com/changsu1993"
              className="no-underline text-[#909096] hover:text-[#08fdd8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </li>
          <li className="text-[1rem] min-[1200px]:text-center min-[1200px]:text-[1rem]">
            <a
              rel="Blog"
              href="https://changsu1993.github.io/"
              className="no-underline text-[#909096] hover:text-[#08fdd8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bootstrap-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
              </svg>
            </a>
          </li>
          <li className="text-[1rem] min-[1200px]:text-center min-[1200px]:text-[1rem]">
            <a
              rel="About"
              href="/about"
              className="no-underline text-[#909096] hover:text-[#08fdd8] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
