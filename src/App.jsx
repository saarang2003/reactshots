
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Counter from "./Projects/Counter";

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/project-one" element={<Counter />} />
   </Routes>
  );
}

export default App;
