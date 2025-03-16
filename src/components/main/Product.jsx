import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import useCartStore from "../../store/store";


const Product = ({ value }) => {
  const { addToWishlist, removeFromWishlist, isProductInWishlist } = useCartStore();

  const isInWishlist = isProductInWishlist(value.id);

  const { name, color, price, image, isNew, discountRate, slug } = value;
  const isNewBool = (isNew == "true") ? true : false;

  const isDiscount = discountRate >= 10 ? true : false;
  const newPrice = isDiscount ? price*(100-discountRate)/100 : price;
  const formattedPrice = `€${newPrice.toFixed(2)}`;

    
  return (
    <div className="relative bg-white w-78 overflow-hidden">
      {isNewBool && (
        <div className="absolute top-2 left-2 border-1 border-gray-500 text-gray-800 text-xs px-2 py-1 rounded font-semibold z-20">
          NEW
        </div>
      )}
      
      {isDiscount && (
        <span className="absolute top-2 left-2 text-sm border-1 border-red-400 text-red-500 tracking-wide mb-2 py-1 px-2 rounded font-semibold z-20">
          {discountRate}%
        </span>
      )}

      {/* Favori (Wishlist) İkonu */}
      <div className="absolute top-2 right-2 text-xl cursor-pointer z-20">
        {isInWishlist ? (
          <FaHeart className="text-zinc-800" onClick={() => removeFromWishlist(value.id)}/>
        ) : (
          <CiHeart className="text-zinc-800 text-2xl" onClick={() => addToWishlist(value)}/>
        )}
      </div>

      <NavLink to={`/${slug}`}>

      {/* Ürün Görseli */}
     <div className="relative group z-10">
      <img
          src={image[0]}
          alt={name}
          className="w-full object-cover"
        />
       <img
          src={image[1]}
          alt={name}
          className="absolute top-0 left-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
     </div>

      </NavLink>
      {/* Ürün Bilgileri */}
      <div className="p-4">
        <h2 className="text-sm text-gray-700 font-semibold mb-1">
          {name}
        </h2>
      

        <p className="text-xs text-gray-500 mb-3">{color}</p>
        {isDiscount ?  
        <div className="flex gap-x-2">
          <div className="text-md font-semibold mb-8 line-through">€{price.toFixed(2)}</div>
          <div className="text-lg font-semibold mb-8 text-red-500">{formattedPrice}</div>
        </div> : <div className="text-lg font-semibold mb-8">{formattedPrice}</div> }

      </div>
      
    </div>
  )
}

export default Product;
