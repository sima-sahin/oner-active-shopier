import Broadcast from "../components/header/Broadcast";
import { useParams } from "react-router-dom";
import db from "../store/db";
import Breadcrumbs from "../components/header/Breadcrumbs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductCarousel from "../components/main/ProductCarousel";
import CompletedLook from "../components/main/CompletedLook";
import DetailsAccordion from "../components/main/DetailsAccordion";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { IoMdStar } from "react-icons/io";
import useCartStore from "../store/store";
import { useMemo } from "react";


const Details = () => {
  const { addToCart, addToWishlist, isProductInWishlist, removeFromWishlist } = useCartStore();

  const { slug } = useParams();
  const navigate = useNavigate();

  const selectedProduct = useMemo(() => 
    db.find((value) => value.slug === slug), 
    [slug]
  );

  const isDiscount = selectedProduct.discountRate >= 10 ? true : false;
  const price = isDiscount ? selectedProduct.price*(100-selectedProduct.discountRate)/100 : selectedProduct.price;
  const formattedPrice = `€${price.toFixed(2)}`;
  const isInStock = selectedProduct.size.length > 0 ? true : false;

  const isInWishlist = isProductInWishlist(selectedProduct.id);

  const [selectedColor, setSelectedColor] = useState(selectedProduct.color);

  const handleColorSelect = (color, slug) => {
    setSelectedColor(color);
    navigate(`/${slug}`);
  };

  const otherColors = db.filter((value) => {
    return (value.collection == selectedProduct.collection) && (value.category == selectedProduct.category);
  });

  const completedLook = db.filter((value) => {
    return selectedProduct.color == value.color
  });

  const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeClick = (sizeValue, isAvailable) => {
    if (isAvailable) {
      setSelectedSize(sizeValue);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart({ ...selectedProduct, selectedSize: selectedSize });
  };


  return (
    <>
    
    <div className="mt-14">
      <Broadcast />
      <div className="mt-6 ml-12 "><Breadcrumbs category={selectedProduct.category} name={selectedProduct.name} collection={selectedProduct.collection}/></div>

      <div className="bg-white pt-4 flex flex-col md:flex-row gap-6 w-330 mx-auto">
        {/* SOL TARAF: İki Görsel */}
       
        <div className="flex w-full flex-col">
          <div className="flex flex-row w-full md:w-4/7 gap-2">
            <img
                src={selectedProduct.image[0]}
              alt={selectedProduct.name}
              className="w-110 object-cover"
            />
            <img
              src={selectedProduct.image[1]}
              alt={selectedProduct.name}
              className="w-110 object-cover"
            />
          </div>
          <img
            src={selectedProduct.image[0]}
            alt={selectedProduct.name}
            className="w-222 object-cover mt-2"
          />
        </div>

        {/* SAĞ TARAF: Ürün Bilgileri */}
        <div className="flex flex-col w-full md:w-3/7 ml-[-45px]">
          {/* Yeni etiketini gösterme */}
         <div className="flex items-center justify-between">
          {selectedProduct.isNew === "true" && (
              <span className="text-sm text-red-500 font-semibold tracking-wide mb-2">
                NEW
              </span>
            )}
            {isDiscount && (
              <span className="text-sm text-white bg-red-500 font-semibold tracking-wide mb-2 py-1 px-2">
                {selectedProduct.discountRate}%
              </span>
            )}
         </div>

          {/* Ürün adı */}
          <div className="text-3xl font-bold mb-2">{selectedProduct.name.toUpperCase()}</div>

          {/* Renk bilgisi */}
          <p className="mt-1 mb-6">Color: {selectedProduct.color}</p>

          {/* Color Swatches */} 
          <div className="flex flex-wrap gap-2 mb-4">
            {otherColors.map((value, index) => (
              <button
                key={index}
                onClick={() => handleColorSelect(value.color, value.slug)}
                className={`border hover:border-black cursor-pointer 
                  ${selectedColor === value.color ? "border-black" : "border-zinc-300"}`}>
                <img className="w-16 h-16 object-cover"
                  src={value.image[0]}
                  alt={value.color} />
              </button>
            ))}
          </div>

          {/* Beden seçimi */}
          <div className="my-2">
            <label htmlFor="size">Select size</label>
            <div className="flex items-center justify-evenly my-2">
              {allSizes.map((value, index) => {
                const isAvailable = selectedProduct.size.includes(value);
                const isSelected = selectedSize === value;
                return (
                  <div
                    key={index}
                    onClick={() => handleSizeClick(value, isAvailable)}
                    className={`border border-zinc-300 py-3 text-center min-w-14 
                      ${isAvailable ? `cursor-pointer border-zinc-300 
                         ${isSelected ? "border-2 border-zinc-500 text-black font-semibold" : "text-zinc-700"}`
                      :
                        "cursor-not-allowed line-through text-zinc-400 border-zinc-300"
                      }`}>
                    {value}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Size-Assistant */} 
          <div className="underline cursor-pointer text-xs hover:text-black">Size-Assistant: Find your perfect Size</div>

          <div className="flex justify-between items-start w-full max-w-md my-8">
            <div>
              {/* In Stock */}
              {isInStock ?  
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block w-3 h-3 bg-green-600 rounded-full"></span>
                <span>In Stock</span>
              </div> :
              <div className="flex items-center gap-2 mb-1">
               <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
               <span>Out of Stock</span>
             </div>
             }

              {/* Oner Points */}
              <div className="flex items-center gap-1 ml-[-4px]">
                <IoMdStar className="text-blue-400 text-xl"/>
                <span>{price*100} Oner Points</span>
              </div>
            </div>

             {/* Fiyat bilgisi */}
          {isDiscount ?  <div className="flex gap-x-2 mr-2">
              <div className="text-lg font-semibold line-through">€{selectedProduct.price.toFixed(2)}</div>
              <div className="text-2xl font-semibold text-red-500">{formattedPrice}</div>
            </div> : <div className="text-2xl font-semibold mr-2">{formattedPrice}</div> }
          </div>

          

          {/* Buttons */}
          <button className="flex items-center justify-center gap-x-2 bg-black text-white py-3 px-6 rounded hover:bg-zinc-900 transition-colors" onClick={handleAddToCart}>
            Add to Cart <HiOutlineShoppingBag className="text-xl"/>
          </button>

          <button className="flex items-center justify-center gap-x-2 border border-black text-black py-3 px-6 rounded hover:bg-zinc-100 transition-colors mt-2">
            {isInWishlist ? 
            <div onClick={() => removeFromWishlist(selectedProduct.id)} className="flex items-center justify-center gap-x-2">
              <span>Remove From Wishlist</span>
              <FaHeart className="text-black text-lg"/>
            </div>
            :
            <div onClick={() => addToWishlist(selectedProduct)} className="flex items-center justify-center gap-x-2">
              <span>Add to Wishlist</span>
              <FaRegHeart className="text-black text-lg"/>
            </div>
          }
          </button>

          <div className="bg-zinc-100 rounded p-2 w-full mt-6">
            <p className="flex items-center my-2 pl-4 text-sm"><TbTruckDelivery className="text-lg mr-2"/>Free express shipping over €99</p>
            <p className="flex items-center my-2 pl-4 text-sm"><TbTruckReturn className="text-lg mr-2"/>Easy returns</p>
          </div>

          <DetailsAccordion details={selectedProduct.description}/>

          <CompletedLook array={completedLook}/>

        </div>
      </div>
    </div>

    <ProductCarousel theme="discounted-items"/>

    </>
  )
}

export default Details;
