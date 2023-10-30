
import './globals.css'
import IBMPlex from 'next/font/local'
import localIcon from 'next/font/local'
import SiteHeader from './components/site-header'
import SiteFooter from './components/site-footer'
import ThemeContextProvider from './context/themeContext'
import { ThemeProviders } from './themeProviders'

const ibmplex = IBMPlex({ 
    src: './fonts/IBMPlexSans/IBM_Plex_Sans_Var-Roman.woff2',
    subsets: ['latin'],
    variable: '--font-ibmplex',
})

const materialSymbols = localIcon({ 
    src: './fonts/MaterialSymbolsSharp/MaterialSymbolsSharp[FILL,GRAD,opsz,wght].woff2',
    style: 'normal',
    variable: '--font-symbols',
    display: 'block',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {

    return (
        <html lang="en" className='font-light' suppressHydrationWarning>
            <body className={`${ibmplex.variable} font-sans ${materialSymbols.variable}`}>
                <ThemeProviders>
                    <ThemeContextProvider>
                        <div className='page-container'>
                            <SiteHeader />
                            <main className='main min-h-screen w-full '>
                                {children}
                            </main>
                            <SiteFooter />
                        </div>
                    </ThemeContextProvider>
                </ThemeProviders>
            </body>
        </html>
    )
}
