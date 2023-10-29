"use client"

import { createContext, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import useSWR from 'swr'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()

    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR("http://localhost:3000/api/pages", fetcher)

    const [currentColors, setCurrentColors] = useState({ menu: '', primary: '', background: '' })
    
    

    useEffect(() => {
        if (data) {     
            
            function flattenPages(pages) {
                return pages.reduce((acc, page) => {
                    acc.push(page);
                    if (page.childPages) { acc.push(...flattenPages(page.childPages)) }
                    return acc
                }, [])
            }

            const allPages = flattenPages(data)
            const currentPageData = allPages.find(page => page.href === pathname)

            if (currentPageData) {
                setCurrentColors(currentPageData.customColors)
                setTheme(currentPageData.theme)
            }
        }
    }, [data, pathname, theme, setTheme])

    if (error) { throw new Error('Failed to fetch data') }

    return (
        <ThemeContext.Provider value={{ currentColors }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider