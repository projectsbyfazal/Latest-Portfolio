import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Services from './components/sections/Services/Services';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const handleFinish = useCallback(() => setLoading(false), []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onFinish={handleFinish} />
        ) : (
          <motion.div key="site" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Services />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
