import SidebarNav from "../components/sidebar-nav"
import SidebarContentNav from "../components/sidebar-content-nav"

export default function AboutLayout({ children }) {

    return (
        <div className="border-y border-stone-200 px-16">
            <div className="max-w-screen-3xl mx-auto">
            <div className="grid gap-[calc(max((100%-12rem-800px)/2,4rem))] grid-cols-[12rem,minmax(auto,800px)] 2xl:grid-cols-[14rem,minmax(auto,800px),12rem] 2xl:gap-[calc(max((100%-14rem-800px-12rem)/2,4rem))]">
                    <div className="navigation pt-16 w-full border-r border-stone-200 flex flex-col items-start">
                        <SidebarNav />
                    </div>
                    {children}
                    <div className="widget pt-16 w-full hidden 2xl:flex flex-col items-start  ">
                        <SidebarContentNav />
                    </div>
                </div>
            </div>
        </div>
    )
}
