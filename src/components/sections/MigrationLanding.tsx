"use client";

import { useState } from "react";

interface Scenario {
  id: string;
  name: string;
  objective: string;
  blastRadius: string;
  surfaces: string[];
  reviewPath: string[];
  diffFile: string;
  diffSummary: string;
  diffOld: string[];
  diffNew: string[];
  checks: { label: string; passed: boolean }[];
  nodes: { label: string; role: "entry" | "core" | "consumer" | "test"; detail: string }[];
}

const copy = {
  en: {
    eyebrow: "For engineering leaders carrying legacy systems",
    title: "Know the blast radius before your team changes the code.",
    description: "Innovial Shift is an AI-assisted migration workspace for engineering teams modernizing frameworks, runtimes, and APIs. It maps repository dependencies, generates reviewable migration plans, and verifies changes against your project's existing tests.",
    contactCta: "Discuss a migration with Innovial",
    workflowCta: "Explore the migration workflow",
    heroCaption: "Interactive migration brief",
    heroNote: "Select a migration scenario to observe how Shift maps affected surfaces and review requirements.",
    scenarioLabel: "Select scenario:",
    objectiveLabel: "Objective",
    blastLabel: "Blast radius estimate",
    scopeLabel: "Affected surfaces",
    reviewLabel: "Review path",
    problemKicker: "01 / THE PROBLEM",
    problemTitle: "A migration starts as a decision, then becomes hundreds of hidden dependencies.",
    problemBody: "An upgrade may begin with one framework version or API contract. The impact spreads through routes, callers, types, tests, and runtime assumptions that are only visible when someone investigates. The migration lead needs an explicit map of that work before the team edits files.",
    problemPoints: [
      { title: "Scope belongs to an accountable owner.", body: "Engineering leads decide what is included, what can wait, and what evidence a safe outcome requires." },
      { title: "Dependencies cut across assigned tickets.", body: "Staff and platform engineers hold cross-system context that determines where a breaking change can travel." },
      { title: "Every diff still requires human judgment.", body: "Developers review each patch, verify architectural tradeoffs, and run native project checks before any merge." },
    ],
    briefKicker: "02 / THE PRODUCT DIRECTION",
    briefTitleLong: "Give the migration a shared record before the first patch.",
    briefBody: "Shift is organized around an explicit migration brief. It keeps the goal, affected surfaces, constraints, and verification steps together so architectural decisions do not disappear into PR threads.",
    briefSteps: [
      { label: "Goal", value: "What is changing, and why now?" },
      { label: "Scope", value: "Which files, symbols, contracts, and tests are affected?" },
      { label: "Constraints", value: "Which compatibility and runtime boundaries must hold?" },
      { label: "Review", value: "What concrete evidence must reviewers see before merge?" },
    ],
    plannedLabel: "Planned capability: Impact mapping",
    scopeTitle: "Understand the blast radius, then decide the sequence.",
    scopeBody: "Shift maps repository context into an actionable graph for migration owners. Rather than listing hundreds of unorganized files, it connects the migration goal directly to affected symbols, callers, and test suites.",
    mapLabel: "Repository blast radius graph",
    mapNote: "Click any node below to inspect its role and why it is within the blast radius for this scenario.",
    workflowKicker: "03 / THE PLANNED WORKFLOW",
    workflowTitle: "From migration intent to verified, reviewable units.",
    workflowBody: "Work moves through four distinct gates. Each stage produces an inspectable artifact rather than asking the team to reconstruct context from memory.",
    stages: [
      { number: "01", title: "Frame the change", body: "Define the target, architectural rationale, and non-negotiable compatibility boundaries." },
      { number: "02", title: "Map affected code", body: "Trace callers, shared types, API contracts, tests, and dependency edges across the repo." },
      { number: "03", title: "Prepare review units", body: "Partition changes into focused, atomic patches with explicit rationale and diff previews." },
      { number: "04", title: "Enforce project checks", body: "Validate each proposal against native compilers, linters, and contract test suites before developer sign-off." },
    ],
    diffSectionTitle: "Review unit artifact preview",
    diffSectionBody: "Shift presents changes as focused review units with clear rationale, unified diffs, and compiler verification results.",
    leadershipKicker: "04 / FOR THE TEAM THAT OWNS THE RISK",
    leadershipTitle: "One migration, distinct levels of control.",
    leadershipBody: "Shift is engineered for the people who carry the migration across planning and execution. It gives every stakeholder a concrete surface to evaluate and approve.",
    roles: [
      { role: "Engineering Lead", responsibility: "Owns migration scope, release sequence, and criteria for safe production rollout." },
      { role: "Staff or Platform Engineer", responsibility: "Enforces cross-service contracts, architectural standards, and shared library stability." },
      { role: "Developer", responsibility: "Reviews generated patches, inspects subtle implementation details, and validates edge cases." },
    ],
    technicalKicker: "05 / TECHNICAL ARCHITECTURE",
    technicalTitle: "Deep repository reasoning connected to deterministic checks.",
    technicalBody: "Shift combines frontier LLM reasoning with native repository tooling. By coupling Anthropic Claude models with the Model Context Protocol (MCP), Shift analyzes deep repository ASTs while guaranteeing code never leaves local boundaries without policy approval.",
    technicalPillars: [
      {
        title: "Anthropic Prompt Caching",
        subtitle: "Repo AST & Context Ingestion",
        body: "Large repository dependency graphs and type definitions are formatted into reusable prefix structures. Successive planning queries leverage prompt caching to reduce reasoning latency by up to 90% and preserve token efficiency."
      },
      {
        title: "Model Context Protocol (MCP)",
        subtitle: "Sandboxed Local Tool Orchestration",
        body: "Shift connects to Git, local AST indexers, and compiler tooling through standard MCP servers. Claude queries repository symbols and executes tests in isolated local sandboxes with zero code retention."
      },
      {
        title: "Dual-Model Routing Pipeline",
        subtitle: "Claude 3.5 Sonnet & Claude 3.5 Haiku",
        body: "Claude 3.5 Sonnet performs complex dependency reasoning, migration planning, and semantic diff generation. Claude 3.5 Haiku handles high-throughput syntax triage, symbol extraction, and PR summary generation."
      },
      {
        title: "Deterministic Verification Loop",
        subtitle: "Zero Regressions via Native Tests",
        body: "Every patch proposed by Shift must pass the repository's own compiler checks, type checkers, and test suites. Developers retain final approval before any commit is merged."
      }
    ],
    faqKicker: "06 / FREQUENTLY ASKED QUESTIONS",
    faqTitle: "Practical answers for technical teams.",
    faqs: [
      { question: "Who is Innovial Shift built for?", answer: "Shift is built for engineering leads, staff engineers, platform teams, and senior developers modernizing complex repositories. Leaders manage risk and sequencing; developers inspect and approve code changes." },
      { question: "What kinds of migrations does Shift support?", answer: "The platform focuses on framework upgrades (such as Next.js Pages to App Router), runtime migrations, API contract evolutions (v1 to v2), and database ORM refactors (such as Prisma to Drizzle)." },
      { question: "Does Shift commit or merge code automatically?", answer: "No. Shift produces reviewable migration proposals with unified diffs and verification logs. Human developers inspect, test, and approve every change before any merge occurs." },
      { question: "How does Shift protect codebase confidentiality?", answer: "Through Model Context Protocol (MCP) integrations, code analysis runs against local sandboxes. Repository files are not used for public model training, and Anthropic commercial API privacy standards apply." },
    ],
    contactKicker: "START WITH YOUR NEXT MIGRATION",
    contactTitle: "Bring your most complex legacy challenge to the table.",
    contactBody: "Tell us about the codebase, the framework or API version you need to modernize, and what dependencies make the change difficult. We will demonstrate how Shift frames the migration.",
    contactEmail: "Email shift@innovial.tech",
  },
  id: {
    eyebrow: "Untuk pemimpin engineering yang menangani sistem lama",
    title: "Kenali dampak perubahan sebelum tim Anda mengubah kode.",
    description: "Innovial Shift adalah workspace migrasi berbasis AI untuk tim engineering yang memperbarui framework, runtime, dan API. Shift memetakan dependensi repository, menghasilkan rencana migrasi terstruktur, dan memverifikasi perubahan dengan tes yang sudah ada.",
    contactCta: "Diskusikan migrasi dengan Innovial",
    workflowCta: "Jelajahi alur kerja migrasi",
    heroCaption: "Brief migrasi interaktif",
    heroNote: "Pilih skenario migrasi untuk melihat bagaimana Shift memetakan area terdampak dan persyaratan review.",
    scenarioLabel: "Pilih skenario:",
    objectiveLabel: "Tujuan",
    blastLabel: "Estimasi dampak (blast radius)",
    scopeLabel: "Bagian yang terdampak",
    reviewLabel: "Jalur review",
    problemKicker: "01 / MASALAHNYA",
    problemTitle: "Migrasi dimulai dari satu keputusan, lalu menjadi ratusan dependensi tersembunyi.",
    problemBody: "Pembaruan sistem dapat dimulai dari satu versi framework atau kontrak API. Dampaknya menyebar ke routes, pemanggil, tipe data, tes, dan asumsi runtime. Pemimpin migrasi membutuhkan peta visual yang jelas sebelum tim mulai menyentuh kode.",
    problemPoints: [
      { title: "Ruang lingkup membutuhkan penanggung jawab jelas.", body: "Engineering lead memutuskan bagian mana yang masuk ke rilis, apa yang ditunda, dan bukti apa yang dibutuhkan untuk menjamin keamanan sistem." },
      { title: "Dependensi sering melompati batasan tiket kerja.", body: "Staff dan platform engineer memiliki pemahaman arsitektur yang menentukan sejauh mana dampak perubahan akan merambat." },
      { title: "Setiap diff tetap membutuhkan penilaian manusia.", body: "Developer meninjau setiap patch, memeriksa kompromi arsitektur, dan menjalankan tes proyek sebelum perubahan digabungkan." },
    ],
    briefKicker: "02 / ARAH PRODUK",
    briefTitleLong: "Buat dokumentasi bersama sebelum patch pertama ditulis.",
    briefBody: "Shift dirancang berpusat pada brief migrasi yang terstruktur. Brief ini menyatukan tujuan, area terdampak, batasan sistem, dan langkah verifikasi agar keputusan teknis tidak hilang di thread pull request.",
    briefSteps: [
      { label: "Tujuan", value: "Apa yang diubah, dan mengapa harus sekarang?" },
      { label: "Ruang lingkup", value: "File, simbol, kontrak API, dan tes apa saja yang terdampak?" },
      { label: "Batasan", value: "Batasan kompatibilitas dan perilaku apa yang harus tetap dipertahankan?" },
      { label: "Review", value: "Bukti konkret apa yang wajib dilihat reviewer sebelum merge?" },
    ],
    plannedLabel: "Kapabilitas terencana: Pemetaan dampak",
    scopeTitle: "Pahami blast radius, lalu tentukan urutan pengerjaan.",
    scopeBody: "Shift memetakan konteks repository menjadi grafik yang dapat dianalisis oleh penanggung jawab migrasi. Alih-alih menampilkan daftar file acak, Shift menghubungkan tujuan migrasi langsung ke pemanggil, tipe data, dan rangkaian tes.",
    mapLabel: "Grafik blast radius repository",
    mapNote: "Klik salah satu simpul untuk melihat perannya dan alasan simpul tersebut masuk dalam area terdampak.",
    workflowKicker: "03 / ALUR KERJA TERENCANA",
    workflowTitle: "Dari rencana migrasi menjadi unit perubahan yang terverifikasi.",
    workflowBody: "Pekerjaan bergerak melalui empat tahap evaluasi. Setiap tahap menghasilkan bukti tertulis sehingga tim tidak perlu mengingat konteks dari memori.",
    stages: [
      { number: "01", title: "Rumuskan perubahan", body: "Tetapkan target, alasan arsitektur, dan batas kompatibilitas yang tidak boleh dilanggar." },
      { number: "02", title: "Petakan kode terdampak", body: "Lacak pemanggil, tipe bersama, kontrak API, tes, dan dependensi lintas modul." },
      { number: "03", title: "Siapkan unit review", body: "Bagi pekerjaan menjadi patch atomik yang terarah dengan alasan perubahan dan pratinjau diff." },
      { number: "04", title: "Jalankan tes proyek", body: "Validasi setiap usulan terhadap compiler, linter, dan tes kontrak repository sebelum persetujuan developer." },
    ],
    diffSectionTitle: "Pratinjau artefak unit review",
    diffSectionBody: "Shift menyajikan perubahan sebagai unit review mandiri dengan penjelasan konteks, diff bersih, dan status verifikasi compiler.",
    leadershipKicker: "04 / UNTUK TIM YANG MEMEGANG RISIKO",
    leadershipTitle: "Satu migrasi, peran kendali yang berbeda.",
    leadershipBody: "Shift dirancang untuk para pengambil keputusan teknis yang mengawal migrasi dari perencanaan hingga eksekusi. Setiap peran memperoleh dokumen kerja yang jelas untuk dievaluasi.",
    roles: [
      { role: "Engineering Lead", responsibility: "Memegang ruang lingkup, urutan pengerjaan rilis, dan standar keamanan operasional." },
      { role: "Staff atau Platform Engineer", responsibility: "Menjaga kontrak antar-layanan, standar arsitektur sistem, dan kestabilan modul bersama." },
      { role: "Developer", responsibility: "Memeriksa detail kode pada patch, menguji kasus batas, dan memvalidasi logika implementasi." },
    ],
    technicalKicker: "05 / ARSITEKTUR TEKNIS",
    technicalTitle: "Penalaran repository mendalam dipadukan dengan tes deterministik.",
    technicalBody: "Shift memadukan kemampuan penalaran model frontier Claude dengan perkakas native repository. Melalui Model Context Protocol (MCP), Shift menganalisis AST kode tanpa mengirimkan kode keluar dari lingkungan kerja lokal secara bebas.",
    technicalPillars: [
      {
        title: "Anthropic Prompt Caching",
        subtitle: "Ingesti AST & Konteks Repository",
        body: "Grafik dependensi dan definisi tipe data disimpan dalam struktur prefix reusable. Pertanyaan penalaran berulang memanfaatkan prompt caching untuk memangkas latensi hingga 90% dan menghemat token."
      },
      {
        title: "Model Context Protocol (MCP)",
        subtitle: "Orkestrasi Tool Lokal Terisolasi",
        body: "Shift terhubung ke Git, pengindeks AST lokal, dan test runner melalui server standar MCP. Claude membaca simbol kode dan mengeksekusi tes di sandbox lokal dengan jaminan zero code retention."
      },
      {
        title: "Pipeline Routing Dua Model",
        subtitle: "Claude 3.5 Sonnet & Claude 3.5 Haiku",
        body: "Claude 3.5 Sonnet menangani penalaran dependensi kompleks, perencanaan arsitektur, dan pembuatan diff semantik. Claude 3.5 Haiku menangani ekstraksi simbol, pemetaan cepat, dan ringkasan metadata PR."
      },
      {
        title: "Siklus Verifikasi Deterministik",
        subtitle: "Nol Regresi Melalui Tes Native",
        body: "Setiap patch yang diusulkan wajib lolos compiler, pengecekan tipe data, dan rangkaian tes bawaan repository. Developer memegang hak penuh dalam persetujuan akhir sebelum kode digabungkan."
      }
    ],
    faqKicker: "06 / PERTANYAAN UMUM",
    faqTitle: "Jawaban praktis untuk tim teknis.",
    faqs: [
      { question: "Untuk siapa Innovial Shift dirancang?", answer: "Shift dirancang untuk engineering lead, staff engineer, tim platform, dan developer yang mengelola modernisasi sistem besar. Pemimpin memitigasi risiko; developer memeriksa dan menyetujui perubahan kode." },
      { question: "Migrasi seperti apa yang didukung Shift?", answer: "Fokus utama mencakup pembaruan framework (seperti Next.js Pages ke App Router), migrasi versi runtime, evolusi kontrak API (v1 ke v2), dan migrasi layer database ORM (seperti Prisma ke Drizzle)." },
      { question: "Apakah Shift menggabungkan kode secara otomatis?", answer: "Tidak. Shift menghasilkan usulan migrasi terstruktur lengkap dengan pratinjau diff dan log verifikasi. Developer selalu memeriksa dan menyetujui setiap perubahan secara manual." },
      { question: "Bagaimana Shift menjaga kerahasiaan codebase?", answer: "Melalui integrasi Model Context Protocol (MCP), analisis kode berjalan pada sandbox lokal. File repository tidak dipakai untuk pelatihan model publik dan mematuhi standar privasi API komersial Anthropic." },
    ],
    contactKicker: "MULAI DENGAN MIGRASI ANDA BERIKUTNYA",
    contactTitle: "Bawa tantangan sistem lama yang paling kompleks ke diskusi.",
    contactBody: "Ceritakan kepada kami tentang codebase Anda, framework atau API yang ingin dimigrasikan, dan dependensi apa yang menyulitkan. Kami akan menunjukkan cara Shift memetakan migrasi tersebut.",
    contactEmail: "Email shift@innovial.tech",
  },
} as const;

