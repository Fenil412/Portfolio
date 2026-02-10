import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from './navbar/Navbar'; // Import theme hook from Navbar

const CustomCursor = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false); // Default to false to prevent mobile flash
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true for safety
  const cursorRef = useRef(null);

  // Theme context for colors
  const { isDark } = useTheme();

  // Motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring config
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Device & Input Detection
  useEffect(() => {
    // Force enable on all devices as per user request
    setIsMobile(false);
    setIsVisible(true);

    // Cleanup not needed for this simple state set, but keeping structure
    return () => { };
  }, []);

  // Mouse Move Handler
  const handleMouseMove = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, [cursorX, cursorY]);

  // Touch Move Handler
  const handleTouchMove = useCallback((e) => {
    if (e.touches.length > 0) {
      cursorX.set(e.touches[0].clientX);
      cursorY.set(e.touches[0].clientY);
    }
  }, [cursorX, cursorY]);

  // Event Listeners
  useEffect(() => {
    let rafId;
    const throttledMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e);
        rafId = null;
      });
    };

    const throttledTouchMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleTouchMove(e);
        rafId = null;
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Hover detection logic
    const handleMouseEnter = (e) => {
      const target = e.target;

      // Check effectively for interactive elements
      const isLink = target.closest('a') || target.tagName === 'A';
      const isButton = target.closest('button') || target.tagName === 'BUTTON';
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      const isPointer = target.classList.contains('cursor-pointer') || window.getComputedStyle(target).cursor === 'pointer';

      if (isLink || isButton || isPointer) {
        setCursorVariant("link");
      } else if (isInput) {
        setCursorVariant("text");
      } else if (target.classList.contains('cursor-view')) {
        setCursorVariant("view");
      } else if (target.tagName === 'CANVAS') {
        setCursorVariant("grab");
      } else {
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => setCursorVariant("default");
    const handleWindowEnter = () => setIsVisible(true);
    const handleWindowLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", throttledMouseMove);
    window.addEventListener("touchmove", throttledTouchMove); // Add touch listener
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("touchstart", handleMouseDown); // Add touch start
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp); // Add touch end

    // Use capture phase for better event delegation
    document.addEventListener('mouseover', handleMouseEnter, true);
    document.addEventListener('mouseout', handleMouseLeave, true);
    document.addEventListener('mouseenter', handleWindowEnter);
    document.addEventListener('mouseleave', handleWindowLeave);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      window.removeEventListener("touchmove", throttledTouchMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter, true);
      document.removeEventListener('mouseout', handleMouseLeave, true);
      document.removeEventListener('mouseenter', handleWindowEnter);
      document.removeEventListener('mouseleave', handleWindowLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [handleMouseMove, handleTouchMove]);

  // Safety Return for Mobile
  // Safety Return for Mobile
  // if (isMobile) return null; // Removed check to allow rendering on mobile

  // Theme Colors
  const colors = {
    primary: isDark ? "#915eff" : "#6366f1", // Violet vs Indigo
    dot: isDark ? "#ffffff" : "#1e1e1e",
    ring: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
    view: "#00cea8",
    mixBlend: isDark ? "difference" : "normal"
  };

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: colors.primary,
      border: "none",
      mixBlendMode: colors.mixBlend,
      opacity: 0.8
    },
    link: {
      width: 50,
      height: 50,
      backgroundColor: "transparent",
      border: `2px solid ${colors.primary}`,
      mixBlendMode: "normal",
      opacity: 1
    },
    text: {
      width: 3,
      height: 28,
      backgroundColor: colors.primary,
      border: "none",
      mixBlendMode: "normal",
      opacity: 1
    },
    view: {
      width: 70,
      height: 70,
      backgroundColor: "transparent",
      border: `2px solid ${colors.view}`,
      mixBlendMode: "normal",
      opacity: 1
    },
    grab: {
      width: 35,
      height: 35,
      backgroundColor: "transparent",
      border: `2px solid ${colors.primary}`,
      mixBlendMode: "normal",
      opacity: 1
    }
  };

  const dotVariants = {
    default: {
      width: 6,
      height: 6,
      backgroundColor: colors.dot,
      opacity: 0.9,
    },
    link: {
      width: 8,
      height: 8,
      backgroundColor: colors.primary,
      opacity: 1,
    },
    text: {
      width: 0,
      height: 0,
      opacity: 0,
    },
    view: {
      width: 10,
      height: 10,
      backgroundColor: colors.view,
      opacity: 1,
    },
    grab: {
      width: 8,
      height: 8,
      backgroundColor: colors.primary,
      opacity: 1,
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main Cursor (Circle/Shape) */}
          <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] will-change-transform"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: "-50%",
              translateY: "-50%",
            }}
            variants={variants}
            animate={cursorVariant}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            whileTap={{ scale: isClicking ? 0.8 : 1 }}
          />

          {/* Inner Dot */}
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
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 800, damping: 25, delay: 0.02 }}
            whileTap={{ scale: isClicking ? 0.6 : 1 }}
          />

          {/* Outer Ring (Subtle Trail) */}
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] will-change-transform"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: "-50%",
              translateY: "-50%",
              border: `1px solid ${colors.ring}`
            }}
            animate={{
              width: cursorVariant === "link" ? 60 : cursorVariant === "view" ? 80 : 30,
              height: cursorVariant === "link" ? 60 : cursorVariant === "view" ? 80 : 30,
              opacity: cursorVariant === "default" ? 0.3 : 0.1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.05 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;