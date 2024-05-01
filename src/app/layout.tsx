import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '../components/navbar';
import { Web3Modal } from '@/context/wallet-provider';
import ThemeProvider from '@/context/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokemon List dApp',
  description: 'A simple dApp to list and collect Pokemons',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Web3Modal>
          <NavBar />
          <main className="flex min-h-screen flex-col items-center p-5 md:p-10 lg:p-20">
            <ThemeProvider attribute="class" defaultTheme="dark">
              {children}
              <Toaster />
            </ThemeProvider>
          </main>
        </Web3Modal>
      </body>
    </html>
  );
}