const scenariosEn: Scenario[] = [
  {
    id: "api-v2",
    name: "API Contract (Users v1 to v2)",
    objective: "Migrate Users API to v2 schema with backward-compatible adapters",
    blastRadius: "4 core modules · 18 call sites · 2 breaking payload changes",
    surfaces: ["routes/users.ts", "sdk/client.ts", "types/user.ts", "contracts/users.spec.ts"],
    reviewPath: ["Define v2 schema & deprecation rules", "Generate type-safe route handler patch", "Verify consumer contract test suite"],
    diffFile: "src/api/routes/users.ts",
    diffSummary: "Migrate legacy request handler to versioned contract with Zod validation and structured error response.",
    diffOld: [
      "// Legacy v1 handler without schema validation",
      "export async function handleUserUpdate(req: Request) {",
      "  const body = await req.json();",
      "  const user = await db.user.update({",
      "    where: { id: body.userId },",
      "    data: { name: body.name, email: body.email }",
      "  });",
      "  return Response.json(user);",
      "}",
    ],
    diffNew: [
      "// Shift v2 handler: Type-safe contract with Zod parse & trace headers",
      "export async function handleUserUpdate(req: Request) {",
      "  const parsed = UserV2UpdateSchema.safeParse(await req.json());",
      "  if (!parsed.success) {",
      "    return Response.json({ error: parsed.error.format() }, { status: 422 });",
      "  }",
      "  const user = await userService.updateV2(parsed.data);",
      "  return Response.json(user, { headers: { 'X-API-Version': '2.0.0' } });",
      "}",
    ],
    checks: [
      { label: "TypeScript compiler check (0 errors)", passed: true },
      { label: "Backward-compatible contract test (4/4 passed)", passed: true },
      { label: "Consumer client SDK compatibility verified", passed: true },
    ],
    nodes: [
      { label: "routes/users.ts", role: "core", detail: "Primary entry point transitioning from v1 unvalidated payload to v2 Zod schema." },
      { label: "sdk/client.ts", role: "consumer", detail: "Downstream TypeScript SDK client requiring v2 request parameter signatures." },
      { label: "types/user.ts", role: "core", detail: "Shared entity type definition: replaces nullable email with verified contact enum." },
      { label: "contracts/users.spec.ts", role: "test", detail: "API contract test verifying schema enforcement and 422 error payloads." },
      { label: "services/notification.ts", role: "consumer", detail: "Async event listener consuming updated UserUpdatedEvent payload." },
    ],
  },
  {
    id: "pages-to-app",
    name: "Framework (Next.js Pages to App Router)",
    objective: "Migrate authentication route handlers from Pages API to App Router",
    blastRadius: "6 endpoints · 12 middleware invocations · Zero session regression",
    surfaces: ["pages/api/auth/[...nextauth].ts", "app/api/auth/[...nextauth]/route.ts", "middleware.ts", "lib/session.ts"],
    reviewPath: ["Map Request/Response primitives", "Port handler to Route Handlers standard", "Verify cookie session persistence in E2E tests"],
    diffFile: "src/app/api/auth/[...nextauth]/route.ts",
    diffSummary: "Convert NextApiRequest handler to Web standard GET/POST handlers with App Router session headers.",
    diffOld: [
      "// Legacy Pages Router: pages/api/auth/[...nextauth].ts",
      "import NextAuth from 'next-auth';",
      "import { authOptions } from '@/lib/auth';",
      "export default NextAuth(authOptions);",
    ],
    diffNew: [
      "// Shift App Router: app/api/auth/[...nextauth]/route.ts",
      "import NextAuth from 'next-auth';",
      "import { authOptions } from '@/lib/auth';",
      "const handler = NextAuth(authOptions);",
      "export { handler as GET, handler as POST };",
    ],
    checks: [
      { label: "Next.js build compilation passed", passed: true },
      { label: "Session cookie encryption verified", passed: true },
      { label: "Middleware auth guard tests passed", passed: true },
    ],
    nodes: [
      { label: "app/api/auth/route.ts", role: "core", detail: "New App Router handler exporting standard Web Request GET and POST handlers." },
      { label: "middleware.ts", role: "core", detail: "Edge middleware enforcing session token inspection across protected routes." },
      { label: "lib/session.ts", role: "consumer", detail: "Server component helper reading session headers via next/headers cookies()." },
      { label: "tests/auth.e2e.ts", role: "test", detail: "Playwright end-to-end suite verifying login, session renewal, and signout." },
    ],
  },
  {
    id: "prisma-to-drizzle",
    name: "Database (Prisma to Drizzle ORM)",
    objective: "Decouple user repositories from Prisma runtime to typed Drizzle schema",
    blastRadius: "3 relational tables · 28 query callers · 1 transaction boundary",
    surfaces: ["prisma/schema.prisma", "db/schema/users.ts", "repositories/user.repo.ts", "tests/db.spec.ts"],
    reviewPath: ["Translate model relations to SQL columns", "Prepare typed repository query patch", "Run transactional integration tests"],
    diffFile: "src/repositories/user.repo.ts",
    diffSummary: "Replace Prisma client query with Drizzle SQL query builder, eliminating engine binary overhead.",
    diffOld: [
      "// Legacy Prisma query with hidden client runtime",
      "export async function findActiveUsers(teamId: string) {",
      "  return prisma.user.findMany({",
      "    where: { teamId, status: 'ACTIVE' },",
      "    include: { profile: true }",
      "  });",
      "}",
    ],
    diffNew: [
      "// Shift Drizzle query: Explicit SQL joins with compile-time type inference",
      "export async function findActiveUsers(teamId: string) {",
      "  return db.select()",
      "    .from(users)",
      "    .leftJoin(profiles, eq(users.id, profiles.userId))",
      "    .where(and(eq(users.teamId, teamId), eq(users.status, 'active')));",
      "}",
    ],
    checks: [
      { label: "Drizzle schema type generation clean", passed: true },
      { label: "SQL migration dry-run verified", passed: true },
      { label: "Database integration tests (8/8 passed)", passed: true },
    ],
    nodes: [
      { label: "db/schema/users.ts", role: "core", detail: "Drizzle table definition with explicit foreign keys and check constraints." },
      { label: "repositories/user.repo.ts", role: "core", detail: "Data access layer refactored from Prisma object queries to SQL builders." },
      { label: "services/billing.ts", role: "consumer", detail: "Downstream service querying user subscription status via repo." },
      { label: "tests/db.spec.ts", role: "test", detail: "Integration test suite validating queries against local test container." },
    ],
  },
];

