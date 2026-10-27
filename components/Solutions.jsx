"use client";

import { motion } from "motion/react";
const checklistItems = [
  // 2-line rows (Left & Right both 2 lines)
  "Your team asks you to approve things you’ve already decided ten times before.",
  "You’ve heard “Sir, ye kaise karna hai?” so often you could answer it in your sleep.",
  "You hired a manager to take things off your plate, and somehow your plate got fuller.",
  "You’ve quietly thought, “If that one person quits tomorrow, we’re in serious trouble.”",
  "You’re paying for at least one software your team stopped opening after the first month.",
  "You make big decisions on gut feel because getting the data takes longer than making the decision.",
  "You know AI could fix part of this, but every “AI expert” you’ve met was selling ChatGPT with extra steps.",
  "You’ve told yourself, “I’ll fix this once things slow down.” Things haven’t slowed down since 2021.",

  // 3-line row (Left & Right both 3 lines)
  "When you need one simple number (this month’s margin, pending payments, your best-selling product), it takes two days and three reminders.",
  "Revenue has been stuck in the same range for two years, and deep down you know the bottleneck isn’t the market. It’s your calendar.",

  // 1-line row (Left & Right both 1 line)
  "You’re tracking 10+ work WhatsApp groups daily.",
  "Your last vacation had more calls than photos.",

  // Final 1-line item (spans full width across both columns)
  "Your family has stopped asking, “Are you free this Sunday?”"
];

export default function Solutions() {
  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Outer Framed Container: Left & Right Vertical Screen Borders Aligning with Hero, Logo Marquee & Pain Points */}
      <div className="relative z-10 pt-8 sm:pt-10 pb-10 sm:pb-16 w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-slate-200 px-3 sm:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="max-w-3xl text-center flex flex-col items-center mb-7 sm:mb-9">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline text-2xl sm:text-4xl font-semibold text-slate-900 leading-tight"
          >
            Be honest. <br className="hidden sm:inline" />
            <span className="text-[#0a6c42]">How many of these happened this week?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-md sm:text-lg text-[#70707b] font-medium max-w-2xl leading-tight"
          >
            Tick every box that sounds like you. Nobody’s watching.
          </motion.p>
        </div>

        <fieldset className="grid grid-cols-1 md:grid-cols-2 w-full min-w-0 mb-8 sm:mb-10 border-l border-t border-slate-200">
          <legend className="sr-only">Tick every box that sounds like you</legend>
          {checklistItems.map((item, idx) => (
            <label
              key={item}
              className="relative flex items-start gap-3 p-4 sm:p-5 border-r border-b border-slate-200 cursor-pointer transition-colors hover:bg-[#f4f3ec] has-[:checked]:bg-[#f0f6f1] md:last:col-span-2"
            >
              <input
                type="checkbox"
                name="founder-checklist"
                value={idx + 1}
                className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#0a6c42] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a6c42]"
              />
              <span className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                {item}
              </span>
            </label>
          ))}
        </fieldset>

        {/* Bottom Takeaway Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl p-6 sm:p-10 border border-slate-200 text-center relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-snug max-w-3xl">
              <span className="text-[#0a6c42]">Ticked 3 or more?</span> The problem
              isn’t your team, and it isn’t effort.
            </p>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl">
              It’s that every answer your business needs lives in exactly one
              place: your head. Until that changes, you could hire 50 more people
              and you’d still be the one they all call.
            </p>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl">
              <strong className="font-bold text-[#0a6c42]">Here’s the good news:</strong>{" "}
              this is the single most fixable problem in your company. And it
              doesn’t take a new hire, a new tool your team will ignore, or another
              year of “next quarter.”
            </p>
            <div className="mt-6 sm:mt-8 w-full sm:w-auto">
              <a
                href="https://cal.hashboard.in/r/connect8394/business-systems"
                className="group/btn inline-flex items-center justify-center rounded-[2px] typo-blockquote cursor-pointer text-center transition-colors min-h-[48px] w-full sm:w-auto px-4 sm:px-8 py-[12px] text-white bg-primary shadow-[0px_0px_0px_1px_#3a8363,0px_1px_2px_0px_rgba(0,0,0,0.64)] relative overflow-hidden font-bold tracking-wide text-sm sm:text-base"
              >
                <span className="relative z-10">Get My Business Off My Phone →</span>
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
            <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-lg">
              Free 30-minute consultation. Only for founders doing ₹1Cr+ with a
              team of 5 or more.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
