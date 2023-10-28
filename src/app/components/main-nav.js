"use client"

import { motion } from "framer-motion"
import { ThemeContext } from "../context/themeContext"
import { useContext } from 'react'
import Link from "next/link"
import useSWR from 'swr'

export default function MainNav() {
    const { currentColors } = useContext(ThemeContext)

    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR("http://localhost:3000/api/pages", fetcher)
    if (error) { throw new Error('Failed to fetch data') }

    const menuColor = currentColors?.menu === 'primary' ? 'var(--primary-hex)' : currentColors?.menu  || 'var(--foreground-hex)'
    const navItems = data?.filter(page => page.menu === true)

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
                            variants={itemVariant}
                            animate={{ 
                                color: menuColor,
                                transition: { ...transitionConfig, delay: .25 + index * .1 }
                            }}
                        
                        >
                            <Link href={item.href} className={`group relative flex items-stretch ml-1 pb-2 pt-1.5 px-4 uppercase font-semibold tracking-wide`}>
                                <div className="h-1 w-1 rounded-full absolute mx-auto left-0 right-0 -top-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                                    style={{ backgroundColor: menuColor }}
                                ></div>
                                <span className="relative z-10">{item.label}</span>
                            </Link>
                        </motion.div>
                    ))}
                    <motion.button
                        className={`group relative ml-1 flex items-center justify-center w-10 h-full`}
                        variants={itemVariant}
                        animate={{ 
                            color: menuColor, 
                            transition: { ...transitionConfig, delay: .25 + navItems.length * .1 }
                        }}
                    >
                        <i className="symbol z-10 pb-1" >search</i>
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
