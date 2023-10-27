
export default function BlockTitle({ title, style, id }) {
    return (
        style === 'outline' ? (
            <a href="/" className="inline-flex items-center relative mb-8">
                <h2 id={id} className={`inline-flex justify-center items-center font-semibold text-sm uppercase tracking-wide leading-none z-10 h-8 bg-emerald-300 border border-foreground px-3`}>
                    {title}
                </h2>
            </a>
        ) : (
            <a href="/" className="flex flex-col relative">
                <span className='block h-4 w-full striped-bg mb-2'></span>

                <h2 id={id} className={`inline-flex items-center  font-semibold uppercase tracking-wide  text-lg  text-gray-900  z-10 bg-emerald-400 px-2 pt-1 pb-4`}>
                    {title}
                </h2>
            </a>
        ) 
    )
}