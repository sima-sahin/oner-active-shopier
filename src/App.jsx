import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Categories from "./pages/Categories";
import Collections from "./pages/Collections";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Navbar from "./components/header/Navbar";
import Footer from "./components/header/Footer";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/:slug" element={<Details />} />

          <Route path="/all-products" element={<AllProducts concept="all-products" />} />
          <Route path="/pop-of-color" element={<AllProducts concept="pop-of-color" />} />
          <Route path="/best-sellers" element={<AllProducts concept="best-sellers" />} />
          <Route path="/new-releases" element={<AllProducts concept="new-releases" />} />
          <Route path="/outlet" element={<AllProducts concept="outlet" />} />

          <Route path="/leggings" element={<Categories category="leggings"/>} />
          <Route path="/shorts" element={<Categories category="shorts"/>} />
          <Route path="/hoodies" element={<Categories category="hoodies"/>} />
          <Route path="/jackets" element={<Categories category="jackets"/>} />
          <Route path="/tops" element={<Categories category="tops"/>} />
          <Route path="/joggers" element={<Categories category="joggers"/>} />
          <Route path="/bras" element={<Categories category="bras"/>} />

          <Route path="/effortless" element={<Collections collection="effortless"/>} />
          <Route path="/timeless" element={<Collections collection="timeless"/>} />
          <Route path="/soft-motion" element={<Collections collection="soft-motion"/>} />
          <Route path="/lounge" element={<Collections collection="lounge"/>} />
          <Route path="/every-day" element={<Collections collection="every-day"/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App;