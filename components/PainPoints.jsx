"use client";

import { motion } from "motion/react";
import { Tag, BadgePercent, Handshake, MessageCircle } from "lucide-react";

const painPointsData = [
  { icon: Tag, title: "How to price this order." },
  { icon: BadgePercent, title: "Whether to give that discount." },
  { icon: Handshake, title: "Which vendor to trust." },
  { icon: MessageCircle, title: "What to say to an angry customer." },
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
    
    let opacity = "0.15";
    let fill = "#cbd5e1";
    
    if (val > 72) {
      opacity = "0.50";
      fill = "#94a3b8";
    } else if (val > 35) {
      opacity = "0.30";
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

export function SquareGridBanner() {
  return (
    <div className="w-full bg-[#f4f3ec] border-t border-b border-neutral-300">
      <div className="w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-neutral-300 h-[50px] sm:h-[80px] relative overflow-hidden flex items-center justify-center">
        <svg className="w-full h-full pointer-events-none" viewBox="0 0 1152 88" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
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

export default function PainPoints() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Square Pixel Grid Banner */}
      <SquareGridBanner />

      <section className="relative w-full bg-[#f4f3ec] text-slate-900 overflow-hidden">
        {/* Outer Framed Container: Left & Right Vertical Screen Borders Aligning with Hero & Logo Marquee */}
        <div className="relative py-8 sm:py-10 pb-10 sm:pb-12 z-10 w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-neutral-300 px-3 sm:px-8 flex flex-col items-center">
          {/* Section Header */}
          <div className="max-w-3xl text-center flex flex-col items-center mb-8 sm:mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline text-2xl sm:text-4xl font-semibold text-slate-900 leading-tight"
            >
              Your business doesn’t have a people problem. <br className="hidden sm:inline" />
              <span className="text-[#0a6c42]">It has a “one brain” problem.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-5 text-md sm:text-lg text-[#70707b] font-medium max-w-2xl leading-tight"
            >
              You have a team. Some of them are genuinely good. And still,
              everything ends up on your phone. Why?
            </motion.p>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
              Because the answers your business needs every day live in exactly
              one place: <strong className="text-[#0a6c42] font-extrabold">YOUR HEAD</strong>.
            </p>
          </div>

          <div className="one-brain-diagram">
            <svg className="one-brain-connections" viewBox="0 0 1000 180" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <marker id="decision-arrow" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" viewBox="0 0 12 12" refX="9" refY="6" orient="auto">
                  <path d="M3 2 9 6 3 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeDasharray="3 5" strokeLinecap="round" markerEnd="url(#decision-arrow)">
                <path d="M414 72 C394 72 391 40 365 40" />
                <path d="M586 72 C606 72 609 40 635 40" />
                <path d="M414 108 C394 108 391 140 365 140" />
                <path d="M586 108 C606 108 609 140 635 140" />
              </g>
            </svg>
            <svg className="one-brain-mobile-connections" viewBox="0 0 360 140" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <marker id="mobile-decision-arrow" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" viewBox="0 0 10 10" refX="8" refY="5" orient="auto">
                  <path d="M2 1.5 8 5 2 8.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" strokeLinecap="round" markerEnd="url(#mobile-decision-arrow)">
                <path d="M150 51C119 51 90 33 90 3" />
                <path d="M210 51C241 51 270 33 270 3" />
                <path d="M150 89C119 89 90 107 90 137" />
                <path d="M210 89C241 89 270 107 270 137" />
              </g>
            </svg>
            <div className="one-brain-center" aria-hidden="true">
              <div className="one-brain-halo" />
              <svg className="one-brain-head" viewBox="0 0 260 310" fill="none">
                <defs>
                  <linearGradient id="head-fade" x1="130" y1="30" x2="130" y2="310" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#b3ceb6" />
                    <stop offset=".6" stopColor="#c5d8c2" />
                    <stop offset="1" stopColor="#c7d8c4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M86 310C87 292 87 272 83 255L64 255C47 255 40 247 41 233L42 224C42 221 38 220 37 217C36 214 40 211 40 208L40 203L25 200C18 199 16 195 20 189L40 158C43 153 42 148 41 141C37 112 43 85 59 64C77 40 105 27 136 27C190 27 230 63 232 113C234 148 219 175 202 200C192 215 188 229 190 248C192 271 199 292 208 310Z" fill="url(#head-fade)" />
                <g transform="translate(52 39) scale(.84)" fill="#eef5e8" fillOpacity=".45" stroke="#216f4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M37 116C19 113 12 102 14 88C11 74 19 63 30 58C31 44 43 34 56 33C64 20 80 18 92 24C104 17 117 22 124 29C141 28 154 37 159 49C174 53 180 66 178 77C190 87 189 104 180 114C180 131 167 141 153 140C143 153 125 154 111 146C95 153 77 147 70 136C54 137 41 130 37 116Z" />
                  <path fill="none" d="M37 116C43 99 57 92 75 91L113 88C128 87 132 74 140 68" />
                  <path fill="none" d="M70 136C74 122 89 119 104 120L139 115C151 112 155 103 154 96" />
                  <path fill="none" d="M91 26C83 35 83 49 83 63V86M108 31C101 43 105 59 104 83" />
                  <path fill="none" d="M108 48C124 37 141 48 134 60L119 73" />
                  <path fill="none" d="M57 44L56 64M43 68C31 70 29 82 35 91M62 77C69 74 73 67 70 57" />
                  <path fill="none" d="M159 61L153 76M169 87C178 98 171 109 162 112" />
                  <path fill="none" d="M111 146C115 155 116 164 111 171L91 143M142 133C130 138 122 136 116 133" />
                </g>
              </svg>
            </div>
            {painPointsData.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className={`one-brain-card one-brain-card-${idx}`}
                >
                  <div className="one-brain-card-icon">
                    <IconComponent aria-hidden="true" strokeWidth={1.9} />
                  </div>
                  <h3>{item.title}</h3>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Takeaway Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[850px] rounded-none px-4 py-5 sm:px-8 sm:py-6 border border-[#e0e2da] bg-[#f4f3ec] text-center relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center">
              <p className="text-lg sm:text-2xl font-semibold text-slate-900 leading-snug max-w-2xl">
                Until those answers live somewhere else, every new hire is just
                one more person who needs to <span className="text-[#0a6c42]">call you.</span>
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
                <span className="text-[#0a6c42] font-bold">Keep reading.</span>{" "}
                We’ll show you how to get them out.
              </p>
              <div className="mt-5 w-full sm:w-auto">
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
