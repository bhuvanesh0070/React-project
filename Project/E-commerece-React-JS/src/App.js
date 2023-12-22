import logo from "./logo.svg";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Televisions from "./Components/Televisions/Televisions";
import Headphones from "./Components/HeadPhone/Headphones";
import Cameras from "./Components/Cameras/Cameras";
import Kitchen from "./Components/Kitchen/Kitchen";
import Computers from "./Components/Computers/Computers";
import Accessories from "./Components/Accessories/Accessories";
import Cart from "./Components/Cart/Cart";
import Notfound from "./Components/Notfound/Notfound";
import Favarite from "./Components/Favarite/Favarite";
import Personal from "./Components/Personal/Personal";
import ProductDetails from "./Components/ProductDetils/ProductDetails";
import Phones from "./Components/Phones/Phones";
import Search from "./Components/Search/Search";
import { useContext } from "react";
import { cartContext } from "./Context/CartContext";
import { favariteContext } from "./Context/FavariteContext";
import Checkout from "./Components/Checkout/Checkout";
import $ from "jquery";
import { Offline, Online } from "react-detect-offline";
function App() {
  let { islogin, setislogin } = useContext(cartContext);
  let { login, setlogin } = useContext(favariteContext);

  setTimeout(() => {
    setislogin(false);
    setlogin(false);
  }, 4000);

  // button up
  $(window).scroll(() => {
    let wScroll = $(window).scrollTop();
    if (wScroll > 15) {
      $(".button-up").fadeIn(1000);
    } else {
      $(".button-up").fadeOut(1000);
    }
  });

  function buttonUp() {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  }
  let routers = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "phones",
          element: <Phones />,
        },

        {
          path: "tvs",
          element: <Televisions />,
        },
        {
          path: "headphone",
          element: <Headphones />,
        },
        {
          path: "camera",
          element: <Cameras />,
        },
        {
          path: "kitchen",
          element: <Kitchen />,
        },
        {
          path: "computers",
          element: <Computers />,
        },
        {
          path: "accessories",
          element: <Accessories />,
        },
        {
          path: "personal",
          element: <Personal />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "details/:id/:type",
          element: <ProductDetails />,
        },
        {
          path: "favarite",
          element: <Favarite />,
        },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return (
    <>
      {/* offline */}
      <div>
        <Offline>
          <div class="offline">
            <div>
              <i className="fa-2xl   fa-solid fa-wifi"></i>
              <h1 className="mt-3">OFFLINE</h1>
              <h4>Please check your internet connection</h4>
            </div>
          </div>
        </Offline>
      </div>

      {/* login first */}
      {login ? <div className="try-login"> please Login first !</div> : ""}
      {islogin ? <div className="try-login"> please Login first !</div> : ""}

      {/* button up */}
      <button onClick={buttonUp} className="btn btn-dark  button-up">
        <i className="fa-solid text-white fa-arrow-up"></i>
      </button>

      <RouterProvider router={routers} />
    </>
  );
}

export default App;
