"use client"

import MainNav from "./main-nav"
import Link from "next/link"
import LogoSvg from "./logoSvg"
import { usePathname } from 'next/navigation'
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from "framer-motion"

export default function SiteHeader() {
    const pathname = usePathname()

    const pages = [
        {
            id: 1,
            label: 'Home',
            href: '/',
            theme: 'light',
            menu: false,
        },
        {   
            id: 2,
            label: 'Grupper',
            href: '/grupper',
            theme: 'light',
            menu: true,
        },
        {
            id: 3,
            label: 'Bidrag',
            href: '/bidrag',
            theme: 'light',
            menu: true,
        },
        {
            id: 4,
            label: 'Materialer',
            href: '/materialer',
            theme: 'light',
            menu: true,
        },
        {
            id: 5,
            label: 'Om Noah',
            href: '/about',
            theme: 'dark',
            customColors: [ '#ef4444', '#fcd34d', '#86efac', '#67e8f9', '#d8b4fe', '#fda4af'],
            menu: true,
        },
    ]
    const [selectedCustomColor, setSelectedCustomColor] = useState(null)
    const [colorIndex, setColorIndex] = useState(0)  // State to keep track of the current color index

    const { customColors, theme, themeColor, navItems } = useMemo(() => {
        const currentPage = pages.find(page => page.href === pathname)
        const customColors = currentPage?.customColors || []
        const theme = currentPage?.theme
        const themeColor = theme === 'dark' ? '#e5e7eb' : '#111827'
        const navItems = pages.filter(page => page.menu === true)
    
        return { customColors, theme, themeColor, navItems }
    }, [pages, pathname])

    useEffect(() => {
        setColorIndex(0)
        
        if (customColors && customColors.length > 0) {
            const interval = setInterval(() => {
                setColorIndex(prevIndex => (prevIndex + 1) % customColors.length)  // Use modulo to cycle back to 0
            }, 7000)
            return () => clearInterval(interval)
        }
    }, [theme, pathname])
    
    useEffect(() => {
        if (customColors && customColors.length > 0) {
            setSelectedCustomColor(customColors[colorIndex])
        } else {
            setSelectedCustomColor(themeColor)
        }

    }, [colorIndex, customColors, themeColor])


    return (

        <header className="px-16 pt-[60px] pb-5 flex flex-col items-center absolute top-0 left-0 w-full z-50  ">
            <div className="flex justify-between items-center max-w-screen-3xl w-full h-full">
                <div className="site-logo flex items-center flex-shrink-0 mr-auto">
                    <Link href="/" className="flex items-center w-52 h-10 -ml-3">
                        <LogoSvg customColor={selectedCustomColor} themeColor={themeColor}/>
                    </Link>
                </div>
                <MainNav navItems={navItems} theme={theme} themeColor={themeColor} customColor={selectedCustomColor} path={pathname} />
            </div>
        </header>
    )
}
