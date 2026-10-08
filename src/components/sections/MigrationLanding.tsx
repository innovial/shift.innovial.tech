const copy = {
  en: {
    badge: "Legacy code migration workspace",
    title: "Move legacy code forward, one reviewable change at a time.",
    description: "Innovial brings repository context, migration planning, and API checks into one review flow for developers changing legacy code.",
    request: "Talk to us about Innovial Shift",
    workflowLink: "See the migration flow",
    review: "Illustrative migration review",
    diffLabel: "Illustrative API migration diff",
    example: "Example",
    changed: "2 lines changed",
    prepared: "Sample change ready for review",
    checkNote: "Contract and test checks depend on your setup",
    exampleNote: "Illustration only. No customer repository or benchmark data is shown.",
    capabilityLabel: "CAPABILITY",
    stages: ["01 / understand", "02 / plan", "03 / review"],
    productLabel: "INNOVIAL SHIFT",
    intro: "Modernize with the constraints of your codebase in view.",
    introBody: "Large migrations touch more than syntax. They affect API behavior, tests, and decisions spread across a repository. Innovial Shift keeps those dependencies visible while developers plan and review each change.",
    capabilities: [
      { letter: "A", title: "Repository context", body: "Map files, symbols, and dependencies so migration plans account for where code is used." },
      { letter: "B", title: "Migration proposals", body: "Turn a target framework or API contract into small, inspectable changes developers can accept, adjust, or reject." },
      { letter: "C", title: "Review checks", body: "Run proposed changes against the tests, linters, and API contracts your project already uses." },
    ],
    workflowLabel: "MIGRATION FLOW",
    workflowTitle: "Move from scope to reviewed changes.",
    steps: [
      { title: "Map the change", body: "Choose a migration goal and identify the parts of the repository it touches." },
      { title: "Prepare a proposal", body: "Review a focused diff with the reasoning and affected contracts beside it." },
      { title: "Run your checks", body: "Use project tests and checks to decide whether a change is ready to merge." },
    ],
    claudeLabel: "CLAUDE + MCP",
    integrationStatus: "REASONING · CONTEXT · TOOL ACCESS",
    claudeTitle: "Claude for codebase reasoning.",
    claudeBody: "Claude helps map a migration, explain affected code, and prepare focused changes. Prompt caching reuses stable repository context across steps, while MCP connects the tools developers already use.",
    claudeFoot: "Every proposed change stays visible for developer review and project checks.",
    contactLabel: "CONTACT",
    contactTitle: "Working through a migration that’s hard to reason about?",
    contactBody: "Tell us what you’re changing and where your current workflow gets stuck.",
    contactCta: "Email Innovial about Shift",
  },
  id: {
    badge: "Workspace migrasi kode lama",
    title: "Majukan kode lama, satu perubahan yang siap ditinjau setiap kali.",
    description: "Innovial menyatukan konteks repository, perencanaan migrasi, dan pemeriksaan API dalam satu alur peninjauan untuk developer yang mengubah kode lama.",
    request: "Hubungi kami tentang Innovial Shift",
    workflowLink: "Lihat alur migrasi",
    review: "Ilustrasi tinjauan migrasi",
    diffLabel: "Ilustrasi diff migrasi API",
    example: "Contoh",
    changed: "2 baris berubah",
    prepared: "Contoh perubahan siap ditinjau",
    checkNote: "Pemeriksaan kontrak dan tes bergantung pada konfigurasi proyek Anda",
    exampleNote: "Ilustrasi saja. Tidak menampilkan repo pelanggan atau data benchmark.",
    capabilityLabel: "KAPABILITAS",
    stages: ["01 / pahami", "02 / rencanakan", "03 / tinjau"],
    productLabel: "INNOVIAL SHIFT",
    intro: "Modernisasi dengan tetap memahami batasan codebase Anda.",
    introBody: "Migrasi besar berdampak lebih dari sekadar sintaks. Perubahan juga menyentuh perilaku API, pengujian, dan keputusan yang tersebar di dalam repo. Innovial Shift menjaga dependensi tersebut tetap terlihat saat developer merencanakan dan meninjau perubahan.",
    capabilities: [
      { letter: "A", title: "Konteks repository", body: "Petakan file, simbol, dan dependensi agar rencana migrasi memahami bagian kode yang terdampak." },
      { letter: "B", title: "Usulan migrasi", body: "Ubah target framework atau kontrak API menjadi perubahan kecil yang bisa diterima, disesuaikan, atau ditolak developer." },
      { letter: "C", title: "Pemeriksaan review", body: "Jalankan usulan perubahan terhadap tes, linter, dan kontrak API yang sudah digunakan proyek Anda." },
    ],
    workflowLabel: "ALUR MIGRASI",
    workflowTitle: "Dari ruang lingkup ke perubahan yang siap ditinjau.",
    steps: [
      { title: "Petakan perubahan", body: "Pilih tujuan migrasi dan kenali bagian repository yang terdampak." },
      { title: "Siapkan usulan", body: "Tinjau diff terarah bersama alasannya dan kontrak yang terdampak." },
      { title: "Jalankan pemeriksaan", body: "Gunakan tes dan pemeriksaan proyek untuk menilai apakah perubahan siap digabungkan." },
    ],
    claudeLabel: "CLAUDE + MCP",
    integrationStatus: "PENALARAN · KONTEKS · AKSES TOOL",
    claudeTitle: "Claude untuk memahami codebase.",
    claudeBody: "Claude membantu memetakan migrasi, menjelaskan kode yang terdampak, dan menyiapkan perubahan terarah. Prompt caching menggunakan kembali konteks repository yang stabil, sementara MCP menghubungkan tool yang sudah digunakan developer.",
    claudeFoot: "Setiap usulan perubahan tetap terlihat untuk ditinjau developer dan diperiksa dengan tool proyek.",
    contactLabel: "KONTAK",
    contactTitle: "Sedang menghadapi migrasi yang sulit ditelusuri?",
    contactBody: "Ceritakan perubahan yang sedang dikerjakan dan bagian alur kerja Anda yang terasa sulit.",
    contactCta: "Email Innovial tentang Shift",
  },
} as const;

