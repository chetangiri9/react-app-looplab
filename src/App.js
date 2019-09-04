import React from "react";
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
    <div>
      <Top />
      <Home />
      <ExploreHead />
      <ExploreSection />
      <CreateHead />
      <CreateSection />
      <ShareHead />
      <ShareSection />
      <Footer />
    </div>
  );
};

export default App;
