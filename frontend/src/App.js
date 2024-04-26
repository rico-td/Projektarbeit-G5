import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Login from "./pages/Login_Signup/Login";
import Signup from "./pages/Login_Signup/Signup";
import bgImg from "./assets/img/bg2.png";
// import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

function App() {
  const [bg] = useState(bgImg);
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
