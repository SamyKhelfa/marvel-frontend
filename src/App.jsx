import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Comics from "./components/Comics";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
