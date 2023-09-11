export const setSessionDestroy = () => {
  return {
    type: "setSessionDestroy",
  };
};

export const setLoader = (val) => {
  return {
    type: "setLoader",
    payload: val,
  };
};

export const setToaster = (val) => {
  return {
    type: "setToaster",
    payload: val,
  };
};

export const setAddUser = (val) => {
  return {
    type: "setAddUser",
    payload: val,
  };
};
