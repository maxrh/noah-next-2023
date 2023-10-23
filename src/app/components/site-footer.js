import Link from "next/link"
import Image from "next/image"

export default function SiteFooter() {

    return (
        <div className="page-footer px-24 py-16 h-96">
            <div className="flex justify-between lg:max-w-screen-xl lg:w-full mx-auto">
                <div className="site-logo flex items-center flex-shrink-0 mr-auto">
                    <Link href="/" className="flex items-center hover:text-blue-900 w-44 -ml-2">
                        <Image src="/Logo_NOAH_2020_small.png" alt="logo" width={256} height={104} className="w-full" />
                    </Link>
                </div>
            </div>
        </div>
    )
}