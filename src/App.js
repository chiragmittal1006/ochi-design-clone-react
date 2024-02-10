import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Page2 from "./components/page2/Page2";
import Page3 from "./components/page3/Page3";
import Page4 from "./components/page4/Page4";
import Page5 from "./components/page5/Page5";
import Page6 from "./components/page6/Page6";
import Page7 from "./components/page7/Page7";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Navbar />
      <Hero />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </div>
  );
}

export default App;
