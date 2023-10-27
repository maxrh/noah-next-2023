import Link from "next/link"
import BlockTitle from "./ui/block-title"

export default function SidebarContentNav() {
        
    return (
        <div className="sticky top-0 ">
            <BlockTitle title="Indhold" />

            <div className="content-nav-block mb-8">
                <ul className="flex flex-col text-sm ">
                    <li><Link href="/about#section0" className="flex py-1.5">Start</Link></li>
                    <li><Link href="/about#section1" className="flex py-1.5">Section 1</Link></li>
                    <li><Link href="/about#section2" className="flex py-1.5">Section 2</Link></li>
                    <li><Link href="/about#section3" className="flex py-1.5">Section 3</Link></li>
                </ul>
            </div>
            <div className="content-nav-block mb-8">
                <h5 className="text-lg font-medium mb-1.5">Kontakt</h5>
                <ul className="flex flex-col text-sm ">
                    <li><Link href="/" className="flex py-1.5">Vision</Link></li>
                    <li><Link href="/" className="flex py-1.5">Organisation</Link></li>
                    <li><Link href="/" className="flex py-1.5">Historie</Link></li>
                </ul>
            </div>
        </div>
    )
}
