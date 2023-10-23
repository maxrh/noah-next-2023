
export default function SidebarNav() {
        
    return (
        <div className="mb-8">
            <ul className="flex flex-col text-sm ">
                <li><a href="vision" className="flex py-1.5" >Vision</a></li>
                <li><a href="organisation" className="flex py-1.5" >Organisation</a></li>
                <li><a href="historie" className="flex py-1.5" >Historie</a>
                    
                </li>
                <li><a href="internationalt" className="flex py-1.5" >Internationalt</a></li>
                <li><a href="dokumenter" className="flex py-1.5" >Formelle dokumenter</a>
                    <ul className="ml-2 pl-4 border-l border-stone-200 border-dotted my-1.5">
                        <li><a href="/" className="flex pb-1.5" >Black tea</a></li>
                        <li><a href="/" className="flex py-1.5" >Green tea</a></li>
                        <li><a href="/" className="flex pt-1.5" >Green tea</a></li>
                    </ul>
                </li>
                <li><a href="netværk" className="flex py-1.5" >Netværk</a></li>
            </ul>
        </div>
    )
}
