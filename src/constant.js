export const fadeIn = (direction = "up", delay = 0) => {
  const isUp = direction === "up";
  return {
    initial: {
      opacity: 0,
      y: isUp ? 100 : -100, // 从上还是从下
      scale: 1.3, // 初始稍大
    },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1, // 缩回原来大小，制造“砸上去”感觉
    },
    transition: {
      duration: 0.35, // 短时间，快速
      ease: [0.4, 0.02, 0.2, 1], // 类似 bounce 的 ease
      delay,
    },
    viewport: { once: true, amount: 0.2 },
  };
};

export const fadeInLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.3 },
});
