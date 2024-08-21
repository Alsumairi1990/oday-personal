import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Footerk from './_components/Footer';
import { Providers } from './providers';
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css"


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
    <html lang="en" className=" scroll-smooth h-full" suppressHydrationWarning>
     
      {/* <body className={`${inter.className} h-full`} > */}
       <body className="min-h-full " > 
        <Providers>
        <div className="flex flex-col h-full">
        
        
          
          {children}
          <ToastContainer />
        
          
         </div>
       </Providers>
        
         
        </body>
        
    </html>
  )
}
