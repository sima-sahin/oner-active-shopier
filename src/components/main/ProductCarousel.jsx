import Product from "./Product";
import { Link } from "react-router-dom";
import db from "../../store/db";
import { useEffect, useState } from "react";

const ProductCarousel = ({ theme }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    if(theme == "new-releases"){
      setFilteredProducts([...db.filter((value) => value.isNew == "true")]);
      setTitle("NEW RELEASES");
      setParagraph("Explore our latest products");
  } 
  else if(theme == "best-sellers"){
      setFilteredProducts([...db.filter((value) => value.isBestSeller == "true")]);
      setTitle("BEST SELLERS");
      setParagraph("Your favourites, right here");
  }
  else if(theme == "true-blue"){
    setFilteredProducts([...db.filter((value) => value.color == "True Blue")]);
    setTitle("TRUE BLUE COLLECTION");
    setParagraph("Best shade of blue, just for you");
  }
  else if(theme == "alpine-green"){
    setFilteredProducts([...db.filter((value) => value.color == "Alpine Green")]);
    setTitle("ALPINE GREEN COLLECTION");
    setParagraph("Best shade of green, just for you");
  }
  }, [theme])

  return (
    <div className="mt-8 mb-12 mx-auto w-330">
      <div className="flex items-center justify-between">
        <div className="m-2">
            <div className="tracking-wide text-2xl font-bold">{title}</div>
            <div>{paragraph}</div>
        </div>
        <div className="underline mr-12"><Link to={`/${theme}`}>Shop All</Link></div>
      </div>  

      <div className="flex gap-2">
        {filteredProducts.slice(1, 5).map((value) => {
          return <Product value={value} key={value.id}/>
        })}
      </div>
    </div>
  )
}

export default ProductCarousel;
