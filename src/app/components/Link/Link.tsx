import React from "react";

export default function Link(props: any) {
    const style = "underline cursor-pointer " +
        "text-gray-900 hover:text-accent " +
        "dark:text-gray-100 dark:hover:text-accent";

    const className = style + " " + props.className;

    return (
        <a {...props} className={className}>{props.children}</a>
    )
}
