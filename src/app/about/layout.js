import SidebarNav from "../components/sidebar-nav"
import SidebarContentNav from "../components/sidebar-content-nav"
import Image from "next/image"

export default function AboutLayout({ children }) {

    return (
        <div className="pt-[120px]">
            <div className="absolute top-0 left-0 -z-50 flex flex-col items-center justify-between h-[80vh] w-full ">
                <Image className="mask-image object-cover object-center w-full h-full" width={1800} height={1350} src="/images/photo-1582699011340-21e302507754.jpg" alt="Placeholder" priority />
            </div>
            <div className="flex flex-col items-center justify-between h-[calc(50vh-120px)] w-full"></div>
            <div className="px-16">
                <div className="max-w-screen-3xl mx-auto flex flex-col items-center">
                    <div className={`grid w-full md:gap-[calc(max((100%-var(--sidebar-width)-var(--content-width))/2,4rem))] md:grid-cols-[1fr,minmax(auto,var(--content-width))] xl:grid-cols-[1fr,minmax(auto,var(--content-width)),1fr] xl:gap-[calc(max((100%-var(--sidebar-width)-var(--content-width)-var(--sidebar-width))/2,4rem))]`}>
                        <div className={`navigation relative hidden md:flex flex-col items-center h-full border-r border-gray-950/30 px-16 w-[var(--sidebar-width)]`}>
                            <SidebarNav />
                        </div>
                        <div className="min-h-screen pb-16 w-full">
                            {children}
                        </div>
                        <div className={`widget relative hidden xl:flex flex-col items-center h-full border-l border-gray-950/30 px-16 w-[var(--sidebar-width)]`}>
                            <SidebarContentNav />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
