/** Paylaşılan animasyon eğrileri ve varyantları */
export const easeSmooth = [0.22, 1, 0.36, 1] as const;

export const transition = {
  fast: { duration: 0.35, ease: easeSmooth },
  base: { duration: 0.55, ease: easeSmooth },
  slow: { duration: 0.75, ease: easeSmooth },
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const stagger = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.04 },
    },
  },
};
