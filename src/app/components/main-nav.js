"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function MainNav() {
    const pathname = usePathname()


    return (
        <nav className="main-nav flex items-center">
            <div className="flex items-stretch font-semibold text-sm tracking-wide uppercase text-foreground h-10 ">
                <Link href="/" className={`group overflow-hidden relative ml-1 bg-background pb-2 pt-1.5 px-4 ${pathname === '/grupper' ? 'bg-emerald-300' : ''}`}>
                    <span className="relative z-10">Grupper</span>
                    <div className="-rotate-45 w-0 group-hover:w-96 transition-all duration-300 ease-in-out absolute -top-30 left-0 h-96 bg-emerald-300"></div>
                </Link >
                <Link href="/" className={`ml-1 bg-background pb-2 pt-1.5 px-4 hover:bg-emerald-200 ${pathname === '/bidrag' ? 'bg-emerald-300' : ''}`}>Bidrag</Link >
                <Link href="/" className={`ml-1 bg-background pb-2 pt-1.5 px-4 hover:bg-emerald-200 ${pathname === '/materialer' ? 'bg-emerald-300' : ''}`}>Materialer</Link >
                <Link href="/about" className={`ml-1 bg-background pb-2 pt-1.5 px-4 hover:bg-emerald-200 ${pathname === '/about' ? 'bg-emerald-300' : ''}`}>Om Noah</Link >
                <div className="ml-1 bg-background hover:bg-emerald-200 px-2">
                    <Link href="/about" className="flex items-center pt-1.5 "><i className="symbol ml-1">search</i></Link >
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
