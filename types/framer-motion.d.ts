import { 
  motion as Motion,
  AnimatePresence as AP,
  MotionProps,
} from 'framer-motion/types';

declare module 'framer-motion' {
  export const motion: typeof Motion;
  export const AnimatePresence: typeof AP;
  export type { MotionProps };
}