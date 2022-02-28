import "./App.css";
import About from "./components/About/About";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
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
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
