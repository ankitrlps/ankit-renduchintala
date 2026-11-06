import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import profile from "@/assets/ankit-portrait.jpg";
import resume from "@/assets/Resume-AnkitRenduchintala.pdf";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSoccerFavicon } from "@/hooks/use-soccer-favicon";

const TITLE = "Ankit Renduchintala | Full-Stack Software Engineer";
const DESC =
  "Software Engineer with ten years of experience designing, building and releasing scalable full-stack systems on Java, Angular, React, AWS and Kubernetes. Currently learning AI Engineering.";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const EMAIL = "ankit.rlps@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ankit-renduchintala";
const GITHUB = "https://github.com/ankitrlps";
const NAV = ["home", "experience", "about", "publications", "contact"];

const CONTACTS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: "LinkedIn", value: "linkedin.com/in/ankit-renduchintala", href: LINKEDIN, external: true },
  { label: "GitHub", value: "github.com/ankitrlps", href: GITHUB, external: true },
];

const PUBLICATIONS = [
  {
    type: "Journal",
    title: "A comprehensive micro unmanned aerial vehicle (UAV/Drone) forensic framework",
    venue: "Digital Investigation (Elsevier), Vol. 30",
    date: "September 2019",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1742287619300799",
  },
  {
    type: "Conference",
    title: "Drone Forensics: A Preliminary Flight Log Analysis of Micro Drones",
    venue: "CSCI-ISCW 2017 (IEEE), Las Vegas",
    date: "December 2017",
    url: "https://ieeexplore.ieee.org/document/8560767",
  },
];

const EXPERIENCE: [string, string, string][] = [
  ["Senior Software Engineer", "Winsupply", "2025 – 2026"],
  ["Senior Software Developer", "NTT DATA", "2018 – 2025"],
  ["Software Developer", "Dell Services", "2014 – 2016"],
];

const SKILLS: [string, string[]][] = [
  ["PROGRAMMING LANGUAGES", ["Java", "TypeScript", "JavaScript", "SQL", "Apex", "Python"]],
  ["Frameworks & Libraries", ["Spring Boot & modules", "Angular 19", "PrimeNG", "RxJS", "NgRx (SignalStore)", "React", "Next.js", "Material UI", "Hibernate", "REST APIs", "Swagger/OpenAPI", "Apache Camel", "Citrus", "Cucumber", "Jasmine", "Jest", "JUnit", "Mockito"]],
  ["Cloud & DevOps", ["Amazon Web Services", "Docker", "Kubernetes", "Datadog", "Ingress", "GitHub Actions", "Jenkins", "ArgoCD", "Maven/Gradle", "HashiCorp Vault", "MuleSoft", "AzureDevOps"]],
  ["Data & Messaging", ["SQL Server", "IBM DB2", "MySQL", "Oracle 12c", "Couchbase", "Redis", "Kafka", "IBM MQ", "MuleSoft"]],
];

const AI_EXPLORATION = [
  "RAG pipeline design",
  "Vector databases",
  "Embeddings",
  "Chunking",
  "Retrieval",
  "Agentic AI",
  "Model Evaluation Harness",
  "Guardrails",
  "LLM API integration",
  "Application backends",
  "Personal project",
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21h-4V9Z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
function Socials() {
  return (
    <div className="flex items-center gap-4">
      <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent"><LinkedInIcon /></a>
      <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent"><GitHubIcon /></a>
    </div>
  );
}

function Logo() {
  return (
    <Button asChild variant="ghost" size="icon" className="rounded-full" >
      <a href="/#home" aria-label="Ankit Renduchintala, home" title="Home">
        <span aria-hidden="true" className="soccer-spin block text-3xl leading-none">⚽</span>
      </a>
    </Button>
  );
}

function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Logo />
        <nav aria-label="Main" className="hidden gap-8 text-xs font-medium tracking-[0.2em] md:flex">
          {NAV.map((n) => (
            <a key={n} href={`#${n}`} aria-current={active === n ? "true" : undefined}
              className={`link-line uppercase pb-1 ${active === n ? "bg-[length:100%_1px]" : ""}`}>{n}</a>
          ))}
        </nav>
        <div className="hidden md:block"><Socials /></div>
        <Button variant="ghost" className="text-xs font-medium tracking-[0.2em] uppercase md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </Button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-5 border-t px-5 py-6 text-sm tracking-[0.2em] uppercase md:hidden">
          {NAV.map((n) => <a key={n} href={`#${n}`} onClick={() => setOpen(false)}>{n}</a>)}
          <Socials />
        </nav>
      )}
    </header>
  );
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Marquee() {
  const words = ["Full-Stack", "×", "Software Engineer", "×", "Cloud", "×", "AI Engineering", "+", "Full-Stack", "+", "Software Engineer", "+", "Cloud", "+", "AI Engineering", "×"];
  const row = words.map((w, i) => <span key={i} className={w.length === 1 ? "text-accent" : ""}>{w}</span>);
  return (
    <div className="overflow-hidden border-y py-3" aria-label="Full-Stack, Software Engineer, Cloud, AI Engineering">
      <div className="marquee flex w-max gap-6 whitespace-nowrap text-sm font-medium tracking-[0.25em] uppercase" aria-hidden>
        <div className="flex gap-6 pr-6">{row}</div>
        <div className="flex gap-6 pr-6">{row}</div>
      </div>
    </div>
  );
}

function SectionLabel({ n, children }: { n: string; children: string }) {
  return <p className="mb-10 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">({n}) {children}</p>;
}

