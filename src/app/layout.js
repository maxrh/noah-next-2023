
import './globals.css'
import IBMPlex from 'next/font/local'
import PageHeader from './components/page-header'
import PageFooter from './components/page-footer'


const ibmplex = IBMPlex({ 
    src: './fonts/IBMPlexSans/IBM_Plex_Sans_Var-Roman.woff2',
    subsets: ['latin'],
    variable: '--font-ibmplex',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}





export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${ibmplex.variable} font-sans`}>
                <div className='page-container '>
                    <PageHeader />
                    {children}
                    <PageFooter />
                </div>
            </body>
        </html>
    )
}
