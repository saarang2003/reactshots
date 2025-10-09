
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Counter from "./Projects/Counter";
import Dropdown from "./Projects/Dropdown";
import ScrollToTop from "./ScrollToTop";
import Inputedit from "./Projects/Inputedit";
import AllProjects from "./AllProjects";
import TemperatureConverter from "./Projects/TemperatureConverter";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/inputedit" element={<Inputedit />} />
        <Route path="/temperature" element={<TemperatureConverter />} />
        
      </Routes>
    </>
  );
}

export default App;
