import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

//Components
import Home from "./Components/Home";
import Focus from "./Components/Focus";
import Introduction from "./Components/Introduction";
import Activity from "./Components/Activity";
import Roadmap from "./Components/Roadmap";
import Timeline from "./Components/Timeline";
import Human from "./Components/Human";
import Footer from "./Components/Footer";
import Egypt from "./Components/Egypt";
import Mint from "./Components/Mint";

const App = () => {
  const [scrollState, setScrollState] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    });
  }, [scrollState]);
  return (
    <div>
      <Navbar navBackground={scrollState} />
      <Home id={"home"} />
      <Focus />
      <Introduction id="introduction" />
      <Mint />
      <Activity id="activity" />
      <Roadmap id="roadmap" />
      <Timeline id="timeline" />
      <Egypt />
      <Human />
      <Footer />
    </div>
  );
};

export default App;
