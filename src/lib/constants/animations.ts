import { Variants } from 'framer-motion';

export const fadeInLeft = {
  initial: { opacity: 0, transform: 'translateX(-50px)' },
  whileInView: { opacity: 1, transform: 'translateX(0)' },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const fadeInUp = {
  initial: { opacity: 0, transform: 'translateY(20px)' },
  whileInView: { opacity: 1, transform: 'translateY(0)' },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, transform: 'translateY(20px)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      duration: 0.5
    }
  }
};
