import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Content max-width. md ≈ nav width, lg ≈ footer/section width. */
  size?: "sm" | "md" | "lg";
  as?: "div" | "section" | "header" | "footer" | "nav";
};

const sizes = {
  sm: "max-w-[920px]",
  md: "max-w-[1120px]",
  lg: "max-w-[1280px]",
} as const;

export function Container({
  children,
  className,
  size = "md",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8", sizes[size], className)}>
      {children}
    </Tag>
  );
}
