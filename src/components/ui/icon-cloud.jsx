import React, { useEffect, useState, useRef } from "react";

// Technology icons with proper SVG/image URLs (you can replace these with actual icon URLs)
const iconData = {
  react: { name: "React", icon: "⚛️", color: "#61DAFB" },
  javascript: { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
  typescript: { name: "TypeScript", icon: "TS", color: "#3178C6" },
  html5: { name: "HTML5", icon: "H5", color: "#E34F26" },
  css3: { name: "CSS3", icon: "C3", color: "#1572B6" },
  nodedotjs: { name: "Node.js", icon: "N", color: "#339933" },
  express: { name: "Express", icon: "EX", color: "#000000" },
  nextdotjs: { name: "Next.js", icon: "▲", color: "#000000" },
  vercel: { name: "Vercel", icon: "▲", color: "#000000" },
  git: { name: "Git", icon: "G", color: "#F05032" },
  github: { name: "GitHub", icon: "GH", color: "#181717" },
  visualstudiocode: { name: "VS Code", icon: "VS", color: "#007ACC" },
  figma: { name: "Figma", icon: "F", color: "#F24E1E" },
  docker: { name: "Docker", icon: "🐳", color: "#2496ED" },
  postgresql: { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  mongodb: { name: "MongoDB", icon: "M", color: "#47A248" },
  python: { name: "Python", icon: "🐍", color: "#3776AB" },
  java: { name: "Java", icon: "☕", color: "#007396" },
  flutter: { name: "Flutter", icon: "F", color: "#02569B" },
  dart: { name: "Dart", icon: "D", color: "#0175C2" },
  prisma: { name: "Prisma", icon: "P", color: "#2D3748" },
  amazonaws: { name: "AWS", icon: "☁️", color: "#FF9900" },
  firebase: { name: "Firebase", icon: "🔥", color: "#FFCA28" },
  nginx: { name: "Nginx", icon: "N", color: "#009639" },
  testinglibrary: { name: "Testing Library", icon: "T", color: "#E33332" },
  jest: { name: "Jest", icon: "J", color: "#C21325" },
  cypress: { name: "Cypress", icon: "C", color: "#17202C" },
  jira: { name: "Jira", icon: "J", color: "#0052CC" },
  gitlab: { name: "GitLab", icon: "GL", color: "#FC6D26" },
  androidstudio: { name: "Android Studio", icon: "AS", color: "#3DDC84" },
  sonarqube: { name: "SonarQube", icon: "S", color: "#4E9BCD" },
  android: { name: "Android", icon: "A", color: "#3DDC84" },
};

const IconCloud = ({ iconSlugs = [] }) => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || iconSlugs.length === 0) return;

    const container = containerRef.current;
    container.innerHTML = '';
    iconsRef.current = [];

    // Create 3D sphere of icons
    const radius = 180;
    const icons = iconSlugs.map((slug, index) => {
      const iconInfo = iconData[slug] || { 
        name: slug, 
        icon: slug.slice(0, 2).toUpperCase(), 
        color: "#6366f1" 
      };

      const iconElement = document.createElement('div');
      iconElement.className = 'absolute flex items-center justify-center w-12 h-12 rounded-lg text-white font-bold text-sm transition-all duration-300 hover:scale-110 cursor-pointer select-none';
      
      // Style the icon
      iconElement.style.backgroundColor = iconInfo.color;
      iconElement.style.boxShadow = `0 4px 20px ${iconInfo.color}40`;
      iconElement.style.border = '1px solid rgba(255,255,255,0.1)';
      iconElement.textContent = iconInfo.icon;
      iconElement.title = iconInfo.name;

      // Position icons in 3D sphere using spherical coordinates
      const phi = Math.acos(-1 + (2 * index) / iconSlugs.length);
      const theta = Math.sqrt(iconSlugs.length * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      iconElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      iconElement.style.zIndex = Math.round(z + radius);

      // Store original position
      iconElement.originalX = x;
      iconElement.originalY = y;
      iconElement.originalZ = z;

      container.appendChild(iconElement);
      iconsRef.current.push(iconElement);
      
      return iconElement;
    });

    // Rotation state
    let rotationX = 0;
    let rotationY = 0;
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    // Auto rotation when not interacting
    const autoRotate = () => {
      if (!isMouseDown) {
        targetRotationY += 0.5;
        targetRotationX += 0.2;
      }
      
      // Smooth interpolation
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      // Apply rotation to container
      container.style.transform = `
        perspective(1000px) 
        rotateX(${rotationX}deg) 
        rotateY(${rotationY}deg)
      `;

      animationRef.current = requestAnimationFrame(autoRotate);
    };

    // Mouse interaction handlers
    const handleMouseDown = (e) => {
      isMouseDown = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      container.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isMouseDown) return;
      
      const deltaX = e.clientX - mouseX;
      const deltaY = e.clientY - mouseY;
      
      // Update target rotation based on mouse movement
      targetRotationY += deltaX * 0.5;
      targetRotationX -= deltaY * 0.5;
      
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      container.style.cursor = 'grab';
    };

    const handleMouseEnter = () => {
      container.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
      container.style.cursor = 'default';
    };

    // Add event listeners
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Start animation
    autoRotate();

    // Cleanup
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted, iconSlugs]);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      />
    </div>
  );
};

export default IconCloud;