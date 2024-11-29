import axios from 'axios';

const API_URL = 'http://localhost:5000/cart';

export const fetchCart = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addToCart = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

export const updateCartItem = async (product) => {
  const response = await axios.put(`${API_URL}/${product.id}`, product);
  return response.data;
};

export const deleteCartItem = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};