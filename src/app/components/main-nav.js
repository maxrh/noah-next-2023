"use client"
import Link from "next/link"

export default function MainNav() {
        

    return (
        <nav className="main-nav flex items-center">
           
            <button
                className="group flex flex-col items-center justify-center h-10 w-10 p-2"
                onClick={() => {
                    const menu = document.querySelector(".main-menu");
                    menu.classList.toggle("hidden");
                }}
            >
                
                <span className="block h-1 my-0.5 w-full rounded bg-emerald-600"></span>
                <span className="block h-1 my-0.5 w-full rounded bg-emerald-600"></span>
                <span className="block h-1 my-0.5 w-full rounded bg-emerald-600"></span>
            </button>
            
        </nav>
    )
}
