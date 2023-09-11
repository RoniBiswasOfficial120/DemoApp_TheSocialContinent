export const getProductList = async (data) => {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${data.limit}&skip=${data.skip}`,
    {
      method: "GET",
    }
  );

  const result = await response.json();
  return new Promise((resolve, reject) => {
    if (result?.products) {
      resolve({
        status: true,
        data: result,
        message: "Successfully fetched data.",
      });
    } else {
      reject({
        status: false,
        message: "Error to get data from api.",
      });
    }
  });
};
