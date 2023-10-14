import { ArrowDownIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from "react"
import Link from "next/link"
import useSWR from 'swr'

export default function HeroSection({ handleHeroColor }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/hero', fetcher)
    if (error) return <div>failed to load</div>

    useEffect(() => {
        if (data && data.length > 0) {
            handleHeroColor(data[currentIndex].id, data[currentIndex].color)
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, 8000);  // Change index every 3 seconds
            return () => clearInterval(intervalId);  // Clear interval on component unmount
        }
    }, [data, currentIndex])
    
    return (
        <section className='hero h-[calc(100vh-120px)] w-full pb-12 flex flex-col items-start'>
            <div className="h-full w-full px-16">
            { !isLoading ? 
                <div className='max-w-screen-3xl mx-auto w-full grid grid-cols-[max-content,2fr,3fr] grid-rows-[auto, auto] items-center'>
                    <div className="order-none row-auto col-auto w-20"></div>
                    <div className='order-none row-auto col-auto flex flex-col justify-center h-[calc(100vh-120px-3rem-48px)]'>
                        <div className="max-w-[calc(12rem_+_25vw)]">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={data[currentIndex].id}
                                    animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.25, delay: 0.25 } }}
                                    initial={{ opacity: 0, y: -30 }}
                                    exit={{ opacity: 0, y: 30, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.25 } }}
                                >
                                    <div className="relative mb-4 flex items-center gap-2">
                                        <span className="font-normal uppercase tracking-wider text-lg">{data[currentIndex].type}</span>
                                    </div>
                                    <h1 className={`mb-8 text-6xl font-bold leading-[1] `}>{data[currentIndex].title}</h1>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className='order-none row-auto col-auto flex flex-col items-center justify-center h-[calc(100vh-120px-3rem-48px)] relative min-h-[20rem] min-w-[20rem]'>
                        <div className='absolute left-0 top-0 bottom-0 flex items-center justify-center px-8'>
                            <AnimatePresence mode='wait'>
                                <motion.img 
                                    key={data[currentIndex].id}
                                    src={`/images/${data[currentIndex].image}`} 
                                    alt="" 
                                    className='h-full object-contain object-center'
                                    loading="lazy"
                                    animate={{ opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.5 } }}
                                    initial={{ opacity: 0, x: 200 }}
                                    exit={{ opacity: 0, x: 0, transition: { type: "tween", ease: "easeInOut", duration: 0.25, delay: 0.25  } }}
                                /> 
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="order-2 aspect-square h-10 flex items-center justify-center">
                        <ArrowDownIcon className="h-6 w-6" />
                    </div>
                    <div className="order-3 col-start-2 col-end-4 flex justify-start gap-8">
                        <Link href="#" className="flex items-center h-12 gap-3">
                            <span className="font-semibold uppercase tracking-wide">Scroll down</span>
                        </Link>
                    </div>
                </div> : <div className='max-w-screen-3xl mx-auto w-full h-full flex items-center justify-center'><p>loading ...</p></div>
               }
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