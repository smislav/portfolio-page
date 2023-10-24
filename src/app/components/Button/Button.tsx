import React from "react";

interface Props {
    className?: string;
    children: React.ReactNode;
    variant: "plain" | "solid";
    disabled?: boolean;
    onClick?: () => void;
}

export default function Button({className, children, variant, disabled, onClick}: Props) {
    const baseStyle = "text-sm sm:text-md cursor-pointer font-bold disabled:opacity-50 whitespace-nowrap ";
    const plainStyle =
        "px-2 py-2 bg-transparent hover:bg-accent/10 text-accent dark:text-accent rounded-2xl ";
    const solidStyle =
        "px-2 py-2 bg-accent hover:bg-accent/90 text-gray-100 dark:text-gray-100 rounded-2xl ";

    let style = variant === "plain" ? plainStyle : solidStyle;
    style = baseStyle + style + " " + className;

    return (
        <button disabled={disabled} className={style} onClick={onClick}>{children}</button>
    )
}
