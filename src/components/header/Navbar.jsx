import onerActiveLogo from "../../assets/banners/concept/oner-active-logo.jpg";
import { useNavigate } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import ProductCarousel from "../main/ProductCarousel";
import { useState } from "react";
import useCartStore from "../../store/store";
import newRelease from "../../assets/collection/soft-motion/softmotion-jacket-ash-grey-1.jpg";

const Navbar = () => {
  const { cartCount, wishlistCount } = useCartStore();

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

          <div className="flex gap-8 ml-42">

              <div className="">

                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  <label htmlFor="my-drawer" className="cursor-pointer drawer-button">SHOP</label>
                </div>

                <div className="drawer-side z-40">
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu bg-black min-w-full h-[500px] p-4 mt-14 text-white opacity-95">

                    <div className="flex items-left gap-x-10 h-full">

                      <div className="flex flex-col text-white border-r border-zinc-100 pr-6 ml-90">
                        <div className="font-semibold my-8">SHOP ALL PRODUCTS</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/pop-of-color")}>Pop of Color</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/new-releases")}>New Releases</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/best-sellers")}>Best Sellers</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/outlet")}>Outlet</div>
                      </div>

                      <div className="flex flex-col text-white border-r pr-6">
                        <div className="font-semibold my-8">SHOP BY CATEGORY</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/all-products")}>All Products</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/leggings")}>Leggings</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/joggers")}>Joggers</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/hoodies")}>Hoodies & Sweatshirts</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/jackets")}>Coats & Jackets</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/shorts")}>Shorts</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/bras")}>Sports Bras</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/tops")}>T-Shirts & Tops</div>
                      </div>

                      <div className="flex flex-col text-white pr-6">
                        <div className="font-semibold my-8">SHOP BY COLLECTION</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/effortless")}>Effortless</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/soft-motion")}>SoftMotion™</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/timeless")}>Timeless</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/every-day")}>Everyday</div>
                        <div className="cursor-pointer link-hover py-1 text-sm" onClick={() => navigate("/lounge")}>Lounge</div>
                      </div>

                      <div className="flex-grow flex items-start justify-end mt-[-17px] mr-[-16px]">
                        <div className="relative w-[403px] w-200">
                          <img
                            src={newRelease}
                            alt="New Releases"
                            className="w-full h-full object-cover cursor-pointer opacity-60"
                            onClick={() => navigate("/new-releases")}
                          />
                          <div className="absolute bottom-4 left-4 text-xl font-semibold hover:text-zinc-300 cursor-pointer" onClick={() => navigate("/new-releases")}>
                            New Releases
                          </div>
                        </div>
                      </div>

                    </div>

                  </ul>
                </div>
              </div>


            <div className="cursor-pointer" onClick={() => navigate("/loyalty-club")}>LOYALTY CLUB</div>
            <div className="cursor-pointer" onClick={() => navigate("/about-us")}>ABOUT US</div>
          </div>

          <div className="flex items-center gap-4 mr-4 relative">

            <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className=""><SlMagnifier className="cursor-pointer text-xl" />
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

            <div className="relative">
              {wishlistCount() > 0 && ( 
                <span className="absolute -top-1 -right-1 bg-zinc-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full cursor-pointer" onClick={() => navigate("/wishlist")}>
                  {wishlistCount()}
                </span>
              )}
              <CiHeart
                className="cursor-pointer text-2xl"
                onClick={() => navigate("/wishlist")}
              />
            </div>

            <div className="relative">
              <RxPerson className="cursor-pointer text-xl" onClick={() => navigate("/login")}/>
            </div>

            <div className="relative">
              {cartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-zinc-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full cursor-pointer" onClick={() => navigate("/cart")}>
                  {cartCount()}
                </span>
              )}
              <HiOutlineShoppingBag
                className="cursor-pointer text-xl"
                onClick={() => navigate("/cart")}
              />
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
