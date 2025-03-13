import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import SignUp from "./pages/authentication/SignUp";
import Login from "./pages/authentication/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
