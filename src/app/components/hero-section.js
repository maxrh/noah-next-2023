import { useState, useEffect, useRef  } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Progress } from './ui/progress'
import Link from "next/link"
import useSWR from 'swr'

export default function HeroSection({ handleHeroColor }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progressValue, setProgressValue] = useState(0)
    const [progressDuration, setProgressDuration] = useState('7000ms')

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/hero', fetcher)
    if (error) return <div>failed to load</div>
    console.log(data)
    useEffect(() => {
        if (data && data.length > 0) {
            handleHeroColor(data[currentIndex].id, data[currentIndex].color)
            setProgressDuration('100ms')  // quick rese
            setProgressValue(0)
            setTimeout(() => {
                setProgressDuration('7000ms')  // slow fill
                setProgressValue(100)
            }, 100)

            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
            }, 7000)
    
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [data, currentIndex])

    const lastClickTime = useRef(null)
    const debounceTime = 700 

    const handleNextClick = () => {
        const currentTime = new Date().getTime();
        if (lastClickTime.current && currentTime - lastClickTime.current < debounceTime) { return }
        lastClickTime.current = currentTime
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
    }

    const handlePrevClick = () => {
        const currentTime = new Date().getTime();
        if (lastClickTime.current && currentTime - lastClickTime.current < debounceTime) { return }
        lastClickTime.current = currentTime
        setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1)
    }
    
    return (
        <section className='hero h-[calc(100vh-120px)] w-full pb-12 flex flex-col items-start'>
            <div className="h-full w-full px-16">
            { !isLoading ? 
                <div className='max-w-screen-3xl mx-auto w-full grid grid-cols-[max-content,2fr,3fr] grid-rows-[auto, auto] items-center'>
                    <div className="order-none row-auto col-auto w-24 flex flex-col items-start justify-start mb-4">
                        <button 
                            className='hover:opacity-70 transition-opacity p-1 h-8 '
                            onClick={handleNextClick}
                        >
                            <i className="symbol">skip_next</i>
                        </button>
                        <button
                            className='hover:opacity-70 transition-opacity p-1 h-8 '
                            onClick={handlePrevClick}
                        >
                            <i className="symbol">skip_previous</i>
                        </button>
                    </div>
                    <div className='order-none row-auto col-auto flex flex-col justify-center h-[calc(100vh-120px-3rem-48px)]'>
                        <div className="max-w-[calc(12rem_+_25vw)]">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={data[currentIndex].id}
                                    animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.25, delay: 0.25 } }}
                                    initial={{ opacity: 0, y: -30 }}
                                    exit={{ opacity: 0, y: 30, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.25 } }}
                                >
                                    <div className="relative mb-2 px-1 flex items-center gap-2">
                                        <span className="font-semibold uppercase tracking-wide">{data[currentIndex].type}</span>
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
                    <div className="order-2 flex flex-col items-start justify-center">
                        <button 
                            className="aspect-square h-8 flex flex-col items-center justify-center p-1 hover:opacity-70 transition-opacity"
                        >
                            <i className="symbol">south</i>
                        </button>
                    </div>
                    <div className="order-3 col-start-2 col-end-3 flex justify-start gap-8">
                        <Link href="#" className="flex items-center h-12 gap-3">
                            <span className="font-semibold uppercase tracking-wide">Scroll down</span>
                        </Link>
                    </div>
                    <div className="order-4 col-start-3 col-end-4 flex justify-end gap-8">
                        <Link href="#" className="flex items-center justify-center h-12 gap-3">
                            <Progress value={progressValue} duration={progressDuration} className="w-20 mr-4" />
                            <span className="font-semibold uppercase tracking-wide">{currentIndex + 1 } / {data.length}</span>
                        </Link>
                    </div>
                </div> : <div className='max-w-screen-3xl mx-auto w-full h-full flex items-center justify-center'><p>loading ...</p></div>
               }
            </div>
        </section>  
    )
}