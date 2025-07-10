import ScrollReveal from "scrollreveal";

export const Top = (className) => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2000,
    reset: false,
    delay: 500,
  });

  sr.reveal(`.${className}`, { interval: 200 });
};
