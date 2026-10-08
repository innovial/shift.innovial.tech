import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import '../globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getDictionary } from '@/get-dictionary'

export async function generateMetadata({ params }: { params: { lang: 'en' | 'id' } }): Promise<Metadata> {
  const isEnglish = params.lang === 'en'
  const title = isEnglish
    ? 'Innovial Shift | Code Migration for Legacy Systems'
    : 'Innovial Shift | Migrasi Codebase dan API'
  const description = isEnglish
    ? 'Map repository dependencies, plan framework and API migrations, and review focused code changes with your project’s existing tests and checks.'
    : 'Petakan dependensi repository, rencanakan migrasi framework dan API, lalu tinjau perubahan kode dengan tes dan pemeriksaan proyek Anda.'

  return {
    metadataBase: new URL('https://shift.innovial.tech'),
    title,
    description,
    applicationName: 'Innovial Shift',
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        en: '/en',
        id: '/id',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Innovial Shift',
      title,
      description,
      url: `/${params.lang}`,
      locale: isEnglish ? 'en_US' : 'id_ID',
      alternateLocale: isEnglish ? ['id_ID'] : ['en_US'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
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
