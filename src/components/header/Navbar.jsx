import onerActiveLogo from "../../assets/banners/concept/oner-active-logo.jpg";
import { useNavigate } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import ProductCarousel from "../main/ProductCarousel";
import { useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${input}`);
    setInput("");
  }

  return (
    <>
      <div className="fixed top-0 left-0 bg-white w-full h-14 z-50">
        <div className="flex justify-between items-center items-evenly h-full p-4 mx-6">

          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}><img src={onerActiveLogo} alt="oner-active-logo" className="w-10"/></div>

          <div className="flex gap-8">

              <div className="">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  <label htmlFor="my-drawer" className="cursor-pointer drawer-button">SHOP</label>
                </div>
                <div className="drawer-side z-40">
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu bg-black min-w-full h-80 p-4 mt-14 text-white opacity-95 ">

                    <div className="flex items-center justify-center gap-x-10">
                      <div className="flex flex-col text-white">
                        <div className="font-semibold my-2">SHOP ALL PRODUCTS</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/pop-of-color")}>Pop of Color</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/new-releases")}>New Releases</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/best-sellers")}>Best Sellers</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/outlet")}>Outlet</div>
                      </div>

                      <div className="flex flex-col text-white">
                        <div className="font-semibold my-2">SHOP BY CATEGORY</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/all-products")}>All Products</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/leggings")}>Leggings</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/joggers")}>Joggers</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/hoodies")}>Hoodies & Sweatshirts</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/jackets")}>Coats & Jackets</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/shorts")}>Shorts</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/bras")}>Sports Bras</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/tops")}>T-shirts & Tops</div>
                      </div>

                      <div className="flex flex-col text-white">
                        <div className="font-semibold my-2">SHOP BY COLLECTION</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/effortless")}>Effortless</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/soft-motion")}>SoftMotion™</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/timeless")}>Timeless</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/every-day")}>Everyday</div>
                        <div className="cursor-pointer link-hover py-1 text-xs" onClick={() => navigate("/lounge")}>Lounge</div>
                      </div>

                    </div>

                  </ul>
                </div>
              </div>


            <div className="cursor-pointer" onClick={() => navigate("/loyalty-club")}>LOYALTY CLUB</div>
            <div className="cursor-pointer" onClick={() => navigate("/about-us")}>ABOUT US</div>
          </div>

          <div className="flex items-center gap-4 mr-4">

            <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className=" "><SlMagnifier className="cursor-pointer text-xl" />
                </label>
              </div>
              <div className="drawer-side z-40">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu w-full h-190 p-4 mt-14 bg-white">
                  <div className="mx-auto ">
                    <div className="flex items-center m">
                      <label className="input w-300 join-item">
                      <svg className="h-[1em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                      <input type="search" required placeholder="Search" onChange={(e) => setInput(e.target.value)}/>
                      </label>
                      <button className="btn btn-neutral join-item" onClick={handleClick}>Enter</button>
                    </div>
                    <ProductCarousel theme="best-sellers"/>
                  </div>
                </ul>
              </div>
            </div>
            <CiHeart className="cursor-pointer text-6xl" onClick={() => navigate("/wishlist")}/>
            <RxPerson className="cursor-pointer text-5xl" onClick={() => navigate("/profile")}/>
            <HiOutlineShoppingBag className="cursor-pointer text-5xl" onClick={() => navigate("/cart")}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
