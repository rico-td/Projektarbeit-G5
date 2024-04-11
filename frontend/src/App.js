import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
