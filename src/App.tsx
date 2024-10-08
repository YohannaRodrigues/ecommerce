import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import LoginModal from "./components/LoginModal";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <div className=" bg-custom font-montserrat">
      <div className="bg-clean rounded-3xl relative">
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<AllProducts />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="/wishlist" element={<ProtectedRoute />}>
              <Route path="/wishlist" element={<Wishlist />} />
            </Route>
            <Route path="/account" element={<ProtectedRoute />}>
              <Route path="/account" element={<Profile />} />
            </Route>
          </Routes>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Footer />
          <Cart />
          <LoginModal />
        </Provider>
      </div>
    </div>
  );
}

export default App;
