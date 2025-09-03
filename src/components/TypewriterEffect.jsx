// src/components/TypewriterEffect.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterEffect = ({ 
  texts = [], 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = "",
  showCursor = true 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (texts.length === 0) return;

    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        // Typing phase
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting phase
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  // Cursor blinking animation
  const cursorVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <span className={`${className} inline-flex items-center`}>
      <span className="relative">
        {currentText}
        {showCursor && (
          <motion.span
            variants={cursorVariants}
            animate="visible"
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="ml-1 text-current"
          >
            |
          </motion.span>
        )}
      </span>
    </span>
  );
};

export default TypewriterEffect;