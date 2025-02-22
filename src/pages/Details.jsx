import Broadcast from "../components/header/Broadcast";
import { useParams } from "react-router-dom";
import db from "../store/db";
import Breadcrumbs from "../components/header/Breadcrumbs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";

const Details = () => {
  const { slug } = useParams();
  const selectedProduct = db.find((value) => value.slug === slug);

  return (
    <>
    
    <div className="mt-14">
      <Broadcast />
      <div className="mt-6 ml-12 "><Breadcrumbs category={selectedProduct.category} name={selectedProduct.name} collection={selectedProduct.collection}/></div>

      <div className="bg-white pt-4 flex flex-col md:flex-row gap-6 w-330 mx-auto">
        {/* SOL TARAF: İki Görsel */}
        <div className="flex w-full md:w-2/3 gap-2">
          <img
            src={selectedProduct.image[0]}
            alt={selectedProduct.name}
            className="w-100 object-cover"
          />
          <img
            src={selectedProduct.image[1]}
            alt={selectedProduct.name}
            className="w-100 object-cover"
          />
        </div>

        {/* SAĞ TARAF: Ürün Bilgileri */}
        <div className="flex flex-col w-full md:w-1/3">
          {/* Yeni etiketini gösterme */}
          {selectedProduct.isNew && (
            <span className="text-sm text-red-500 font-semibold tracking-wide mb-2">
              NEW
            </span>
          )}

          {/* Ürün adı */}
          <div className="text-3xl font-bold mb-2">{selectedProduct.name.toUpperCase()}</div>

          {/* Renk bilgisi */}
          <p className="mt-4 mb-4">Color: {selectedProduct.color}</p>

          {/* Beden seçimi */}
          {selectedProduct.size.length > 0 ? <><label htmlFor="size" className="mb-1 font-medium">
            Select size
          </label>
          <select
            id="size"
            className="border rounded p-2 mb-6 w-48 focus:outline-none focus:ring-1 focus:ring-gray-300">
            {selectedProduct.size.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select></> : <><div className="my-8 text-red-500 font-bold underline">SOLD OUT</div></> }
            {/* Fiyat bilgisi */}
          <div className="text-2xl font-semibold mb-10">€{selectedProduct.price}.00</div>

          {/* Sepete ekleme butonu */}
          <button className="flex items-center justify-center gap-x-2 bg-black text-white py-3 px-6 rounded hover:bg-gray-900 transition-colors">
            Add to Cart <HiOutlineShoppingBag className="text-xl"/>
          </button>
          <button className="flex items-center justify-center gap-x-2 border border-black text-black py-3 px-6 rounded hover:bg-gray-100 transition-colors mt-2">
            Add to Wishlist <CiHeart className="text-black text-xl"/>
          </button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Details;
