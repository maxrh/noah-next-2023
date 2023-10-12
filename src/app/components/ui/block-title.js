
export default function BlockTitle({ title, style, id }) {
    return (
        style === 'outline' ? (
            <a href="/" className="inline-flex items-center relative">
                <h2 id={id} className={`inline-flex justify-center items-center font-semibold text-sm uppercase tracking-wide leading-none z-10 h-8 bg-emerald-300 border border-foreground px-3`}>
                    {title}
                </h2>
            </a>
        ) : (
            <a href="/" className="inline-flex items-center relative">
                <h2 id={id} className={`inline-flex justify-center items-center font-semibold text-sm uppercase tracking-wide leading-none z-10 h-8 bg-gray-800 px-3 border border-foreground text-emerald-300`}>
                    {title}
                </h2>
            </a>
        ) 
    )
}