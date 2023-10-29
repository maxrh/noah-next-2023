import Link from "next/link"
import BlockTitle from "./ui/block-title"
import { ThemeContext } from "../context/themeContext"
import { useContext } from 'react'
import { usePathname } from 'next/navigation'

export default function SidebarContentNav() {
    const pathname = usePathname()
    const { currentColors } = useContext(ThemeContext)
    const primaryColor = currentColors?.primary || 'var(--primary-hex)'

    return (
        <div className="sticky top-0 pt-16">

            <div className="content-nav-block">
                <BlockTitle title={`Indhold`}  subtitle={pathname} />

                <ul className="flex flex-col pl-8">
                    <li><Link href="/about#section0" className="flex py-1.5">Start</Link></li>
                    <li><Link href="/about#section1" className="flex py-1.5">Section 1</Link></li>
                    <li><Link href="/about#section2" className="flex py-1.5">Section 2</Link></li>
                    <li><Link href="/about#section3" className="flex py-1.5">Section 3</Link></li>
                </ul>
            </div>

        </div>
    )
}
