import ScrollReveal from "scrollreveal";

export const Right = (className) => {
  const sr = ScrollReveal({
    origin: "right",
    distance: "100px",
    duration: 2000,
    reset: false,
    delay: 200,
  });

  sr.reveal(`.${className}`, { interval: 200 });
};
