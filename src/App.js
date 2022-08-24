import { BrowserRouter, Routes, Route} from "react-router-dom"
import {HomePage, SingleProductPage} from "./pages"
import { Navbar, Sidebar} from "./components";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products/:slug" element={ <SingleProductPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
