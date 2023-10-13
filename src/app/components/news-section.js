"use client"

import { Tags } from "./ui/tags"
import { Button } from './ui/button'
import { Toggle } from './ui/toggle'
import { useState } from 'react'
import Image from 'next/image'
import useSWR from 'swr'

export default function NewsSection() {
    const [size, setSize] = useState(1)
    const itemsPerPage = 8

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/content', fetcher)

    if (error) return <div>failed to load</div>

    const allContent = isLoading ? null : data.news.concat(data.events, data.presse, /* other arrays */)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    const slicedContent = isLoading ? null : allContent.slice(0, size * itemsPerPage)

    return (
        <section aria-labelledby='news-heading' className='w-full p-16'>
            <div className='relative max-w-screen-3xl mx-auto'>
                <header className='mb-8 flex items-center justify-between'>
                    <h2 className={`text-3xl font-bold flex items-center tracking-tight`}  id="news-heading">
                        Nyheder
                    </h2>
                    <div className="items-center flex space-x-5">
                        <div className="items-center flex space-x-1">
                            <Toggle  defaultPressed >Alle</Toggle>
                            <Toggle  >Artikler</Toggle>
                            <Toggle  >Events</Toggle>
                            <Toggle  >Udgivelser</Toggle>
                            <Toggle  >Presse</Toggle>
                        </div>
                    </div>
                </header>
                <div className='grid gap-8 grid-cols-4 items-stretch mb-8'>

                    {!isLoading ? slicedContent.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            className="group transition-colors relative h-full w-full flex flex-col"
                            target="_blank"
                            rel="noopener noreferrer"
                        >   
                            <div className='relative '>
                                <Image src={item.imageUrl} alt={item.title} className={`${item.type === 'event' ? 'aspect-square' : 'aspect-video'} object-cover object-center relative z-10`} width={1080} height={608} />
                            </div>
                        
                            <div className='px-0 py-4'>
                                <div className='relative mb-3 flex items-center gap-2'>
                                    <Tags>{item.type}</Tags>
                                    <Tags variant="secondary">Biodiversitet</Tags> 
                                    <Tags variant="secondary">Video</Tags> 
                                </div>
                                <h2 className={`mb-3 font-bold text-3xl flex items-center leading-none`}>
                                    {item.title}
                                </h2>
                                <p className='text-sm'>{item.subtitle}</p>
                            </div>
                        </a>
                    )) : ( <p>is loading</p> )}

                </div>
                <div className='flex justify-center  mb-16'>
                    <Button 
                        onClick={() => setSize(size + 1)}
                        size='lg'
                        variant='outline'
                    >
                        Load More
                    </Button>
                </div>
            </div>
        </section>
    )

}