const scenariosId: Scenario[] = [
  {
    id: "api-v2",
    name: "Kontrak API (Users v1 ke v2)",
    objective: "Migrasi API Users ke skema v2 dengan adapter kompatibel",
    blastRadius: "4 modul utama · 18 titik pemanggil · 2 perubahan format data",
    surfaces: ["routes/users.ts", "sdk/client.ts", "types/user.ts", "contracts/users.spec.ts"],
    reviewPath: ["Tentukan skema v2 dan aturan transisi", "Buat patch handler route dengan tipe aman", "Validasi rangkaian tes kontrak pemanggil"],
    diffFile: "src/api/routes/users.ts",
    diffSummary: "Ubah handler lama menjadi kontrak berversi dengan validasi Zod dan respon error terstruktur.",
    diffOld: [
      "// Handler v1 lama tanpa validasi skema",
      "export async function handleUserUpdate(req: Request) {",
      "  const body = await req.json();",
      "  const user = await db.user.update({",
      "    where: { id: body.userId },",
      "    data: { name: body.name, email: body.email }",
      "  });",
      "  return Response.json(user);",
      "}",
    ],
    diffNew: [
      "// Handler Shift v2: Kontrak aman dengan Zod parse & header versi",
      "export async function handleUserUpdate(req: Request) {",
      "  const parsed = UserV2UpdateSchema.safeParse(await req.json());",
      "  if (!parsed.success) {",
      "    return Response.json({ error: parsed.error.format() }, { status: 422 });",
      "  }",
      "  const user = await userService.updateV2(parsed.data);",
      "  return Response.json(user, { headers: { 'X-API-Version': '2.0.0' } });",
      "}",
    ],
    checks: [
      { label: "Pemeriksaan compiler TypeScript (0 error)", passed: true },
      { label: "Tes kontrak kompatibilitas mundur (4/4 lolos)", passed: true },
      { label: "Kompatibilitas SDK klien pemanggil terverifikasi", passed: true },
    ],
    nodes: [
      { label: "routes/users.ts", role: "core", detail: "Titik masuk utama yang bertransisi dari payload bebas ke skema Zod v2." },
      { label: "sdk/client.ts", role: "consumer", detail: "SDK klien TypeScript yang membutuhkan signature parameter permintaan v2." },
      { label: "types/user.ts", role: "core", detail: "Definisi tipe entitas bersama yang memperbarui field email dengan enum kontak." },
      { label: "contracts/users.spec.ts", role: "test", detail: "Tes kontrak API yang memverifikasi penegakan skema dan respon status 422." },
      { label: "services/notification.ts", role: "consumer", detail: "Pendengar event asinkron yang menerima payload UserUpdatedEvent terbaru." },
    ],
  },
  {
    id: "pages-to-app",
    name: "Framework (Next.js Pages ke App Router)",
    objective: "Migrasi route handler autentikasi dari Pages API ke App Router",
    blastRadius: "6 endpoint · 12 pemanggilan middleware · Nol regresi sesi",
    surfaces: ["pages/api/auth/[...nextauth].ts", "app/api/auth/[...nextauth]/route.ts", "middleware.ts", "lib/session.ts"],
    reviewPath: ["Petakan primitif Request/Response Web", "Port handler ke standar Route Handlers", "Validasi persistensi cookie sesi di tes E2E"],
    diffFile: "src/app/api/auth/[...nextauth]/route.ts",
    diffSummary: "Konversi handler NextApiRequest ke handler GET/POST standar Web dengan header sesi App Router.",
    diffOld: [
      "// Pages Router lama: pages/api/auth/[...nextauth].ts",
      "import NextAuth from 'next-auth';",
      "import { authOptions } from '@/lib/auth';",
      "export default NextAuth(authOptions);",
    ],
    diffNew: [
      "// Shift App Router: app/api/auth/[...nextauth]/route.ts",
      "import NextAuth from 'next-auth';",
      "import { authOptions } from '@/lib/auth';",
      "const handler = NextAuth(authOptions);",
      "export { handler as GET, handler as POST };",
    ],
    checks: [
      { label: "Kompilasi build Next.js berhasil", passed: true },
      { label: "Enkripsi cookie sesi terverifikasi", passed: true },
      { label: "Tes penjaga middleware auth lolos", passed: true },
    ],
    nodes: [
      { label: "app/api/auth/route.ts", role: "core", detail: "Handler baru App Router yang mengekspor handler standar Web GET dan POST." },
      { label: "middleware.ts", role: "core", detail: "Edge middleware yang memeriksa token sesi di seluruh rute yang dilindungi." },
      { label: "lib/session.ts", role: "consumer", detail: "Helper server component untuk membaca header sesi via next/headers cookies()." },
      { label: "tests/auth.e2e.ts", role: "test", detail: "Rangkaian Playwright E2E yang memvalidasi login, pembaruan sesi, dan signout." },
    ],
  },
  {
    id: "prisma-to-drizzle",
    name: "Database (Prisma ke Drizzle ORM)",
    objective: "Lepas dependensi repository dari runtime Prisma ke skema Drizzle",
    blastRadius: "3 tabel relasional · 28 pemanggil query · 1 batas transaksi",
    surfaces: ["prisma/schema.prisma", "db/schema/users.ts", "repositories/user.repo.ts", "tests/db.spec.ts"],
    reviewPath: ["Terjemahkan relasi model ke kolom SQL", "Siapkan patch query repository bertipe aman", "Jalankan tes integrasi transaksional"],
    diffFile: "src/repositories/user.repo.ts",
    diffSummary: "Ganti query klien Prisma dengan query builder Drizzle SQL untuk memangkas overhead binary engine.",
    diffOld: [
      "// Query Prisma lama dengan runtime engine tersembunyi",
      "export async function findActiveUsers(teamId: string) {",
      "  return prisma.user.findMany({",
      "    where: { teamId, status: 'ACTIVE' },",
      "    include: { profile: true }",
      "  });",
      "}",
    ],
    diffNew: [
      "// Query Drizzle Shift: SQL join eksplisit dengan inferensi tipe saat kompilasi",
      "export async function findActiveUsers(teamId: string) {",
      "  return db.select()",
      "    .from(users)",
      "    .leftJoin(profiles, eq(users.id, profiles.userId))",
      "    .where(and(eq(users.teamId, teamId), eq(users.status, 'active')));",
      "}",
    ],
    checks: [
      { label: "Generasi tipe skema Drizzle bersih", passed: true },
      { label: "Uji coba migrasi SQL terverifikasi", passed: true },
      { label: "Tes integrasi database (8/8 lolos)", passed: true },
    ],
    nodes: [
      { label: "db/schema/users.ts", role: "core", detail: "Definisi tabel Drizzle dengan foreign key dan check constraint eksplisit." },
      { label: "repositories/user.repo.ts", role: "core", detail: "Layer akses data yang diubah dari query objek Prisma ke SQL builder." },
      { label: "services/billing.ts", role: "consumer", detail: "Layanan hilir yang memeriksa status langganan pengguna melalui repository." },
      { label: "tests/db.spec.ts", role: "test", detail: "Rangkaian tes integrasi yang memvalidasi query terhadap database lokal." },
    ],
  },
];

