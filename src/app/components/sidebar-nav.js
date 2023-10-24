"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'


// Separate Item component to handle recursion
function NavItem({ item, pathname, level }) {
    return (
        <li>

            <Link 
                href={item.path} 
                className={`relative flex justify-between items-center py-1.5 transition-all text-sm text-gray-800 hover:text-gray-950 ${pathname === item.path ? "font-medium text-gray-950" : ""}`}
            >
                {item.title}
                <i className={`absolute right-0 symbol ${pathname === item.path ? "opacity-100" : "opacity-0"}`}>chevron_right</i>
            </Link>

            {item.children && (
                <ul className={`${level > 0 ? 'ml-3' : ''}`}>
                    {item.children.map((child, index) => (
                        <NavItem key={index} item={child} pathname={pathname} level={level + 1} />
                    ))}
                </ul>
            )}

        </li>
    )
}

export default function SidebarNav() {
    const pathname = usePathname()

    const navItems = [
        {
            title: 'Om Noah',
            path: '/about',
            children: [
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
        },
    ]

    return (
        <div className="sticky top-0 py-16">
            <ul className="flex flex-col pr-12">
                {navItems.map((item, index) => (
                    <NavItem key={index} item={item} pathname={pathname} level={0}/>
                ))}
            </ul>
        </div>
    )
}
