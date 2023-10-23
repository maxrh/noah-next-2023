import MainNav from "./main-nav"
import Image from "next/image"
import Link from "next/link"

export default function SiteHeader() {



    return (
        <header className="px-16 h-[120px] flex flex-col items-center absolute top-0 left-0 w-full z-50  ">
            <div className="flex justify-between items-center max-w-screen-3xl w-full h-full">
                <div className="site-logo flex items-center flex-shrink-0 mr-auto">
                    <Link href="/" className="flex items-center w-52 h-12 -ml-3 mt-2">
                        <Image src="/Logo NOAH_update_2023.png" alt="logo" width={585} height={214} className="w-full" priority={true}/>
                    </Link>
                </div>
                <MainNav />
            </div>
        </header>
    )
}
