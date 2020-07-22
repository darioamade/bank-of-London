gsap.from(".hero-cards-content-left-card2", {
  duration: 1,
  x: "-300%",
  ease: "in",
  delay: 0,
});
gsap.from(".hero-cards-content-left-card1", {
  duration: 1,
  x: "-300%",
  ease: "in",
  delay: 1,
});
gsap.from(".stars", { duration: 1, x: "-300%", ease: "in", delay: 1 });
gsap.from(".hero-cards-img", { duration: 1, y: "-500%", fade: "in", delay: 1 });

// gsap.from(".getStarted", { duration: 1, y: "-500%", fade: "in", delay: 1 });
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline.from(".getStarted", { opacity: 0, delay: 2 });
