import React from 'react';

const Header = () => {
  return (
    <header className="fixed flex top-0 w-[95%] h-[10vh] m-auto justify-between z-[2]">
      <div className="flex items-center bg-[#1b1b1b] rounded-[5px]">
        <audio>
          <source src="../assets/music/bgm.mp3" />
        </audio>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          fill="currentColor"
          className="bi bi-cloud-haze2 m-[7px] text-[#f50057]"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
        </svg>
        <span className="text-[#fff] mr-[5px]">Sound</span>
        <div className="p-[7px]">
          <span className="text-[#f50057]">OFF</span>
          <span className="text-[#08fdd8]">ON</span>
        </div>
      </div>
      <button className="flex items-center cursor-pointer">
        <div className="p-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="currentColor"
            className="bi bi-list text-[#fff] bg-[#181818]"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <div className="p-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="currentColor"
            className="bi bi-x-lg text-[#fff] bg-[#181818]"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
      </button>
    </header>
  );
};

export default Header;
