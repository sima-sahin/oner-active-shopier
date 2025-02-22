// import { FaHeart } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Product = ({ value }) => {
    const { name, color, price, image, isNew, discountRate, slug } = value;
    const isNewBool = (isNew == "true") ? true : false;

    const isDiscount = (discountRate >= 40) ? true : false;
    
  return (
    <div className="relative bg-white w-78 overflow-hidden">
      {isNewBool && (
        <div className="absolute top-2 left-2 bg-white border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded">
          NEW
        </div>
      )}
       {isDiscount && (
        <div className="absolute top-2 left-2 bg-white border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded">
          %{discountRate}
        </div>
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
      

        <p className="text-xs text-gray-500 mb-2">{color}</p>
        <p className="text-base font-semibold">€{price}.00</p>
      </div>
      
    </div>
  )
}

export default Product;
