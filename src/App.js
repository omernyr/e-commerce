import './App.css';
import Navbar from './components/Navbar';
import { useRoutes } from "react-router-dom";
import routes from './routes';
function App() {

  const showroutes = useRoutes(routes);
 
  return (
    <section className="text-gray-400 bg-white body-font">
      
      {/* <div className="container px-5 py-24  mx-auto">
        <div className="flex flex-wrap -m-4"> */}

          {showroutes}

        {/* </div>
      </div> */}
    </section>
  );
}

export default App;
