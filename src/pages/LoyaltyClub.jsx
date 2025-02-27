import Broadcast from "../components/header/Broadcast";
import Banner from "../components/main/Banner";
import loyalty1 from "../assets/banners/about-us/loyalty-1.jpg";
import loyalty2 from "../assets/banners/about-us/loyalty-2.jpg";
import { useNavigate } from "react-router-dom";


const LoyaltyClub = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="mt-14 ">
    <Broadcast />
    <Banner concept="loyalty-club"/>
    <div className="">
        <img src={loyalty1} alt="how-it-works" className="w-220 mx-auto"/>
        <div className="bg-black mx-auto text-center text-white px-4 py-2 w-48 rounded-3xl mt-1 mb-6 cursor-pointer hover:bg-zinc-200 " onClick={() => navigate("/profile")}>VIEW MY ACCOUNT</div>

        <img src={loyalty2} alt="how-to-earn-points" className="w-220 mx-auto"/>
        <div className="bg-black mx-auto text-center text-white px-4 py-2 w-48 rounded-3xl mt-1 mb-12 cursor-pointer hover:bg-zinc-200 " onClick={() => navigate("/profile")}>VIEW MY ACCOUNT</div>
    </div>

    <Banner concept="your-turn"/>
    
    </div>
    </>
  )
}

export default LoyaltyClub;
