import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterConstants from "./RouterConstants";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RouterConstants.map((route, index) => {
          return <Route path={route.path} element={<route.component/>} key={index}/>;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
