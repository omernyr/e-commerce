import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Loginpage = () => {
    const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clientName = "ömer";
    const clientPassword = "123";

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value, e.target.password.value);
        if (e.target.name.value === clientName && e.target.password.value === clientPassword) {
            return navigate('/admin')
        }
    }
    return (
        <div className='flex justify-center container h-full mt-10'>

            <div className='p-10 rounded-xl bg-green-300 flex items-center w-25 mt-10'>
                <form onSubmit={handleSubmit}>
                    <input className='bg-gray-200 outline-none rounded-xl px-4 py-2 m-2 block' placeholder='Enter to name' type="text" name='name' />
                    <input className='bg-gray-200 outline-none rounded-xl px-4 py-2 m-2 block' placeholder='Enter to password' type="text" name='password' />
                    <button className='bg-red-200 outline-none rounded-xl px-4 py-2 m-2 block'> Login In </button>
                </form>
            </div>
        </div>
    )
}
export default Loginpage