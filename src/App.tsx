import { motion } from "framer-motion";
import Nav from "./components/Nav";
import ScrollingBackground from "./components/ScrollingBackground";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function FadeSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={SECTION_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <PageTransition />
      <ScrollProgress />
      <ScrollingBackground />
      <Nav />
      <main>
        <Hero />
        <FadeSection><About /></FadeSection>
        <FadeSection><Experience /></FadeSection>
        <FadeSection><Projects /></FadeSection>
        <FadeSection><Skills /></FadeSection>
        <FadeSection><Education /></FadeSection>
      </main>
      <FadeSection><Footer /></FadeSection>
      <ScrollToTop />
    </>
  );
}

export default App;
