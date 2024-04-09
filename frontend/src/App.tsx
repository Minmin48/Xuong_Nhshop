import { Toaster } from "@/components/ui/toaster";
import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import AboutPage from "./pages/about";
import ProductManagement from "./pages/admin/product";
import ProductAddPage from "./pages/admin/product/add";
import ProductEditPage from "./pages/admin/product/edit";
import CartPage from "./pages/cart";
import Categorydetail from "./pages/categorydetail";
import ConTactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFound from "./pages/notFound";
import DetailProduct from "./pages/productdetail";
import ShopPage from "./pages/shop";
import Signin from "./pages/signin";
import OrderPage from "./pages/order/page";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="products/:id" element={<DetailProduct />} />
          <Route path="categorys/:id" element={<Categorydetail />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ConTactPage />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<h1>Xin Chào, Admin</h1>} />
          <Route path="products" element={<ProductManagement />} />
          {/* <Route path="products" element={<ProductList />} /> */}
          <Route path="products/add" element={<ProductAddPage />} />
          <Route path="product/:id/edit" element={<ProductEditPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
