import Admin from "./pages/admin-page";
import Myorder from "./pages/myorder-page";
import Products from "./components/Products";
import Favorilist from "./pages/myorder-page";
import Contact from "./pages/contact-page";
import About from "./pages/about-page"
import NewItem from "./components/NewItem"
import Dashboard from "./pages/dashboard-page";
import ProductsPage from "./pages/editproducts-page";
import Loginpage from "./pages/login-page";

const routes = [
  {
    path: "/",
    element: <Products />,
  },
  {
    path: '/login',
    element: <Loginpage />,
  },
  {
    path: "/myorder",
    element: <Myorder />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: '/admin/newitem',
    element: <NewItem />,
  },
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/admin/products',
    element: <ProductsPage />,
  },
  {
    path: "/favorilist",
    element: <Favorilist />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  }
];

export default routes
