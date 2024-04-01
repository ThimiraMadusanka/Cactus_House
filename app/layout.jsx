import '@styles/globals.css'

import { Tauri } from 'next/font/google'

import { Nav, Footer } from '@components';

export const metadata = {
  title: "Cactus",
  description: "Discover the best Cactus plants in the world.",
};

const tauri = Tauri({ 
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={tauri.className}>
          {/* Navigation Bar */}
          <Nav />
          {/* Content */}
          {children}
          {/* Footer Section */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
