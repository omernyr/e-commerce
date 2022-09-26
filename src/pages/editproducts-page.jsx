import React from 'react'
import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from "../stores/productSlice";
import EditProduct from '../components/EditProduct'
import Adminpage from './admin-page'

const EditProductsPage = () => {
    const form = useRef(0);
    const dispatch = useDispatch()
    const products = useSelector(state => state.productSlice.products)
    const [selectedProduct, setSelectedProduct] = useState(false);
    const [modal, setModal] = useState(false);

    const openHandler = prod => {
        form.current.reset()
        setSelectedProduct(false)
        setModal(true)
        // console.log(prod); 
        setSelectedProduct(prod)

    }

    const saveHandler = (e) => {
        e.preventDefault();

        const updatedProduct = {
            ...selectedProduct,
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.imgURL.value,
            stock: e.target.imgURL.value,
            desc: e.target.desc.value,
            category: e.target.category.value,
        }

        dispatch(setProduct(updatedProduct));

    }
    return (
        <div className='flex overflow-hidden'>
            <span className=''>
                <Adminpage />
            </span>
            <div className="container px-5 py-24  mx-auto overflow-auto" style={{ height: "100vh" }}>
                <div className="flex flex-wrap -m-4 overflow-y-auto justify-center">
                    {products.map((prod) =>
                        <EditProduct openHandler={openHandler} key={prod.id} prod={prod} />
                    )}
                </div>
            </div >

            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`${modal ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}>
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Product Details
                            </h3>
                            <button onClick={() => setModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <form ref={form} onSubmit={saveHandler} className='flex flex-col gap-1 mx-3'>
                            Name: <input className='bg-green-300 outline-none border rounded-lg m-1 border-red-400 p-3' type="text" name='name' defaultValue={selectedProduct.name} />
                            Price: <input className='bg-green-300 outline-none border rounded-lg m-1 border-red-400 p-3' type="text" name='price' defaultValue={selectedProduct.price} />
                            İmage: <input className='bg-green-300 outline-none border rounded-lg m-1 border-red-400 p-3' type="text" name='imgURL' defaultValue={selectedProduct.imgURL} />
                            Stock: <input className='bg-green-300 outline-none border rounded-lg m-1 border-red-400 p-3' type="text" name='stock' defaultValue={selectedProduct.stock} />
                            Description: <input className='bg-green-300 outline-none border rounded-lg m-1 border-red-400 p-3' type="text" name='desc' defaultValue={selectedProduct.specifications} />
                            Category: <input className='bg-green-300 outline-none border rounded-lg m-1 border-red-400 p-3' type="text" name='category' defaultValue={selectedProduct.category} />
                            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-gree-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProductsPage