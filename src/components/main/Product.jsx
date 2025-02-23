// import { FaHeart } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Product = ({ value }) => {
    const { name, color, price, image, isNew, discountRate, slug } = value;
    const isNewBool = (isNew == "true") ? true : false;

    const isDiscount = discountRate >= 10 ? true : false;
    const newPrice = isDiscount ? price*(100-discountRate)/100+"0" : price+".00";
    
  return (
    <div className="relative bg-white w-78 overflow-hidden">
      {isNewBool && (
        <div className="absolute top-2 left-2 border-2 border-gray-500 text-gray-800 text-xs px-2 py-1 rounded">
          NEW
        </div>
      )}
      
      {isDiscount && (
        <span className="absolute top-2 left-2 text-sm border-2 border-red-400 text-red-500 tracking-wide mb-2 py-1 px-2 rounded">
          {discountRate}%
        </span>
      )}

      {/* Favori (Wishlist) İkonu */}
      {/* <div className="absolute top-2 right-2 text-xl cursor-pointer">
        {isFavorite ? (
          <FaHeart className="text-red-500" onClick={handleFavorite} />
        ) : (
          <FaRegHeart className="text-gray-500" onClick={handleFavorite} />
        )}
      </div> */}
      <NavLink to={`/${slug}`}>

      {/* Ürün Görseli */}
      <img
        src={image[0]}
        alt={name}
        className="w-full object-cover"
      />
       <img
        src={image[1]}
        alt={name}
        className="absolute top-0 left-0 w-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
      />
      </NavLink>
      {/* Ürün Bilgileri */}
      <div className="p-4">
        <h2 className="text-sm text-gray-700 font-semibold mb-1">
          {name}
        </h2>
      

        <p className="text-xs text-gray-500 mb-3">{color}</p>
        {isDiscount ?  
        <div className="flex gap-x-2">
          <div className="text-md font-semibold mb-8 line-through">€{price}.00</div>
          <div className="text-lg font-semibold mb-8 text-red-500">€{newPrice}</div>
        </div> : <div className="text-lg font-semibold mb-8">€{newPrice}</div> }

      </div>
      
    </div>
  )
}

export default Product;
