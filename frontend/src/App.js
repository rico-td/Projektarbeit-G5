import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login_Signup/Login";
import Signup from "./pages/Login_Signup/Signup";
//import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
