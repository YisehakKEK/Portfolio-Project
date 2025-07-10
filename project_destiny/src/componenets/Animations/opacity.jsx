import ScrollReveal from "scrollreveal";

export const Opacity = (className) => {
  const sr = ScrollReveal({
    delay: 200,
    duration: 500,
    easing: 'ease-out',
    distance: '50px',
    opacity: 0,
  });

  sr.reveal(`.${className}`, { interval: 200 });
};
