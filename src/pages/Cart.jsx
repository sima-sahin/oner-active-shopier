import useCartStore from "../store/store";
import Product from "../components/main/Product";
import Broadcast from "../components/header/Broadcast";
import { FaHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SiVisa } from "react-icons/si";
import { SiPaypal } from "react-icons/si";
import { SiMastercard } from "react-icons/si";
import { FaCcAmex } from "react-icons/fa";
import { SiApplepay } from "react-icons/si";


const Cart = () => {
  const { cart, removeFromCart, clearCart, increment, decrement, wishlist, saveForLater, cartCount, totalPrice, totalOnerPoints, shippingCost} = useCartStore();

  const formattedTotal = `€${(totalPrice()+shippingCost()).toFixed(2)}`;

  const navigate = useNavigate();
  const cartItems = cartCount();

  const latestCartItems = [...cart].reverse();

  return (
    <div className="mt-14">
      <Broadcast />

      {/* HEADER */}
      <div className="text-center mt-10">
          <p className="text-2xl font-semibold text-black">Your Shopping Cart</p>
      </div>
      <div 
      className="flex flex-col ml-10 bg-black text-white px-4 py-2 w-26 text-center mb-8 cursor-pointer hover:shadow-md rounded-3xl"
      onClick={() => clearCart()}>Clear Cart</div>

      {/* LEFT */}
      <div className="flex flex-row ml-10">
        
        <div className="flex w-5/7">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-y-6 w-full">
            {latestCartItems.map((value) => {
              const discountedPrice = value.discountRate > 10  
              ? value.price * (100 - value.discountRate) / 100 
              : value.price;
              return (
                <>
                <div className="flex flex-col md:flex-row items-center gap-x-4 text-black relative">
                  {value.discountRate > 10  && (
                  <span className="text-sm text-white bg-red-500 font-semibold tracking-wide mb-2 py-1 px-2 absolute top-1 right-7">
                    {value.discountRate}%
                  </span>
                  )}
                {/* Ürün Görseli */}
                <div className="w-42 flex-shrink-0">
                  <img
                    src={value.image[0]}
                    alt={value.name}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => navigate(`/${value.slug}`)}
                  />
                </div>
          
                {/* Ürün Bilgileri */}
                <div className="flex-1">
                  {/* Üst Kısım: İsim, Fiyat */}
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <div className="text-md font-semibold">{value.name}</div>
                      <p className="text-zinc-500 text-sm">{value.color}</p>
                      {value.discountRate > 10 ?  
                        <div className="flex gap-x-2 mr-2 mt-10">
                          <div className="text-md font-semibold line-through">€{value.price.toFixed(2)}</div>
                          <div className="text-lg font-semibold text-red-500">€{discountedPrice.toFixed(2)}</div>
                        </div> : <div className="text-lg mt-10 font-semibold mr-2">€{value.price.toFixed(2)}</div> }
                    </div>
                  </div>
          
                  {/* Puan Bilgisi */}
                  <div className="flex items-center text-zinc-600 my-2 text-sm">
                    <IoMdStar className="text-blue-500 mr-1" />
                    <span>{value.onerPoints} Points</span>
                  </div>
          
                  {/* Beden, Miktar, vb. */}
                  <div className="flex items-center gap-2">
                    {/* Seçili beden */}
                    {value.size && (
                      <div className="border px-3 py-1 rounded-3xl">
                        {value.selectedSize}
                      </div>
                    )}
          
                    {/* Miktar Ayarı */}
                    <div className="flex items-center border rounded-3xl">
                      <button
                        onClick={() => decrement(value.id, value.selectedSize)}
                        className="px-2 py-[2px] hover:bg-zinc-200 text-xl">-
                      </button>
                      <span className="px-2 text-sm">{value.quantity}</span>
                      <button
                        onClick={() => increment(value.id, value.selectedSize)}
                        className="px-2 py-[2px] hover:bg-zinc-200 text-xl">+
                      </button>
                    </div>
                  </div>
                </div>
          
                {/* Sağ Kısım: "Save for later" ve Ürünü Kaldırma */}
                <div className="flex flex-col items-end justify-between h-full">
                  {/* Kapatma ikonu (Sepetten kaldır) */}
                  <button
                    onClick={() => removeFromCart(value.id)}
                    className="text-zinc-500 hover:text-black"
                    title="Remove from Cart">
                    <IoCloseSharp className="text-black" />
                  </button>
          
                  {/* "Save for later" */}
                  <button
                    onClick={() => saveForLater(value.id)}
                    className="flex items-center gap-1 text-sm mt-4 hover:text-black">
                    Save for later
                    <FaHeart />
                  </button>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="w-full h-[0.5px] bg-zinc-300"></div>
              </>
              )
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col w-2/7 m-8 mx-12 font-semibold text-sm">

            <div className="container w-full bg-zinc-100 p-6">
              <p className="text-lg font-bold">SUMMARY</p>
              <div className="bg-zinc-300 w-full h-[0.1px] my-2"></div>
              <div className="flex items-center"> <IoMdStar className="text-blue-500 mr-1 mt-2 mb-4 text-xl" /> {totalOnerPoints()} Oner Points for this purchase</div>

              <div className="flex items-center justify-between my-2 pr-4">
                <p className="flex">Shipping</p>
                <p className="flex">{`€${shippingCost().toFixed(2)}`}</p>
              </div>

              <div className="flex items-center justify-between my-2">
                <p className="flex text-lg">Total ({cartItems} items)</p>
                <div className=" text-lg">
                  <p>{formattedTotal}</p>
                  <p className="italic text-xs">incl. sales text</p>
                </div>
              </div>

              <div className="text-xl flex items-center justify-center bg-black py-3 px-6 mx-6 text-white hover:bg-zinc-900 cursor-pointer my-8 md:text-sm sm:text-sm rounded-3xl" onClick={() => navigate("/checkout")}>CHECK OUT SECURELY<MdKeyboardDoubleArrowRight className="text-2xl"/></div>

              <div className="flex items-center justify-evenly my-2">
                <div className="flex text-2xl"><SiVisa/></div>
                <div className="flex text-xl"><SiPaypal/></div>
                <div className="flex text-2xl"><SiMastercard/></div>
                <div className="flex text-2xl"><FaCcAmex/></div>
                <div className="flex text-3xl"><SiApplepay/></div>
              </div>

              <div className="bg-zinc-300 w-full h-[0.1px] my-4"></div>
              
              <div className="text-xs text-center font-normal mt-4">Discount codes or giftcards can be entered on the checkout page.</div>

            </div>
            
        </div>

      </div>

      {/* WISHLIST */}
      {wishlist.length == 0 ? 
        <div className="text-center text-2xl mt-10">Your wishlist is empty</div>
        : 
        <div className="my-12">
          <div className="text-lg font-semibold ml-18 mb-2">Your Wishlist</div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8">
            {wishlist.map((value) => {
              return <Product key={value.id} value={value} />
            })}
          </div>
        </div>
      </div>}

    </div>
  )
}

export default Cart;
