
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Counter from "./Projects/Counter";
import Dropdown from "./Projects/Dropdown";
import ScrollToTop from "./ScrollToTop";
import Inputedit from "./Projects/Inputedit";
import AllProjects from "./AllProjects";
import TemperatureConverter from "./Projects/TemperatureConverter";
import OTPInput from "./Projects/OTPInput";
import FormValidate from "./Projects/FormValidate";
import ThemeSwitcher from "./Projects/ThemeSwitcher";
import TodoList from "./Projects/TodoList";

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
        <Route path="/otp" element={<OTPInput />} />
        <Route path="/formvalidate" element={<FormValidate />} />
        <Route path="/themeswitcher" element={<ThemeSwitcher />} />
        <Route path ="/todolist" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
