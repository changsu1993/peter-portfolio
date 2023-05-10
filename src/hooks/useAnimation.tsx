export const useAnimation = () => {
  const hoverAnimation = {
    hover: {
      scale: 0.98,
    },
  };

  const revealAnimation = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const transition = {
    duration: 0.8,
  };

  return { hoverAnimation, revealAnimation, transition };
};
