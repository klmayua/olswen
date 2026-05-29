"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function SectionRevealWrapper({
  children,
  className,
  delay = 0,
  id,
}: SectionRevealWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
