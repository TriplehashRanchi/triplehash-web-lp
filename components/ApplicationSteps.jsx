"use client";

import { motion } from "motion/react";
import { FileText, UserRound, CalendarDays, Phone } from "lucide-react";
import { SquareGridBanner } from "@/components/PainPoints";

const applicationSteps = [
  { icon: FileText, title: "Fill a 2-minute application", description: "Answer six short questions about your business." },
  { icon: UserRound, title: "Our founder reviews it", description: "We personally review your application within 24 hours. If we’re a good fit, you’ll get a calendar link." },
  { icon: CalendarDays, title: "Pick a 30-minute slot", description: "You’ll get a WhatsApp confirmation and a short video to watch before the call." },
  { icon: Phone, title: "Join the call and leave with your plan", description: "Hop on the call with your map and walk away with clarity." },
];

export default function ApplicationSteps() {
  return (
    <div className="w-full">
      <SquareGridBanner />
    <section aria-labelledby="application-steps-heading" className="w-full bg-[#f4f3ec] text-slate-900">
      <div className="w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-neutral-300 px-3 sm:px-8 py-8 sm:py-12">
        <motion.h2
          id="application-steps-heading"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="headline text-2xl sm:text-4xl font-semibold text-center leading-tight mb-9 sm:mb-12"
        >
          Here’s exactly what happens <span className="text-[#0a6c42]">when you click</span>
        </motion.h2>
        <div className="relative">
          <svg aria-hidden="true" className="hidden lg:block absolute top-0 left-[12.5%] w-3/4 h-16 overflow-visible text-[#0a6c42] pointer-events-none" viewBox="0 0 900 64" preserveAspectRatio="none">
            <path d="M0 32 C100 56 200 56 300 32 S500 8 600 32 S800 56 900 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 6" />
          </svg>
          <ol className="relative grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-6">
            {applicationSteps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === applicationSteps.length - 1;
              const isCall = idx === 3;
              return (
                <li
                  key={step.title}
                  className="relative flex flex-row items-stretch gap-4 text-left lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                >
                  {/* LEFT RAIL (mobile/tablet only) */}
                  <div className="relative flex w-16 shrink-0 flex-col items-center lg:hidden">
                    {/* continuous dotted vertical line behind the node */}
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute top-8 bottom-[-1.5rem] left-1/2 -translate-x-1/2 w-[3px] bg-[length:3px_10px] bg-repeat-y bg-[linear-gradient(to_bottom,#b9d3b4_50%,transparent_50%)]"
                      />
                    )}
                    <div className={`relative z-10 w-16 h-16 rounded-full border flex items-center justify-center ${isCall ? "bg-[#0b7548] border-emerald-600 text-white shadow-[0_5px_18px_rgba(11,117,72,0.18)]" : "bg-[#eaf2df] border-[#d4e4c7] text-[#0a6c42]"}`}>
                      <Icon aria-hidden="true" className="w-7 h-7" strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* ICON + CONNECTOR (desktop only) */}
                  <div className={`relative z-10 hidden w-16 h-16 rounded-full border lg:flex items-center justify-center ${isCall ? "bg-[#0b7548] border-emerald-600 text-white shadow-[0_5px_18px_rgba(11,117,72,0.18)]" : "bg-[#eaf2df] border-[#d4e4c7] text-[#0a6c42]"}`}>
                    <Icon aria-hidden="true" className="w-7 h-7" strokeWidth={1.7} />
                    {isCall && (
                      <svg aria-hidden="true" viewBox="-60 -60 120 120" className="absolute inset-0 w-full h-full scale-[2.1] rotate-[58deg] overflow-visible pointer-events-none text-[#0a6c42]">
                        <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                          <line x1="0" y1="-42" x2="0" y2="-56" />
                          <line x1="21" y1="-36.4" x2="28" y2="-48.5" />
                          <line x1="36.4" y1="-21" x2="48.5" y2="-28" />
                          <line x1="-21" y1="-36.4" x2="-28" y2="-48.5" />
                          <line x1="-36.4" y1="-21" x2="-48.5" y2="-28" />
                        </g>
                      </svg>
                    )}
                  </div>
                  <div aria-hidden="true" className="hidden lg:block h-8 w-px bg-[#b9d3b4] relative">
                    <span className="absolute z-20 top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#62a87b]" />
                  </div>

                  {/* CARD */}
                  <div className="relative isolate flex-1 w-full px-4 pt-7 pb-6 drop-shadow-[0_10px_13px_rgba(35,65,30,0.05)]">
                    <svg aria-hidden="true" viewBox="0 0 300 200" preserveAspectRatio="none" className="absolute -z-10 top-0 left-0 w-full h-full overflow-visible text-[#d5e2cd] lg:-top-6 lg:h-[calc(100%+24px)]">
                      <rect x="1" y="1" width="298" height="198" rx="18" ry="18" fill="#faf9f3" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="lg:hidden" />
                      <path d="M19 24 H116 C129 24 128 1 150 1 S171 24 184 24 H281 Q299 24 299 42 V181 Q299 199 281 199 H19 Q1 199 1 181 V42 Q1 24 19 24 Z" fill="#faf9f3" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round" className="hidden lg:block" />
                    </svg>
                    <span aria-hidden="true" className="text-sm font-bold text-[#577366] lg:absolute lg:-top-0.5 lg:left-1/2 lg:-translate-x-1/2">{String(idx + 1).padStart(2, "0")}</span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 mt-1 lg:mt-0">{step.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="flex flex-col items-center text-center pt-6 sm:pt-7">
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
            If we’re not a fit, we’ll tell you honestly and point you somewhere better.
          </p>
              <div className="mt-5 w-full sm:w-auto">
                <a
                  href="https://cal.hashboard.in/r/connect8394/business-systems"
                  className="group/btn inline-flex items-center justify-center rounded-[2px] typo-blockquote cursor-pointer text-center transition-colors min-h-[48px] w-full sm:w-auto px-4 sm:px-8 py-[12px] text-white bg-primary shadow-[0px_0px_0px_1px_#3a8363,0px_1px_2px_0px_rgba(0,0,0,0.64)] relative overflow-hidden font-bold tracking-wide text-sm sm:text-base"
                >
                  <span className="relative z-10">Apply for My Founder Freedom Call →</span>
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(74.61%_74.61%_at_50.39%_0%,rgba(255,255,255,0.32)_0%,rgba(191,191,191,0.24)_25%,rgba(128,128,128,0.16)_50%,rgba(0,0,0,0)_100%)] transition-opacity" />
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(74.61%_74.61%_at_50.39%_0%,rgba(0,0,0,0)_0%,rgba(128,128,128,0.1)_50%,rgba(255,255,255,0.2)_100%)] opacity-0 group-active/btn:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 pointer-events-none bg-[rgba(0,0,0,0.06)] opacity-0 group-hover/btn:opacity-100 group-active/btn:opacity-0 transition-opacity" />
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_1px_0.25px_0px_rgba(255,255,255,0.12),inset_-1px_1px_0.25px_0px_rgba(255,255,255,0.12)]" />
                  <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] left-[3px] top-[3px]" />
                  <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] right-[3px] top-[3px]" />
                  <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] left-[3px] bottom-[3px]" />
                  <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] right-[3px] bottom-[3px]" />
                </a>
              </div>
        </div>
      </div>
    </section>
      <SquareGridBanner />
    </div>
  );
}
