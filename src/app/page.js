import Image from 'next/image'
import { Button } from "./components/ui/button"
import BlockTitle from './components/ui/block-title'
import { Separator } from './components/ui/separator'
import NewsSection from './components/news-section'
import ProgramSection from './components/program-section'
import PagesSection from './components/pages-section'
import HeroSection from './components/hero-section'

export default function Home() {
    return (
            
        <main className="flex flex-col items-center justify-between min-h-screen w-full pt-[120px]">
            <div className="flex flex-col items-center w-full">
                <HeroSection />
                <PagesSection />
                <NewsSection />
                <ProgramSection />
            </div>
        </main>

    )
}