const contactHref = "mailto:shift@innovial.tech?subject=Innovial%20Shift";

export function MigrationLanding({ lang }: { lang: "en" | "id" }) {
  const text = copy[lang];
  const scenarios = lang === "en" ? scenariosEn : scenariosId;
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);

  const activeScenario = scenarios[selectedScenarioIndex];
  const activeNode = activeScenario.nodes[selectedNodeIndex] || activeScenario.nodes[0];

  return (
    <>
      {/* 00 / HERO & INTERACTIVE BRIEF */}
      <section id="top" className="relative overflow-hidden bg-primary px-5 pb-16 pt-28 text-white sm:px-10 sm:pb-20 lg:px-24 lg:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-28 h-[34rem] w-[34rem] rounded-full border border-blue-300/15" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-40 h-[24rem] w-[24rem] rounded-full border border-blue-300/15" />
        
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,.95fr)] lg:items-center lg:gap-16">
          <div className="min-w-0 max-w-3xl">
            <p className="mb-5 text-sm font-semibold text-blue-200">{text.eyebrow}</p>
            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-7xl">
              {text.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              {text.description}
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={contactHref}
                className="inline-flex min-h-11 items-center justify-center bg-white px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-blue-100"
              >
                {text.contactCta}
              </a>
              <a
                href="#workflow"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-blue-100 underline decoration-blue-300 underline-offset-4 hover:text-white"
              >
                {text.workflowCta}
              </a>
            </div>
          </div>

          {/* Interactive Migration Brief Card */}
          <aside
            aria-label={text.heroCaption}
            className="min-w-0 border border-slate-500 bg-slate-50 text-slate-900 shadow-[14px_16px_0_rgba(59,130,246,.16)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-300 bg-slate-100 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 bg-blue-600" aria-hidden="true" />
                <p className="m-0 text-sm font-bold tracking-tight text-slate-900">{text.heroCaption}</p>
              </div>
              <span className="text-xs font-mono font-medium text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5">
                {activeScenario.id}
              </span>
            </div>

            {/* Scenario Switcher Tabs */}
            <div className="border-b border-slate-300 bg-white p-3">
              <p className="mb-2 text-xs font-bold text-slate-600">{text.scenarioLabel}</p>
              <div className="flex flex-wrap gap-1.5" role="tablist" aria-label={text.scenarioLabel}>
                {scenarios.map((sc, idx) => (
                  <button
                    key={sc.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedScenarioIndex === idx}
                    onClick={() => {
                      setSelectedScenarioIndex(idx);
                      setSelectedNodeIndex(0);
                    }}
                    className={`min-h-11 px-3 py-2 text-xs font-semibold text-left transition-colors ${
                      selectedScenarioIndex === idx
                        ? "bg-primary text-white border border-primary"
                        : "bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    {sc.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5">
              <div className="border-b border-slate-300 pb-4">
                <p className="m-0 text-xs font-bold uppercase tracking-wider text-slate-600">{text.objectiveLabel}</p>
                <p className="mb-0 mt-1.5 text-lg font-bold tracking-tight text-slate-900">
                  {activeScenario.objective}
                </p>
                <p className="mb-0 mt-2 text-xs font-medium text-blue-800">
                  <span className="font-bold">{text.blastLabel}:</span> {activeScenario.blastRadius}
                </p>
              </div>

              <div className="border-b border-slate-300 py-4">
                <p className="m-0 text-xs font-bold uppercase tracking-wider text-slate-600">{text.scopeLabel}</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5" aria-label={text.scopeLabel}>
                  {activeScenario.surfaces.map((surface) => (
                    <span
                      key={surface}
                      className="border border-blue-300 bg-white px-2 py-1 font-mono text-xs text-blue-950"
                    >
                      {surface}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <p className="m-0 text-xs font-bold uppercase tracking-wider text-slate-600">{text.reviewLabel}</p>
                <ol className="mt-2.5 grid gap-2 p-0 text-xs text-slate-700 sm:grid-cols-3">
                  {activeScenario.reviewPath.map((step, index) => (
                    <li key={step} className="list-none border-l-2 border-blue-500 pl-2.5">
                      <span className="block font-mono font-bold text-blue-800">0{index + 1}</span>
                      <span className="font-medium text-slate-800">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <p className="m-0 border-t border-slate-300 bg-slate-50 px-5 py-3 text-xs leading-relaxed text-slate-600">
              {text.heroNote}
            </p>
          </aside>
        </div>
      </section>

      {/* 01 / THE PROBLEM */}
      <section id="product" className="px-5 py-16 sm:px-10 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,.76fr)_minmax(0,1.24fr)] lg:gap-20">
          <p className="m-0 text-xs font-bold text-blue-800">{text.problemKicker}</p>
          <div>
            <h2 className="max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {text.problemTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
              {text.problemBody}
            </p>
            <div className="mt-10 border-t border-slate-300">
              {text.problemPoints.map((point, index) => (
                <article
                  key={point.title}
                  className="grid gap-3 border-b border-slate-300 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6"
                >
                  <p className="m-0 text-sm font-bold font-mono text-blue-800">0{index + 1}</p>
                  <div>
                    <h3 className="m-0 text-xl font-bold tracking-tight text-slate-900">{point.title}</h3>
                    <p className="mb-0 mt-2 max-w-2xl leading-relaxed text-slate-600">{point.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 / THE PRODUCT DIRECTION */}
      <section className="bg-slate-100 px-5 py-16 sm:px-10 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,.76fr)_minmax(0,1.24fr)] lg:gap-20">
          <p className="m-0 text-xs font-bold text-blue-800">{text.briefKicker}</p>
          <div>
            <h2 className="max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {text.briefTitleLong}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
              {text.briefBody}
            </p>
            <div className="mt-10 grid border border-slate-300 bg-white sm:grid-cols-2">
              {text.briefSteps.map((item, index) => (
                <div
                  key={item.label}
                  className={`p-6 sm:p-7 ${index > 1 ? "border-t border-slate-300" : ""} ${
                    index % 2 === 1 ? "sm:border-l sm:border-slate-300" : ""
                  }`}
                >
                  <p className="m-0 text-xs font-bold uppercase tracking-wider text-blue-800">{item.label}</p>
                  <p className="mb-0 mt-3 text-lg leading-snug font-semibold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES / BLAST RADIUS GRAPH */}
      <section id="capabilities" className="border-y border-slate-300 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:px-24 lg:py-28">
          <div>
            <p className="m-0 text-xs font-bold text-blue-800">{text.plannedLabel}</p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {text.scopeTitle}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
              {text.scopeBody}
            </p>
            
            <div className="mt-8 border border-slate-200 bg-slate-50 p-4">
              <p className="m-0 text-xs font-bold uppercase tracking-wider text-slate-600">Active Scenario Scope</p>
              <p className="mb-0 mt-1 text-sm font-semibold text-slate-900">{activeScenario.name}</p>
              <p className="mb-0 mt-2 text-xs font-mono text-blue-900 bg-blue-100/60 p-2 border border-blue-200">
                {activeScenario.blastRadius}
              </p>
            </div>
          </div>

          <figure className="m-0 border border-slate-300 bg-slate-50 p-5 sm:p-7">
            <figcaption className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-slate-800">
              <span>{text.mapLabel}</span>
              <span className="text-xs font-normal text-slate-500">Interactive node inspector</span>
            </figcaption>

            {/* Interactive Node Selector Pills */}
            <div className="mb-4 flex flex-wrap gap-1.5" role="tablist" aria-label="Nodes">
              {activeScenario.nodes.map((node, nIdx) => (
                <button
                  key={node.label}
                  type="button"
                  onClick={() => setSelectedNodeIndex(nIdx)}
                  className={`min-h-11 px-3 py-1.5 text-xs font-mono transition-colors ${
                    selectedNodeIndex === nIdx
                      ? "bg-blue-700 text-white border border-blue-800 font-bold"
                      : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {node.label}
                </button>
              ))}
            </div>

            {/* Node Inspector Card */}
            <div className="border border-blue-200 bg-white p-4">
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2">
                <span className="font-mono text-xs font-bold text-blue-900">{activeNode.label}</span>
                <span className={`px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                  activeNode.role === "core" ? "bg-amber-100 text-amber-900 border border-amber-300" :
                  activeNode.role === "test" ? "bg-emerald-100 text-emerald-900 border border-emerald-300" :
                  "bg-blue-100 text-blue-900 border border-blue-300"
                }`}>
                  Role: {activeNode.role}
                </span>
              </div>
              <p className="mb-0 mt-3 text-xs leading-relaxed text-slate-700">
                {activeNode.detail}
              </p>
            </div>

            {/* Dependency Relationship Topology */}
            <div className="relative mt-4 min-h-60 overflow-hidden border border-slate-300 bg-slate-900 p-5" aria-hidden="true">
              <div className="text-[11px] font-mono text-slate-400 mb-3">DEPENDENCY_TRACE // BLAST_RADIUS_GRAPH</div>
              <div className="space-y-2 font-mono text-xs">
                {activeScenario.nodes.map((node, i) => (
                  <div key={node.label} className="flex items-center gap-2">
                    <span className="text-slate-500">[{i + 1}]</span>
                    <span className={selectedNodeIndex === i ? "text-amber-300 font-bold" : "text-slate-300"}>
                      {node.label}
                    </span>
                    <span className="text-slate-600">--&gt;</span>
                    <span className="text-blue-400 text-[11px]">[{node.role}]</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-0 mt-4 max-w-2xl text-xs leading-relaxed text-slate-600">
              {text.mapNote}
            </p>
          </figure>
        </div>
      </section>

      {/* 03 / THE PLANNED WORKFLOW */}
      <section id="workflow" className="bg-primary px-5 py-16 text-white sm:px-10 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,.76fr)_minmax(0,1.24fr)] lg:gap-20">
            <p className="m-0 text-xs font-bold text-blue-200">{text.workflowKicker}</p>
            <div>
              <h2 className="max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                {text.workflowTitle}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">
                {text.workflowBody}
              </p>
            </div>
          </div>

          <ol className="mt-12 grid border-y border-slate-600 lg:grid-cols-4">
            {text.stages.map((stage, index) => (
              <li
                key={stage.number}
                className={`list-none py-6 lg:px-6 lg:py-8 ${
                  index > 0 ? "border-t border-slate-600 lg:border-l lg:border-t-0" : ""
                } ${index === 0 ? "lg:pl-0" : ""} ${index === text.stages.length - 1 ? "lg:pr-0" : ""}`}
              >
                <p className="m-0 text-sm font-bold font-mono text-blue-200">{stage.number}</p>
                <h3 className="mb-0 mt-4 text-xl font-bold tracking-tight text-white">{stage.title}</h3>
                <p className="mb-0 mt-3 leading-relaxed text-slate-300">{stage.body}</p>
              </li>
            ))}
          </ol>

          {/* Concrete Review Unit & Code Diff Artifact */}
          <div className="mt-16 border border-slate-600 bg-slate-950 p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <p className="m-0 text-xs font-bold uppercase tracking-wider text-blue-300">
                  {text.diffSectionTitle}
                </p>
                <p className="mb-0 mt-1 font-mono text-sm text-slate-200">
                  File: <span className="text-white font-bold">{activeScenario.diffFile}</span>
                </p>
              </div>
              <span className="border border-emerald-500/40 bg-emerald-950/60 px-3 py-1 text-xs font-mono font-medium text-emerald-300">
                Shift Automated Review Gate: READY FOR HUMAN REVIEW
              </span>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              {activeScenario.diffSummary}
            </p>

            {/* Unified Diff Box */}
            <div className="mt-4 overflow-x-auto rounded border border-slate-800 bg-slate-900 font-mono text-xs">
              <div className="bg-slate-800/80 px-4 py-2 text-[11px] font-semibold text-slate-400 border-b border-slate-800">
                UNIFIED_DIFF // {activeScenario.diffFile}
              </div>
              <div className="p-4 space-y-1">
                {activeScenario.diffOld.map((line, idx) => (
                  <div key={`old-${idx}`} className="flex items-start text-red-300 bg-red-950/30 px-2 py-0.5 rounded-sm">
                    <span className="w-6 shrink-0 select-none text-red-500 font-bold">-</span>
                    <code>{line}</code>
                  </div>
                ))}
                <div className="my-2 border-t border-slate-800/80" />
                {activeScenario.diffNew.map((line, idx) => (
                  <div key={`new-${idx}`} className="flex items-start text-emerald-300 bg-emerald-950/30 px-2 py-0.5 rounded-sm">
                    <span className="w-6 shrink-0 select-none text-emerald-500 font-bold">+</span>
                    <code>{line}</code>
                  </div>
                ))}
              </div>
            </div>

            {/* Automated Verification Checks */}
            <div className="mt-6 border-t border-slate-800 pt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Deterministic Validation Results:
              </p>
              <div className="grid gap-2 sm:grid-cols-3">
                {activeScenario.checks.map((check) => (
                  <div
                    key={check.label}
                    className="flex items-center gap-2 border border-slate-800 bg-slate-900/60 p-2.5 text-xs text-slate-300"
                  >
                    <span className="text-emerald-400 font-bold" aria-hidden="true">✓</span>
                    <span>{check.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / LEADERSHIP ROLES */}
      <section className="px-5 py-16 sm:px-10 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,.76fr)_minmax(0,1.24fr)] lg:gap-20">
          <p className="m-0 text-xs font-bold text-blue-800">{text.leadershipKicker}</p>
          <div>
            <h2 className="max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {text.leadershipTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
              {text.leadershipBody}
            </p>
            <div className="mt-10 divide-y divide-slate-300 border-y border-slate-300">
              {text.roles.map((role) => (
                <article
                  key={role.role}
                  className="grid gap-3 py-6 sm:grid-cols-[minmax(12rem,.62fr)_minmax(0,1.38fr)] sm:gap-8"
                >
                  <h3 className="m-0 text-lg font-bold text-slate-900">{role.role}</h3>
                  <p className="m-0 leading-relaxed text-slate-600">{role.responsibility}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 / TECHNICAL ARCHITECTURE (CLAUDE & MCP FOCUS) */}
      <section id="approach" className="border-y border-slate-300 bg-slate-100 px-5 py-16 sm:px-10 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,.76fr)_minmax(0,1.24fr)] lg:gap-20">
          <div>
            <p className="m-0 text-xs font-bold text-blue-800">{text.technicalKicker}</p>
            <h2 className="mt-4 max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {text.technicalTitle}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
              {text.technicalBody}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {text.technicalPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="border border-slate-300 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <span className="font-mono text-xs font-bold text-blue-800">PILLAR // 0{idx + 1}</span>
                  <span className="h-2 w-2 bg-blue-600" aria-hidden="true" />
                </div>
                <h3 className="mb-0 mt-3 text-lg font-bold tracking-tight text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mb-0 mt-1 text-xs font-semibold text-blue-900">
                  {pillar.subtitle}
                </p>
                <p className="mb-0 mt-3 text-sm leading-relaxed text-slate-600">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 / FAQ */}
      <section className="px-5 py-16 sm:px-10 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,.76fr)_minmax(0,1.24fr)] lg:gap-20">
          <div>
            <p className="m-0 text-xs font-bold text-blue-800">{text.faqKicker}</p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {text.faqTitle}
            </h2>
          </div>
          <div className="border-t border-slate-300">
            {text.faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-slate-300 py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold text-slate-900 marker:content-none">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="text-2xl font-normal text-blue-800 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mb-0 mt-3 max-w-3xl leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 07 / CONTACT & ENGAGEMENT */}
      <section id="contact" className="bg-primary px-5 py-16 text-white sm:px-10 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,.76fr)_minmax(0,1.24fr)] lg:gap-20">
          <p className="m-0 text-xs font-bold text-blue-200">{text.contactKicker}</p>
          <div>
            <h2 className="max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              {text.contactTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">
              {text.contactBody}
            </p>
            <a
              href={contactHref}
              className="mt-8 inline-flex min-h-11 items-center justify-center bg-white px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-blue-100"
            >
              {text.contactEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
