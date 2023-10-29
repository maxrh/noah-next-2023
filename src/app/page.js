"use client"

import NewsSection from './components/news-section'
import ProgramSection from './components/program-section'
import PagesSection from './components/pages-section'
import HeroSection from './components/hero-section'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect, useRef  } from 'react'

const defaultColor = 'rgb(110, 231, 183)'

export default function Home() {
    const [heroColor, setHeroColor] = useState(defaultColor)
    const [heroId, setHeroId] = useState(null)
    const prevColorRef = useRef(defaultColor);

    const handleHeroColor = (key, newColor) => {
        if (newColor) (
            setHeroColor(newColor),
            setHeroId(key)
        )
    }

    useEffect(() => {
        prevColorRef.current = heroColor
    }, [heroColor])

    return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full pt-[120px]">
            <motion.div 
                key={heroId}
                className={`hero-style absolute top-0 left-0 w-full h-screen -z-50`} 
                initial={{ opacity: 1, backgroundColor: prevColorRef.current  }}
                animate={{ opacity: 1, backgroundColor: heroColor }}   
                transition={{ duration: 1 }}  

            ></motion.div>

                <div className="flex flex-col items-center w-full">
                    <div className='h-[calc(100vh-120px)] w-full relative py-8'>
                        <HeroSection id={'frontpage'} handleHeroColor={handleHeroColor} />
                    </div>
                    <span className='block h-4 w-full striped-bg-gray'></span>

                    {/* <PagesSection /> */}
                    <NewsSection />
                    <ProgramSection />
                </div>
        </div>
    )
}
