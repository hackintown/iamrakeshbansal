import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-purple-500 to-green-500 text-white border-0 text-nowrap  hover:from-purple-600 hover:to-green-600",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm md:text-base lg:h-12 lg:px-6 lg:py-3",
        sm: "h-8 px-4 text-xs md:text-sm",
        lg: "h-12 px-6 text-base md:h-14 md:px-8 md:text-lg lg:h-16 lg:px-10",
        icon: "h-9 w-9 md:h-10 md:w-10 lg:h-12 lg:w-12",
        custom: "px-4 py-2 text-sm md:px-6  md:text-base lg:px-8 lg:text-lg font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showArrow = false, children, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="flex items-center justify-center">
          <span className="truncate">{children}</span>
          {showArrow && (
            <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 md:h-5 md:w-5 " />
          )}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

