// src/components/ProgressBar.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProgressBar = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="mb-6 last:mb-0"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: (index * 0.1) + 0.5 }}
          className="text-sm font-bold text-[#2193b0] dark:text-[#6dd5ed]"
        >
          {skill.level}%
        </motion.span>
      </div>
      
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        {/* Background glow effect */}
        <div 
          className="absolute inset-0 rounded-full opacity-20"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}20 0%, transparent 100%)` 
          }}
        ></div>
        
        {/* Animated progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ 
            duration: 1.5, 
            delay: (index * 0.1) + 0.2,
            ease: "easeOut"
          }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)` 
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 2,
              delay: (index * 0.1) + 1,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ transform: "skewX(-20deg)" }}
          />
        </motion.div>
        
        {/* Pulse effect on hover */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"
          style={{ 
            background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)` 
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default ProgressBar;