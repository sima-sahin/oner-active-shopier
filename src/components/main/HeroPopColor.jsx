import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import popColor1 from "../../assets/banners/concept/pop-of-color-hero-3.jpg";
import popColor2 from "../../assets/banners/concept/pop-of-color-hero-4.jpg";

const HeroPopColor = () => {
  const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(popColor1);
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImage((prevImage) =>
          prevImage === popColor1 ? popColor2 : popColor1
        );
      }, 60000);
    
      return () => clearInterval(timer);
    }, [currentImage]);

  return (
    <div className="w-full h-max-44 mb-4 mx-auto relative">
          <img src={currentImage} alt="hero" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex flex-col items-left justify-center text-left text-white ml-12">
            <p className="text-5xl font-bold mb-2">POP OF COLOR</p>
            <p className="text-md">The ultimate pick-me-up for routines and mindsets</p>
            <div onClick={() => navigate("/pop-of-color")} className="border border-white p-3 w-28 text-center mt-4 rounded-md text-sm font-semibold cursor-pointer">SHOP NOW</div>
           </div>
        </div>
  )
}

export default HeroPopColor;
