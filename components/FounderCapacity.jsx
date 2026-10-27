"use client";

import { motion } from "motion/react";
import { SquareGridBanner } from "@/components/FourLayers";

export default function FounderCapacity() {
  return (
    <div className="w-full">
      <SquareGridBanner />
    <section
      aria-labelledby="founder-capacity-heading"
      className="relative w-full bg-[#042717] text-white border-y border-white/10"
      style={{ background: "radial-gradient(ellipse at center, #004421 0%, #042717 100%)" }}
    >
      <div className="w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-white/10 px-3 sm:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h2 id="founder-capacity-heading" className="headline text-2xl sm:text-4xl font-semibold leading-tight">
              Why we only take <br className="hidden sm:inline" /><span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-200 bg-clip-text text-transparent">2 founders a month</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/70 font-medium leading-relaxed">
              Every Founder Brain is built from scratch around one founder’s way
              of thinking. Our senior team works closely with you for 30 days.
            </p>
          </div>
          <div className="w-full max-w-4xl p-6 sm:p-10 border border-emerald-500/20 flex flex-col items-center">
            <p className="text-xl sm:text-2xl font-bold leading-snug">
              We can do that properly for <span className="text-emerald-300">2 founders a month.</span> Not 20.
            </p>
            <p className="mt-5 text-base text-white/70 font-medium leading-relaxed">
              If this month’s two slots are taken, your build starts next month.
            </p>
              <div className="mt-6 sm:mt-8 w-full sm:w-auto">
                <a
                  href="https://cal.hashboard.in/r/connect8394/business-systems"
                  className="group/btn inline-flex items-center justify-center rounded-[2px] typo-blockquote cursor-pointer whitespace-nowrap transition-colors h-[48px] w-full sm:w-auto px-4 sm:px-8 py-[12px] text-white bg-primary shadow-[0px_0px_0px_1px_#3a8363,0px_1px_2px_0px_rgba(0,0,0,0.64)] relative overflow-hidden font-bold tracking-wider uppercase text-xs sm:text-sm"
                >
                  <span className="relative z-10">BOOK YOUR 1:1 CALL NOW</span>
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
        </motion.div>
      </div>
    </section>
      <SquareGridBanner />
    </div>
  );
}
