import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Katie\'s Lashes',
  description: 'A website for Katie Ho\'s lash business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </html>
  )
}
