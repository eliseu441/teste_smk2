import axios from "axios";

const apiProducts = async () => {
  const response = await axios.get(
    "https://private-e759e-apimksfrontend.apiary-mock.com/products",
  );
  // const response = await axios.get(
  //   "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
  // );
  // const response = await axios.get(
  //   "https://api.mockfly.dev/mocks/70416911-3717-46d7-a5d8-751d6613e8bb/products"
  // );
  // const response = await axios.get(
  //   "https://run.mocky.io/v3/b2b02e97-8975-4b30-94ca-6d00bd9da2b4/products",
  // );
  return response.data.products;
};

export default apiProducts;
