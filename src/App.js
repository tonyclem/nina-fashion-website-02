import { BrowserRouter, Routes, Route} from "react-router-dom"
import {HomePage } from "./pages"
import { Navbar, Sidebar} from "./components";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