function Index() {
  useReveal();
  useSoccerFavicon();
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Hero */}
        <section id="home" className="pt-28 pb-20">
          <h1 className="rise portfolio-name font-display font-extrabold uppercase leading-[0.95]">
            <span className="first-name block">Ankit</span>
            <span className="last-name block">Renduchintala</span>
          </h1>
          <div className="mt-8 -mx-5 md:-mx-10"><Marquee /></div>
          <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
            <div className="reveal relative mx-auto w-full max-w-sm md:mx-0">
              <div className="absolute -bottom-5 -left-5 h-full w-full bg-sand-deep" aria-hidden />
              <img src={profile} alt="Ankit Renduchintala on the Brooklyn Bridge" width={768} height={945} className="relative aspect-[4/5] w-full object-cover" />
            </div>
            <div className="reveal min-w-0">
              <p className="relative z-10 font-script text-5xl leading-none text-accent lg:text-7xl">Full-Stack Engineer</p>
              <p className="mt-6 max-w-md text-lg leading-relaxed">
                Senior Software Engineer with experience  in designing, building and releasing scalable full-stack systems.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-medium tracking-[0.25em] uppercase">
                <a href="#contact" className="link-line pb-1">Get in touch →</a>
                <Button asChild variant="ghost" className="gap-2 px-0 text-xs uppercase text-muted-foreground">
                  <a href={resume} download="Resume-AnkitRenduchintala.pdf">Resume <Download aria-hidden="true" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24">
          <SectionLabel n="01">Experience</SectionLabel>
          <ul className="border-t">
            {EXPERIENCE.map(([role, co, dates]) => (
              <li key={role + co} className="reveal group grid gap-1 border-b py-8 transition-colors hover:bg-sand-deep/40 md:grid-cols-[1fr_auto] md:items-baseline md:px-4">
                <div className="flex flex-wrap items-baseline gap-x-5">
                  <h3 className="font-display text-2xl font-bold transition-transform group-hover:translate-x-2 md:text-4xl">{role}</h3>
                  <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">{co}</span>
                </div>
                <span className="text-sm tracking-[0.2em]">{dates}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* About + Skills */}
        <section id="about" className="py-24">
          <SectionLabel n="02">About</SectionLabel>
          <div className="reveal grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <p className="font-display text-2xl font-bold leading-snug md:text-4xl">
              Ten years building and releasing scalable full-stack systems — from enterprise Java back ends to modern Angular and React front ends, shipped on cloud-native infrastructure.
            </p>
            <dl className="space-y-6 text-sm">
              <div><dt className="tracking-[0.25em] uppercase text-muted-foreground">Education</dt><dd className="mt-1 text-base">Master's in Computer Science, University of Toledo — 2018</dd></div>
              <div><dt className="tracking-[0.25em] uppercase text-muted-foreground">Currently</dt><dd className="mt-1 text-base">Learning AI Engineering</dd></div>
              <div><dt className="tracking-[0.25em] uppercase text-muted-foreground">Open to</dt><dd className="mt-1 text-base">Freelance full-stack design and development, including cloud services</dd></div>
            </dl>
          </div>
          <div className="mt-20 grid gap-12 md:grid-cols-2">
            {SKILLS.map(([title, items]) => (
              <div key={title} className="reveal">
                <h3 className="mb-4 text-xs font-medium tracking-[0.3em] uppercase">{title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((s) => <li key={s} className="rounded-full border border-primary/60 px-3 py-1 text-sm">{s}</li>)}
                </ul>
              </div>
            ))}
            <div className="reveal md:col-span-2 border-t pt-8">
              <p className="text-xs font-medium tracking-[0.3em] uppercase">Currently exploring</p>
              <p className="mt-4 font-script text-6xl leading-tight text-accent md:text-7xl">AI Engineering</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed">
                Learning RAG pipeline design with vector databases, building Agentic AI workflows, model evaluation harness, Guardrails and integrating LLM APIs into application backends through a personal project (upcoming).
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {AI_EXPLORATION.map((s) => <li key={s} className="rounded-full border border-primary/60 px-3 py-1 text-sm">{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="py-24">
          <SectionLabel n="03">Publications</SectionLabel>
          <ul className="border-t">
            {PUBLICATIONS.map((publication) => (
              <li key={publication.url} className="reveal border-b py-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs uppercase text-muted-foreground">
                  <span>{publication.type}</span>
                  <span>{publication.date}</span>
                </div>
                <h2 className="max-w-4xl font-display text-xl font-bold leading-snug md:text-3xl">
                  <a href={publication.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                    {publication.title}
                    <ArrowUpRight className="ml-2 inline h-5 w-5 align-baseline" aria-hidden="true" />
                  </a>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">{publication.venue}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <SectionLabel n="04">Contact</SectionLabel>
          <h2 className="reveal contact-heading font-display font-extrabold uppercase leading-[0.95]">Let's talk</h2>
          <ul className="reveal mt-14 border-t">
            {CONTACTS.map(({ label, value, href, external }) => (
              <li key={label} className="border-b">
                <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center justify-between gap-6 py-7 transition-colors hover:text-accent md:px-4">
                  <span className="min-w-0">
                    <span className="block text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">{label}</span>
                    <span className="mt-2 block font-display text-base font-bold break-words md:text-4xl">{value}</span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 opacity-40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 border-t px-5 py-8 text-xs tracking-[0.2em] uppercase md:px-10">
        <span>© 2026 Ankit Renduchintala</span>
        <Socials />
      </footer>
    </>
  );
}
