import "./styles.css";
import "../../App.css";
import ImageSlider from "../Slider";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkMarkProductIndex, handleMark } from "../../AppConfig/Utils";

const ProductCard = ({ productDetails }) => {
  const navigate = useNavigate();
  const markedProducts = useSelector((state) => state?.ProductReducer?.marked);
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: "10px" }}>
      <div className="productCard">
        <div className="productTopicContainer overFlowText">
          {productDetails.title}
        </div>
        <div className="productTopicContainer productSliderContainer">
          <ImageSlider list={productDetails.images} />
        </div>
        <div className="productTopicContainer price">
          <span> Price: Rs. {productDetails.price}</span>
          <span className="discount">
            ({productDetails.discountPercentage}% off)
          </span>
        </div>
        <div className="productTopicContainer price">
          <span> Rating: {productDetails.rating}/5</span>
        </div>
        <div
          className="productTopicContainer"
          style={{ justifyContent: "space-between" }}
        >
          <div
            className="button"
            onClick={() => handleMark(productDetails, markedProducts, dispatch)}
          >
            {checkMarkProductIndex(productDetails, markedProducts) === -1
              ? "Mark"
              : "Marked"}
          </div>
          <div
            className="button"
            onClick={() =>
              navigate("/product", { state: { product: productDetails } })
            }
          >
            View
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ProductCard;
