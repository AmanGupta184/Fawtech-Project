import React from "react";

const InfinityLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <svg
        className="container"
        x="0px"
        y="0px"
        viewBox="0 0 55 23.1"
        height="80"
        width="200"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Animated Gradient + Glow Filter */}
        <defs>
          <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="cyan">
              <animate
                attributeName="stop-color"
                values="cyan;blue;black;cyan"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="blue">
              <animate
                attributeName="stop-color"
                values="blue;black;red;blue"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <filter id="animatedGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="white" floodOpacity="0.8" />
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="white" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Background Track */}
        <path
          className="track"
          fill="none"
          strokeWidth="4"
          pathLength="100"
          d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1
             c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1
             c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
        />

        {/* Moving Car Path */}
        <path
          className="car"
          fill="none"
          strokeWidth="4"
          pathLength="100"
          stroke="url(#animatedGradient)"
          filter="url(#animatedGlow)"
          d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1
             c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1
             c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
        />
      </svg>

      {/* Animation Styles */}
      <style>
        {`
          .container {
            --uib-speed: 1.3s;
            transform-origin: center;
            overflow: visible;
          }

          .car {
            stroke-dasharray: 15, 85;
            stroke-dashoffset: 0;
            stroke-linecap: round;
            animation: travel var(--uib-speed) linear infinite;
            will-change: stroke-dasharray, stroke-dashoffset;
          }

          .track {
            stroke: #cccccc;
            opacity: 0.2;
          }

          @media (prefers-color-scheme: dark) {
            .track {
              stroke: #888888;
              opacity: 0.3;
            }
          }

          @keyframes travel {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 100;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InfinityLoader;
