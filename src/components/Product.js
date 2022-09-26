import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { addOrder, setOrder } from '../stores/orderSlice';
import { addProduct, deleteProduct, setProduct } from '../stores/productSlice';
import data from "../productsAPI";
export default function Product({ prod }) {

    const dispatch = useDispatch()

    const addProduct = () => {

        dispatch(addOrder(prod))
    }

    return (
        
        <div className="p-10 bg-red-300 rounded w-25 m-4">
            <span className="block relative h-48 rounded overflow-hidden ">
                <img alt="ecommerce" style={{ width: '192px', height: '192px' }} className="object-cover object-center" src={prod.imgURL} />
            </span>
            <div className="mt-4">
                <h3 className="text-green-300 text-xs tracking-widest title-font mb-1">{prod.category}</h3>
                <h2 className="text-white title-font text-lg font-medium">{prod.name} </h2>
                <div className="flex justify-between">
                    <p className="mt-1">${prod.price}</p>
                    <button onClick={addProduct}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className='w-6 h-6 text-green-300'>
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>



    )
}