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
    const { data, error, isLoading } = useSWR("http://localhost:3000/api/pages", fetcher)

    const themeMenuColor = !isLoading && theme === 'dark' ? '#f3f4f6' : '#111827'
    const themePrimaryColor = !isLoading && theme === 'dark' ? '#6ee7b7' : '#6ee7b7'
    const themeBackgroundColor = !isLoading && theme === 'dark' ? '#111827' : '#f3f4f6'

    const [currentColors, setCurrentColors] = useState({ 
        menu: themeMenuColor, 
        primary: themePrimaryColor, 
        background: themeBackgroundColor
    })


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
                setTheme(currentPageData.theme)
                setCurrentColors({
                    menu: currentPageData.customColors.menu || themeMenuColor,
                    primary: currentPageData.customColors.primary || themePrimaryColor,
                    background: currentPageData.customColors.background || themeBackgroundColor,
                })

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