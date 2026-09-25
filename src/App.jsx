//Pages//
import Home from "./pages/Home.jsx";
import Compendium from "./pages/Compendium.jsx";

//Routes//
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/compendium" element={<Compendium />} />
    </Routes>
  );
}
export default App;