import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <section className="hero lg:max-w-screen-xl lg:w-full">
                <h1 className={`mb-3 text-8xl font-bold`}>Brint og PtX Endnu en falsk klimaløsning</h1>
            </section>

            <div className="mb-32 grid gap-16 text-center lg:max-w-screen-xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group transition-colors relative"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className='relative block w-full h-3 striped-bg border-l-8 border-emerald-600'></span>

                    <div className='px-4 py-8 h-full'>
                        <h2 className={`mb-4 text-3xl font-black`}>
                            Our work
                        </h2>
                        <p className={`mb-3 max-w-[30ch] text-sm`}>
                            Find in-depth information about Next.js features and API.
                        </p>
                    </div>


                </a>

                

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group transition-colors relative"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className='relative block w-full h-3 striped-bg border-l-8 border-emerald-600'></span>


                    <div className='px-4 py-8 h-full'>
                        <h2 className={`mb-4 text-3xl font-black`}>
                            Campaigns
                        </h2>
                        <p className={`mb-3 max-w-[30ch] text-sm`}>
                            Explore the Next.js 13 playground.
                        </p>
                    </div>

                </a>
                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    className="group transition-colors relative"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className='relative block w-full h-3 striped-bg border-l-8 border-emerald-600'></span>


                    <div className='px-7 py-8 h-full'>
                        <h2 className={`mb-4 text-3xl font-black`}>
                            Resources
                        </h2>
                        <p className={`mb-3 max-w-[30ch] text-sm`}>
                            Learn about Next.js in an interactive course with&nbsp;quizzes!
                        </p>
                    </div>

                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group transition-colors relative"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className='relative block w-full h-3 striped-bg border-l-8 border-emerald-600'></span>


                    <div className='px-4 py-8 h-full'>
                        <h2 className={`mb-4 text-3xl font-black`}>
                            You can help
                        </h2>
                        <p className={`mb-3 max-w-[30ch] text-sm`}>
                            Instantly deploy your Next.js site to a shareable URL with Vercel.
                        </p>
                    </div>

                </a>
                
            </div>
        </main>
    )
}
