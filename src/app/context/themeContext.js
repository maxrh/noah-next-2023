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
            // Flatten the data structure to include all parent and child pages in a single array
            const allPages = data.reduce((acc, page) => {
                acc.push(page)
                if (page.childPages) { acc.push(...page.childPages)}
                return acc
            }, [])
            
            const currentPageData = allPages.find(page => page.href === pathname);

            if (currentPageData) {
                setCurrentColors(currentPageData.customColors)
                setTheme(currentPageData.theme)
            }
        }
    }, [data, pathname])

    if (error) { throw new Error('Failed to fetch data') }

    return (
        <ThemeContext.Provider value={{ currentColors }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider