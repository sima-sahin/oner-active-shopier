import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/store";


const CompletedLook = ({ array }) => {
  const { addToCart } = useCartStore();

  const navigate = useNavigate();
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productIndex, newSize) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productIndex]: newSize,
    }));
  };

  const handleAddToCart = (product, productIndex) => {
    const size = selectedSizes[productIndex];
    // if (!size) {
    //   alert("Please select a size before adding to cart.");
    //   return;
    // }
    addToCart({ ...product, selectedSize: size });
  };

  return (
    <div className="max-w-xl mx-auto px-4 mt-1">
      <h2 className="text-3xl font-bold mb-5">Complete the look</h2>
      {array.slice(0, 3).map((item, index) => (
        <div key={index} className="flex gap-6 mb-8">
          <img
            src={item.image[0]}
            alt={item.name}
            className="w-32 h-auto object-cover cursor-pointer"
            onClick={() => navigate(`/${item.slug}`)}
          />

          <div>
            <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
            <p className="text-zinc-700 mb-2">€{item.price.toFixed(2)}</p>

            <select
              value={selectedSizes[index] || ""}
              onChange={(e) => handleSizeChange(index, e.target.value)}
              className="border p-1 rounded mb-2">
              <option value="" disabled>
                Select size
              </option>
              {item.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <div>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-zinc-800" onClick={() => handleAddToCart(item, index)}>
              Quick Add
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CompletedLook;
