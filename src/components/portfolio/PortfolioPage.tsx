"use client";

import Image from "next/image";
import {
  ArrowUp,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Eye,
  Gamepad2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Network,
  Phone,
  Puzzle,
  Rocket,
  ScanText,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { LazyMotion, domAnimation, m, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  aboutCards,
  aiRoadmap,
  certifications,
  educationTimeline,
  experienceTimeline,
  heroBadges,
  navigation,
  profile,
  projects,
  techStack,
  type IconKey,
  type ProjectTheme,
} from "@/lib/portfolio-data";

const iconMap: Record<IconKey, LucideIcon> = {
  ai: BrainCircuit,
  vision: Eye,
  ocr: ScanText,
  ml: Cpu,
  fullstack: Code2,
  mvp: Rocket,
  problem: Puzzle,
  frontend: MonitorSmartphone,
  backend: Terminal,
  data: Database,
  security: ShieldCheck,
  game: Gamepad2,
};

const particles = [
  { left: "9%", top: "18%", delay: 0, size: 3 },
  { left: "18%", top: "70%", delay: 1.2, size: 2 },
  { left: "31%", top: "28%", delay: 2.4, size: 2 },
  { left: "46%", top: "82%", delay: 0.7, size: 3 },
  { left: "58%", top: "15%", delay: 1.9, size: 2 },
  { left: "72%", top: "74%", delay: 0.3, size: 3 },
  { left: "84%", top: "30%", delay: 1.5, size: 2 },
  { left: "92%", top: "62%", delay: 2.8, size: 2 },
];

const projectPalettes: Record<
  ProjectTheme,
  { primary: string; secondary: string; accent: string }
> = {
  ml: { primary: "#38bdf8", secondary: "#8b5cf6", accent: "#34d399" },
  landing: { primary: "#22d3ee", secondary: "#6366f1", accent: "#f8fafc" },
  commerce: { primary: "#60a5fa", secondary: "#a78bfa", accent: "#f59e0b" },
  fashion: { primary: "#a78bfa", secondary: "#38bdf8", accent: "#fb7185" },
  wine: { primary: "#c084fc", secondary: "#38bdf8", accent: "#fda4af" },
};

const fadeUp = {
  hidden: { opacity: 0.84, y: 18 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export function PortfolioPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen overflow-x-clip">
        <ScrollProgress />
        <ParticleField />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection />
          <AIShowcaseSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <BackToTop />
      </div>
    </LazyMotion>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.3,
  });

  return (
    <m.div
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-400"
      style={{ scaleX }}
    />
  );
}

function ParticleField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {particles.map((particle) => (
        <m.span
          key={`${particle.left}-${particle.top}`}
          aria-hidden="true"
          className="absolute rounded-full bg-sky-300/70 shadow-[0_0_18px_rgba(56,189,248,0.55)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [-8, 8, -8], opacity: [0.35, 0.9, 0.35] }}
          transition={{
            delay: particle.delay,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/10 bg-slate-950/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a href="#inicio" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-sky-300/30 bg-sky-300/10">
            <BrainCircuit className="h-5 w-5 text-sky-200" aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            Tomas Pastor Salazar
          </span>
          <span className="text-sm font-semibold text-white sm:hidden">TPS</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200 transition hover:border-sky-300/40 hover:bg-sky-300/10"
          >
            <Code2 className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="#contacto"
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-sky-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contacto
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <m.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 grid max-w-6xl gap-1 rounded-lg border border-white/10 bg-slate-950/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-3 py-3 text-sm text-slate-200"
            >
              {item.label}
            </a>
          ))}
        </m.div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden pb-16 pt-32"
    >
      <Image
        src="/images/ai-command-center.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-20 object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050712_0%,rgba(5,7,18,0.93)_34%,rgba(5,7,18,0.58)_66%,rgba(5,7,18,0.82)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#050712] to-transparent" />

      <m.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="section-shell"
      >
        <m.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-slate-950/60 px-4 py-2 text-sm text-sky-100 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-sky-200" aria-hidden="true" />
          AI Engineering Portfolio
        </m.div>

        <m.h1
          variants={fadeUp}
          className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </m.h1>

        <m.p
          variants={fadeUp}
          className="mt-5 max-w-3xl text-xl font-medium text-sky-100 sm:text-2xl"
        >
          {profile.title}
        </m.p>

        <m.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg"
        >
          {profile.summary}
        </m.p>

        <m.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
          {heroBadges.map((badge, index) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-md"
            >
              {index === 0 ? (
                <MapPin className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              ) : (
                <BadgeCheck
                  className="h-4 w-4 text-emerald-200"
                  aria-hidden="true"
                />
              )}
              {badge}
            </span>
          ))}
        </m.div>

        <m.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <PrimaryLink href="#proyectos" icon={ArrowUpRight}>
            Ver Proyectos
          </PrimaryLink>
          <SecondaryLink href={profile.cvUrl} icon={Download} download>
            Descargar CV
          </SecondaryLink>
          <SecondaryLink href={profile.githubUrl} icon={Code2} external>
            GitHub
          </SecondaryLink>
          <SecondaryLink href={profile.linkedInUrl} icon={Network} external>
            LinkedIn
          </SecondaryLink>
        </m.div>
      </m.div>
    </section>
  );
}

