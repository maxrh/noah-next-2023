"use client"

import SoMeSidebarWidget from "../components/soMe-sidebar-widget"
import SidebarNav from "../components/sidebar-nav"
import SidebarContentNav from "../components/sidebar-content-nav"
import HeroSection from "../components/hero-section"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeContext } from "../context/themeContext"
import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import useFlattenPages from "../hooks/useFlattenPages"
import Image from "next/image"
import useSWR from 'swr'

export default function AboutLayout({ children }) {
    const pathname = usePathname()
    const { currentColors } = useContext(ThemeContext)
    const backgroundColor = currentColors?.background || 'var(--background-hex)'

    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error, isLoading } = useSWR("http://localhost:3000/api/pages", fetcher)

    const allPages = useFlattenPages(data)
    const currentPageData = allPages?.find(page => page.href === pathname)

    if (error) { throw new Error('Failed to fetch data') }

    return (
        <div className="pt-[120px] transition-colors" style={{ backgroundColor: backgroundColor }}>
            <AnimatePresence >
                { !isLoading && currentPageData?.image && 
                
                    <motion.div
                        key={currentPageData.id}
                        className="absolute top-0 left-0 flex flex-col items-center justify-between h-[100vh] w-full"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ 
                            type: "tween",
                            ease: "easeInOut",
                            duration: .25 
                        }}
                    >
                        <Image className="mask-image object-cover object-center w-full h-full" width={1800} height={1013} src={`/images/${currentPageData.image}`} alt="Placeholder" priority />
                    </motion.div> 
                }
            </AnimatePresence>

            { !isLoading && currentPageData?.slideshow === true 
                ? <div className=" h-[calc(60vh-120px)] w-full relative z-10 pt-8"><HeroSection id={'about'} noBottomBar/></div>
                : <div className=" h-[calc(60vh-120px)] w-full relative z-10"></div>
            }
        
            <div className="relative z-10 px-16">
                <div className="max-w-screen-3xl mx-auto flex flex-col items-center">
                    <div className={`grid w-full md:gap-16 
                    md:grid-cols-[208px,1fr] 
                    xl:grid-cols-[256px,auto,224px]
                    2xl:grid-cols-[256px,auto,224px] `}>
                        
                        <div className={`navigation relative hidden md:flex flex-col h-full w-full  border-slate-950/50`}>
                            <SidebarNav />
                        </div>
                        <div className="min-h-screen w-full py-14">
                            {children}
                        </div>
                        <div className={`widget relative hidden xl:flex flex-col h-full border-gray-950/30`}>
                            <SoMeSidebarWidget />
                            <SidebarContentNav />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
