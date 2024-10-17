import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar';
import Footer from './Footer';
import { Providers } from './providers';
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Oday Web App',
  description: 'Developed By Ahmed Alsumairi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth h-full " suppressHydrationWarning>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-full ">
        <Providers>
          <div className="flex flex-col h-full">
            {children}
          </div>
          {/* <Footer /> */}
          {/* <ToastContainer /> */}
        </Providers>
      </body>
    </html>
  );
}
