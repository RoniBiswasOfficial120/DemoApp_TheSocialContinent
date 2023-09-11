export const setProductList = (val) => {
  return {
    type: "setProductList",
    payload: val,
  };
};

export const setMarkedProduct = (val) => {
  return {
    type: "setMarkedProduct",
    payload: val,
  };
};
