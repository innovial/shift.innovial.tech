'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ currentLang }: { currentLang: 'en' | 'id' }) {
  const pathname = usePathname()
  
  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <nav aria-label="Language" className="flex min-h-11 items-center gap-2 border-l border-slate-600 pl-3 text-sm font-semibold md:ml-1">
      <Link 
        href={redirectedPathName('id')} 
        className={cn(
          "inline-flex min-h-11 items-center px-1 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400",
          currentLang === 'id' ? 'text-white' : 'text-slate-300'
        )}
      >
        ID
      </Link>
      <span aria-hidden="true" className="text-slate-500">|</span>
      <Link 
        href={redirectedPathName('en')} 
        className={cn(
          "inline-flex min-h-11 items-center px-1 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400",
          currentLang === 'en' ? 'text-white' : 'text-slate-300'
        )}
      >
        EN
      </Link>
    </nav>
  )
}
