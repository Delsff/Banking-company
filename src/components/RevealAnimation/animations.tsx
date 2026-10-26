import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export const Reveal = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);
