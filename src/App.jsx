import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-700 selection:text-white">
      <div className="fixed top-0 -z-10 h-full w-full bg-[#2a2a2a]" />
      <Navbar />
      <Hero />
      <Technologies />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
