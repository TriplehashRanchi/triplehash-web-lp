"use client";

import { motion } from "motion/react";
import { MessageSquareText, Brain, Zap, User } from "lucide-react";

const processSteps = [
  {
    number: "1",
    title: "Extract.",
    description: "We sit with you and map every repeated question, approval and decision your team brings to you. We pull your rules out of your head, your WhatsApp history, your Excel sheets and your Tally data.",
  },
  {
    number: "2",
    title: "Encode.",
    description: <>We build a custom AI trained on <em>your</em> rules, <em>your</em> data and the way <em>you</em> decide. Not generic AI. Yours.</>,
  },
  {
    number: "3",
    title: "Embed.",
    description: "We plug it into WhatsApp, Tally, Google Sheets, your CRM, or whatever your team already uses. No new app. No training headache.",
  },
  {
    number: "4",
    title: "Escalate.",
    description: "Routine questions get answered instantly, your way. Only genuinely new decisions reach you, with a short summary and a suggested answer. You just say yes or no.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden border-t   border-slate-200">
      {/* Outer Framed Container: Left & Right Vertical Screen Borders Aligning across all sections */}
      <div className="relative pt-8 sm:pt-12 pb-10 sm:pb-16 z-10 w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-slate-200 px-3 sm:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="max-w-3xl text-center flex flex-col items-center mb-8 sm:mb-10 px-2 sm:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline text-2xl sm:text-4xl font-semibold text-slate-900 leading-tight"
          >
            Introducing the <br className="hidden sm:inline" />
            <span className="text-[#0a6c42]">Founder Brain System</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-md sm:text-lg text-[#70707b] font-medium max-w-2xl leading-tight"
          >
            Instead of giving your team another tool to learn, we take what’s in
            your head and put it where your team already works.
          </motion.p>
        </div>

        {/* Process Subheader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full max-w-3xl text-center mb-8 sm:mb-10 flex flex-col items-center  "
        >
          <h3 className="text-xl sm:text-3xl font-semibold text-slate-900 leading-tight">
            It has four parts.
          </h3>
        </motion.div>

        {/* 4 Cards Wall - All 4 Cards in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full mb-8 sm:mb-10 border-l border-t border-slate-200">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-5 sm:p-6 border-r border-b border-slate-200 flex flex-col justify-between transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Dashed Border Number Badge */}
                  <div className="w-10 h-10 border border-dashed border-slate-300 flex items-center justify-center font-bold text-[#0a6c42] text-base rounded-none shrink-0">
                    {step.number}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h4>

                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>


            </motion.div>
          ))}
        </div>

        <div className="w-full border border-slate-200 bg-[#f4f3ec] p-5 sm:p-8">
          <p className="text-center text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-8 sm:mb-12">
            Your team stops asking you. <span className="text-[#0a6c42]">They ask your Founder Brain.</span>
          </p>

          <div className="flex flex-col items-stretch gap-5 lg:flex-row lg:items-center lg:justify-center lg:gap-0">
            {/* LEFT: Team question card */}
            <div className="lg:w-[260px] lg:shrink-0">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_18px_rgba(35,65,30,0.05)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eaf2df] text-[#0a6c42]">
                  <MessageSquareText aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-base font-bold text-slate-900">Team question</p>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                    Any question, approval or decision from your team.
                  </p>
                </div>
              </div>
            </div>

            {/* CONNECTOR: left -> brain */}
            <div className="flex items-center justify-center lg:w-16 lg:shrink-0">
              {/* mobile: straight down arrow */}
              <svg aria-hidden="true" viewBox="0 0 24 44" className="h-10 w-7 text-[#0a6c42] lg:hidden" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4 V34" />
                <path d="M5 28 L12 36 L19 28" />
              </svg>
              {/* desktop: straight right arrow */}
              <svg aria-hidden="true" viewBox="0 0 64 24" className="hidden w-full text-[#0a6c42] lg:block" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12 H54" />
                <path d="M46 5 L56 12 L46 19" />
              </svg>
            </div>

            {/* CENTER: Founder Brain box with ring halo */}
            <div className="relative flex items-center justify-center lg:w-[280px] lg:shrink-0">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="absolute h-[190px] w-[190px] rounded-full border border-[#0a6c42]/8 sm:h-[240px] sm:w-[240px]" />
                <span className="absolute h-[145px] w-[145px] rounded-full border border-[#0a6c42]/12 sm:h-[185px] sm:w-[185px]" />
                <span className="absolute h-[105px] w-[105px] rounded-full border border-[#0a6c42]/16 sm:h-[135px] sm:w-[135px]" />
              </div>
              <div className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl border border-[#0a6c42] bg-[#042717] px-6 py-5">
                <Brain aria-hidden="true" className="h-7 w-7 text-emerald-200" strokeWidth={1.6} />
                <span className="text-lg sm:text-xl font-extrabold text-white">Founder Brain</span>
              </div>
            </div>

            {/* CONNECTOR: brain -> right cards (branching) */}
            <div className="flex items-center justify-center lg:w-16 lg:shrink-0">
              {/* mobile: straight down arrow */}
              <svg aria-hidden="true" viewBox="0 0 24 44" className="h-10 w-7 text-[#0a6c42] lg:hidden" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4 V34" />
                <path d="M5 28 L12 36 L19 28" />
              </svg>
              {/* desktop: two curved branching arrows */}
              <svg aria-hidden="true" viewBox="0 0 64 120" className="hidden h-28 w-full text-[#0a6c42] lg:block" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* upper branch */}
                <path d="M4 60 C22 60 34 40 52 26" />
                <path d="M44 26 L55 24 L52 35" />
                {/* lower branch */}
                <path d="M4 60 C22 60 34 80 52 94" />
                <path d="M52 85 L55 96 L44 94" />
              </svg>
            </div>

            {/* RIGHT: two outcome cards */}
            <div className="flex flex-col gap-4 lg:w-[320px] lg:shrink-0">
              <div className="flex items-start gap-4 rounded-2xl border border-[#0a6c42]/30 bg-[#eef6ee] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dcebdc] text-[#0a6c42]">
                  <Zap aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-base font-bold text-slate-900">Most answered instantly</p>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">Your rules. Your way.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <User aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-base font-bold text-slate-900">Only new decisions reach you</p>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">With a summary and a suggested answer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
