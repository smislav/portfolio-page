import React from "react";

interface Props {
    text: string;
    onClick: () => void;

}

export default function MenuItem({text, onClick}: Props) {
    return (
        <p className="cursor-pointer mr-5 text-gray-500 hover:text-accent dark:text-gray-500 dark:hover:text-accent"
           onClick={onClick}>{text}</p>
    )
}
