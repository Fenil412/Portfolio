import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  
  // Use motion values for better performance
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring animations for smooth movement
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, [cursorX, cursorY]);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) {
      setIsVisible(false);
      return;
    }

    let rafId;
    const throttledMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e);
        rafId = null;
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", throttledMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const target = e.target;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('button') || 
          target.closest('a') || 
          target.classList.contains('cursor-pointer') ||
          target.classList.contains('cursor-hover')) {
        setCursorVariant("link");
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorVariant("text");
      } else if (target.classList.contains('cursor-view')) {
        setCursorVariant("view");
      } else if (target.tagName === 'CANVAS') {
        setCursorVariant("grab");
      } else {
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
    };

    const handleMouseEnterWindow = () => setIsVisible(true);
    const handleMouseLeaveWindow = () => setIsVisible(false);

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: "#915eff",
      border: "none",
      boxShadow: "0 0 20px rgba(145, 94, 255, 0.5)",
    },
    link: {
      width: 50,
      height: 50,
      backgroundColor: "transparent",
      border: "2px solid #915eff",
      boxShadow: "0 0 30px rgba(145, 94, 255, 0.3)",
    },
    text: {
      width: 3,
      height: 28,
      backgroundColor: "#915eff",
      border: "none",
      boxShadow: "0 0 15px rgba(145, 94, 255, 0.7)",
    },
    view: {
      width: 70,
      height: 70,
      backgroundColor: "transparent",
      border: "2px solid #00cea8",
      boxShadow: "0 0 40px rgba(0, 206, 168, 0.4)",
    },
    grab: {
      width: 35,
      height: 35,
      backgroundColor: "transparent",
      border: "2px solid #915eff",
      boxShadow: "0 0 25px rgba(145, 94, 255, 0.6)",
    }
  };

  const dotVariants = {
    default: {
      width: 6,
      height: 6,
      backgroundColor: "#ffffff",
      opacity: 0.9,
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
    },
    link: {
      width: 8,
      height: 8,
      backgroundColor: "#915eff",
      opacity: 1,
      boxShadow: "0 0 15px rgba(145, 94, 255, 0.8)",
    },
    text: {
      width: 0,
      height: 0,
      opacity: 0,
    },
    view: {
      width: 10,
      height: 10,
      backgroundColor: "#00cea8",
      opacity: 1,
      boxShadow: "0 0 20px rgba(0, 206, 168, 0.8)",
    },
    grab: {
      width: 8,
      height: 8,
      backgroundColor: "#915eff",
      opacity: 1,
      boxShadow: "0 0 15px rgba(145, 94, 255, 0.8)",
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] will-change-transform mix-blend-mode-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        initial={false}
        whileTap={{ scale: isClicking ? 0.8 : 1 }}
      />
      
      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={dotVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 800, damping: 25, delay: 0.02 }}
        initial={false}
        whileTap={{ scale: isClicking ? 0.6 : 1 }}
      />
      
      {/* Outer ring for extra effect */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] will-change-transform border border-white/20"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorVariant === "link" ? 60 : cursorVariant === "view" ? 80 : cursorVariant === "grab" ? 45 : 30,
          height: cursorVariant === "link" ? 60 : cursorVariant === "view" ? 80 : cursorVariant === "grab" ? 45 : 30,
          opacity: cursorVariant === "default" ? 0.3 : 0.2,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.05 }}
        initial={false}
      />
    </>
  );
};

export default CustomCursor;