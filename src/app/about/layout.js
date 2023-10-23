import SidebarNav from "../components/sidebar-nav"
import SidebarContentNav from "../components/sidebar-content-nav"

export default function AboutLayout({ children }) {

    return (
        <>
        <div className="absolute top-0 left-0 -z-50 flex flex-col items-center justify-between h-[400px] w-full ">
            <img className="object-cover object-center w-full h-full" src="/images/photo-1545303234-a34381f8b5cf.jpg" alt="Placeholder" />
        </div>
        <div className="flex flex-col items-center justify-between h-[280px] w-full"></div>

        <div className="px-16 ">
            <div className="max-w-screen-3xl mx-auto">
            <div className="grid md:gap-[calc(max((100%-11rem-800px)/2,4rem))] md:grid-cols-[11rem,minmax(auto,800px)] xl:grid-cols-[16rem,minmax(auto,800px),12rem] xl:gap-[calc(max((100%-16rem-800px-12rem)/2,4rem))]">
                    <div className="navigation relative  hidden md:block xl:ml-6 h-full">
                        <SidebarNav />
                    </div>
                    <div className="min-h-screen py-20 mb-20">
                        {children}
                    </div>
                    <div className="widget relative hidden xl:flex flex-col items-start  ">
                        <SidebarContentNav />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
