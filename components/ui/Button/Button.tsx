import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    href: string;
    variant?: "primary" | "secondary";
};

export function Button({
                           children,
                           href,
                           variant = "primary",
                       }: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition";

    const variants = {
        primary: "bg-red-600 text-white hover:bg-red-700",
        secondary:
            "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",
    };

    return (
        <Link
            href={href}
            className={`${baseClasses} ${variants[variant]}`}
        >
            {children}
        </Link>
    );
}