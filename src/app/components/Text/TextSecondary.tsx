import React from "react";

export default function TextSecondary(props: any) {
    const style = "text-gray-400 dark:text-gray-500";
    let className = style + " " + props.className;

    return (
        <p {...props} className={className}>{props.children}</p>
    )
}
