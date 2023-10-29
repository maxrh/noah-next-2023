import { ThemeContext } from "@/app/context/themeContext"
import { useContext } from 'react'
import Link from "next/link"

export default function BlockTitle({ title, subtitle, href, style, id }) {
    const { currentColors } = useContext(ThemeContext)

    const primaryColor = currentColors?.primary || 'var(--primary-hex)'
    const backgroundColor = currentColors?.background || 'var(--background-hex)'

    return (
        style === 'outline' ? (
            <Link href="/" className="inline-flex items-center relative mb-8">
                <h2 id={id} className={`inline-flex justify-center items-center font-semibold text-sm uppercase tracking-wide leading-none z-10 h-8 bg-emerald-300 border border-foreground px-3`}>
                    {title}
                </h2>
            </Link>
        ) : (
            <Link href={href || '/'} className="flex flex-col items-start relative mb-8 ">
                {/* <span className='block h-6 w-2 striped-bg '></span> */}
                {/* <span 
                    className='w-1 h-1 shrink-0 grow-0 mr-6' 
                    style={{ backgroundColor: primaryColor }} 
                ></span> */}
                {/* <i className="symbol " style={{ color: primaryColor }}>arrow_right</i> */}
                <h2 className="text-xl font-semibold items-center" >
                    {title}
                </h2>
                <span 
                    className='w-full h-px mt-3 opacity-50' 
                    style={{ backgroundColor: primaryColor }} 
                ></span>
            </Link>
        ) 
    )
}