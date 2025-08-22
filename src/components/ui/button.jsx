import React from "react";
import clsx from "clsx";

// Define possible variants and sizes
const variants = {
    default: "bg-slate-900 text-white border border-transparent hover:bg-slate-800",
    outline: "bg-transparent text-slate-900 border border-slate-300 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100 border border-transparent",
};

const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl",
};

export const Button = React.forwardRef(
    (
        {
            variant = "default",
            size = "md",
            className = "",
            type = "button",
            children,
            ...props
        },
        ref
    ) => (
        <button
            ref={ref}
            type={type}
            className={clsx(
                "inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all duration-200",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
);

Button.displayName = "Button";