import ScrollReveal from "scrollreveal";

export const Left = (className) => {
  const sr = ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 2000,
    reset: false,
    delay: 500,
  });

  sr.reveal(`.${className}`, { interval: 200 });
};