function AboutSection() {
  return (
    <Section id="sobre-mi" eyebrow="About me" title="IA aplicada con mentalidad de producto">
      <m.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {aboutCards.map((card) => {
          const Icon = iconMap[card.icon as IconKey];
          return (
            <m.article
              key={card.title}
              variants={fadeUp}
              className="glass-panel rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/30"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-md border border-sky-300/25 bg-sky-300/10">
                <Icon className="h-5 w-5 text-sky-200" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{card.body}</p>
            </m.article>
          );
        })}
      </m.div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experience"
      title="Experiencia académica y laboral convertida en productos web"
      intro="Un recorrido por proyectos reales y académicos donde combiné interfaces responsivas, datos, formularios funcionales y modelos predictivos."
    >
      <div className="grid gap-4">
        {experienceTimeline.map((item) => (
          <m.article
            key={`${item.date}-${item.title}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="glass-panel rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/35"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-2 rounded-md border border-sky-300/25 bg-sky-300/10 px-3 py-1.5 font-medium text-sky-100">
                  <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                  {item.type}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-slate-200">
                  <CalendarDays className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  {item.date}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-300">{item.role}</p>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
              </div>

              <div className="grid gap-3">
                {item.highlights.map((highlight) => (
                  <div
                    key={`${item.title}-${highlight}`}
                    className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                  >
                    <BadgeCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6 text-slate-200">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={`${item.title}-${technology}`}
                    className="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <SecondaryLink href={item.demo} icon={ExternalLink} external>
                  Demo
                </SecondaryLink>
                <SecondaryLink href={item.github} icon={Code2} external>
                  GitHub
                </SecondaryLink>
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </Section>
  );
}

function TechStackSection() {
  return (
    <Section
      id="stack"
      eyebrow="Tech stack"
      title="Herramientas para construir, medir y desplegar"
      intro="Un stack orientado a prototipos de IA, analítica, interfaces modernas y fundamentos de seguridad."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {techStack.map((stack) => {
          const Icon = iconMap[stack.icon as IconKey];
          return (
            <m.article
              key={stack.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="glass-panel rounded-lg p-5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-white/10">
                  <Icon className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-white">{stack.category}</h3>
              </div>
              <div className="mt-5 h-2 rounded-full bg-slate-800">
                <m.div
                  className="h-full rounded-full bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stack.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </m.article>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectsSection() {
  return (
    <Section
      id="proyectos"
      eyebrow="Featured projects"
      title="Proyectos que conectan datos, producto y web"
      intro="Cada tarjeta destaca el problema, el stack y el resultado visual del proyecto."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <m.article
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="glass-panel group rounded-lg p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-300/35"
          >
            <ProjectVisual
              theme={project.theme as ProjectTheme}
              title={project.title}
              index={index}
            />
            <div className="mt-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-100">
                  <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                  Live
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {project.metrics.map((metric) => (
                  <div
                    key={`${project.title}-${metric.label}`}
                    className="rounded-lg border border-white/10 bg-white/5 p-3"
                  >
                    <p className="text-xs text-slate-400">{metric.label}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <SecondaryLink href={project.demo} icon={ExternalLink} external>
                  Demo
                </SecondaryLink>
                <SecondaryLink href={project.github} icon={Code2} external>
                  GitHub
                </SecondaryLink>
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </Section>
  );
}

function ProjectVisual({
  theme,
  title,
  index,
}: {
  theme: ProjectTheme;
  title: string;
  index: number;
}) {
  const palette = projectPalettes[theme];
  const bars = [42, 72, 54, 88, 64];

  return (
    <div
      className="relative h-56 overflow-hidden rounded-lg border border-white/10 bg-slate-950"
      role="img"
      aria-label={`Mockup visual de ${title}`}
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `linear-gradient(135deg, ${palette.primary}26, transparent 42%), linear-gradient(315deg, ${palette.secondary}24, transparent 48%), #07101f`,
        }}
      />
      <div className="absolute left-4 right-4 top-4 rounded-lg border border-white/15 bg-slate-950/70 backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
          </div>
          <span className="h-2 w-28 rounded-full bg-white/15" />
        </div>
        <div className="grid gap-4 p-4 sm:grid-cols-[1fr_0.8fr]">
          <div>
            <span
              className="mb-3 block h-2 w-24 rounded-full"
              style={{ background: palette.primary }}
            />
            <span className="mb-2 block h-3 w-4/5 rounded-full bg-white/20" />
            <span className="mb-5 block h-3 w-3/5 rounded-full bg-white/15" />
            <div className="flex items-end gap-2">
              {bars.map((bar, barIndex) => (
                <span
                  key={`${title}-${bar}`}
                  className="w-6 rounded-t-md"
                  style={{
                    height: `${bar + index * 2}px`,
                    background:
                      barIndex % 2 === 0 ? palette.primary : palette.secondary,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/10 px-3 py-3"
              >
                <span
                  className="mb-2 block h-2 w-12 rounded-full"
                  style={{ background: item === 1 ? palette.accent : palette.primary }}
                />
                <span className="block h-2 w-full rounded-full bg-white/15" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute left-0 right-0 top-0 h-16 opacity-40"
        style={{
          background: `linear-gradient(180deg, ${palette.primary}66, transparent)`,
          animation: "scan 4.2s linear infinite",
        }}
      />
    </div>
  );
}

function AIShowcaseSection() {
  return (
    <Section
      id="ai-showcase"
      eyebrow="Artificial Intelligence & Computer Vision"
      title="Ruta de crecimiento en sistemas visuales inteligentes"
      intro="Una sección dedicada a los próximos proyectos de IA, visión computacional y Deep Learning."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-panel rounded-lg p-6"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-md bg-sky-300/15">
              <BrainCircuit className="h-6 w-6 text-sky-200" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-slate-400">Focus area</p>
              <h3 className="text-xl font-semibold text-white">
                Computer Vision Lab
              </h3>
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            {["YOLO", "Depth", "OCR", "Deep Learning"].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
              >
                <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-900 text-sm font-semibold text-cyan-200">
                  0{index + 1}
                </span>
                <span className="text-sm text-slate-200">{item}</span>
                <span className="ml-auto h-2 w-24 overflow-hidden rounded-full bg-slate-800">
                  <span
                    className="block h-full origin-left rounded-full bg-gradient-to-r from-sky-300 to-violet-400"
                    style={{ animation: "pulse-line 3.6s ease-in-out infinite" }}
                  />
                </span>
              </div>
            ))}
          </div>
        </m.div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-sky-300 via-violet-300 to-transparent sm:block" />
          <div className="grid gap-4">
            {aiRoadmap.map((item, index) => (
              <m.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="relative rounded-lg border border-white/10 bg-slate-950/70 p-5 backdrop-blur-md sm:ml-10"
              >
                <span className="absolute -left-[50px] top-5 hidden h-8 w-8 place-items-center rounded-md border border-sky-300/40 bg-slate-950 text-xs font-semibold text-sky-100 sm:grid">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.body}</p>
              </m.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function CertificationsSection() {
  return (
    <Section
      id="certificaciones"
      eyebrow="Certifications"
      title="Credenciales relevantes para IA, datos y seguridad"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((certification) => (
          <m.div
            key={certification}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex min-h-24 items-center gap-3 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-md transition hover:border-cyan-300/35 hover:bg-white/15"
          >
            <Award className="h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
            <span className="text-sm font-medium leading-6 text-slate-100">
              {certification}
            </span>
          </m.div>
        ))}
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section
      id="educacion"
      eyebrow="Education"
      title="Formación académica con alto rendimiento"
      intro="Universidad Peruana de Ciencias Aplicadas, carrera de Ciencias de la Computación."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-panel rounded-lg p-6"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-md bg-violet-300/15">
              <GraduationCap
                className="h-6 w-6 text-violet-200"
                aria-hidden="true"
              />
            </span>
            <div>
              <p className="text-sm text-slate-400">UPC</p>
              <h3 className="text-xl font-semibold text-white">
                Ciencias de la Computación
              </h3>
            </div>
          </div>
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-slate-300">Avance</span>
              <span className="font-semibold text-white">{profile.progress}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-800">
              <m.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                initial={{ width: 0 }}
                whileInView={{ width: profile.progress }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <MetricCard icon={Trophy} label="Actual" value={profile.currentGpa} />
            <MetricCard
              icon={BadgeCheck}
              label="Ponderado"
              value={profile.weightedGpa}
            />
            <MetricCard icon={Award} label="Ranking" value={profile.ranking} />
          </div>
        </m.div>

        <div className="grid gap-4">
          {educationTimeline.map((item, index) => (
            <m.article
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex gap-4 rounded-lg border border-white/10 bg-slate-950/70 p-5 backdrop-blur-md"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-sky-300/10 text-sm font-semibold text-sky-100">
                {index + 1}
              </span>
              <div>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-1 font-semibold text-white">{item.value}</p>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="section-shell py-20 sm:py-28">
      <m.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 rounded-lg border border-sky-300/20 bg-slate-950/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
      >
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-sm text-sky-100">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact section
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Hablemos de IA, visión computacional o un MVP web.
          </h2>
          <div className="mt-7 grid gap-3 text-sm text-slate-300">
            <ContactItem icon={Mail} label="Correo" value={profile.email} />
            <ContactItem
              icon={Mail}
              label="Correo alternativo"
              value={profile.alternateEmail}
            />
            <ContactItem icon={Phone} label="Teléfono" value={profile.phone} />
            <ContactItem icon={Code2} label="GitHub" value={profile.githubUrl} />
          </div>
        </div>
        <ContactForm />
      </m.div>

      <footer className="flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>2026 Tomas Pastor Salazar. AI Engineering Portfolio.</p>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex w-fit items-center gap-2 rounded-md text-slate-300 transition hover:text-white"
        >
          GitHub
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </footer>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Contacto portafolio - ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg bg-white/5 p-4">
      <label className="grid gap-2 text-sm text-slate-300">
        Nombre
        <input
          name="name"
          required
          minLength={2}
          className="focus-ring rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500"
          placeholder="Tu nombre"
        />
      </label>
      <label className="grid gap-2 text-sm text-slate-300">
        Correo
        <input
          name="email"
          type="email"
          required
          className="focus-ring rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500"
          placeholder="tu@email.com"
        />
      </label>
      <label className="grid gap-2 text-sm text-slate-300">
        Mensaje
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          className="focus-ring resize-none rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500"
          placeholder="Cuéntame sobre tu proyecto"
        />
      </label>
      <button
        type="submit"
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-300 px-5 py-3 font-semibold text-slate-950 transition hover:brightness-110"
      >
        Enviar mensaje
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      {status === "sent" ? (
        <p className="rounded-md border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">
          Mensaje preparado en tu cliente de correo.
        </p>
      ) : null}
    </form>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-shell py-20 sm:py-28">
      <m.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-10 max-w-3xl"
      >
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-sky-100">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-5xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            {intro}
          </p>
        ) : null}
      </m.div>
      {children}
    </section>
  );
}

function PrimaryLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-300 px-5 py-3 font-semibold text-slate-950 shadow-xl shadow-sky-950/25 transition hover:brightness-110"
    >
      {children}
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function SecondaryLink({
  href,
  icon: Icon,
  children,
  external,
  download,
}: {
  href: string;
  icon: LucideIcon;
  children: ReactNode;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
      className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 py-3 font-medium text-slate-100 backdrop-blur-md transition hover:border-sky-300/40 hover:bg-sky-300/10"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/10 p-4">
      <Icon className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  const isUrl = value.startsWith("http");
  const content = (
    <>
      <Icon className="h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
      <span className="text-slate-400">{label}</span>
      <span className="min-w-0 break-words text-slate-100">{value}</span>
    </>
  );

  if (isUrl) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="focus-ring grid grid-cols-[auto_110px_1fr] items-center gap-3 rounded-md border border-white/10 bg-white/5 p-3 transition hover:border-sky-300/30"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="grid grid-cols-[auto_110px_1fr] items-center gap-3 rounded-md border border-white/10 bg-white/5 p-3">
      {content}
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.a
      href="#inicio"
      aria-label="Volver arriba"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      className="focus-ring fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-md border border-white/15 bg-slate-950/85 text-sky-100 shadow-2xl backdrop-blur-md transition hover:bg-sky-300 hover:text-slate-950"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </m.a>
  );
}
