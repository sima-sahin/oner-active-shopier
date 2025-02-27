import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import bestSellers from "../../assets/banners/concept/best-sellers-banner.jpg";
import newReleases from "../../assets/banners/concept/new-release-banner.jpg";
import outlet from "../../assets/banners/concept/outlet-banner.jpg";
import wishlist from "../../assets/banners/concept/wishlist-banner.jpg";
import loyaltyClub from "../../assets/banners/concept/loyalty-club-banner.jpg";
import popOfColor from "../../assets/banners/concept/pop-of-color-banner.jpg";
import yourTurn from "../../assets/banners/concept/your-turn-banner.jpg";

import effortless from "../../assets/banners/collection/effortless-banner.jpg";
import everyDay from "../../assets/banners/collection/everyday-banner.jpg";
import lounge from "../../assets/banners/collection/lounge-banner.jpg";
import softMotion from "../../assets/banners/collection/soft-motion-banner.jpg";
import timeless from "../../assets/banners/collection/timeless-banner.jpg";

import allProducts from "../../assets/banners/category/all-products-banner.jpg";
import hoodies from "../../assets/banners/category/hoodies-banner.jpg";
import jackets from "../../assets/banners/category/jackets-banner.jpg";
import joggers from "../../assets/banners/category/joggers-banner.jpg";
import shorts from "../../assets/banners/category/shorts-banner.jpg";
import tops from "../../assets/banners/category/tops-banner.jpg";


const Banner = ({ concept }) => {
  const navigate = useNavigate();

  const bannerSelector = useCallback(() => {
    switch (concept) {
      case "best-sellers":
        return bestSellers;
      case "effortless":
        return effortless;
      case "every-day":
        return everyDay;
      case "new-releases":
        return newReleases;
      case "lounge":
        return lounge;
      case "soft-motion":
        return softMotion;
      case "timeless":
        return timeless;
      case "outlet":
        return outlet;
      case "all-products":
        return allProducts;
      case "hoodies":
        return hoodies;
      case "jackets":
        return jackets;
      case "joggers":
        return joggers;
      case "shorts":
        return shorts;
      case "tops":
        return tops;
      case "wishlist":
        return wishlist;
      case "pop-of-color":
        return popOfColor;
      case "loyalty-club":
        return loyaltyClub;
      case "your-turn":
        return yourTurn;
      default:
        return allProducts;
  }
}, [concept])

const [currentImage, setCurrentImage] = useState(bannerSelector(concept));
useEffect(() => {
  setCurrentImage(bannerSelector());
}, [bannerSelector]);


  return (
    <div className="w-full h-max-44 mb-12 mx-auto cursor-pointer" onClick={(() => navigate(`/${concept}`))}>
      <img src={currentImage} alt="banner" />
    </div>
  )

}

export default Banner;
