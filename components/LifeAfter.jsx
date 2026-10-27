"use client";

import { motion } from "motion/react";
import { Sunrise, Users, CalendarCheck, BarChart3, Database, TrendingUp } from "lucide-react";

const outcomes = [
  { icon: Sunrise, text: "Your morning starts with a two-minute brief, not 46 messages." },
  { icon: Users, text: "Your team solves problems the way you would, without asking you first." },
  { icon: CalendarCheck, text: "You take a full Sunday off. Then a full week." },
  { icon: BarChart3, text: "You make big decisions on real numbers, not gut feel." },
  { icon: Database, text: "If your best employee resigns, you stay calm. The knowledge stays with the business." },
  { icon: TrendingUp, text: "You finally spend your time on growth instead of approvals." },
];

export default function LifeAfter() {
  return (
    <section aria-labelledby="life-after-heading" className="relative w-full bg-white text-slate-900 border-b border-slate-200">
      <div className="w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-slate-200 px-3 sm:px-8 py-8 sm:py-12">
        <motion.h2
          id="life-after-heading"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="headline text-2xl sm:text-4xl font-semibold text-center leading-tight mb-8 sm:mb-10"
        >
          Your life, <span className="text-[#0a6c42]">30 days from now</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-slate-200">
          {outcomes.map((outcome, idx) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={outcome.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="p-5 sm:p-6 border-r border-b border-slate-200"
              >
                <div className="w-10 h-10 border border-dashed border-slate-300 text-[#0a6c42] flex items-center justify-center mb-4">
                  <Icon aria-hidden="true" className="w-5 h-5" />
                </div>
                <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed">{outcome.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="relative z-10 border border-t-0 border-slate-200 bg-[#f4f3ec] px-4 sm:px-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
          <div className="max-w-xl text-center md:text-left self-center py-4 sm:py-5">
            <p className="text-lg sm:text-2xl md:text-[1.65rem] font-extrabold text-slate-900 leading-snug">
              And when you come home, <br className="hidden sm:inline" />
              <span className="text-[#0a6c42]">you’re actually home.</span>
            </p>
          </div>

          <div className="relative z-20 shrink-0 flex items-end justify-center self-center md:self-end -mt-2.5 sm:-mt-3 md:-mt-3.5">
            <img
              src="/come-home-v4.webp"
              alt="A founder relaxing peacefully on sofa at home"
              className="h-28 sm:h-34 md:h-40 w-auto object-contain drop-shadow-md select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
