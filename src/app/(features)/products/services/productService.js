import axios from "axios";

export const fetchProducts = async (categoryId = '') => {
  try {
    const response = await axios.get(`http://localhost:5000/products`, {
      params: categoryId ? { categoryId } : {}, //se agrega el parámetro para filtrar por categoria
    });
    return response.data;    
  } catch (error) {
    throw new Error(error.message);
  }
};
