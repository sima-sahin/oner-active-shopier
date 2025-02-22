import Banner from "../components/main/Banner";
import Product from "../components/main/Product";
import db from "../store/db";
import Broadcast from "../components/header/Broadcast";

const Collections = ({ collection }) => {
  
  const filteredArray = db.filter((value) => value.collection == collection);
  
  return (
    <>
      <div className="mt-14">
        <Broadcast />
        <Banner concept={collection} />
        <div className="my-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8">
              {filteredArray.map((value) => {
                return <Product key={value.id} value={value} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collections;
