import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import ImageSlider from "../../CustomComponent/Slider";
import SearchAppBar from "./Header";
import "./styles.css";
import { useLocation } from "react-router-dom";
import { checkMarkProductIndex, handleMark } from "../../AppConfig/Utils";

const ProductDetails = () => {
  const routeData = useLocation();
  const productDetails = routeData?.state?.product;
  const markedProducts = useSelector((state) => state?.ProductReducer?.marked);
  const dispatch = useDispatch();
  return (
    <div className={"productDetailsMainContainer"}>
      <div className="productDetailsHeaderContainer">
        <SearchAppBar />
      </div>
      <div className={"productDetailsInnerContainer"}>
        <div className="productDetailsCard">
          <div className="productDetailsTopicContainer">
            {productDetails.title}
          </div>
          <div className="productDetailsTopicContainer productDetailsSliderContainer">
            <ImageSlider list={productDetails.images} />
          </div>
          <div className="productDetailsTopicContainer price">
            <span> Price: Rs. {productDetails.price}</span>
            <span className="discount">
              ({productDetails.discountPercentage}% off)
            </span>
          </div>
          <div className="productDetailsTopicContainer price">
            <span> Rating: {productDetails.rating}/5</span>
          </div>
          <div className="productDetailsTopicContainer">
            {productDetails.description}
          </div>
          <div
            className="productDetailsTopicContainer"
            style={{ justifyContent: "space-between" }}
          >
            <div
              className="button"
              onClick={() =>
                handleMark(productDetails, markedProducts, dispatch)
              }
            >
              {checkMarkProductIndex(productDetails, markedProducts) === -1
                ? "Mark"
                : "Marked"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
