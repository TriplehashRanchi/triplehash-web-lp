"use client";

import { motion } from "motion/react";
import { UserCheck, Repeat, Zap, Code2, Layers } from "lucide-react";

const layersData = [
  {
    number: "1",
    title: "What Should Stay Human",
    description:
      "Relationships, leadership, judgement and important decisions.",
    icon: UserCheck,
    tag: "HUMAN FIRST",
  },
  {
    number: "2",
    title: "What Should Become A System",
    description: "Processes that should happen the same way every single time.",
    icon: Repeat,
    tag: "SYSTEMISE",
  },
  {
    number: "3",
    title: "What Should Be Automated",
    description:
      "Follow-ups, reminders, reporting, handovers and repetitive daily work.",
    icon: Zap,
    tag: "AUTOMATE",
  },
  {
    number: "4",
    title: "What Needs Engineering",
    description:
      "Custom workflows, integrations, dashboards and internal tools when ready-made software isn’t enough.",
    icon: Code2,
    tag: "ENGINEER",
  },
];

// Generate dense pixel grid matrix matching reference image (14 rows x 220 columns = 3,080 squares)
const gridRows = 15;
const gridCols = 221;
const stepX = 5.2;
const stepY = 5.8;

const pixelGrid = [];
for (let r = 0; r < gridRows; r++) {
  for (let c = 0; c < gridCols; c++) {
    const val = (r * 19 + c * 37 + (r % 4) * 9 + (c % 7) * 17) % 100;

    let opacity = "0.08";
    let fill = "#e2e8f0";

    if (val > 72) {
      opacity = "0.38";
      fill = "#ffffff";
    } else if (val > 35) {
      opacity = "0.20";
      fill = "#cbd5e1";
    }

    pixelGrid.push({
      x: (3 + c * stepX).toFixed(1),
      y: (3 + r * stepY).toFixed(1),
      fill,
      opacity,
    });
  }
}

function SquareGridBanner() {
  return (
    <div className="w-full bg-[#042717] border-t border-b border-white/10">
      <div className="w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-white/10 h-[50px] sm:h-[80px] relative overflow-hidden flex items-center justify-center">
        <svg
          className="w-full h-full pointer-events-none"
          viewBox="0 0 1152 88"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {pixelGrid.map((sq, idx) => (
            <rect
              key={idx}
              x={sq.x}
              y={sq.y}
              width="2.2"
              height="2.2"
              fill={sq.fill}
              opacity={sq.opacity}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

export default function FourLayers() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Square Pixel Grid Banner */}
      <SquareGridBanner />

      <section
        className="relative w-full bg-[#042717] text-white overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, #004421 0%, #042717 100%)",
        }}
      >
        {/* Outer Framed Container: Left & Right Vertical Screen Borders Aligning across all sections */}
        <div className="relative z-10 pt-8 sm:pt-12 pb-10 sm:pb-16 w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-white/10 px-3 sm:px-8 flex flex-col items-center">
          {/* Section Pre-badge & Header */}
          <div className="max-w-4xl text-center flex flex-col items-center mb-8 sm:mb-10 px-2 sm:px-0">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline text-2xl sm:text-4xl font-semibold text-white leading-tight"
            >
              The Better Question Is: <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Your Business Shouldn’t Stop Because One Person Forgot To Follow
                Up.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-md sm:text-lg text-[#FFFFFFB3] max-w-3xl leading-tight font-medium"
            >
              Not every process should be automated. Not every decision should
              be handed to AI. And not every problem needs another software
              tool.
              <br className="hidden sm:inline" />
              <span className="text-white font-medium">
                {" "}
                The real opportunity is finding where your business is losing
                time, consistency, visibility or money because too much still
                depends on manual effort.
              </span>
            </motion.p>
          </div>

          {/* Transition Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full max-w-4xl text-center mb-8 sm:mb-12 flex flex-col items-center px-2 sm:px-0"
          >
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2 font-bold">
              <Layers className="w-4 h-4" />
              <span>That’s Where We Start</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              We Look At Your Business In 4 Layers
            </h3>
          </motion.div>

          {/* 4 Layers Wall - Single Row 4-Column Zero Gap Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full mb-10 sm:mb-16 border-l border-t border-emerald-500/20">
            {layersData.map((layer, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative p-5 sm:p-6 border-r border-b border-emerald-500/20 flex flex-col justify-between group hover:bg-[#234F36] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 border border-dashed border-white/40 bg-[#234F36] flex items-center justify-center font-bold text-white text-base sm:text-lg rounded-none">
                        {layer.number}
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-2xl font-bold text-white mb-3 leading-snug">
                      {layer.title}
                    </h4>

                    <p className="text-md sm:text-base text-[#FFFFFF99]  font-medium">
                      {layer.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Conclusion / Takeaway Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-4xl p-6 sm:p-10 border border-emerald-500/20 text-center relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="text-emerald-400 text-xs sm:text-base font-mono font-bold tracking-wider sm:tracking-widest uppercase mb-3">
                AI Is Only One Part Of The Solution.
              </h4>
              <p className="text-sm sm:text-2xl font-bold text-white leading-relaxed max-w-3xl">
                The goal is not to make your business “more AI-powered.”
                <br className="hidden sm:inline" />
                <span className="text-emerald-300">
                  The goal is to make it less dependent on memory, manual
                  follow-ups, repeated coordination and you.
                </span>
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

      {/* Bottom Square Pixel Grid Banner */}
      <SquareGridBanner />
    </div>
  );
}
