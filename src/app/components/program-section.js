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

        <section aria-labelledby='news-heading' className='max-w-screen-3xl w-full p-16'>
            <header className='mb-8'>
                <div className='relative'>
                    <span className='block h-6 w-4 group-hover:w-full  striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                    <span className='block h-6 w-full striped-bg-gray'></span>
                </div>
                <div className='px-4 py-8 flex items-center justify-between'>
                    <h2 className={`text-4xl font-bold flex items-center`}  id="news-heading">
                        Programmer
                    </h2>
                </div>
            </header>
            <div className='grid gap-8 grid-cols-3 items-stretch mb-16'>

                {!isLoading ? data.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        className="group transition-colors relative h-full w-full flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >   
                        <div className={`relative aspect-square w-1/3 shrink-0`}>
                            <Image src={item.imageUrl} alt={item.title} className=' shadow-md h-full w-full object-cover object-center relative z-10' width={1080} height={608} />
                            <span className='absolute block h-full w-full -bottom-2 -right-2 striped-bg-gray'></span>

                        </div>

                        <div className='relative py-4 px-8'>
                            
                            <h2 className={`mb-2 text-xl font-bold w-full leading-tight ` }>
                                {item.title}
                            </h2>
                            <p className='text-xs'>{item.subtitle}</p>
                            
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