import { Grid, Pagination } from "@mui/material";
import "../../App.css";
import SearchAppBar from "./Header";
import "./styles.css";
import { useEffect, useState } from "react";
import ProductCard from "../../CustomComponent/ProductCard";
import { useLocation } from "react-router-dom";

const Home = () => {
  const routeData = useLocation();
  const productList = routeData?.state?.productList;
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    setShowList(productList.slice(0, 24));
  }, []);

  const handleActivePage = (event, pageNumber) => {
    setShowList(
      productList.slice((pageNumber - 1) * 24, (pageNumber - 1) * 24 + 24)
    );
  };
  return (
    <div className={"homeMainContainer"}>
      <div className="homeHeaderContainer">
        <SearchAppBar />
      </div>
      <div className={"homeInnerContainer"}>
        <Grid container>
          {showList.map((value, index) => {
            return <ProductCard productDetails={value} key={index}/>;
          })}
        </Grid>
      </div>
      <div className="homePaginationContainer">
        <Pagination
          count={Math.ceil(productList.length / 24)}
          onChange={handleActivePage}
        />
      </div>
    </div>
  );
};

export default Home;
