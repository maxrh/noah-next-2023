import Link from "next/link"

export default function SidebarNav() {
        
    return (
        <div className="mb-8">
            <ul className="flex flex-col text-sm ">
                <li><Link href="/about/vision" className="flex py-1.5" >Vision</Link></li>
                <li><Link href="/about/organisation" className="flex py-1.5" >Organisation</Link></li>
                <li><Link href="/about/historie" className="flex py-1.5" >Historie</Link>
                    
                </li>
                <li><Link href="/about/internationalt" className="flex py-1.5" >Internationalt</Link></li>
                <li><Link href="/about/dokumenter" className="flex py-1.5" >Formelle dokumenter</Link>
                    <ul className="ml-2 pl-4 border-l border-stone-200 border-dotted my-1.5">
                        <li><Link href="/" className="flex pb-1.5" >Black tea</Link></li>
                        <li><Link href="/" className="flex py-1.5" >Green tea</Link></li>
                        <li><Link href="/" className="flex pt-1.5" >Green tea</Link></li>
                    </ul>
                </li>
                <li><Link href="/about/netværk" className="flex py-1.5" >Netværk</Link></li>
            </ul>
        </div>
    )
}
