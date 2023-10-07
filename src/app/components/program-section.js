"use client"

import { Button } from './ui/button'
import { Toggle } from './ui/toggle'
import BlockTitle from './ui/block-title'
import { useState } from 'react'
import Image from 'next/image'
import useSWR from 'swr'

export default function ProgramSection() {
    const [size, setSize] = useState(1)
    const itemsPerPage = 3

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/programs', fetcher)

    if (error) return <div>failed to load</div>


    return (

        <section aria-labelledby='news-heading'>
            <header className='mb-4'>
                <div className='relative'>
                    <span className='block h-4 w-4 group-hover:w-full  striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                    <span className='block h-4 w-full striped-bg-gray'></span>
                </div>
                <div className='px-4 py-8 flex items-center justify-between'>
                    <h2 className={`text-4xl font-bold flex items-center`}  id="news-heading">
                        Aktivistgrupper
                    </h2>
                </div>
            </header>
            <div className='grid gap-8 grid-cols-3 items-stretch mb-16'>

                {!isLoading ? data.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        className="group transition-colors relative h-full w-full border flex flex-col aspect-square overflow-hidden"
                        target="_blank"
                        rel="noopener noreferrer"
                    >   
                        

                        <div className='relative p-8 z-10'>
                            
                            <h2 className={`mb-3 text-2xl font-bold [overflow-wrap:anywhere] w-full leading-tight leading` }>
                                {item.title}
                            </h2>
                            <p className='text-sm'>{item.subtitle}</p>
                            
                        </div>
                        <div className={``}>
                                <Image src={item.imageUrl} alt={item.title} className='aspect-[2/1] object-cover object-center px-4' width={1080} height={608} />
                            </div>
                    </a>
                )) : (

                    <p>is loading</p>
                )


            
            }

            </div>

        </section>
    )

}