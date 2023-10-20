'use client'

import React, {useEffect, useState} from "react";
import {BiBulb, BiSolidBulb} from "react-icons/bi";
import Button from "@/app/components/Button/Button";

enum Theme {
    DARK = "dark",
    LIGHT = "light"
}

export const ThemeModeButton = () => {
    const [theme, setTheme] = useState(Theme.DARK);

    useEffect(() => {
        const theme = localStorage.theme ?? Theme.DARK;
        if (theme === Theme.DARK) {
            document.documentElement.classList.remove(Theme.LIGHT)
            document.documentElement.classList.add(Theme.DARK)
            localStorage.theme = Theme.DARK;
            setTheme(Theme.DARK);
        } else {
            document.documentElement.classList.remove(Theme.DARK)
            document.documentElement.classList.add(Theme.LIGHT)
            localStorage.theme = Theme.LIGHT;
            setTheme(Theme.LIGHT);
        }
    }, [])

    const onThemeClick = () => {
        if (localStorage.theme === Theme.DARK) {
            document.documentElement.classList.remove(Theme.DARK)
            document.documentElement.classList.add(Theme.LIGHT)
            localStorage.theme = Theme.LIGHT;
            setTheme(Theme.LIGHT);
        } else {
            document.documentElement.classList.remove(Theme.LIGHT)
            document.documentElement.classList.add(Theme.DARK)
            localStorage.theme = Theme.DARK;
            setTheme(Theme.DARK);
        }
    }


    let iconClassName =
        "w-7 h-7 text-yellow-500 dark:text-gray-500";
    let buttonClassName =
        "w-15 h-15 rounded-full " +
        "text-yellow-500 hover:bg-yellow-500/10 " +
        "dark:text-white dark:hover:bg-gray-100/10";

    return (
        <Button className={buttonClassName} onClick={onThemeClick} variant={"plain"}>
            {theme === Theme.DARK ? <BiBulb className={iconClassName}/> : <BiSolidBulb className={iconClassName}/>}
        </Button>
    )
}


