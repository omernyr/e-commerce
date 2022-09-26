import '../App.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <header className="text-gray-900 bg-green-500 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Baba Alışveriş</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base">
                    <Link to="/" className="text-gray-900 transition-all text-base font-normal mr-5 hover:text-white">Products</Link>
                    <Link to="/myorder" className="text-gray-900 transition-all text-base font-normal mr-5 hover:text-white">My Order</Link>
                    <Link to="/favorilist" className="text-gray-900 transition-all text-base font-normal mr-5 hover:text-white">Favori List</Link>
                    <Link to="/contact" className="text-gray-900 transition-all text-base font-normal mr-5 hover:text-white">Contact</Link>
                    <Link to="/about" className="text-gray-900 transition-all text-base font-normal mr-5 hover:text-white">About</Link>
                    <Link to="/login" className='text-gray-900 transition-all text-base font-normal mr-5 hover:text-white'>Sign Up </Link>
                </nav>
                {/* <button className="inline-flex items-center bg-gray-800 text-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-black rounded text-base mt-4 md:mt-0">
                    Shopping Cart
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
            </div>
        </header>
    )
}
