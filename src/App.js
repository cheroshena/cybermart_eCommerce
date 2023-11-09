import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Navigate
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import SellerSignIn from "./pages/Seller/SellerSignIn";
import SellerSignUp from "./pages/Seller/SellerSignUp";
import SellerHeader from "./components/Seller/SellerHeader";
import SellerSidebar from "./components/Seller/SellerSidebar";
import Dashboard from "./pages/SellerDashboard/Dashboard";
import ListProducts from "./pages/SellerDashboard/ListProducts";
import AddProduct from "./pages/SellerDashboard/AddProduct";
import { Sellerwallet } from "./pages/SellerDashboard/Sellerwallet";
import SalesTracking from "./pages/SellerDashboard/SalesTracking";
import SalesOwner from "./pages/Sales/SalesOwner";
import { PrivateRoutes } from "./Route/privateroute";
import { OpenRoutes } from "./Route/openroute";


const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};


const SellerLayout = () => {
  return (
    <div>
      
     
      <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <SellerSidebar/>
      <div className="flex-1">
        <SellerHeader />
        <div className="p-4">
        <Outlet />
        </div>
      </div> 
      </div>   
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/salesowner" element={<SalesOwner />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<PrivateRoutes><Cart /></PrivateRoutes>}></Route>
        <Route path="/paymentgateway" element={<PrivateRoutes><Payment /></PrivateRoutes>}></Route>
      </Route>
       {/* ==================== Seller Dashboard =================== */}
        <Route path="/" element={<SellerLayout />}>
        <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>}></Route>
        <Route path="/listproducts" element={<PrivateRoutes><ListProducts /></PrivateRoutes>}></Route>
        <Route path="/addproducts" element={<PrivateRoutes><AddProduct /></PrivateRoutes>}></Route>
        <Route path="/salesTracking" element={<PrivateRoutes><SalesTracking /></PrivateRoutes>}></Route>
        <Route path="/Sellerwallet" element={<PrivateRoutes><Sellerwallet /></PrivateRoutes>}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/sellersignup" element={<SellerSignUp />}></Route>
      <Route path="/sellersignin" element={<SellerSignIn />}></Route>
    
    </Route>
// <PrivateRoutes></PrivateRoutes>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} >
        <Outlet />
        </RouterProvider>
    </div>
  );
}

export default App;
