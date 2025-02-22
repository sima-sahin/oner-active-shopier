import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */

const Breadcrumbs = ({ category, name, collection }) => {
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState();
    const [collectionName, setCollectionName] = useState();

    useEffect(() => {
        if(category === "leggings"){
            setCategoryName("Leggings");
        }
        if(category === "shorts"){
            setCategoryName("Shorts");
        }
        if(category === "hoodies"){
            setCategoryName("Hoodies");
        }
        if(category === "jackets"){
            setCategoryName("Jackets");
        }
        if(category === "tops"){
            setCategoryName("Tops");
        }
        if(category === "joggers"){
            setCategoryName("Joggers");
        }
        if(category === "bras"){
            setCategoryName("Bras");
        }
        if(collection === "effortless"){
            setCollectionName("Effortless");
        }
        if(collection === "timeless"){
            setCollectionName("Timeless");
        }
        if(collection === "soft-motion"){
            setCollectionName("Soft Motion");
        }
        if(collection === "lounge"){
            setCollectionName("Lounge");
        }
        if(collection === "every-day"){
            setCollectionName("Every Day");
        }
        }, [category, collection]);

  return (
    <>
        <div className="breadcrumbs text-md p-2">
          <ul>
            <li><a onClick={() => navigate("/product")}>All Products</a></li>
            <li><a onClick={() => navigate(`/${category}`)}>{categoryName}</a></li>
            <li><a onClick={() => navigate(`/${collection}`)}>{collectionName}</a></li>
            <li>{name}</li>
          </ul>
        </div>
    </>
  )
}

export default Breadcrumbs;
