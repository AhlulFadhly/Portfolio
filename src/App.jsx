import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";

import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";

let isIntroPlayed = false;

function App() {
  const [showIntro, setShowIntro] = useState(!isIntroPlayed);

  useEffect(() => {
    if (!showIntro) return;

    const timer = setTimeout(() => {
      setShowIntro(false);
      isIntroPlayed = true;
    }, 3000);

    return () => clearTimeout(timer);
  }, [showIntro]);

  return (
    <>
      {showIntro && <Intro />}

      <div className={showIntro ? "site site--hidden" : "site site--show"}>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;