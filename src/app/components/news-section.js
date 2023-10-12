"use client"

import { Button } from './ui/button'
import { Toggle } from './ui/toggle'
import { useState } from 'react'
import Image from 'next/image'
import useSWR from 'swr'

export default function NewsSection() {
    const [size, setSize] = useState(1)
    const itemsPerPage = 4

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/content', fetcher)

    if (error) return <div>failed to load</div>

    const allContent = isLoading ? null : data.news.concat(data.events, /* other arrays */)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    const slicedContent = isLoading ? null : allContent.slice(0, size * itemsPerPage)

    return (
        <section aria-labelledby='news-heading' className='max-w-screen-3xl w-full p-16'>
            <div className='relative'>
                <header className='mb-8'>
                    <div className='relative'>
                        <span className='block h-6 w-4 group-hover:w-full  striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                        <span className='block h-6 w-full striped-bg-gray'></span>
                    </div>
                    <div className='px-4 py-8 flex items-center justify-between'>
                        <h2 className={`text-4xl font-bold flex items-center`}  id="news-heading">
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
                                <Image src={item.imageUrl} alt={item.title} className='shadow-md  aspect-video object-cover object-center relative z-10' width={1080} height={608} />
                                <span className='absolute block h-full w-full -bottom-2 -right-2 striped-bg'></span>
                            </div>
                        
                            <div className='px-2 py-6'>
                                <h2 className={`mb-4 font-bold text-2xl flex items-center leading-tight`}>
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