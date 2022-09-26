import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { setOrder } from '../stores/orderSlice';

function Myorder() {

    const myorders = useSelector(state => state.orderSlice.myorders)
    console.log(myorders);
    return (
        <div>
            <Navbar />
            <div className="container px-5 py-24  mx-auto">
                <div className="flex flex-wrap -m-4">
                    {myorders.map((myord) => (
                        <section key={myord.id} className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                        <h1 className="text-white text-3xl title-font font-medium mb-4">{myord.name}</h1>
                                        <div className="flex mb-4">
                                            <a className="flex-grow text-green-400 border-b-2 border-green-300 py-2 text-lg px-1">Description</a>
                                        </div>
                                        <p className="leading-relaxed mb-4">şbdfjbdfjbdlfbjdşl Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus  </p>
                                        <div className="flex border-b mb-3 border-gray-200 py-2">
                                            <span className="text-green-400">Quantity</span>
                                            <span className="ml-auto text-white">{myord.quantity}</span>
                                        </div>
                                        <div className="flex border-b mb-6 border-gray-200 py-2">
                                            <span className="text-green-400">Price</span>
                                            <span className="ml-auto text-white">$99.00</span>
                                        </div>
                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl text-white">Total Cost: ${myord.price}</span>
                                            <button className="flex ml-auto text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded">Button</button>
                                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <img alt="ecommerce" style={{ width: '400px', height: '400px' }} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={myord.imgURL} />
                                </div>
                            </div>
                        </section>

                    ))}
                </div>
            </div>
        </div>
    )
}
export default Myorder
/* <div key={myord.id} className="p-10 w-25">
    <span className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" style={{width:'192px',height:'192px'}} className="object-cover object-center" src={myord.imgURL} />
    </span>
    <div className="mt-4">
        <h3 className="text-green-300 text-xs tracking-widest title-font mb-1">{myord.category}</h3>
        <h2 className="text-white title-font text-lg font-medium">{myord.name} </h2>
        <div className="flex justify-between">
            <p className="mt-1">${myord.price}</p>
        </div>
    </div>
</div> */