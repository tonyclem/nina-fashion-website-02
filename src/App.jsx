import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HomePage,
  SingleProductPage,
  ContactUsPage,
  AboutPage,
  ProductsPage,
  CartPage,
  LoginPage,
  RegisterPage,
  ShippingPage,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        type="default"
        theme="dark"
        limit={1}
      />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products/:slug" element={<SingleProductPage />} />
        <Route exact path="/page/contact" element={<ContactUsPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/signin" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegisterPage />} />
        <Route exact path="/shipping" element={<ShippingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
