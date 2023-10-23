
import './globals.css'
import IBMPlex from 'next/font/local'
import localIcon from 'next/font/local'
import SiteHeader from './components/site-header'
import SiteFooter from './components/site-footer'


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
        <html lang="en">
            <body className={`${ibmplex.variable} font-sans ${materialSymbols.variable} `}>
                <div className='page-container'>
                    <SiteHeader />
                    <main className='main min-h-screen w-full pt-[120px] '>
                        {children}
                    </main>
                    <SiteFooter />
                </div>
            </body>
        </html>
    )
}
