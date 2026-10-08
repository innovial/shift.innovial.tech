"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const contactHref = "mailto:shift@innovial.tech?subject=Innovial%20Shift";

export function Navbar({ dict, lang }: { dict: { product: string; workflow: string; approach: string; mainNavigation: string; menu: string; closeMenu: string; contact: string }; lang: "en" | "id" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "#product", label: dict.product },
    { href: "#workflow", label: dict.workflow },
    { href: "#approach", label: dict.approach },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-700 bg-primary text-white">
      <nav aria-label={dict.mainNavigation} className="container mx-auto flex min-h-[4.5rem] items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href={`/${lang}`} className="flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400">
          <Image src="/logo/full-white.svg" alt="Innovial" width={140} height={40} priority className="h-10 w-auto" />
          <span className="border-l border-slate-600 pl-3 text-sm font-semibold tracking-wide text-white">Shift</span>
        </Link>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-16 items-center justify-center border border-slate-500 px-3 text-sm font-semibold text-white hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? dict.closeMenu : dict.menu}
        </button>

        <div id="primary-navigation" className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-2 border-b border-slate-700 bg-primary px-5 py-4 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center text-sm font-semibold text-slate-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">
              {link.label}
            </Link>
          ))}
          <div className="flex min-h-11 items-center md:ml-1"><LanguageSwitcher currentLang={lang} /></div>
          <a href={contactHref} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center justify-center bg-white px-4 text-sm font-bold text-primary hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">
            {dict.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
