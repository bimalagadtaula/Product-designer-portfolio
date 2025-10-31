import { Button } from "@/components/ui/button";
import React from "react";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function CTAPrimary({ href, children, className }: CTAProps) {
  return (
    <Button
      asChild
      className={
        "gradient-bg-neon text-white text-lg px-8 py-4 rounded-xl hover:shadow-lg transition-transform duration-200 ease-premium hover-tail font-semibold focus:outline-none focus:ring-4 focus:ring-primary " +
        (className || "")
      }
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

export function CTASecondary({ href, children, className }: CTAProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={
        "border-foreground/40 bg-white/5 hover:bg-white/10 text-foreground hover:shadow-lg hover:translate-y-[-1px] transition ease-premium hover-tail " +
        (className || "")
      }
    >
      <a href={href}>{children}</a>
    </Button>
  );
}

export default { CTAPrimary, CTASecondary };
