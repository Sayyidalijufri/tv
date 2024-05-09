import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-white",
      ],
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      secondVariant: ["hover:bg-gray-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "size-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Button({ variant, size, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}

export default Button;
