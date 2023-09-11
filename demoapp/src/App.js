import { Alert, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import AppRouter from "./AppConfig/Router";
import { Provider, useSelector } from "react-redux";
import store from "./AppConfig/Redux/Store";
import { Toaster } from "react-hot-toast";

const DefaultTheme = createTheme();

const AppConfig = () => {
  const loaderStatus = useSelector((state) => state?.CommonReducer.loader);
  return (
    <div className="mainBody">
      <AppRouter />
      {loaderStatus && (
        <div className="loaderContainer">
          <span className="loader"></span>
        </div>
      )}
      <Toaster/>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={DefaultTheme}>
        <AppConfig />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
