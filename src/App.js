import React from "react";
import "./style.css";
import Top from "./Navbar";
import Home from "./Home";
import ExploreHead from "./ExploreHead";
import ExploreSection from "./ExploreSection";
import CreateHead from "./CreateHead";
import CreateSection from "./CreateSection";
import ShareHead from "./ShareHead";
import ShareSection from "./ShareSection";
import Footer from "./Footer";

const App = () => {
  return (
    <body>
      <Top />
      <Home />
      <ExploreHead />
      <ExploreSection />
      <CreateHead />
      <CreateSection />
      <ShareHead />
      <ShareSection />
      <Footer />
    </body>
  );
};

export default App;
