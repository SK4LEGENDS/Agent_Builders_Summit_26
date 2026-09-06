import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const originalText = text;
    
    const glitchEffect = () => {
      let result = '';
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          result += originalText[i];
        }
      }
      setGlitchText(result);
      
      setTimeout(() => setGlitchText(originalText), 50);
    };

    const interval = setInterval(glitchEffect, 3000);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {glitchText}
    </motion.span>
  );
};

export default GlitchText;