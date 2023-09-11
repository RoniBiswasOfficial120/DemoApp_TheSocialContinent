import { useEffect, useState } from "react";
import { getProductList } from "../../AppConfig/Api/ApiConfig";
import "../../App.css";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../AppConfig/Redux/Actions/CommonActions";
import toast from "react-hot-toast";
import { setProductList } from "../../AppConfig/Redux/Actions/Products";
import { useNavigate } from "react-router-dom";

const Initial = () => {
  const [email, setEmail] = useState("");
  const [productLists, setProductLists] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let appProductList = JSON.parse(
      localStorage.getItem("demoApp_product_list")
    );
    if (appProductList) {
      dispatch(setProductList(appProductList));
      setProductLists(appProductList);
    } else {
      dispatch(setLoader(true));
      getProductList({ limit: 100, skip: 0 })
        .then((res) => {
          setProductLists(res?.data?.products);
          localStorage.setItem(
            "demoApp_product_list",
            JSON.stringify(res?.data?.products)
          );
          dispatch(setProductList(res?.data?.products));
        })
        .catch((err) => {
          // console.log("useEffect catch ->", err);
        })
        .finally(() => {
          dispatch(setLoader(false));
        });
    }
  }, []);

  const handleClick = () => {
    let regex = new RegExp("^[a-z0-9]+@[a-z0-9]+.[a-z0-9]+");
    if (!email) {
      toast.error("Email field is empty.");
    } else if (!regex.test(email)) {
      toast.error("Entered wrong email format.");
    } else {
      let appUsers = JSON.parse(localStorage.getItem("demoApp_user"));
      if (appUsers) {
        let found = appUsers.find((value) => {
          return value.email === email;
        });
        if (!found) {
          appUsers.push({ email: email, cartdata: [] });
        }
        localStorage.setItem("demoApp_user", JSON.stringify(appUsers));
      } else {
        localStorage.setItem(
          "demoApp_user",
          JSON.stringify([{ email: email, cartdata: [] }])
        );
      }
      localStorage.setItem("demoApp_active_user", JSON.stringify(email));
      navigate("/home", { state: { productList: productLists } });
    }
  };
  return (
    <div className={"mainContainer"}>
      <div className={"innerContainer"}>
        <div className={"topicContainer"}>
          <span>App Name / App Logo</span>
        </div>
        <div className={"topicContainer"}>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email id..."
          />
        </div>
        <div className={"topicContainer"}>
          <div className="button" onClick={handleClick}>
            Proceed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initial;
