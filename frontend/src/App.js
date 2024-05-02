import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { useState } from "react";
import Login from "./pages/Login_Signup/Login";
import Signup from "./pages/Login_Signup/Signup";
import bgImg from "./assets/img/bg.jpg";
// import bgImg from "./assets/img/bg2.png";

function App() {
  const [bg] = useState(bgImg);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        width: "100%",
      }}
    >
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
