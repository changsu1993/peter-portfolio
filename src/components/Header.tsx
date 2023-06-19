import React, {
  type Dispatch,
  type SetStateAction,
  useRef,
  useState,
} from 'react';
import Bgm from '../assets/music/bgm.mp3';

const Header = ({
  setOpen,
  open,
}: {
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  setOpen: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  open: boolean;
}) => {
  const radioRef = useRef<HTMLAudioElement>(null);
  const [sound, setSound] = useState(false);

  const startRadio = () => {
    if (radioRef.current != null) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      radioRef.current.play();
    }
    setSound(true);
  };

  const pauseRadio = () => {
    if (radioRef.current != null) {
      radioRef.current.pause();
    }
    setSound(false);
  };

  return (
    <header className="fixed flex top-0 w-[95%] h-[10vh] m-auto justify-between items-center z-[2] min-[950px]:justify-end">
      <div className="flex items-center bg-[#1b1b1b] rounded-[5px] p-[7px]">
        <audio ref={radioRef} loop>
          <source src={Bgm} />
        </audio>
        {sound ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="currentColor"
            className="bi bi-cloud-haze2 m-[7px] text-[#08fdd8]"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
          </svg>
        ) : (
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
        )}
        <span className="text-[#fff] mr-[5px]">Sound</span>
        <div className="p-[7px]">
          {sound ? (
            <span
              className="text-[#08fdd8] animate-pulse"
              onClick={() => {
                pauseRadio();
              }}
            >
              ON
            </span>
          ) : (
            <span
              className="text-[#f50057] animate-pulse"
              onClick={() => {
                startRadio();
              }}
            >
              OFF
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center min-[950px]:hidden">
        {open ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              fill="currentColor"
              className="bi bi-x-lg text-[#fff] bg-[#181818]"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => {
              setOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
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
        )}
      </div>
    </header>
  );
};

export default Header;
