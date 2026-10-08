import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import '../globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getDictionary } from '@/get-dictionary'

export async function generateMetadata({ params }: { params: { lang: 'en' | 'id' } }): Promise<Metadata> {
  return {
    title: params.lang === 'en'
      ? 'Innovial Shift | Codebase Migration and Refactoring'
      : 'Innovial Shift | Migrasi dan Refactoring Codebase',
    description: params.lang === 'en'
      ? 'Innovial Shift helps developers map repositories, plan migrations, prepare reviewable changes, and check API contracts and tests.'
      : 'Innovial Shift membantu developer memetakan repository, merencanakan migrasi, menyiapkan perubahan untuk ditinjau, dan memeriksa kontrak API serta tes.',
    icons: {
      icon: '/logo/icon-color.svg',
    },
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }]
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: 'en' | 'id' }
}) {
  const dict = await getDictionary(params.lang)
  
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body className={`${GeistSans.variable} font-sans antialiased bg-light text-dark`}>
        <a href="#main" className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:not-sr-only focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-primary">
          {params.lang === 'en' ? 'Skip to content' : 'Lewati ke konten'}
        </a>
        <Navbar dict={dict.nav} lang={params.lang} />
        <main id="main">{children}</main>
        <Footer dict={dict.footer} lang={params.lang} />
      </body>
    </html>
  )
}
