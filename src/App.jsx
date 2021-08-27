import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/about/About";
import Cover from "./components/cover/cover";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollHeight(position);
};

  useEffect(() => {
  window.addEventListener("scroll", handleScroll);
}, [scrollHeight])

  return (
    <div className="App">
      <Navbar scrollHeight={scrollHeight}/>
     <Cover/>
      <About/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
