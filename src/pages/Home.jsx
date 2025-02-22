import Banner from "../components/main/Banner";
import ProductCarousel from "../components/main/ProductCarousel";
import CategoryCarousel from "../components/main/CategoryCarousel";
import HeroPopColor from "../components/main/HeroPopColor";
import HeroBest from "../components/main/HeroBest";
import Broadcast from "../components/header/Broadcast";

const Home = () => {
  return (
    <div className="mt-14">
      <Broadcast />
      <HeroPopColor />
      <ProductCarousel theme="new-releases"/>
      <HeroBest/>
      <ProductCarousel theme="best-sellers"/>
      <CategoryCarousel />
      <ProductCarousel theme="alpine-green"/>
      <Banner concept="outlet" />
      <ProductCarousel theme="true-blue"/>
    </div>
  )
}

export default Home;
