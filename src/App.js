import "./App.css";
import CarbosCalulator from "./Components/CarbosCalulator";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Hero2 from "./Components/Hero2";
import Hero3 from "./Components/Hero3";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import Strip from "./Components/Strip";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <CarbosCalulator />
      <Strip />
      <Service />
      <Contact />
    </>
  );
}

export default App;
