"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function MainNav() {
    const pathname = usePathname()


    return (
        <nav className="main-nav flex items-center">
            <div className={`flex items-stretch font-semibold text-sm tracking-wide uppercase text-foreground h-10`}>
                <Link href="/" className={`group relative ml-1 pb-2 pt-1.5 px-4  ${pathname === '/grupper' ? 'bg-emerald-300' : 'bg-background'}`}>
                    <span className="relative z-10">Grupper</span>
                    <div className="w-full h-0 group-hover:h-10 transition-all duration-300 ease-in-out absolute bottom-0 left-0 bg-emerald-300"></div>
                </Link >
                <Link href="/" className={`group relative ml-1  pb-2 pt-1.5 px-4 ${pathname === '/bidrag' ? 'bg-emerald-300' : 'bg-background'}`}>
                    <span className="relative z-10">Bidrag</span>
                    <div className="w-full h-0 group-hover:h-10 transition-all duration-300 ease-in-out absolute bottom-0 left-0 bg-emerald-300"></div>
                </Link >
                <Link href="/" className={`group relative ml-1 pb-2 pt-1.5 px-4 ${pathname === '/materialer' ? 'bg-emerald-300' : 'bg-background'}`}>
                    <span className="relative z-10">Materialer</span>
                    <div className="w-full h-0 group-hover:h-10 transition-all duration-300 ease-in-out absolute bottom-0 left-0 bg-emerald-300"></div>
                </Link >
                <Link href="/about" className={`group relative ml-1 pb-2 pt-1.5 px-4  ${pathname.startsWith('/about') ? 'bg-emerald-300' : 'bg-background'}`}>
                    <span className="relative z-10">Om Noah</span>
                    <div className="w-full h-0 group-hover:h-10 transition-all duration-300 ease-in-out absolute bottom-0 left-0 bg-emerald-300"></div>
                </Link >
                <div className="group relative ml-1">
                    <Link href="/about" className="flex items-center justify-center w-10 h-full bg-background">
                        <i className="symbol z-10 pb-1">search</i>
                        <div className="w-full h-0 group-hover:h-10 transition-all duration-300 ease-in-out absolute bottom-0 left-0 bg-emerald-300"></div>
                    </Link >
                    <form className="search hidden items-center">
                        <input type="text" placeholder="" className="search-input w-48 h-8  px-3 py-1.5"/>
                        <button type="submit" className="search-submit ml-2 h-8 w-8 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M15 9a5 5 0 11-10 0 5 5 0 0110 0zM4 9a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd"/></svg>
                        </button>
                    </form>

                </div>

            </div>

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
