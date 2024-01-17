import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import NavBar from './NavBar.jsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oday Web App',
  description: 'Developed By Ahmed Alsumairi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      {/* <body className={inter.className} > */}
        {/* <NavBar /> */}
        <body className='dark' >
         {children}
        </body>
    </html>
  )
}
