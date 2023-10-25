"use client"

import MainNav from "./main-nav"
import Link from "next/link"
import LogoSvg from "./logoSvg"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"
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
            logoColors: [
                'fill-blue-700',
            ],
            menu: true,
        },
    ]
    const currentPage = pages.find(page => page.href === pathname)
    const logoColors = currentPage.logoColors ? currentPage.logoColors : null
    const [selectedLogoColor, setSelectedLogoColor] = useState(logoColors ? logoColors[0] : null)

    useEffect(() => {
        if (!logoColors) {
            setSelectedLogoColor(currentPage.theme === 'dark' ? 'fill-gray-200' : 'fill-gray-800')
        } else {
            setSelectedLogoColor(logoColors[0])
            if (logoColors.length === 1) return
            const interval = setInterval(() => {
                setSelectedLogoColor(prevColor => {
                    const currentColorIndex = logoColors.indexOf(prevColor)
                    const nextColorIndex = (currentColorIndex + 1) % logoColors.length  // Use modulo to cycle back to 0
                    const nextColor = logoColors[nextColorIndex]
                    return nextColor
                })
            }, 7000)
            return () => clearInterval(interval)
        }
    }, [currentPage, logoColors])

    const navItems = [ ...pages.filter(page => page.menu === true) ]
    const theme = currentPage?.theme

    return (

        <header className="px-16 h-[120px] flex flex-col items-center absolute top-0 left-0 w-full z-50  ">
            <div className="flex justify-between items-center max-w-screen-3xl w-full h-full">
                <div className="site-logo flex items-center flex-shrink-0 mr-auto">
                    <Link href="/" className="flex items-center w-52 h-12 -ml-3 mt-2">
                        <LogoSvg cssClass={`${selectedLogoColor}`}/>
                    </Link>
                </div>
                <MainNav navItems={navItems} theme={theme} path={pathname} />
            </div>
        </header>
    )
}
