import Banner from "../components/main/Banner";
import ProductCarousel from "../components/main/ProductCarousel";
import Broadcast from "../components/header/Broadcast";
import Product from "../components/main/Product";
// import { useState } from "react";
import useCartStore from "../store/store";


const Wishlist = () => {
  const { wishlist, clearWishlist } = useCartStore();

  // const [favoriteProducts, setFavoriteProducts] = useState([]);

  return (
    <>
      <div className="mt-14">
        <Broadcast />
        <Banner concept="wishlist" />

        <div className="ml-16 bg-black py-2 px-4 w-30 hover:shadow-md cursor-pointer text-white rounded-3xl" onClick={clearWishlist}>Clear Wishlist</div>

        {wishlist.length == 0 ? 
        <div className="text-center text-2xl mt-2 text-black">Your wishlist is empty</div>
        : 
        <div className="my-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8">
            {wishlist.map((value) => {
              return <Product key={value.id} value={value} />
            })}
          </div>
        </div>
      </div>}


        <ProductCarousel theme="new-releases"/>
      </div>
    </>
  )
}

export default Wishlist;
