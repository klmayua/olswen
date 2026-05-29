"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DeploymentCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  index?: number;
}

export function DeploymentCard({
  name,
  category,
  description,
  image,
  index = 0,
}: DeploymentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-outline-variant/20"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover opacity-40 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6 transition-transform duration-500 group-hover:-translate-y-1">
        <span className="label-md text-gold-accent">{category}</span>
        <h3 className="mt-1 font-display text-xl font-semibold text-on-surface">{name}</h3>
        <p className="mt-2 text-sm text-on-surface-variant opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
