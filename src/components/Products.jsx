import Product from "./Product";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
function Products() {

  const products = useSelector((state) => state.productSlice.products)

  return (
    <>
      <Navbar />
      <div className="container px-5 py-24  mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {
            products.map((prod) =>
              <Product key={prod.id} prod={prod} />)
          }
        </div>
      </div>
    </>
  )
}

export default Products;