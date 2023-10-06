import Image from 'next/image'
import { Button } from "./components/ui/button"
import BlockTitle from './components/ui/block-title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Separator } from './components/ui/separator'

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between px-24">

            <div className="hero max-w-screen-xl w-full">

                <div className='mb-8 h-[400px] grid grid-cols-[2fr,1fr] gap-10'>

                    <section className='flex flex-col' aria-labelledby='hero-heading'>
                        <BlockTitle title="Kampagner" id="calendar-heading" />
                        <div className='flex flex-col flex-grow items-start justify-between w-full rounded-lg'>
                            <h1 className={`mb-3 text-6xl font-black `}>Brint og PtX: Endnu en falsk klimaløsning</h1>
                        </div>
                    </section>
                    <section className='h-full' aria-labelledby='calendar-heading'>
                        <BlockTitle title="You can help" id="calendar-heading" />
                        <Tabs defaultValue="donate" className='flex flex-col h-full'>
                            <TabsList className="w-full">
                                <Separator  orientation="vertical" className="mr-4"/>
                                <TabsTrigger value="donate">Giv et bidrag</TabsTrigger>
                                <Separator  orientation="vertical" className="mx-4"/>
                                <TabsTrigger value="join">Bliv aktiv</TabsTrigger>
                            </TabsList>
                            <TabsContent value="donate" className='p-6 bg-gray-100 h-full'>
                                Make changes to your account here.
                            </TabsContent>
                            <TabsContent value="join" className='p-6 bg-gray-100 h-full'>
                                Change your password here.
                            </TabsContent>
                            
                        </Tabs>

                    </section>
                </div>


                <section className="mb-16" aria-labelledby='ourwork-heading'>
                    <BlockTitle title="Our Work" id="calendar-heading" />

                    <div className="grid gap-10 grid-cols-4 items-stretch">
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
                            <div className='p-7'>
                                <h2 className={`mb-3 text-3xl font-black flex items-center`}>
                                    Programs
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
                            <div className='p-7'>
                                <h2 className={`mb-3 text-3xl font-black flex items-center`}>
                                    Campaigns
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Explore the Next.js 13 playground.
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
                            <div className='p-7'>
                                <h2 className={`mb-3 text-3xl font-black flex items-center`}>
                                    Resources
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
                            <div className='p-7'>
                                <h2 className={`mb-3 text-3xl font-black flex items-center`}>
                                    Magasin
                                </h2>
                                <p className={`max-w-[30ch] text-sm mb-3`}>
                                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    )
}
