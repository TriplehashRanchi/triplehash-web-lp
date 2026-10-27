"use client";

import { motion } from "motion/react";
const layersData = [
  {
    number: "01",
    title: "You hired a manager.",
    description: "But a manager can’t read your mind. Without your rules written down, they guess, get it wrong, and bring it back to you. Now you’re managing the manager.",
  },
  {
    number: "02",
    title: "You bought software.",
    description: "Zoho, ClickUp, a CRM. Built for companies that don’t run on WhatsApp. Your team used it for three weeks, then went back to WhatsApp, because that’s where your business actually runs.",
  },
  {
    number: "03",
    title: "You tried ChatGPT.",
    description: "It’s smart, but it knows nothing about your business. It doesn’t know your margins, your customers, or why you stopped working with that one supplier. Generic AI gives generic answers.",
  },
  {
    number: "04",
    title: "You wrote SOPs.",
    description: "A 40-page Google Doc nobody opens. When your team has a question, they don’t search for a document. They message you.",
  },
  {
    number: "05",
    title: "You worked harder.",
    description: "And the business grew to exactly the size of your energy. Not one rupee more.",
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

export function SquareGridBanner() {
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
              Why hiring, software and ChatGPT <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
                haven’t fixed it
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-md sm:text-lg text-[#FFFFFFB3] max-w-3xl leading-tight font-medium"
            >
              You’ve probably tried at least one of these. Here’s why they didn’t
              work. And no, it’s not your fault.
            </motion.p>
          </div>

          {/* Five attempts, in the existing bordered card style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full mb-8 sm:mb-10 border-l border-t border-emerald-500/20">
            {layersData.map((layer, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative p-5 sm:p-6 border-r border-b border-emerald-500/20 flex flex-col justify-between last:md:col-span-2 hover:bg-[#234F36] transition-colors duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 border border-dashed border-white/40 bg-[#234F36] flex items-center justify-center font-bold text-white text-base sm:text-lg rounded-none">
                        {layer.number}
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-2xl font-bold text-white mb-3 leading-snug">
                      {layer.title}
                    </h4>

                    <p className="text-md sm:text-base text-[#FFFFFFB3] font-medium leading-relaxed">
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
              <p className="text-sm sm:text-base font-bold text-emerald-300 mb-3">
                All of these fail for the same reason.
              </p>
              <p className="text-xl sm:text-3xl font-extrabold text-white leading-snug max-w-3xl">
                They try to work around your brain <span className="text-emerald-300">instead of capturing it.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Square Pixel Grid Banner */}
      <SquareGridBanner />
    </div>
  );
}
