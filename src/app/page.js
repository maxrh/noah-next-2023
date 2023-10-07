import Image from 'next/image'
import { Button } from "./components/ui/button"
import BlockTitle from './components/ui/block-title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Separator } from './components/ui/separator'
import NewsSection from './components/news-section'
import ProgramSection from './components/program-section'

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between px-24">

            <div className="hero max-w-screen-xl w-full">

                <div className='mb-16 h-[400px] grid grid-cols-[2fr,1fr] gap-16'>
                    <section className='flex flex-col' aria-labelledby='hero-heading'>
                        <div className='relative mb-6'>
                                <span className='block h-4 w-4 group-hover:w-full  striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                                <span className='block h-4 w-full striped-bg-gray'></span>
                            </div>

                        <div className='flex flex-col flex-grow items-start justify-between w-full bg-stone-100 p-12'>
                            <h1 className={`mb-3 text-5xl font-black `}>Brint og PtX: Endnu en falsk klimaløsning</h1>
                        </div>
                    </section>
                    <section className='flex flex-col h-full' aria-labelledby='calendar-heading'>
                        <BlockTitle title="Du kan hjælpe!" id="calendar-heading" />
                        <Tabs defaultValue="donate" className='flex flex-col h-full'>
                            <TabsList className="w-full">
                                <TabsTrigger value="follow">Følg & del</TabsTrigger>
                                <TabsTrigger value="donate">Giv bidrag</TabsTrigger>
                                <TabsTrigger value="join">Bliv aktiv</TabsTrigger>
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
                            
                        </Tabs>

                    </section>
                </div>


                <section className="mb-16" aria-labelledby='ourwork-heading'>

                    <div className="grid gap-16 gap-y-8 grid-cols-4 items-stretch ">
                        <a
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
                                    Vores arbejde
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Find in-depth information about Next.js features and API.
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
                                    Kampagner
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
                                    Materialer
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Learn about Next.js in an interactive course with&nbsp;quizzes!
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
                                    Magasin
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                                </p>
                            </div>
                        </a>
                  
                        <a
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
                                    Podcast
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Find in-depth information about Next.js features and API.
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
                                    Presse
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
                                    Organisation
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Learn about Next.js in an interactive course with&nbsp;quizzes!
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
                                    Kontakt
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                                </p>
                            </div>
                        </a>
                    </div>
                </section>

                <NewsSection />
                <ProgramSection />
            </div>
        </main>
    )
}
