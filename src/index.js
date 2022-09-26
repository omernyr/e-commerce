import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
} from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import products from './productsAPI';
// import ErrorPage from "./pages/error-page";
// import Admin from './pages/admin-page';
// import Myorder from "./pages/myorder"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "myorder",
//     element: <Myorder />,
//   },
//   {
//     path: "admin",
//     element: <Admin />,
//   },
// ]);

const setDefaultProducts = () => {
  if (localStorage.getItem('products') === null || JSON.parse(localStorage.getItem('products')).length === 0) {

    localStorage.setItem('products', JSON.stringify(products))
    
  }
}
setDefaultProducts()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);