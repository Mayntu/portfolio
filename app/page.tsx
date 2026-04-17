"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";
import { portfolioConfig } from "@/src/config";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.22H5.67V18H8.34V10.22ZM7 6A1.55 1.55 0 0 0 5.46 7.55A1.54 1.54 0 0 0 7 9.09A1.54 1.54 0 0 0 8.54 7.55A1.55 1.55 0 0 0 7 6ZM18.33 13.54C18.33 11.18 17.07 10.08 15.39 10.08C14.04 10.08 13.43 10.82 13.09 11.34V10.22H10.42C10.45 10.96 10.42 18 10.42 18H13.09V13.66C13.09 13.43 13.11 13.2 13.17 13.04C13.35 12.58 13.76 12.11 14.44 12.11C15.33 12.11 15.69 12.8 15.69 13.82V18H18.33V13.54Z" />
  </svg>
);

const socialIconMap = {
  WhatsApp: MessageCircle,
  Telegram: Send,
  LinkedIn: LinkedInIcon,
} as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HomePage() {
  return (
    <main
      className={`${jetbrainsMono.variable} min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-400/30 selection:text-emerald-100`}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(22,163,74,0.1),transparent_38%)]" />

      <header className="sticky top-0 z-20 border-b border-emerald-500/10 bg-zinc-950/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <span className="font-(family-name:var(--font-jetbrains)) text-sm text-emerald-300/90">
            {portfolioConfig.name}
          </span>

          <div className="flex items-center gap-2">
            {portfolioConfig.socialLinks
              .filter(({ label }) => label !== "Mail")
              .map(({ label, href }) => {
              const Icon = socialIconMap[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-md border border-zinc-800 bg-zinc-900/50 p-2 text-zinc-300 transition hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-emerald-300 hover:shadow-[0_0_18px_rgba(16,185,129,0.2)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}

            <p className="select-all rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 font-(family-name:var(--font-jetbrains)) text-xs text-zinc-300">
              daniilkhusnullin@gmail.com
            </p>

            <a
              href={portfolioConfig.cvHref}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:-translate-y-0.5 hover:bg-emerald-500/20 hover:shadow-[0_0_24px_rgba(16,185,129,0.25)]"
            >
              CV
            </a>
          </div>
        </nav>
      </header>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14 lg:px-8"
      >
        <motion.div variants={itemVariants} className="max-w-3xl">
          <p className="font-(family-name:var(--font-jetbrains)) text-sm text-emerald-300">
            Engineering Cases
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-zinc-50 md:text-5xl">
            {portfolioConfig.headline}
          </h1>
          <p className="mt-5 text-zinc-400">{portfolioConfig.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {portfolioConfig.roleRotation.map((role) => (
              <span
                key={role}
                className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-(family-name:var(--font-jetbrains)) text-xs text-emerald-200"
              >
                {role}
              </span>
            ))}
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
              {portfolioConfig.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-5 sm:grid-cols-2"
        >
          {portfolioConfig.cases.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_8px_32px_rgba(16,185,129,0.18)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-(family-name:var(--font-jetbrains)) text-xs text-emerald-300">
                  {project.tag}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-zinc-100">{project.title}</h2>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.architecture}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="rounded-md border border-zinc-700 bg-zinc-800/70 px-2.5 py-1 text-xs text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 border-t border-zinc-800 pt-4">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-300/80">Impact</p>
                <ul className="mt-2 list-disc pl-4 text-sm text-zinc-300">
                  <li>{project.impact}</li>
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}
