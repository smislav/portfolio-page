import React from "react";

export default function TextPrimary(props: any) {
    const style = "text-gray-800 dark:text-gray-300";
    let className = style + " " + props.className;

    return (
        <p {...props} className={className}>{props.children}</p>
    )
}
