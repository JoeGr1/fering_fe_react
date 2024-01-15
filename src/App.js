import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import OurStory from "./pages/OurStory/OurStory";
import PressRelease from "./pages/PressRelease/PressRelease";
import Reserve from "./pages/Reserve/Reserve";
import Technology from "./pages/Technology/Technology";
import Privacy from "./pages/Privacy/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home id="10" />} id="10" />
        <Route path="/our-story/" element={<OurStory id="57" />} />
        <Route path="/press-release/" element={<PressRelease id="59" />} />
        <Route path="/technology/" element={<Technology id="55" />} />
        <Route path="/contact/" element={<Reserve id="53" />} />
        <Route path="/privacy-policy/" element={<Privacy id="3" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
