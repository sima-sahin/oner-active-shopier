import Broadcast from "../components/header/Broadcast";
import { useParams } from "react-router-dom";
import db from "../store/db";
import Breadcrumbs from "../components/header/Breadcrumbs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Details = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const selectedProduct = db.find((value) => value.slug === slug);
  const isDiscount = selectedProduct.discountRate >= 10 ? true : false;
  const price = isDiscount ? selectedProduct.price*(100-selectedProduct.discountRate)/100+"0" : selectedProduct.price+".00"; 

  const [selectedColor, setSelectedColor] = useState(selectedProduct.color);

  const handleColorSelect = (color, slug) => {
    setSelectedColor(color);
    navigate(`/${slug}`);
  };

  const otherColors = db.filter((value) => {
    return (value.collection == selectedProduct.collection) && (value.category == selectedProduct.category);
  });
  console.log(otherColors)
  return (
    <>
    
    <div className="mt-14">
      <Broadcast />
      <div className="mt-6 ml-12 "><Breadcrumbs category={selectedProduct.category} name={selectedProduct.name} collection={selectedProduct.collection}/></div>

      <div className="bg-white pt-4 flex flex-col md:flex-row gap-6 w-330 mx-auto">
        {/* SOL TARAF: İki Görsel */}
        <div className="flex w-full md:w-5/7 gap-2">
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
        <div className="flex flex-row w-full">
          <img
            src={selectedProduct.image[0]}
            alt={selectedProduct.name}
            className="w-230 object-cover"
          />
        </div>

        {/* SAĞ TARAF: Ürün Bilgileri */}
        <div className="flex flex-col w-full md:w-2/7 ml-[-45px]">
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
          <p className="mt-1 mb-8">Color: {selectedProduct.color}</p>

          {/* Beden seçimi */}
          {selectedProduct.size.length > 0 ? <><label htmlFor="size" className="mb-1 font-medium">
            Select size
          </label>
          <select
            id="size"
            className="border rounded p-2 mb-3 w-48 focus:outline-none focus:ring-1 focus:ring-gray-300">
            {selectedProduct.size.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select></> : <><div className="my-8 text-red-500 font-bold underline">SOLD OUT</div></> }


          {/* Size-Assistant */} 
          <div className="underline cursor-pointer text-xs mb-10 hover:text-black tracking-">Size-Assistant: Find your perfect Size</div>


          {/* Color Swatches */} 
          <div className="flex flex-wrap gap-4 mb-6">
            {otherColors.map((value, index) => (
              <button
                key={index}
                onClick={() => handleColorSelect(value.color, value.slug)}
                className={`border rounded hover:border-black cursor-pointer 
                  ${selectedColor === value.color ? "border-black" : "border-gray-300"}`}>
                <img className="w-16 h-16 object-cover"
                  src={value.image[0]}
                  alt={value.color} />
              </button>
            ))}
          </div>

          {/* Fiyat bilgisi */}
          {isDiscount ?  <div className="flex gap-x-2">
              <div className="text-lg font-semibold mb-8 line-through">€{selectedProduct.price}.00</div>
              <div className="text-2xl font-semibold mb-8 text-red-500">€{price}</div>
            </div> : <div className="text-2xl font-semibold mb-8">€{price}</div> }

          {/* Buttons */}
          <button className="flex items-center justify-center gap-x-2 bg-black text-white py-3 px-6 rounded hover:bg-gray-900 transition-colors">
            Add to Cart <HiOutlineShoppingBag className="text-xl"/>
          </button>
          <button className="flex items-center justify-center gap-x-2 border border-black text-black py-3 px-6 rounded hover:bg-gray-100 transition-colors mt-3">
            Add to Wishlist <CiHeart className="text-black text-xl"/>
          </button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Details;
