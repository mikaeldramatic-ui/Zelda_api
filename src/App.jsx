//Pages//
import Home from "./pages/Home.jsx";
import Compendium from "./pages/Compendium.jsx";
import About from "./pages/About.jsx";

//Routes//
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/compendium" element={<Compendium />} />
      <Route path="/compendium/:category" element={<Compendium />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;
