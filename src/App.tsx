import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[hsl(var(--bg))] text-white">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <Navbar />

      <Hero />

      <SelectedWork />

      <Experience />

      <TechStack />

      <About />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;