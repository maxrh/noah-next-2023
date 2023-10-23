import Link from "next/link"

export default function SidebarNav() {
        
    return (
        <div className="mb-8">
            <ul className="flex flex-col text-sm ">
                <li><Link href="/about/vision" className="flex py-1.5" >Vision</Link></li>
                <li><Link href="/about/organisation" className="flex py-1.5" >Organisation</Link>
                    <ul className="ml-2 pl-4 border-l border-stone-200 border-dotted">
                        <li><Link href="/about/organisation/grupper" className="flex py-1.5" >Grupper</Link></li>
                        <li><Link href="/" className="flex py-1.5" >Bestyrelse</Link></li>
                    </ul>
                </li>
                <li><Link href="/about/historie" className="flex py-1.5" >Historie</Link></li>
                <li><Link href="/about/internationalt" className="flex py-1.5" >Internationalt</Link></li>
                <li><Link href="/about/dokumenter" className="flex py-1.5" >Publikationer</Link></li>
                <li><Link href="/about/netværk" className="flex py-1.5" >Netværk</Link></li>
            </ul>
        </div>
    )
}
