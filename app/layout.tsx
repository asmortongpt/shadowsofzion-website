import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Shadows of Zion | Christian Rock Band',
  description: 'Christian Rock from the Ashes - Faith, Fire, Fury. Stream our debut album "Dust to Glory" now on all platforms.',
  keywords: ['christian rock', 'christian metal', 'faith-based rock music', 'Shadows of Zion', 'Dust to Glory'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
