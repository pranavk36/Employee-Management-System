import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import EmpForm from "./EmpForm.js";
import EmpList from "./EmpList.js";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/EmpForm" elememt={<EmpForm />} />
          <Route path="/EmpList" element={<EmpList />} />
          <Route path="/TaskList" element={<TaskList />} />
        </Routes>
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
