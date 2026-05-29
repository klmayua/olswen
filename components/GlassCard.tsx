import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  accent?: "gold" | "primary" | "none";
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  accent = "none",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 md:p-8",
        accent === "gold" && "border-gold-accent/20",
        accent === "primary" && "border-primary/20",
        hover && "transition-all duration-500 hover:border-gold-accent/30 hover:shadow-[0_0_30px_rgba(198,161,91,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
