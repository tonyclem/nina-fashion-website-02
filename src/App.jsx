import { BrowserRouter, Routes, Route} from "react-router-dom"
import {HomePage, SingleProductPage, ContactUsPage, AboutPage, ProductsPage} from "./pages"
import { Navbar, Sidebar, Footer} from "./components";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products/:slug" element={<SingleProductPage />} />
        <Route exact path="/page/contact" element={<ContactUsPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path='/products' element={<ProductsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
