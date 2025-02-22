import Banner from "../components/main/Banner";
import Product from "../components/main/Product";
import db from "../store/db";
import { useEffect, useState } from "react";
import Broadcast from "../components/header/Broadcast";

const AllProducts = ({ concept }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const colors = [
      "Pump Green",
      "Iced Green",
      "Vintage Violet",
      "Flame Orange",
      "Glaucous Blue",
      "Orchid Purple",
      "Iris Purple",
      "Sweet Red"
    ];
  
   useEffect (() => {
    if(concept == "new-releases"){
      setFilteredProducts([...db.filter((value) => value.isNew == "true")]);
    } 
    else if(concept == "all-products"){
      setFilteredProducts([...db.filter((value) => value)]);
    } 
    else if(concept == "best-sellers"){
      setFilteredProducts([...db.filter((value) => value.isBestSeller == "true")]);
    } 
    else if(concept == "outlet"){
      setFilteredProducts([...db.filter((value) => value.discountRate >= 40)])
    }
    else if(concept == "pop-of-color"){
      setFilteredProducts([...db.filter((value) => colors.includes(value.color))])
    }
  }, [concept])
  
  return (
    <>
      <div className="mt-14">
        <Broadcast />
        <Banner concept={concept} />
        <div className="my-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8">
              {filteredProducts.map((value) => {
                return <Product key={value.id} value={value} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllProducts;
