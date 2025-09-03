// src/components/CircularProgress.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const CircularProgress = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const radius = 45;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="flex flex-col items-center">
        {/* Circular Progress */}
        <div className="relative w-24 h-24 mb-4">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90"
          >
            {/* Background circle */}
            <circle
              stroke="#e5e7eb"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            
            {/* Progress circle */}
            <motion.circle
              stroke="url(#gradient)"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2193b0" />
                <stop offset="100%" stopColor="#6dd5ed" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index * 0.1) + 0.8 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-[#2193b0] dark:text-[#6dd5ed]"
            >
              {skill.level}%
            </motion.span>
          </div>
        </div>

        {/* Skill name */}
        <h3 className="text-lg font-bold text-[#2193b0] dark:text-[#6dd5ed] mb-2 text-center">
          {skill.name}
        </h3>
        
        {/* Description */}
        <motion.p
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isHovered ? "auto" : 60,
            opacity: 1 
          }}
          transition={{ duration: 0.3 }}
          className="text-gray-600 dark:text-gray-300 text-sm text-center overflow-hidden"
        >
          {skill.description}
        </motion.p>

        {/* Skill level indicator */}
        <div className="flex items-center mt-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: (index * 0.1) + (i * 0.1) + 1 }}
              viewport={{ once: true }}
              className={`w-2 h-2 rounded-full mx-0.5 ${
                i < skill.level / 20 
                  ? 'bg-[#2193b0]' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CircularProgress;