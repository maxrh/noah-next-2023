"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import { ThemeContext } from "../context/themeContext"
import { useContext } from 'react'
import BlockTitle from "./ui/block-title"

function NavItem({ item, pathname, level, primaryColor, menuColor }) {
    return (
        <li className="">

                <Link 
                    href={item.path} 
                    className={`relative flex items-center py-1.5 transition-all xl:text-lg tracking-wide  ${pathname === item.path ? "font-medium" : "font-normal"}`}
                    style={{ color: pathname === item.path ? primaryColor : '' }}
                >
                    <span className=" shrink-0 ">{item.title}</span>
                    {pathname === item.path && (
                        <div className="ml-6 w-full border-r-4 border-primary flex items-center" style={{ borderColor: primaryColor }}>
                            <span className={` border-b h-[5px] border-dashed border-slate-500 w-full mb-1`} />
                            <i className="symbol -ml-3">arrow_right</i>
                        </div>
                    )}
                </Link>


            {item.children && (
                <ul className={`ml-4`}>
                    {item.children.map((child, index) => (
                        <NavItem key={index} item={child} pathname={pathname} primaryColor={primaryColor} menuColor={menuColor} />
                    ))}
                </ul>
            )}

        </li>
    )
}

export default function SidebarNav() {
    const pathname = usePathname()
    const { currentColors } = useContext(ThemeContext)

    const menuColor = currentColors?.menu || 'var(--foreground-hex)'
    const primaryColor = currentColors?.primary || 'var(--primary-hex)'

    
    const navItems = [
        {
            title: 'Vision',
            path: '/about/vision',
        },
        {
            title: 'Organisation',
            path: '/about/organisation',
            children: [
                {
                    title: 'Grupper',
                    path: '/about/organisation/grupper',
                },
                {
                    title: 'Bestyrelse',
                    path: '/about/organisation/bestyrelse',
                },
            ]
        },
        {
            title: 'Historie',
            path: '/about/historie',
        },
        {
            title: 'Internationalt',
            path: '/about/internationalt',
        },
        {
            title: 'Årsrapporter',
            path: '/about/årsrapporter',
        },
        {
            title: 'Presse',
            path: '/about/presse',
            children: [
                {
                    title: 'Logo & billeder',
                    path: '/about/presse/logo-billeder',
                },
            ]
        },
        {
            title: 'Netværk',
            path: '/about/netværk',
        },
    ]
        
    

    return (
        <motion.div 
            className="sticky top-0 py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            
        >
            {/* <span className='block h-4 w-full striped-bg mb-8'></span> */}
            <BlockTitle title={`Om Noah`}  href={'/about'} />

            <ul className="flex flex-col">
                {navItems.map((item, index) => (
                    <NavItem key={index} item={item} pathname={pathname} level={0} primaryColor={primaryColor} menuColor={menuColor}/>
                ))}
            </ul>
        </motion.div>
    )
}
