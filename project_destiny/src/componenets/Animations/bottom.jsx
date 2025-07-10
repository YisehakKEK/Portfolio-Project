import ScrollReveal from "scrollreveal";

export const Bottom = (className) => {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "100px",
    duration: 2000,
    reset: false,
    delay: 500,
  });

  sr.reveal(`.${className}`, { interval: 200 });
};
