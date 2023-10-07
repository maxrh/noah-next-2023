"use client"

import { Button } from './ui/button'
import { Toggle } from './ui/toggle'
import { useState } from 'react'
import Image from 'next/image'
import useSWR from 'swr'

export default function NewsSection() {
    const [size, setSize] = useState(1)
    const itemsPerPage = 3

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/content', fetcher)

    if (error) return <div>failed to load</div>

    const allContent = isLoading ? null : data.news.concat(data.events, /* other arrays */)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    const slicedContent = isLoading ? null : allContent.slice(0, size * itemsPerPage)

    return (

        <section aria-labelledby='news-heading'>
            <header className='mb-4'>
                <div className='relative'>
                    <span className='block h-4 w-4 group-hover:w-full  striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                    <span className='block h-4 w-full striped-bg-gray'></span>
                </div>
                <div className='px-4 py-8 flex items-center justify-between'>
                    <h2 className={`text-4xl font-bold flex items-center`}  id="news-heading">
                        Aktuelt
                    </h2>

                    <div className="items-center flex space-x-5">
                        <div className="items-center flex space-x-1">
                            <Toggle  defaultPressed >Alle</Toggle>
                            <Toggle  >Nyheder</Toggle>
                            <Toggle  >Events</Toggle>
                            <Toggle  >Udgivelser</Toggle>
                            <Toggle  >Presse</Toggle>
                        </div>
                    </div>
                </div>
            </header>
            <div className='grid gap-16 gap-y-10 grid-cols-3 items-stretch mb-16'>

                {!isLoading ? slicedContent.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        className="group transition-colors relative h-full w-full flex flex-col"
                        target="_blank"
                        rel="noopener noreferrer"
                    >   
                        <div className='relative'>
                            <Image src={item.imageUrl} alt={item.title} className='aspect-video object-cover object-center' width={1080} height={608} />
                            <span className='absolute top-0 right-0 bg-background font-medium text-sm  text-muted-foreground capitalize h-10 px-4 py-2 flex items-center'>{item.type}</span>
                        </div>
                    
                        <div className='pl-4 pr-10 py-6'>
                            <h2 className={`mb-3 text-2xl font-bold leading-tight flex items-center`}>
                                {item.title}
                            </h2>
                            <p className='text-sm'>{item.subtitle}</p>
                        </div>
                    </a>
                )) : (

                    <p>is loading</p>
                )


            
            }

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
        </section>
    )

}