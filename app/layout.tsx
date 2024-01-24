import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Footerk from './_components/Footer';


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
    <html lang="en" className="dark scroll-smooth h-full">
     
      <body className={`${inter.className} h-full`} >
        
        <div className="flex flex-col h-full">
        
        
          
          {children}
          
        
          
         </div>
        
         
        </body>
        
    </html>
  )
}
