// src/App.jsx
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LoadingScreen from "./components/LoadingScreen";
import { FaMoon, FaSun, FaUser, FaCode, FaProjectDiagram } from "react-icons/fa";
import siteConfig from "./config/siteConfig";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [isLoading, setIsLoading] = useState(true);

  // Giảm thời gian loading xuống và thêm timeout để đảm bảo loading không kéo dài vô hạn
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Giảm xuống 1 giây

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const targetPosition = section.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Navigation items
  const navItems = [
    { id: "profile", icon: FaUser, label: "Giới thiệu" },
    { id: "skills", icon: FaCode, label: "Kỹ năng" },
    { id: "projects", icon: FaProjectDiagram, label: "Dự án" },
  ];

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <FaSun className="w-6 h-6 text-yellow-500 animate-pulse-slow" />
            ) : (
              <FaMoon className="w-6 h-6 text-gray-700 animate-pulse-slow" />
            )}
          </button>

          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg z-40">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-center space-x-8 py-4">
                {navItems.map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === id
                        ? "bg-primary-500 text-white transform scale-105"
                        : "text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto pt-24 pb-12 space-y-24">
            <section id="profile" className="scroll-mt-24">
              <Profile />
            </section>

            <section id="skills" className="scroll-mt-24">
              <Skills />
            </section>

            <section id="projects" className="scroll-mt-24">
              <Projects />
            </section>
          </main>

          {/* Footer */}
          <footer className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
              <p className="text-sm">
                © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;