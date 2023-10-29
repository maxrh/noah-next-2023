"use client"

import { motion } from "framer-motion"
import { ThemeContext } from "../context/themeContext"
import { useContext } from 'react'
import { usePathname } from "next/navigation"
import Link from "next/link"
import useSWR from 'swr'

export default function MainNav() {
    const pathname = usePathname()
    const { currentColors } = useContext(ThemeContext)
    const menuColor = currentColors?.menu  || 'var(--foreground-hex)'

    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR("http://localhost:3000/api/pages", fetcher)

    const navItems = data?.filter(page => page.menu === true)

    if (error) { throw new Error('Failed to fetch data') }

    const containerVariant = {
        hidden: {},
        show: { 
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    }

    const transitionConfig = {
        type: "tween", 
        ease: "easeInOut",
        duration: .15,
    }

    const itemVariant = {
        hidden: { 
            opacity: 0, 
            y: -10,
        },
        show: { 
            opacity: 1, 
            y: 0,
            transition: { ...transitionConfig  }
        }                      
    }

    return (
        <nav className="main-nav flex items-center">
            { navItems && 
                
                <motion.div 
                    className={`flex items-stretch h-10`}
                    variants={containerVariant}
                    initial="hidden"
                    animate="show"
                >
                    {navItems?.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="flex items-stretch"
                            variants={itemVariant}
                            animate={{ 
                                color: menuColor,
                                transition: { ...transitionConfig }
                            }}
                        
                        >
                            <Link href={item.href} className={`group relative flex items-center ml-1 px-4 text-2xl font-bold leading-none`}>
                                <motion.div 
                                    className={`
                                        absolute mx-auto left-0 right-0 group-hover:opacity-100 
                                        ${(item.href === pathname || pathname.startsWith(`${item.href}/`)) 
                                            ? 'top-9 opacity-100 group-hover:top-9' 
                                            : '-top-10 opacity-0 group-hover:-top-5'} 
                                        transition-all duration-200 ease-in-out flex justify-center
                                    `}
                                   
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                   
                                >
                                        <i className="symbol z-10 " style={{ fontVariationSettings: `'wght' 400`, fontSize: '32px' }}>
                                            arrow_drop_down
                                        </i>
                                </motion.div>
                                <span className="relative z-10">{item.label}</span>
                            </Link>
                        </motion.div>
                    ))}
                    <motion.button
                        className={`group relative ml-4 flex items-center justify-center w-10 h-full`}
                        variants={itemVariant}
                        animate={{ 
                            color: menuColor, 
                            transition: { ...transitionConfig }
                        }}
                    >
                        <i 
                            className="symbol z-10" 
                            style={{ fontVariationSettings: `'wght' 700`, fontSize: '28px' }}
                        >
                            search
                        </i>
                    </motion.button>
                </motion.div>
            
            }

            <form className="search hidden items-center">
                <input type="text" placeholder="" className="search-input w-48 h-8  px-3 py-1.5"/>
                <button type="submit" className="search-submit ml-2 h-8 w-8 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M15 9a5 5 0 11-10 0 5 5 0 0110 0zM4 9a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd"/></svg>
                </button>
            </form>
            <button
                className="group flex flex-col items-center lg:hidden justify-center h-10 w-10 p-2"
                onClick={() => {
                    const menu = document.querySelector(".main-menu");
                    menu.classList.toggle("hidden");
                }}
            >
                
                <span className="block h-1 my-0.5 w-full rounded bg-foreground"></span>
                <span className="block h-1 my-0.5 w-full rounded bg-foreground"></span>
                <span className="block h-1 my-0.5 w-full rounded bg-foreground"></span>
            </button>
            
        </nav>
    )
}
