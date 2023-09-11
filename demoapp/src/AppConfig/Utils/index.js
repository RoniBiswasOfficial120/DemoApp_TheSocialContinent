import toast from "react-hot-toast";
import { setMarkedProduct } from "../Redux/Actions/Products";

export const checkMarkProductIndex = (productDetails, markedProducts) => {
  return markedProducts.indexOf(productDetails?.id);
};

export const handleMark = (productDetails, markedProducts, dispatch) => {
  let newMarkedProduct = [...markedProducts];
  if (
    markedProducts.length < 5 &&
    checkMarkProductIndex(productDetails, markedProducts) === -1
  ) {
    newMarkedProduct.push(productDetails.id);
  } else if (
    markedProducts.length <= 5 &&
    checkMarkProductIndex(productDetails, markedProducts) !== -1
  ) {
    newMarkedProduct.splice(
      checkMarkProductIndex(productDetails, markedProducts),
      1
    );
  } else {
    toast.error("Max limit exceeded.");
  }
  dispatch(setMarkedProduct(newMarkedProduct));

  let appUsers = JSON.parse(localStorage.getItem("demoApp_user"));
  let appActiveUser = JSON.parse(localStorage.getItem("demoApp_active_user"));
  let newAppUsers = [];
  appUsers.map((value, index) => {
    if (value.email === appActiveUser) {
      newAppUsers.push({ ...value, cartdata: newMarkedProduct });
    } else {
      newAppUsers.push({ ...value });
    }
  });
  localStorage.setItem("demoApp_user", JSON.stringify(newAppUsers));
};
