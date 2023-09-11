const initialState = {
  list: [],
  marked: [],
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setProductList":
      return { ...state, list: action.payload };
    case "setMarkedProduct":
      return { ...state, marked: action.payload };
    default:
      return state;
  }
};
