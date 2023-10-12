import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import BlockTitle from "./ui/block-title"

export default function HeroSection() {

    return (
        <section className='hero h-[calc(100vh-120px)] w-full pb-12 flex flex-col items-start'>
            <div className="h-full w-full px-16 ">
                <div className='max-w-screen-3xl mx-auto w-full grid grid-cols-[max-content,max-content,1fr] grid-rows-[auto, auto] items-center'>

                    <div className="order-none row-auto col-auto w-20"></div>

                    <div className='order-none row-auto col-auto flex flex-col justify-center h-[70vh]'>
                        <div className="max-w-[calc(12rem_+_25vw)]">
                        <div className='relative mb-8 flex items-center gap-2'>
                            <BlockTitle title="Kampagne" />
                            <BlockTitle title="Biodiversitet" style="outline" />
                            <BlockTitle title="Vandmiljø" style="outline" />

                        </div>
                            <h1 className={`mb-8 text-6xl font-bold leading-[1] `}>Eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>

                        </div>
                    </div>

                    <div className='order-none row-auto col-auto flex flex-col items-center justify-center h-[calc(100vh-120px-3rem-48px)] relative min-h-[20rem] min-w-[20rem]'>
                        <div className='absolute left-0 top-0 bottom-0 flex items-center justify-center px-8'>
                            <img src="/images/Moed_fagraadsaktiv.png" alt="" className='h-full object-contain' />
                        </div>
                    </div>

                    <div className="order-4 col-start-2 col-end-4 flex justify-end">
                        <a href="#" className="font-medium flex items-center h-12 ">
                            <div className="aspect-square h-full border border-foreground rounded-full flex items-center justify-center mr-4">
                                <ArrowDownIcon className="h-6 w-6" />
                            </div>
                            <span>Scroll down</span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>  
    )
}


{/* <Tabs defaultValue="donate" className='flex flex-col h-full bg-white p-12'>
                        <TabsList className="w-full">
                            <TabsTrigger value="donate">
                                <div className='absolute top-0 left-0 w-full'>
                                    <span className='block h-4 w-4 group-hover:w-full striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                                    <span className='block h-4 w-full striped-bg-gray'></span>
                                </div>
                                Giv bidrag
                            </TabsTrigger>
                            <TabsTrigger value="join">
                                <div className='absolute top-0 left-0 w-full'>
                                    <span className='block h-4 w-4 group-hover:w-full striped-bg absolute top-0 left-0 transition-all ease-in-out duration-300 '></span>
                                    <span className='block h-4 w-full striped-bg-gray'></span>
                                </div>
                                Bliv aktiv
                            </TabsTrigger>
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
                        
                    </Tabs> */}