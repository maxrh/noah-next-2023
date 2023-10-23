import Link from "next/link"

export default function SidebarNav() {
        
    return (
        <div className="sticky top-0 py-16">
            <ul className="flex flex-col text-sm xl:text-base">
                <li><Link href="/about" className="flex py-1.5 font-medium">Om Noah</Link></li>
                <li><Link href="/about/vision" className="flex py-1.5" >Vision</Link></li>
                <li><Link href="/about/organisation" className="flex py-1.5" >Organisation</Link>
                    <ul className="">
                        <li className="flex items-center"><i className="symbol symbol-sm mr-1">remove</i><Link href="/about/organisation/grupper" className="flex py-1.5" >Grupper</Link></li>
                        <li className="flex items-center"><i className="symbol symbol-sm mr-1">remove</i><Link href="/" className="flex py-1.5" >Bestyrelse</Link></li>
                    </ul>
                </li>
                <li><Link href="/about/historie" className="flex py-1.5" >Historie</Link></li>
                <li><Link href="/about/internationalt" className="flex py-1.5" >Internationalt</Link></li>
                <li><Link href="/about/publikationer" className="flex py-1.5" >Årsrapporter</Link></li>
                <li><Link href="/about/publikationer" className="flex py-1.5" >Presse</Link>
                    <ul className="">
                        <li className="flex items-center"><i className="symbol symbol-sm mr-1">remove</i><Link href="/about/organisation/grupper" className="flex py-1.5" >Logo & billeder</Link></li>
                    </ul>
                </li>

                <li><Link href="/about/netværk" className="flex py-1.5" >Netværk</Link></li>
            </ul>
        </div>
    )
}
