import '../App.css';
import { addProduct } from "../stores/productSlice"
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Adminpage from '../pages/admin-page';

function Newitempage() {

  const dispatch = useDispatch()

  const handleSubmitItem = (e) => {

    e.preventDefault();

    const product = {

      id: Math.floor(Math.random() * 1000),
      category: e.target.category.value || "Others",
      imgURL: e.target.imgURL.value || 'https://dummyimage.com/500x500/000/fff',
      price: e.target.price.value,
      stock: e.target.stock.value,
      name: e.target.name.value,
      spesifications: e.target.description.value,
    }
    console.log(product);
    dispatch(addProduct(product))
  }
  return (
    <div>
      <div className="flex m-auto w-full">
        <Adminpage />
        <div style={{width:"inherit"}} className='bg-green-300 text-green-500 p-6 rounded-lg'>
          <form onSubmit={handleSubmitItem} className=' flex flex-col gap-2 p-3 text-yellow-50'>
            Name <input className='text-black px-3 py-2 rounded outline-none' required type="text" name='name' />
            Price <input className='text-black px-3 py-2 rounded outline-none' required type='number' name='price' />
            İmage <input className='text-black px-3 py-2 rounded outline-none' placeholder='Please enter to product image URL' type="text" name='imgURL' />
            Stock <input className='text-black px-3 py-2 rounded outline-none' required type="text" name='stock' />
            Desc <textarea className='text-black px-3 py-2 rounded outline-none' name="description" style={{ height: "100px" }} id="" cols="10" rows="10"></textarea>
            Category <input className='text-black px-3 py-2 rounded outline-none' type="text" name='category' />
            <button className='py-2 font-bold rounded bg-black hover:bg-white hover:text-green-600 transition-all '>Add Item</button>
          </form>
          <span className='p-3 float-right'>
            <Link to='/admin' className='rounded-lg bg-red-300 px-3 py-2'>
              Back
            </Link>
          </span>
        </div>

      </div>
    </div>
  )
}
export default Newitempage