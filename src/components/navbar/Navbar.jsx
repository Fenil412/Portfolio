import React, { useState, useEffect, createContext, useContext } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaSun,
  FaMoon,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function NavBar() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname === "/" ? "home" : location.pathname.substring(1);
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update active link when location changes
  useEffect(() => {
    const path = location.pathname === "/" ? "home" : location.pathname.substring(1);
    setActiveLink(path);
  }, [location]);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Pill Navigation */}
      <header className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 justify-center">
        <div className="relative">
          {/* Cyan/Teal Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full p-[2px]">
            <div className="w-full h-full bg-gray-900/95 backdrop-blur-md rounded-full border border-cyan-300/30"></div>
          </div>
          
          {/* Navigation Content */}
          <nav className="relative bg-gray-900/95 backdrop-blur-md rounded-full px-1 py-1 border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
            <div className="flex items-center">
              {navLinks.map(({ id, icon: Icon, text, path }) => (
                <Link
                  key={id}
                  to={path}
                  onClick={() => setActiveLink(id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-300 flex items-center gap-2
                  hover:bg-white/10 border border-transparent hover:border-cyan-400/30 ${
                    activeLink === id
                      ? "bg-white/15 text-white border-cyan-400/50 shadow-md shadow-cyan-500/20"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <Icon className="text-sm" />
                  <span className="whitespace-nowrap">{text}</span>
                </Link>
              ))}
              
              {/* Resume Download */}
              <a
                href="/resume.pdf"
                download
                className="px-3 py-2 rounded-full text-sm font-medium
                transition-all duration-300 flex items-center
                hover:bg-white/10 text-gray-300 hover:text-white ml-1
                border border-transparent hover:border-cyan-400/30"
              >
                Resume
              </a>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="px-3 py-2 rounded-full text-sm font-medium
                transition-all duration-300 flex items-center
                hover:bg-white/10 text-gray-300 hover:text-white ml-1
                border border-transparent hover:border-cyan-400/30"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <FaSun className="text-sm text-yellow-400 hover:scale-110 transition-transform duration-300" />
                ) : (
                  <FaMoon className="text-sm text-blue-400 hover:scale-110 transition-transform duration-300" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile/Tablet Navigation */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md">
        <nav className="px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-lg">
              Portfolio
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <FaSun className="text-yellow-400 text-lg" />
                ) : (
                  <FaMoon className="text-blue-400 text-lg" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-2">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium
                    transition-all duration-300 flex items-center gap-3
                    hover:bg-white/10 ${
                      activeLink === id
                        ? "bg-white/15 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span>{text}</span>
                  </Link>
                ))}
                
                {/* Mobile Downloads */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="block w-full px-4 py-3 rounded-lg text-sm font-medium
                    transition-all duration-300 text-center
                    bg-cyan-600 hover:bg-cyan-700 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}