const contactHref = "mailto:shift@innovial.tech?subject=Innovial%20Shift";

export function MigrationLanding({ lang }: { lang: "en" | "id" }) {
  const text = copy[lang];

  return (
    <>
      <section id="top" className="relative grid min-h-[42rem] items-center gap-12 overflow-hidden bg-primary px-5 pb-24 pt-32 text-white md:px-10 lg:min-h-[46rem] lg:grid-cols-[1.08fr_.92fr] lg:gap-20 lg:px-24 lg:pb-28">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-[32rem] -right-20 h-[54rem] w-[54rem] rounded-full border border-blue-200/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-[28rem] -right-20 h-[46rem] w-[46rem] rounded-full border border-blue-200/10" />
        <div className="relative z-10 min-w-0 max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.12em] text-blue-200"><span aria-hidden="true" className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-400" />{text.badge}</p>
          <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">{text.title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-200">{text.description}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
            <a href={contactHref} className="inline-flex min-h-12 items-center justify-center bg-white px-5 py-3 font-bold text-primary transition-colors hover:bg-blue-100">{text.request}</a>
            <a href="#workflow" className="inline-flex min-h-11 items-center text-blue-100 underline decoration-blue-300 underline-offset-4 hover:text-white">{text.workflowLink}</a>
          </div>
        </div>

        <div className="relative z-10 min-w-0 w-full max-w-xl border border-slate-300 bg-white text-slate-800 shadow-[14px_16px_0_rgba(59,130,246,.17)] lg:justify-self-end">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 text-xs font-bold text-slate-600"><span>{text.review}</span><span>{text.example}</span></div>
          <div className="flex items-center gap-2 px-4 py-4 text-xs font-bold"><span className="grid h-6 w-6 place-items-center bg-blue-100 text-blue-800">TS</span><span>src/api/users.ts</span><span className="ml-auto text-[.68rem] font-medium text-slate-500">{text.changed}</span></div>
          <div role="img" aria-label={text.diffLabel} className="overflow-x-auto border-y border-slate-200 bg-slate-50 py-3 font-mono text-[.68rem] leading-6 sm:text-xs">
            <div className="flex min-w-max gap-3 px-4 text-slate-600"><span>12</span><code>export async function getUser(id: string) &#123;</code></div>
            <div className="flex min-w-max gap-3 bg-rose-50 px-4 text-rose-800"><span>13</span><code>- return client.get(`/users/$&#123;id&#125;`)</code></div>
            <div className="flex min-w-max gap-3 bg-green-50 px-4 text-green-800"><span>13</span><code>+ return client.get&lt;User&gt;(`/v2/users/$&#123;id&#125;`)</code></div>
            <div className="flex min-w-max gap-3 px-4 text-slate-600"><span>14</span><code>&#125;</code></div>
          </div>
          <div className="grid gap-2 px-4 py-4 text-xs"><p className="m-0"><span aria-hidden="true" className="mr-2 font-bold text-green-800">✓</span>{text.prepared}</p><p className="m-0"><span aria-hidden="true" className="mr-2 font-bold text-amber-800">•</span>{text.checkNote}</p></div>
          <p className="m-0 px-4 pb-4 text-[.68rem] text-slate-500">{text.exampleNote}</p>
        </div>
        <div aria-hidden="true" className="absolute bottom-5 left-5 right-5 z-10 flex justify-between text-[.6rem] font-bold uppercase tracking-[.1em] text-slate-400 lg:left-24 lg:right-24">{text.stages.map((stage) => <span key={stage}>{stage}</span>)}</div>
      </section>

      <section id="product" className="grid gap-5 px-5 py-16 sm:px-10 lg:grid-cols-[.7fr_2fr] lg:gap-24 lg:px-36 lg:py-32">
        <div className="text-xs font-bold text-blue-700">01 <span className="ml-2 tracking-[.1em] text-slate-500">{text.productLabel}</span></div>
        <div className="max-w-4xl"><h2 className="mb-4 text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">{text.intro}</h2><p className="max-w-3xl text-lg leading-relaxed text-slate-600">{text.introBody}</p></div>
      </section>

      <section id="capabilities" aria-label={text.productLabel} className="grid border-y border-slate-300 bg-slate-100 lg:grid-cols-2">
        <article className="grid gap-7 border-b border-slate-300 p-6 sm:p-10 lg:col-span-2 lg:grid-cols-[.85fr_1fr] lg:items-center lg:gap-12 lg:p-16">
          <div><p className="mb-8 text-sm font-bold text-blue-700">{text.capabilities[0].letter}</p><p className="mb-2 text-[.68rem] font-bold uppercase tracking-[.1em] text-slate-600">{text.capabilityLabel}</p><h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{text.capabilities[0].title}</h3><p className="max-w-xl text-slate-600">{text.capabilities[0].body}</p></div>
          <div aria-hidden="true" className="relative min-h-48 overflow-hidden border border-slate-300 bg-white">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 215" preserveAspectRatio="none" fill="none">
              <path d="M104 52C160 52 202 107 252 107" stroke="#3B82F6" strokeWidth="1.5" />
              <path d="M324 107C390 107 437 157 495 157" stroke="#3B82F6" strokeWidth="1.5" />
              <path d="M104 52C250 18 402 124 495 157" stroke="#93C5FD" strokeWidth="1.5" />
            </svg>
            <span className="absolute left-[8%] top-[18%] border border-blue-300 bg-white px-3 py-2 font-mono text-xs text-blue-900">routes</span>
            <span className="absolute left-[42%] top-[42%] border border-blue-300 bg-white px-3 py-2 font-mono text-xs text-blue-900">users.ts</span>
            <span className="absolute bottom-[14%] right-[7%] border border-blue-300 bg-white px-3 py-2 font-mono text-xs text-blue-900">User type</span>
          </div>
        </article>
        {text.capabilities.slice(1).map((item, index) => <article key={item.letter} className={`min-h-72 p-6 sm:p-10 lg:p-16 ${index === 1 ? "bg-primary text-white" : "border-r border-slate-300"}`}>
          <p className={`mb-8 text-sm font-bold ${index === 1 ? "text-blue-200" : "text-blue-700"}`}>{item.letter}</p><p className={`mb-2 text-[.68rem] font-bold uppercase tracking-[.1em] ${index === 1 ? "text-blue-200" : "text-slate-600"}`}>{text.capabilityLabel}</p><h3 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">{item.title}</h3><p className={index === 1 ? "max-w-xl text-slate-200" : "max-w-xl text-slate-600"}>{item.body}</p>
        </article>)}
      </section>

      <section id="workflow" className="grid gap-5 bg-white px-5 py-16 sm:px-10 lg:grid-cols-[.7fr_2fr] lg:gap-24 lg:px-36 lg:py-32">
        <div className="text-xs font-bold text-blue-700">02 <span className="ml-2 tracking-[.1em] text-slate-500">{text.workflowLabel}</span></div>
        <div><h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">{text.workflowTitle}</h2><div className="mt-10 grid border-t border-slate-300 md:grid-cols-3">{text.steps.map((step, index) => <article key={step.title} className={`py-5 md:pr-5 ${index > 0 ? "border-t border-slate-300 md:border-l md:border-t-0 md:pl-5" : ""}`}><span className="text-xs font-bold text-blue-700">0{index + 1}</span><h3 className="mb-2 mt-3 text-lg font-bold text-slate-900">{step.title}</h3><p className="mb-0 text-sm leading-relaxed text-slate-600">{step.body}</p></article>)}</div></div>
      </section>

      <section id="approach" className="grid gap-5 bg-primary px-5 py-16 text-white sm:px-10 lg:grid-cols-[.7fr_2fr] lg:gap-24 lg:px-36 lg:py-32">
        <div className="text-xs font-bold text-blue-200">03 <span className="ml-2 tracking-[.1em] text-slate-300">{text.claudeLabel}</span></div>
        <div className="max-w-4xl"><p className="mb-3 text-[.68rem] font-bold tracking-[.1em] text-blue-200">{text.integrationStatus}</p><h2 className="mb-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{text.claudeTitle}</h2><p className="text-lg leading-relaxed text-slate-200">{text.claudeBody}</p><p className="mb-0 border-t border-slate-600 pt-4 text-sm text-slate-300">{text.claudeFoot}</p><div aria-hidden="true" className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-blue-100"><span>context</span><i className="h-px w-8 bg-blue-400" /><span>proposal</span><i className="h-px w-8 bg-blue-400" /><span>checks</span></div></div>
      </section>

      <section id="contact" className="grid gap-5 px-5 py-16 sm:px-10 lg:grid-cols-[.7fr_2fr] lg:gap-24 lg:px-36 lg:py-32">
        <div className="text-xs font-bold text-blue-700">NEXT <span className="ml-2 tracking-[.1em] text-slate-500">{text.contactLabel}</span></div>
        <div className="max-w-4xl"><h2 className="mb-4 text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">{text.contactTitle}</h2><p className="mb-6 text-slate-600">{text.contactBody}</p><a href={contactHref} className="inline-flex min-h-12 items-center justify-center bg-primary px-5 py-3 font-bold text-white transition-colors hover:bg-slate-800">{text.contactCta}</a></div>
      </section>
    </>
  );
}
