# Claude for Startups Application — Ready-to-Submit Draft

Official Application URL: https://platform.claude.com/offers/startups-application

---

## 1. Company Name
Innovial

## 2. Company Website
https://shift.innovial.tech (Primary product domain)  
https://innovial.tech (Company domain)

## 3. Company Email
shift@innovial.tech (Matching company domain `innovial.tech`)

## 4. Incorporation & Funding Stage
- **Stage:** Bootstrapped (Pre-seed / Self-funded).
- **Outside Funding:** $0 (No outside capital raised in the last 2 years).
- **Timeline:** Operating since November 2025; legally incorporated in August 2026. Meets the criterion of being founded within the last 5 years.
- **Claude Console:** Created with `shift@innovial.tech`.

## 5. Product Name
Innovial Shift

## 6. Product Description (For Reviewers)
Innovial Shift is an AI-assisted codebase migration and architectural modernization workspace for engineering leaders (Tech Leads, Staff Engineers, and Engineering Managers) and developer teams. 

Modern engineering organizations spend millions on deferred technical debt: framework upgrades (e.g., Next.js Pages to App Router), runtime migrations, API contract evolutions (v1 to v2), and ORM refactors. Shift ingests repository ASTs, computes exact blast radius dependency graphs, generates structured migration briefs, and produces atomic, reviewable code patches verified against the repository's native test suites and compilers with zero regressions.

## 7. How Does Innovial Shift Integrate Claude & Anthropic Differentiators?

### A. Repository AST Ingestion via Anthropic Prompt Caching
Legacy codebases have large surface areas. Shift parses multi-file AST graphs, type signatures, and architectural conventions into a structured prefix payload (up to 200K tokens). By leveraging **Anthropic Prompt Caching**, repeated reasoning calls across an iterative migration planning session achieve:
- Up to **90% latency reduction** on cached prefix queries.
- High token efficiency, allowing engineering leads to explore multiple migration routes interactively without prohibitive overhead.

### B. Sandboxed Tool Execution via Model Context Protocol (MCP)
Security and confidentiality are vital for enterprise codebases. Shift operates as an MCP Host connecting to localized MCP Servers:
- **Git & Filesystem MCP Server:** Inspects commit histories, branch topology, and file ASTs strictly in a local sandbox.
- **AST & Symbol MCP Server:** Queries caller hierarchies, interface definitions, and import graphs.
- **Test Runner MCP Server:** Executes native compilers (`tsc`), linters (`eslint`), and test runners (`jest`, `vitest`, `playwright`) deterministically.
- Code never leaves local execution boundaries for public training; Anthropic's zero-retention commercial API terms ensure strict compliance.

### C. Dual-Model Routing Pipeline (Sonnet + Haiku)
- **Claude 3.5 Sonnet:** Powers the deep architectural reasoning layer: dependency impact tracing, breaking change detection, migration brief authoring, and semantic patch generation.
- **Claude 3.5 Haiku:** Handles high-throughput operations: rapid syntax triage, symbol indexing, error categorization, and PR review changelog summaries.

### D. Deterministic Verification Gateways (Human-in-the-Loop)
Shift never merges code automatically. Generated patches are presented as review units complete with unified diffs, explicit architectural rationale, and verification logs from native project checks. Developers retain final approval on every patch.

---

## 8. Checklist Prior to Submission
- [x] Website live at `https://shift.innovial.tech` and `http://localhost:3000` / `http://localhost:3001`
- [x] Clear developer tooling positioning (no software house / agency copy)
- [x] Dedicated company email active: `shift@innovial.tech`
- [x] Zero placeholders or fake testimonials
- [x] Deep architectural alignment with Anthropic differentiators (Prompt Caching + MCP)
- [ ] Confirm Claude Console account activation under `shift@innovial.tech`
