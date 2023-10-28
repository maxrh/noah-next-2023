"use client"

import SidebarNav from "../components/sidebar-nav"
import SidebarContentNav from "../components/sidebar-content-nav"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeContext } from "../context/themeContext"
import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import Image from "next/image"
import useSWR from 'swr'

export default function AboutLayout({ children }) {
    const pathname = usePathname()
    const { currentColors } = useContext(ThemeContext)
    const backgroundColor = currentColors?.background || 'var(--background-hex)'

    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error, isLoading } = useSWR("http://localhost:3000/api/pages", fetcher)

    const allPages = data?.reduce((acc, page) => {
        acc.push(page)
        if (page.childPages) { acc.push(...page.childPages)}
        return acc
    }, [])
    
    const currentPageData = allPages?.find(page => page.href === pathname)

    if (error) { throw new Error('Failed to fetch data') }

    return (
        <div className="pt-[120px] transition-colors" style={{ backgroundColor: backgroundColor }}>
            <AnimatePresence wait>
                { !isLoading && currentPageData?.image && 
                
                    <motion.div
                        key={currentPageData.id}
                        className="absolute top-0 left-0 flex flex-col items-center justify-between h-[80vh] w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .5 }}
                    >
                        <Image className="mask-image object-cover object-center w-full h-full" width={1800} height={1000} src={`/images/${currentPageData.image}`} alt="Placeholder" priority />
                    </motion.div> 
                }
            </AnimatePresence>
            <div className="flex flex-col items-center justify-between h-[calc(50vh-120px)] w-full"></div>
            <div className="relative px-16 z-10">
                <div className="max-w-screen-3xl mx-auto flex flex-col items-center">
                    <div className={`grid w-full md:gap-[calc(max((100%-var(--sidebar-width)-var(--content-width))/2,4rem))] md:grid-cols-[1fr,minmax(auto,var(--content-width))] xl:grid-cols-[1fr,minmax(auto,var(--content-width)),1fr] xl:gap-[calc(max((100%-var(--sidebar-width)-var(--content-width)-var(--sidebar-width))/2,4rem))]`}>
                        <div className={`navigation relative hidden md:flex flex-col items-center h-full border-r border-slate-950/50 w-[var(--sidebar-width)]`}>
                            <SidebarNav />
                        </div>
                        <div className="min-h-screen py-14 w-full">

                            {children}
                        </div>
                        <div className={`widget relative hidden xl:flex flex-col items-center h-full border-l border-gray-950/30 px-16 w-[var(--sidebar-width)]`}>
                            <SidebarContentNav />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
