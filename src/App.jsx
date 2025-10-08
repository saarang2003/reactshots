
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Counter from "./Projects/Counter";
import Dropdown from "./Projects/Dropdown";
import ScrollToTop from "./ScrollToTop";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
    </>
  );
}

export default App;
