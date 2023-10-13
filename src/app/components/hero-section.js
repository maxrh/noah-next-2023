import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { useSpring } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Tags } from "./ui/tags"
import useSWR from 'swr'

export default function HeroSection({ handleHeroColor }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/hero', fetcher)

    if (error) return <div>failed to load</div>

    useEffect(() => {
        if (data && data.length > 0) {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, 8000);  // Change index every 3 seconds
            return () => clearInterval(intervalId);  // Clear interval on component unmount
        }
    }, [data]);

    const currentHero = isLoading ? null : data[currentIndex]
    const heroColor = isLoading ? null : currentHero.color
    const heroImage = isLoading ? null : currentHero.image
    const heroId = isLoading ? null : currentHero.id

    useEffect(() => {
        handleHeroColor(heroId, heroColor)
    }, [currentHero])

    
    return (
        <section className='hero h-[calc(100vh-120px)] w-full pb-12 flex flex-col items-start'>
            <div className="h-full w-full px-16">
                <div className='max-w-screen-3xl mx-auto w-full grid grid-cols-[max-content,max-content,1fr] grid-rows-[auto, auto] items-center'>
                    <div className="order-none row-auto col-auto w-20"></div>
                    <div className='order-none row-auto col-auto flex flex-col justify-center h-[70vh]'>
                        <AnimatePresence mode='wait'>
                            { !isLoading ? 
                                <motion.div 
                                    key={heroId}
                                    className="max-w-[calc(12rem_+_25vw)]"
                                    animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.25 } }}
                                    initial={{ opacity: 0, y: -30 }}
                                    exit={{ opacity: 0, y: 30, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.25 } }}
                                    transition={{ duration: .25, delay: 1.5 }} 
                                >
                                    <div className="relative mb-4 flex items-center gap-2">
                                        <span className="font-normal uppercase tracking-wider text-lg">{currentHero.type}</span>
                                    </div>
                                    <h1 className={`mb-8 text-6xl font-bold leading-[1] `}>{currentHero.title}</h1>
                                </motion.div> : null 
                            }
                        </AnimatePresence>
                    </div>
                    <div className='order-none row-auto col-auto flex flex-col items-center justify-center h-[calc(100vh-120px-3rem-48px)] relative min-h-[20rem] min-w-[20rem]'>
                        <AnimatePresence >
                                <motion.div 
                                    key={currentHero?.id}
                                    className='absolute left-0 top-0 bottom-0 flex items-center justify-center px-8'
                                    animate={{ opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.5 } }}
                                    initial={{ opacity: 0, x: 200 }}
                                    exit={{ opacity: 0, x: 0, transition: { type: "tween", ease: "easeInOut", duration: 0.25 } }}
                                >
                                    <img src={`/images/${heroImage}`} alt="" className='h-full object-contain'/>

                                </motion.div> 
                        </AnimatePresence>
                    </div>
                    <div className="order-3 col-start-2 col-end-3 flex gap-8">
                        <Link href="#" className="flex items-center h-12 gap-3">
                            <span className="font-semibold uppercase tracking-wide">Nyheder</span>
                        </Link>
                        <Link href="#" className="flex items-center h-12 gap-3">
                            <span className="font-semibold uppercase tracking-wide">Programmer</span>
                        </Link>
                        <Link href="#" className="flex items-center h-12 gap-3">
                            <span className="font-semibold uppercase tracking-wide">Hvad kan du gøre?</span>
                        </Link>
                    </div>
                    <div className="order-4 col-start-3 col-end-4 flex justify-end">
                        {/* <a href="#" className="font-medium flex items-center h-12 ">
                            <div className="aspect-square h-full border border-foreground rounded-full flex items-center justify-center mr-4">
                                <ArrowDownIcon className="h-6 w-6" />
                            </div>
                            <span>Scroll down</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>  
    )
}


{/* <Tabs defaultValue="donate" className='flex flex-col h-full bg-white p-12'>
                        <TabsList className="w-full">
                            <TabsTrigger value="donate">
                                <div className='absolute top-0 left-0 w-full'>
                                    <span className='block h-4 w-4 group-hover:w-full striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                                    <span className='block h-4 w-full striped-bg-gray'></span>
                                </div>
                                Giv bidrag
                            </TabsTrigger>
                            <TabsTrigger value="join">
                                <div className='absolute top-0 left-0 w-full'>
                                    <span className='block h-4 w-4 group-hover:w-full striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                                    <span className='block h-4 w-full striped-bg-gray'></span>
                                </div>
                                Bliv aktiv
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="showup" className=''>
                            show up
                        </TabsContent>
                        <TabsContent value="follow" className=''>
                            Follow
                        </TabsContent>
                        <TabsContent value="donate" className=''>
                            Make changes to your account here.
                        </TabsContent>
                        <TabsContent value="join" className=''>
                            Change your password here.
                        </TabsContent>
                        
                    </Tabs> */}