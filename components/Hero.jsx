"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoSrc =
    "https://video.gumlet.io/6ac4f3086d6d4d08c60d1496/6ace145b09415d7349c31793/main.mp4";

  const playVideo = () => {
    setIsPlaying(true);

    const playPromise = videoRef.current?.play();
    if (playPromise) {
      playPromise.catch(() => setIsPlaying(false));
    }
  };

  return (
    <section
      className="relative   w-full flex flex-col items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #004421 0%, #042717 100%)",
      }}
    >
      {/* Top Left Tech Circuit SVG Decorative Element (Below Navbar) */}
      <div className="absolute w-[100px] sm:w-[161px] h-[152px] sm:h-[245px] pointer-events-none block z-20 left-2 right-auto lg:left-auto lg:right-[calc(50%+576px)] top-4 sm:top-16 opacity-75 sm:opacity-100">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 161 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none"
        >
          <defs>
            <linearGradient
              id="circuit-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#27B578" stopOpacity="0" />
              <stop offset="50%" stopColor="#27B578" stopOpacity="1" />
              <stop offset="100%" stopColor="#27B578" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M56.9741 223.035C55.8046 223.516 54.9611 224.791 54.9611 226.304C54.9611 228.229 56.3138 229.787 57.9806 229.787C59.6473 229.787 61 228.229 61 226.304C61 224.791 60.1566 223.514 58.987 223.035V182.577L22.013 139.932V0H20V140.894L56.9741 183.539V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M64.9741 223.035C63.8046 223.516 62.9611 224.791 62.9611 226.304C62.9611 228.229 64.3138 229.787 65.9806 229.787C67.6473 229.787 69 228.229 69 226.304C69 224.791 68.1566 223.514 66.987 223.035V178.73L30.013 136.085V0H28V137.046L64.9741 179.691V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M72.9741 223.035C71.8046 223.516 70.9611 224.791 70.9611 226.304C70.9611 228.229 72.3138 229.787 73.9806 229.787C75.6473 229.787 77 228.229 77 226.304C77 224.791 76.1566 223.514 74.987 223.035V174.883L38.013 132.238V0H36V133.199L72.9741 175.844V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M80.9741 223.035C79.8046 223.516 78.9611 224.791 78.9611 226.304C78.9611 228.229 80.3138 229.787 81.9806 229.787C83.6473 229.787 85 228.229 85 226.304C85 224.791 84.1566 223.514 82.987 223.035V171.038L46.013 128.393V0H44V129.354L80.9741 171.999V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M88.9741 223.035C87.8046 223.516 86.9611 224.791 86.9611 226.304C86.9611 228.229 88.3138 229.787 89.9806 229.787C91.6473 229.787 93 228.229 93 226.304C93 224.791 92.1566 223.514 90.987 223.035V167.191L54.013 124.546V0H52V125.507L88.9741 168.152V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M111.869 186.95C110.703 187.366 109.862 188.468 109.862 189.776C109.862 191.44 111.211 192.787 112.873 192.787C114.535 192.787 115.884 191.44 115.884 189.776C115.884 188.468 115.043 187.364 113.877 186.95V151.974L77.0073 115.106V0H75V115.937L111.869 152.805V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M119.897 186.95C118.73 187.366 117.889 188.468 117.889 189.776C117.889 191.44 119.238 192.787 120.9 192.787C122.562 192.787 123.911 191.44 123.911 189.776C123.911 188.468 123.07 187.364 121.904 186.95V148.648L85.0346 111.78V0H83.0273V112.611L119.897 149.479V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M127.928 186.95C126.762 187.366 125.921 188.468 125.921 189.776C125.921 191.44 127.27 192.787 128.932 192.787C130.594 192.787 131.942 191.44 131.942 189.776C131.942 188.468 131.101 187.364 129.935 186.95V145.322L93.0659 108.454V0H91.0586V109.285L127.928 146.152V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M135.955 186.95C134.789 187.366 133.948 188.468 133.948 189.776C133.948 191.44 135.297 192.787 136.959 192.787C138.621 192.787 139.97 191.44 139.97 189.776C139.97 188.468 139.129 187.364 137.963 186.95V141.997L101.093 105.13V0H99.0859V105.961L135.955 142.828V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M143.987 186.95C142.82 187.366 141.979 188.468 141.979 189.776C141.979 191.44 143.328 192.787 144.99 192.787C146.652 192.787 148.001 191.44 148.001 189.776C148.001 188.468 147.16 187.364 145.994 186.95V138.671L109.124 101.804V0H107.117V102.635L143.987 139.502V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M21 0 V140.4 L57 183 V226.3"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 5s linear infinite",
            }}
          />
          <path
            d="M29 0 V136.6 L65 179.2 V226.3"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 5.4s linear infinite",
            }}
          />
          <path
            d="M37 0 V132.7 L73 175.4 V226.3"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 5.8s linear infinite",
            }}
          />
          <path
            d="M45 0 V128.9 L81 171.5 V226.3"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 6.2s linear infinite",
            }}
          />
          <path
            d="M53 0 V125 L89 167.7 V226.3"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 6.6s linear infinite",
            }}
          />
          <path
            d="M76 0 V115.5 L112.9 152.4 V189.8"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 7s linear infinite",
            }}
          />
          <path
            d="M84 0 V112.2 L120.9 149.1 V189.8"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 7.4s linear infinite",
            }}
          />
          <path
            d="M92 0 V108.9 L128.9 145.7 V189.8"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 7.8s linear infinite",
            }}
          />
          <path
            d="M100 0 V105.5 L137 142.4 V189.8"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 8.2s linear infinite",
            }}
          />
          <path
            d="M108 0 V102.2 L145 139.1 V189.8"
            stroke="url(#circuit-grad)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 8.6s linear infinite",
            }}
          />
          <circle
            cx="58"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="66"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="74"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="82"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="90"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="112.9"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="120.9"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="128.9"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="137"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="145"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
        </svg>
      </div>

      {/* Top Right Tech Circuit SVG Decorative Element (Below Navbar) */}
      <div className="absolute w-[100px] sm:w-[161px] h-[152px] sm:h-[245px] pointer-events-none block z-20 right-2 left-auto lg:right-auto lg:left-[calc(50%+576px)] top-4 sm:top-16 opacity-75 sm:opacity-100 [transform:scaleX(-1)]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 161 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none"
        >
          <defs>
            <linearGradient
              id="circuit-grad-right"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#27B578" stopOpacity="0" />
              <stop offset="50%" stopColor="#27B578" stopOpacity="1" />
              <stop offset="100%" stopColor="#27B578" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M56.9741 223.035C55.8046 223.516 54.9611 224.791 54.9611 226.304C54.9611 228.229 56.3138 229.787 57.9806 229.787C59.6473 229.787 61 228.229 61 226.304C61 224.791 60.1566 223.514 58.987 223.035V182.577L22.013 139.932V0H20V140.894L56.9741 183.539V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M64.9741 223.035C63.8046 223.516 62.9611 224.791 62.9611 226.304C62.9611 228.229 64.3138 229.787 65.9806 229.787C67.6473 229.787 69 228.229 69 226.304C69 224.791 68.1566 223.514 66.987 223.035V178.73L30.013 136.085V0H28V137.046L64.9741 179.691V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M72.9741 223.035C71.8046 223.516 70.9611 224.791 70.9611 226.304C70.9611 228.229 72.3138 229.787 73.9806 229.787C75.6473 229.787 77 228.229 77 226.304C77 224.791 76.1566 223.514 74.987 223.035V174.883L38.013 132.238V0H36V133.199L72.9741 175.844V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M80.9741 223.035C79.8046 223.516 78.9611 224.791 78.9611 226.304C78.9611 228.229 80.3138 229.787 81.9806 229.787C83.6473 229.787 85 228.229 85 226.304C85 224.791 84.1566 223.514 82.987 223.035V171.038L46.013 128.393V0H44V129.354L80.9741 171.999V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M88.9741 223.035C87.8046 223.516 86.9611 224.791 86.9611 226.304C86.9611 228.229 88.3138 229.787 89.9806 229.787C91.6473 229.787 93 228.229 93 226.304C93 224.791 92.1566 223.514 90.987 223.035V167.191L54.013 124.546V0H52V125.507L88.9741 168.152V223.035Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M111.869 186.95C110.703 187.366 109.862 188.468 109.862 189.776C109.862 191.44 111.211 192.787 112.873 192.787C114.535 192.787 115.884 191.44 115.884 189.776C115.884 188.468 115.043 187.364 113.877 186.95V151.974L77.0073 115.106V0H75V115.937L111.869 152.805V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M119.897 186.95C118.73 187.366 117.889 188.468 117.889 189.776C117.889 191.44 119.238 192.787 120.9 192.787C122.562 192.787 123.911 191.44 123.911 189.776C123.911 188.468 123.07 187.364 121.904 186.95V148.648L85.0346 111.78V0H83.0273V112.611L119.897 149.479V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M127.928 186.95C126.762 187.366 125.921 188.468 125.921 189.776C125.921 191.44 127.27 192.787 128.932 192.787C130.594 192.787 131.942 191.44 131.942 189.776C131.942 188.468 131.101 187.364 129.935 186.95V145.322L93.0659 108.454V0H91.0586V109.285L127.928 146.152V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M135.955 186.95C134.789 187.366 133.948 188.468 133.948 189.776C133.948 191.44 135.297 192.787 136.959 192.787C138.621 192.787 139.97 191.44 139.97 189.776C139.97 188.468 139.129 187.364 137.963 186.95V141.997L101.093 105.13V0H99.0859V105.961L135.955 142.828V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M143.987 186.95C142.82 187.366 141.979 188.468 141.979 189.776C141.979 191.44 143.328 192.787 144.99 192.787C146.652 192.787 148.001 191.44 148.001 189.776C148.001 188.468 147.16 187.364 145.994 186.95V138.671L109.124 101.804V0H107.117V102.635L143.987 139.502V186.95Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M21 0 V140.4 L57 183 V226.3"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 5s linear infinite",
            }}
          />
          <path
            d="M29 0 V136.6 L65 179.2 V226.3"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 5.4s linear infinite",
            }}
          />
          <path
            d="M37 0 V132.7 L73 175.4 V226.3"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 5.8s linear infinite",
            }}
          />
          <path
            d="M45 0 V128.9 L81 171.5 V226.3"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 6.2s linear infinite",
            }}
          />
          <path
            d="M53 0 V125 L89 167.7 V226.3"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 6.6s linear infinite",
            }}
          />
          <path
            d="M76 0 V115.5 L112.9 152.4 V189.8"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 7s linear infinite",
            }}
          />
          <path
            d="M84 0 V112.2 L120.9 149.1 V189.8"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 7.4s linear infinite",
            }}
          />
          <path
            d="M92 0 V108.9 L128.9 145.7 V189.8"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 7.8s linear infinite",
            }}
          />
          <path
            d="M100 0 V105.5 L137 142.4 V189.8"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 8.2s linear infinite",
            }}
          />
          <path
            d="M108 0 V102.2 L145 139.1 V189.8"
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            strokeDasharray="0.1 0.9"
            style={{
              strokeDashoffset: 1,
              willChange: "stroke-dashoffset",
              animation: "circuit-pulse 8.6s linear infinite",
            }}
          />
          <circle
            cx="58"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="66"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="74"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="82"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="90"
            cy="226.3"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="112.9"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="120.9"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="128.9"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="137"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
          <circle
            cx="145"
            cy="189.8"
            r="3"
            fill="#27B578"
            style={{
              opacity: 0.05,
              animation: "circuit-node-glow 5s ease-in-out infinite",
            }}
          />
        </svg>
      </div>

      {/* 100% Full Screen Width Top Navbar Horizontal Divider Border */}
      <div className="w-full bg-[#042717] border-b border-white/10 h-12 sm:h-16 z-20">
        <div className="w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-white/10 h-full px-4 sm:px-8 flex items-center justify-center font-semibold text-sm sm:text-lg">From Founder-Driven To System-Driven</div>
      </div>

      {/* Main Hero Content Box with Left & Right Vertical Screen Borders */}
      <div className="relative z-10 w-[calc(100%-20px)] sm:w-full max-w-6xl mx-auto border-l border-r border-white/10 flex-1 px-3 sm:px-8 pt-6 sm:pt-10 pb-10 sm:pb-14 flex flex-col items-center text-center">
        {/* Targeted Audience Text in Navbar */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-2 mb-2 sm:mb-2 text-xl sm:text-2xl md:text-3xl font-bold   uppercase text-center">
          <div className="whitespace-nowrap">
            <span className="text-[#26a36e]">₹1 CRORE+</span>{" "}
            <span className="text-white">REVENUE?</span>
          </div>

          <div className="whitespace-nowrap">
            <span className="bg-gradient-to-r from-emerald-200 via-[#26a36e] to-teal-200 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(38,163,110,0.35)]">
              5 - 500+ PEOPLE
            </span>{" "}
            <span className="text-white">ON YOUR TEAM?</span>
          </div>
        </div>
        {/* Main Headline */}
        <h1
         
          className="headline text-3xl sm:text-[2.6rem] font-medium text-white tracking-tight leading-[1.2] sm:leading-[1.1] max-w-4xl"
        >
          But Still Involved<span className="hidden sm:inline">&nbsp;</span>
          <span className="sm:hidden"> </span>
          <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-200 bg-clip-text text-transparent drop-shadow-sm">
            In Every Decision?
          </span>
        </h1>

        {/* Subtitle */}
        <p
        
          className="mt-6 sm:mt-10 text-md sm:text-xl md:text-2xl text-[#FFFFFF80] max-w-3xl font-medium "
        >
          Build the systems that{" "}
          <strong className="text-white font-semibold">
            give you back your time
          </strong>{" "}
          with AI, automation and a{" "}
          <strong className="text-[#26a36e] font-semibold  ">
            real engineering team
          </strong>{" "}
          behind your business.
        </p>

        {/* Call To Action Buttons (Above Video) */}
        <div
          
          className="mt-8 sm:mt-12 mb-10 sm:mb-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl px-2 sm:px-0"
        >
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

          <button
            onClick={() => {
              const videoElem = document.getElementById("vsl-video");
              if (videoElem) {
                videoElem.scrollIntoView({ behavior: "smooth" });
              }
              playVideo();
            }}
            className="group/btn inline-flex items-center justify-center gap-2 rounded-[2px] cursor-pointer whitespace-nowrap transition-all h-[48px] w-full sm:w-auto px-4 sm:px-8 py-[12px] text-white border border-[#FFFFFFB3] hover:bg-[#FFFFFF0F] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.64)] relative overflow-hidden font-bold tracking-wider text-xs sm:text-sm"
          >
            <Play className="w-4 h-4 text-white fill-white shrink-0" />
            <span className="relative z-10">Watch 2 min vsl video</span>
          </button>
        </div>

        {/* VSL Video Section (Below Button) */}
        <div
          id="vsl-video"
          
          className="w-full max-w-4xl group"
        >
          <div className="relative p-2 sm:p-3 bg-[#1E5D3F]">
            {/* Top-Left Tech Corner Accent */}
            <span className="absolute -top-[2px] -left-[2px] w-4 h-4 sm:w-6 sm:h-6 border-t-[2px] border-l-[2px] sm:border-t-[3px] sm:border-l-[3px] border-[#26a36e] pointer-events-none z-30" />
            {/* Top-Right Tech Corner Accent */}
            <span className="absolute -top-[2px] -right-[2px] w-4 h-4 sm:w-6 sm:h-6 border-t-[2px] border-r-[2px] sm:border-t-[3px] sm:border-r-[3px] border-[#26a36e] pointer-events-none z-30" />
            {/* Bottom-Left Tech Corner Accent */}
            <span className="absolute -bottom-[2px] -left-[2px] w-4 h-4 sm:w-6 sm:h-6 border-b-[2px] border-l-[2px] sm:border-b-[3px] sm:border-l-[3px] border-[#26a36e] pointer-events-none z-30" />
            {/* Bottom-Right Tech Corner Accent */}
            <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 sm:w-6 sm:h-6 border-b-[2px] border-r-[2px] sm:border-b-[3px] sm:border-r-[3px] border-[#26a36e] pointer-events-none z-30" />

            <div className="relative aspect-video overflow-hidden flex flex-col items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full z-20 bg-black object-cover"
                src={videoSrc}
                title="VSL Video"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <button
                  type="button"
                  onClick={playVideo}
                  aria-label="Play VSL video"
                  className="absolute inset-0 z-30 flex items-center justify-center bg-black/35 transition-colors hover:bg-black/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#26a36e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E5D3F]"
                >
                  <span className="flex size-16 sm:size-20 items-center justify-center rounded-full border border-white/40 bg-white/95 text-[#0B3D25] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform hover:scale-105">
                    <Play className="ml-1 size-7 sm:size-9 fill-[#0B3D25]" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
