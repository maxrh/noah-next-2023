import { useState, useEffect, useRef  } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Progress } from './ui/progress'
import useSWR from 'swr'

export default function HeroSection({ id, handleHeroColor, noBottomBar }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progressValue, setProgressValue] = useState(0)
    const [progressDuration, setProgressDuration] = useState('7000ms')

    const lastClickTime = useRef(null)
    const debounceTime = 700 

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/hero', fetcher)

    const heroData = data?.find(item => item.id === id)?.slides 

    useEffect(() => {
        if (heroData && heroData.length > 0) {
            if (handleHeroColor) handleHeroColor(heroData[currentIndex].id, heroData[currentIndex].color)
            setProgressDuration('100ms')
            setProgressValue(0)
            setTimeout(() => {
                setProgressDuration('7000ms')
                setProgressValue(100)
            }, 100)

            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length)
            }, 7000)
    
            return () => { clearInterval(intervalId) }
        }
    }, [heroData, currentIndex, handleHeroColor])

    const handleNextClick = () => {
        const currentTime = new Date().getTime();
        if (lastClickTime.current && currentTime - lastClickTime.current < debounceTime) { return }
        lastClickTime.current = currentTime
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length)
    }

    const handlePrevClick = () => {
        const currentTime = new Date().getTime();
        if (lastClickTime.current && currentTime - lastClickTime.current < debounceTime) { return }
        lastClickTime.current = currentTime
        setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? heroData.length - 1 : prevIndex - 1)
    }

    const transitionConf = { type: "spring", stiffness: 300, damping: 30, duration: 0.25 }

    if (error) return <div>failed to load</div>
    
    return (
            <section className="hero h-full w-full px-16 flex items-stretch">
                { !isLoading && heroData ? 
                    <div className={`max-w-screen-3xl mx-auto w-full grid grid-cols-1 md:grid-cols-[max-content,3fr,4fr] ${ noBottomBar ? 'grid-rows-[auto]' : 'grid-rows-[auto,auto,48px] md:grid-rows-[auto,48px]' } items-center`}>
                        <div className="md:order-1 w-24 hidden md:flex flex-col items-start justify-start mb-4">
                                <motion.button 
                                    className='hover:opacity-70 transition-opacity p-1 h-8 '
                                    onClick={handleNextClick}
                                    animate={{ opacity: 1, y: 0, transition: { transitionConf, delay: 0.75 } }}
                                    initial={{ opacity: 0, y: -30 }}
                                >
                                    <i className="symbol">skip_next</i>
                                </motion.button>
                                <motion.button
                                    className='hover:opacity-70 transition-opacity p-1 h-8 '
                                    onClick={handlePrevClick}
                                    animate={{ opacity: 1, y: 0, transition: { transitionConf, delay: 0.5 } }}
                                    initial={{ opacity: 0, y: -30 }}
                                >
                                    <i className="symbol">skip_previous</i>
                                </motion.button>
                        </div>
                        <div className='order-2 flex flex-col justify-center h-full'>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={heroData[currentIndex].id}
                                    animate={{ opacity: 1, y: 0, transition: {  transitionConf, delay: 0.25 }}}
                                    initial={{ opacity: 0, y: -30 }}
                                    exit={{ opacity: 0, y: 30, transition: {  transitionConf }}}
                                >
                                    <div className="relative mb-2 px-1 flex items-center gap-2">
                                        <span className="font-semibold uppercase tracking-wide">{heroData[currentIndex].type}</span>
                                    </div>
                                    <h1 className={`mb-8 text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1] `}>{heroData[currentIndex].title}</h1>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className='order-1 md:order-3 flex flex-col items-center justify-center h-full relative min-h-[20rem] min-w-[20rem]'>
                            <div className='flex items-center justify-center h-full'>
                                <AnimatePresence mode='wait'>
                                    { heroData[currentIndex].image && 
                                        <motion.img 
                                            key={heroData[currentIndex].id}
                                            src={`/images/${heroData[currentIndex].image}`} 
                                            alt="" 
                                            className='h-full object-contain object-center'
                                            animate={{ opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.5 } }}
                                            initial={{ opacity: 0, x: 200 }}
                                            exit={{ opacity: 0, x: 0, transition: { type: "tween", ease: "easeInOut", duration: 0.25, delay: 0.25  } }}
                                        /> 
                                    }
                                </AnimatePresence>
                            </div>
                        </div>
                        { noBottomBar ? null :  <div className="order-4 hidden md:flex flex-col items-start justify-center">
                            <motion.button 
                                className="aspect-square h-8 flex flex-col items-center justify-center p-1 hover:opacity-70 transition-opacity"
                                animate={{ opacity: 1, x: 0, transition: { transitionConf, delay: 1.5 } }}
                                initial={{ opacity: 0, x: 30 }}
                            >
                                <i className="symbol">south</i>
                            </motion.button>
                        </div> }
                        { noBottomBar ? null :  <div className="order-5 md:col-start-2 md:col-end-3 hidden md:flex justify-start gap-8">
                            <motion.a 
                                href="#" 
                                className="flex items-center h-12 gap-3"
                                animate={{ opacity: 1, x: 0, transition: { transitionConf, delay: 1.5 } }}
                                initial={{ opacity: 0, x: 30 }}
                            >
                                <span className="font-semibold uppercase tracking-wide">Scroll down</span>
                            </motion.a>
                        </div> }
                        { noBottomBar ? null : <div className="order-3 md:order-6 md:col-start-3 md:col-end-4 flex justify-end gap-8">

                            <motion.a 
                                href="#" className="flex items-center justify-center h-12 gap-3"
                                animate={{ opacity: 1, x: 0, transition: { transitionConf, delay: 1  } }}
                                initial={{ opacity: 0, x: -30 }}
                            >
                                <Progress value={progressValue} duration={progressDuration} className="w-20 mr-4" />
                                <span className="font-semibold uppercase tracking-wide">{currentIndex + 1 } / {heroData.length}</span>
                            </motion.a>
                        </div> }
                    </div> : <div className='max-w-screen-3xl mx-auto w-full h-full flex items-center justify-center'><p>loading ...</p></div>
                }
            
        </section>  
    )
}