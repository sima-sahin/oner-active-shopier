import Product from "./Product";
import { Link } from "react-router-dom";
import db from "../../store/db";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

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
  else if(theme == "discounted-items"){
    setFilteredProducts([...db.filter((value) => value.discountRate >= 10)]);
    setTitle("DISCOUNTED ITEMS");
    setParagraph("Don't miss out our discounts");
  }
  }, [theme])

  const scrollContainerRef = useRef(null);

  // Geri kaydırma fonksiyonu
  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400, // İstediğiniz kadar piksel kaydırabilirsiniz
        behavior: "smooth",
      });
    }
  };

  // İleri kaydırma fonksiyonu
  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    /* Header */
    <div className="mt-8 mb-12 mx-auto w-330">
    <div className="flex items-center justify-between">
      <div className="m-2">
        <div className="tracking-wide text-2xl font-bold">{title}</div>
        <div>{paragraph}</div>
      </div>
      <div className="underline mr-6">
        <Link to={`/${theme}`}>Shop All</Link>
      </div>
    </div>

    {/* Carousel */}
    <div className="relative">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-light hover:text-gray-600 z-10 hidden md:block">
        <RiArrowLeftWideFill />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-2">
        {filteredProducts.map((value) => (
          <div
            key={value.id}
            className="flex-none snap-center" >
            <Product value={value} />
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl font-light hover:text-gray-600 z-10 hidden md:block">
        <RiArrowRightWideFill />
      </button>
    </div>
  </div>
  )
}

export default ProductCarousel;
