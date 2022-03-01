import "./App.css";
import About from "./components/About/About";
import Body from "./components/Body/Body";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

function App() {
  return (
    <>
      <Body>
        <Navbar />
        <About />
        <WhatWeDo />
        <Testimonials />
      </Body>
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
