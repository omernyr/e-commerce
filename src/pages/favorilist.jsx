import { useSelector } from "react-redux";
import { setOrder } from '../stores/orderSlice';

function Myorder() {

    const myorders = useSelector(state => state.orderSlice.myorders)
    console.log(myorders);
    return (
        <div className="container px-5 py-24  mx-auto">
            <div className="flex flex-wrap -m-4">
                {myorders.map((myord) => (

                    <section class="text-gray-600 body-font overflow-hidden">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                                <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                    <h1 class="text-white text-3xl title-font font-medium mb-4">{myord.name}</h1>
                                    <div class="flex mb-4">
                                        <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                                    </div>
                                    <p class="leading-relaxed mb-4">şbdfjbdfjbdlfbjdşl Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus  </p>
                                    <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                                        <span class="text-indigo-500">Quantity</span>
                                        <span class="ml-auto text-white">4</span>
                                    </div>
                                    <div class="flex">
                                        <span class="title-font font-medium text-2xl text-white">${myord.price}</span>
                                        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                        <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <img alt="ecommerce" style={{ width: '400px', height: '400px' }} class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={myord.imgURL} />
                            </div>
                        </div>
                    </section>

                ))}
            </div>
        </div>
    )
}
export default Myorder
