"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqData = [
  {
    question: "Is this just ChatGPT with a nice wrapper?",
    answer:
      "No. ChatGPT knows the internet. Your Founder Brain knows your business: your rules, your data and your past decisions, connected to the tools you use. It’s built from scratch for you, which is exactly why nobody else can sell it to you for ₹2,000 a month.",
  },
  {
    question: "Will my team actually use it?",
    answer:
      "Yes, because there’s nothing new to learn. It works inside WhatsApp, where your team already spends the whole day.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Your data stays on systems you own and control, with role-based access.",
  },
  {
    question: "What if the AI gives a wrong answer?",
    answer:
      " In week 3, you review its answers before your team relies on them. Anything it isn’t sure about comes to you. You set the limits, and you can change them anytime.",
  },
  {
    question: "How much of my time will this take?",
    answer:
      " A few hours in week 1, about 2-3 hours in weeks 2 and 3, and very little after that. That’s the point.",
  },
  {
    question: "What does it cost?",
    answer:
      " Every build is custom, so we share an exact quote on the call once we understand your business. If it doesn’t make financial sense for you, we’ll tell you.",
  },
  {
    question: "My business is different. Will this work for me?",
    answer:
      "That’s exactly why it’s custom. We don’t fit your business into our software. We build the software around your business.",
  },
  {
    question: "What tools can it connect with?",
    answer:
      " Whatever you use: WhatsApp, Tally, Zoho, Google Sheets, Excel, CRMs, ERPs and more. If your team uses it, we can connect it.",
  },
  {
    question: "What happens after 30 days?",
    answer:
      "After 30 days you get a fully engineered and robust AI system that takes care of your business while you sit back and relax.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0); // Default open first FAQ item

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Outer Framed Container: Left & Right Vertical Screen Borders Aligning across all sections */}
      <div className="relative z-10 pt-8 sm:pt-12 pb-12 sm:pb-20 w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-slate-200 px-3 sm:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="max-w-3xl text-center flex flex-col items-center mb-8 sm:mb-10 px-2 sm:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline text-2xl sm:text-4xl font-semibold text-slate-900 leading-tight"
          >
            Frequently Asked <span className="text-[#0a6c42]">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-md sm:text-lg text-[#70707b] font-medium max-w-xl leading-tight"
          >
            Everything you need to know about how we partner with your business.
          </motion.p>
        </div>

        {/* FAQ Accordion List - Clean White Border Boxes matching reference image */}
        <div className="w-full max-w-4xl flex flex-col gap-3 sm:gap-3.5 mb-10 sm:mb-14">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="w-full bg-white border border-slate-200 transition-colors overflow-hidden group"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left gap-3 sm:gap-4 transition-colors"
                >
                  <h3 className="text-sm sm:text-lg font-medium text-slate-800 leading-snug">
                    {item.question}
                  </h3>
                  <div className="text-slate-400 shrink-0 transition-transform duration-200 cursor-pointer">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-slate-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-base text-slate-600 font-medium">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Primary CTA Button */}
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
