import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  href?: string;
}

const variants = {
  primary:
    "bg-accent text-foreground px-6 py-3 font-label text-label-caps uppercase tracking-widest font-bold hover:brightness-110 transition-all",
  secondary:
    "bg-surface text-foreground px-6 py-3 font-label text-label-caps uppercase tracking-widest font-bold hover:bg-surface-container transition-colors",
  ghost:
    "bg-white/5 text-foreground px-6 py-3 font-label text-label-caps uppercase tracking-widest font-bold hover:bg-white/10 transition-all",
  outline:
    "border border-white/10 text-foreground px-6 py-3 font-label text-label-caps uppercase tracking-widest font-bold hover:border-primary transition-colors",
};

export function Button({
  children,
  variant = "primary",
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
