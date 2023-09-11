import Initial from "../../Screens/Initial";
import Home from "../../Screens/Home";
import ProductDetails from "../../Screens/ProductDetails";

const RouterConstants = [
  {
    path: "/",
    component: Initial,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/product",
    component: ProductDetails,
  },
];
export default RouterConstants;
