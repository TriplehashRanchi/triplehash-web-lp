"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: "1",
    title: "Business Audit",
    description:
      "We understand how your sales, team, operations, reporting and follow-ups currently work.",
    image: "/process1.png",
  },
  {
    number: "2",
    title: "Opportunity Mapping",
    description:
      "We identify where time is being wasted, where things get missed, and what should be systemised, automated or rebuilt.",
    image: "/process2.png",
  },
  {
    number: "3",
    title: "System Plan",
    description:
      "We create a clear roadmap of what to fix first, what can wait, and what will create the biggest operational impact.",
    image: "/process3.png",
  },
  {
    number: "4",
    title: "Build & Integrate",
    description:
      "Our engineering team builds the required automations, workflows, integrations, dashboards or custom tools.",
    image: "/process4.png",
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
            We Start With Your Business. <br className="hidden sm:inline" />
            <span className="text-[#0a6c42]">Then Build Around It.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-md sm:text-lg text-[#70707b] font-medium max-w-2xl leading-tight"
          >
            Every business has different bottlenecks, workflows and levels of
            complexity. That’s why we don’t start with a fixed tool stack or a
            pre-made automation package.
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
            Here’s How The 1-to-1 Process Works
          </h3>
        </motion.div>

        {/* 4 Cards Wall - All 4 Cards in One Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full mb-10 sm:mb-16 border-l border-t border-slate-200">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-5 pb-0 border-r border-b border-slate-200 flex flex-col justify-between transition-colors group"
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

                <p className="text-md sm:text-base text-slate-600   font-medium">
                  {step.description}
                </p>
              </div>

              {/* Visual Card Image Box */}
              <div className="w-full h-44 sm:h-55 p-3 flex items-center justify-center relative overflow-hidden group rounded-none mt-auto">
                <img
                  src={step.image || "/process-audit.jpg"}
                  alt={step.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center w-full sm:w-auto px-2 sm:px-0"
        >
          <a
            href="https://cal.hashboard.in/r/connect8394/business-systems"
            className="group/btn inline-flex items-center justify-center rounded-[2px] typo-blockquote cursor-pointer whitespace-nowrap transition-colors h-[48px] w-full sm:w-auto px-4 sm:px-8 py-[12px] text-white bg-primary shadow-[0px_0px_0px_1px_#3a8363,0px_1px_2px_0px_rgba(0,0,0,0.64)] relative overflow-hidden font-bold tracking-wider uppercase text-xs sm:text-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>BOOK YOUR 1:1 CALL NOW</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </span>
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(74.61%_74.61%_at_50.39%_0%,rgba(255,255,255,0.32)_0%,rgba(191,191,191,0.24)_25%,rgba(128,128,128,0.16)_50%,rgba(0,0,0,0)_100%)] transition-opacity" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(74.61%_74.61%_at_50.39%_0%,rgba(0,0,0,0)_0%,rgba(128,128,128,0.1)_50%,rgba(255,255,255,0.2)_100%)] opacity-0 group-active/btn:opacity-100 transition-opacity" />
            <div className="absolute inset-0 pointer-events-none bg-[rgba(0,0,0,0.06)] opacity-0 group-hover/btn:opacity-100 group-active/btn:opacity-0 transition-opacity" />
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_1px_0.25px_0px_rgba(255,255,255,0.12),inset_-1px_1px_0.25px_0px_rgba(255,255,255,0.12)]" />
            <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] left-[3px] top-[3px]" />
            <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] right-[3px] top-[3px]" />
            <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] left-[3px] bottom-[3px]" />
            <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] right-[3px] bottom-[3px]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
