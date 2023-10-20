import React from "react";

interface Props {
    className?: string;
    children: React.ReactNode;
    variant: "plain" | "solid";
    disabled?: boolean;
    onClick?: () => void;
}

export default function Button({className, children, variant, disabled, onClick}: Props) {
    const baseStyle = "cursor-pointer px-2 py-2 font-bold disabled:opacity-50 ";
    const plainStyle =
        "bg-transparent hover:bg-accent/10 text-md text-accent dark:text-accent rounded-2xl";
    const solidStyle =
        "min-w-min cursor-pointer px-3 py-2 bg-accent hover:bg-accent/90 text-md text-gray-100 dark:text-gray-100 rounded-2xl";

    let style = variant === "plain" ? plainStyle : solidStyle;
    style = baseStyle + style + " " + className;

    return (
        <button disabled={disabled} className={style} onClick={onClick}>{children}</button>
    )
}
