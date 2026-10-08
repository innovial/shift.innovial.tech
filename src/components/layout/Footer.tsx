import Image from "next/image";
import Link from "next/link";

export function Footer({ dict, lang }: { dict: { description: string; rights: string }; lang: "en" | "id" }) {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto flex flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link href={`/${lang}`} className="w-fit rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400">
          <Image src="/logo/full-white.svg" alt="Innovial" width={130} height={38} className="h-10 w-auto" />
        </Link>
        <p className="m-0 max-w-sm text-sm text-slate-300">{dict.description}</p>
        <a href="mailto:shift@innovial.tech" className="min-h-11 inline-flex items-center text-sm text-white underline decoration-slate-500 underline-offset-4 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">shift@innovial.tech</a>
        <span className="text-sm text-slate-400">© {new Date().getFullYear()} Innovial. {dict.rights}</span>
      </div>
    </footer>
  );
}
