import { combineReducers } from 'redux'
import { CommonReducer } from "./CommonReducer";
import { ProductReducer } from "./ProductReducer";

const rootReducer = (state, action) => {
  if (action.type === "setSessionDestroy") {
    state = {};
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  CommonReducer: CommonReducer,
  ProductReducer: ProductReducer,
});

export default rootReducer;
