import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import MetaPixel from "@/components/MetaPixel";

export const metadata = {
  title: "Thank You | TripleHash",
  description: "Your call request has been received.",
};

function CircuitAccent({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none opacity-80 ${className}`}>
      <svg
        width="161"
        height="245"
        viewBox="0 0 161 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="thank-you-circuit" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#27B578" stopOpacity="0" />
            <stop offset="50%" stopColor="#27B578" stopOpacity="1" />
            <stop offset="100%" stopColor="#27B578" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M21 0V140.4L57 183V226.3M45 0V128.9L81 171.5V226.3M76 0V115.5L112.9 152.4V189.8M108 0V102.2L145 139.1V189.8"
          stroke="white"
          strokeOpacity="0.16"
          strokeWidth="2"
        />
        <path
          d="M21 0V140.4L57 183V226.3M45 0V128.9L81 171.5V226.3M76 0V115.5L112.9 152.4V189.8M108 0V102.2L145 139.1V189.8"
          stroke="url(#thank-you-circuit)"
          strokeWidth="2"
          pathLength="1"
          strokeDasharray="0.12 0.88"
          style={{
            strokeDashoffset: 1,
            animation: "circuit-pulse 6s linear infinite",
          }}
        />
        {[57, 81, 112.9, 145].map((cx, index) => (
          <circle
            key={cx}
            cx={cx}
            cy={index < 2 ? 226.3 : 189.8}
            r="3"
            fill="#27B578"
            style={{ animation: "circuit-node-glow 5s ease-in-out infinite" }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse at center, #004421 0%, #042717 100%)",
      }}
    >
      <MetaPixel eventName="Purchase" scriptId="meta-pixel-thank-you" />
   
      <div className="relative z-10 w-full border-b border-white/10 bg-[#042717]">
        <div className="mx-auto flex h-12 w-[calc(100%-20px)] max-w-6xl items-center justify-center border-l border-r border-white/10 px-4 text-center text-sm font-semibold uppercase tracking-wider sm:h-16 sm:text-lg">
          
        </div>
      </div>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] w-[calc(100%-20px)] max-w-6xl flex-col items-center border-l border-r border-white/10 px-3 py-10 text-center sm:min-h-[calc(100vh-4rem)] sm:px-8 sm:py-14">
        <div className="mb-5 inline-flex items-center gap-2 border border-[#26a36e]/35 bg-[#26a36e]/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#9ff0c7]">
          <CheckCircle2 className="h-4 w-4" />
          Call Request Received
        </div>

        <h1 className="headline max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
          Thank You.{" "}
          <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-200 bg-clip-text text-transparent drop-shadow-sm">
            We Will Take It From Here.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/65 sm:text-2xl">
          Your booking request is in. We will review your business context and
          come prepared to discuss where systems, automation and engineering can
          remove founder dependency.
        </p>

       
      </section>
    </main>
  );
}
