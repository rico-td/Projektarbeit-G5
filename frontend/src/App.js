import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
