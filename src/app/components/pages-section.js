"use client"

import useSWR from 'swr'

export default function PagesSection() {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/pages', fetcher)

    if (error) return <div>failed to load</div>

    return (
        <section className="mb-8 relative max-w-screen-3xl w-full p-16" aria-labelledby='ourwork-heading'>
            <div className="grid gap-16 gap-y-8 grid-cols-4 items-stretch border p-16">
                {!isLoading ? data.map(item => (
                    <a  
                        key={item.id}
                        href="/"
                        className="group transition-colors relative h-full w-full flex flex-col"
                        target="_blank"
                        rel="noopener noreferrer"
                    >   
                        <div className='relative'>
                            <span className='block h-4 w-4 group-hover:w-full  striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                            <span className='block h-4 w-full striped-bg-gray'></span>
                        </div>
                        <div className='px-4 py-6'>
                            <h2 className={`mb-2 text-xl font-bold flex items-center`}>
                                {item.title}
                            </h2>
                            <p className={`text-sm `}>
                                {item.subtitle}
                            </p>
                        </div>
                    </a>
                )) : ( <p>is loading</p> )}
            </div>
        </section>
    )
}