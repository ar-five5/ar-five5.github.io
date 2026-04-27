import React from 'react';
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ParticlesBackground } from "./components/ui/ParticlesBackground";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative z-10 selection:bg-white selection:text-black cursor-none">
      <CustomCursor />
      <ParticlesBackground />

      <div className="w-full md:w-80 lg:w-96 md:h-screen md:fixed left-0 top-0 border-b md:border-b-0 md:border-r border-[#222] bg-black/60 backdrop-blur-xl z-20">
        <Sidebar />
      </div>

      <div className="flex-1 md:ml-80 lg:ml-96 min-h-screen flex flex-col relative z-10">
        <div className="sticky top-0 w-full z-30 bg-black/60 backdrop-blur-xl border-b border-[#222]">
          <TopNav />
        </div>

        <main className="flex-1 p-6 md:p-12 lg:p-20 max-w-4xl w-full mx-auto">
          <Routes>
            <Route path="/" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </main>

        <footer className="w-full border-t border-[#222] p-6 text-center mt-auto bg-black/40 backdrop-blur-md">
          <p className="text-xs font-mono text-[#666]">
            © {new Date().getFullYear()} AMOGH RAJ / DESIGNED & BUILT WITH PRECISION.
          </p>
        </footer>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <HashRouter>
        <Layout />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
