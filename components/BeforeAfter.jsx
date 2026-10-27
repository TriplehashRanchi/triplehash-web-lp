"use client";

import { motion } from "motion/react";
import { MessageCircle, Sunrise, ShieldCheck, Search, Send, Database } from "lucide-react";

const capabilities = [
  {
    icon: MessageCircle,
    title: "Team Answer Desk on WhatsApp.",
    description: "Your team messages one number and gets your answer instantly: pricing rules, policies, “how do we handle this?” In your words, the way you’d say it.",
  },
  {
    icon: Sunrise,
    title: "8 AM Business Brief.",
    description: "A short WhatsApp message every morning with yesterday’s sales, pending payments, cash position and anything that needs you. Pulled automatically from Tally and Sheets.",
  },
  {
    icon: ShieldCheck,
    title: "Smart Approvals.",
    description: "Expenses, discounts and refunds under limits you set get approved automatically. Anything above comes to you with full context, ready for a one-tap decision.",
  },
  {
    icon: Search,
    title: "Ask Your Business Anything.",
    description: "“Which customers haven’t paid in 60 days?” “What was our margin on this product last month?” Answers in seconds, not two days and three reminders.",
  },
  {
    icon: Send,
    title: "Lead Follow-Up Assistant.",
    description: "Every enquiry gets a reply and timely follow-ups, so no lead dies inside a salesperson’s phone.",
  },
  {
    icon: Database,
    title: "Company Memory.",
    description: "When a key employee leaves, the knowledge stays. Processes, client history and past decisions are saved in a system you own.",
  },
];

// Generate dense pixel grid matrix matching PainPoints banner (15 rows x 221 columns = 3,315 squares)
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

function SquareGridBanner() {
  return (
    <div className="w-full bg-[#f4f3ec] border-t border-b border-neutral-300">
      <div className="w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-neutral-300 h-[50px] sm:h-[80px] relative overflow-hidden flex items-center justify-center">
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

export default function BeforeAfter() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Square Pixel Grid Banner */}
      <SquareGridBanner />

      <section className="relative w-full bg-[#f4f3ec] text-slate-900 overflow-hidden">
        {/* Outer Framed Container: Left & Right Vertical Screen Borders Aligning with PainPoints & Hero */}
        <div className="relative py-8 sm:py-14 pb-10 sm:pb-16 z-10 w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-neutral-300 px-3 sm:px-8 flex flex-col items-center">
          {/* Section Header */}
          <div className="max-w-3xl text-center flex flex-col items-center mb-8 sm:mb-10 px-2 sm:px-0">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline text-2xl sm:text-4xl font-semibold text-slate-900 leading-tight"
            >
              What your Founder Brain <br className="hidden sm:inline" />
              <span className="text-[#0a6c42]">can do for you</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-5 text-md sm:text-lg text-[#70707b] font-medium max-w-2xl leading-tight"
            >
              Every build is custom. Here are examples of what we can build:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-l border-t border-neutral-300">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="p-5 sm:p-6 border-r border-b border-neutral-300 hover:bg-white/60 transition-colors"
                >
                  <div className="w-10 h-10 border border-dashed border-neutral-300 flex items-center justify-center mb-4 text-[#0a6c42]">
                    <Icon aria-hidden="true" className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Square Pixel Grid Banner */}
      <SquareGridBanner />
    </div>
  );
}
