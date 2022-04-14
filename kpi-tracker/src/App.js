import "./App.css";
import AttendanceList from "./pages/user/attendance/list";
import Dashboard from "./pages/user/dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";

function App() {
  //router
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/attendance" element={<AttendanceList />} />
      </Routes>
    </Router>
  );
}

export default App;
