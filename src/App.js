import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <WhatWeDo />
      <Testimonials />
    </>
  );
}

export default App;
