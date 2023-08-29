"use client"

import {useEffect, useState} from "react";

interface NavigationBarProps {
    pages: Array<string>;
    selectedPage: number;
}

export default function NavigationBar({pages, selectedPage}: NavigationBarProps) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        setVisible(currentScrollPos < prevScrollPos)
        setPrevScrollPos(currentScrollPos)
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div className={`sticky ml-auto top-10 right-10 flex ${visible ? 'navVisible' : 'navHidden'}`}>
            {(() => {
                return pages.map((item, index) => {
                    return <a key={item} className="underline text-gray-100 mr-5" href="#" onClick={() => {}}>{item}</a>
                });
            })()}
        </div>
    )

    return (
        <div className={`sticky ml-auto top-10 right-10 flex ${visible ? 'navVisible' : 'navHidden'}`}>
            {(() => {
                return pages.map((item, index) => {
                    return <a key={item} className="underline text-gray-100 mr-5" href="#" onClick={() => {}}>{item}</a>
                });
            })()}
        </div>
    )
}
