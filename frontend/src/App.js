import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { useState } from "react";
import Login from "./pages/Login_Signup/Login";
import Signup from "./pages/Login_Signup/Signup";
import bgImg from "./assets/img/bg.jpg";

function App() {
  const [bg] = useState(bgImg);
  return (
    <div style={{ backgroundImage: `url(${bg}) ` }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
