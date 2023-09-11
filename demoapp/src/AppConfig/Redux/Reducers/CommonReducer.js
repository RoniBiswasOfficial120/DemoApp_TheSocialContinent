const initialState = {
  loader: false,
  toaster: {
    type: "",
    message: "",
  },
};
export const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setLoader":
      return { ...state, loader: action.payload };
    case "setToaster":
      return { ...state, toaster: action.payload };
    default:
      return state;
  }
};
