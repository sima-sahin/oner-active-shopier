import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import leggings from "../../assets/banners/category-carousel/leggings-carousel.jpg";
import bras from "../../assets/banners/category-carousel/bras-carousel.jpg";
import jackets from "../../assets/banners/category-carousel/jackets-carousel.jpg";
import tops from "../../assets/banners/category-carousel/tops-carousel.jpg";
import hoodies from "../../assets/banners/category-carousel/hoodies-carousel.jpg";
import joggers from "../../assets/banners/category-carousel/joggers-carousel.jpg";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

const categoryImages = [
  { img: leggings, slug: "/leggings" },
  { img: bras, slug: "/bras" },
  { img: tops, slug: "/tops" },
  { img: jackets, slug: "/jackets" },
  { img: joggers, slug: "/joggers" },
  { img: hoodies, slug: "/hoodies" },
];

const CategoryCarousel = () => {
  const navigate = useNavigate();
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
    <div className="mt-8 mb-12 mx-auto w-330">
    <div className="relative">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl font-light hover:text-gray-300 z-10 hidden md:block">
        <RiArrowLeftWideFill />
      </button>

      {/* Kaydırılabilir Alan */}
      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-2">
        {categoryImages.map((value, index) => (
          <div key={index} className="flex-none w-95 snap-center">
            <img src={value.img} alt={`Category ${index + 1}`} className="w-full object-cover cursor-pointer" onClick={() => navigate(value.slug)}/>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-white font-light hover:text-gray-300 z-10 hidden md:block">
        <RiArrowRightWideFill />
      </button>
    </div>
  </div>
  )
}

export default CategoryCarousel;
