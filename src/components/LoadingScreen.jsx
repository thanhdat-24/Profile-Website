// src/components/LoadingScreen.jsx
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }} // Giảm thời gian transition
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1f2e]"
    >
      {/* Main Container */}
      <div className="relative w-48 h-48">
        {/* Rotating Circle with Gradient Arc */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1, // Giảm thời gian xoay
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          {/* SVG for precise circle and gradient */}
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#242938"
              strokeWidth="2"
            />
            
            {/* Gradient arc */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#2193b0"
              strokeWidth="2"
              strokeDasharray="75 251"
              strokeLinecap="round"
            />

            {/* Glowing dot */}
            <circle
              cx="50"
              cy="5"
              r="3"
              fill="#2193b0"
              filter="url(#glow)"
            />

            {/* Glow effect */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </motion.div>

        {/* Logo - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 rounded-full bg-[#242938] flex items-center justify-center">
              <span className="text-4xl font-bold text-[#2193b0]">TD</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;