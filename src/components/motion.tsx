import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  duration?: number;
  style?: CSSProperties;
};

export const FadeIn = ({ children, delay = 0, className, y = 16, duration = 0.6, style }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.2 }}
    className={cn(className)}
    style={style}
  >
    {children}
  </motion.div>
);

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

type StaggerProps = { children: ReactNode; className?: string };

export const StaggerContainer = ({ children, className }: StaggerProps) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className={cn(className)}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div variants={item} className={cn(className)}>
    {children}
  </motion.div>
);