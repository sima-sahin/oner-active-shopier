import onlyBest from "../../assets/banners/concept/only-the-best-hero.jpg";
import { useNavigate } from "react-router-dom";

const HeroBest = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-max-44 mb-4 mx-auto relative">
      <img src={onlyBest} alt="hero" className="w-full h-full object-cover"/>
      <div className="absolute inset-0 flex flex-col items-left justify-center text-left text-white ml-20">
        <p className="text-5xl font-bold mb-2">ONLY THE BEST</p>
        <p className="text-md">Lounging or lunging, these best sellers are for you</p>
        <div onClick={() => navigate("/best-sellers")} className="border border-white p-3 w-28 text-center mt-4 rounded-md text-sm font-semibold cursor-pointer">SHOP NOW</div>
       </div>
    </div>
  )
}

export default HeroBest;
