import axios from "axios";

export const getProducts = async (categoryId = '') => {
  const response = await axios.get(`http://localhost:5000/products`, {
    params: categoryId ? { categoryId } : {}, //se agrega el parámetro para filtrar por categoria
  });
  return response.data;
};
