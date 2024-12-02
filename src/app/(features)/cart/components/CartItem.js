import React from "react";
import styles from "../cart.module.css";
import { useDispatch } from "react-redux";
import { addCartItem, deleteCartItemThunk } from "../slices/cartThunks";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () =>
    dispatch(addCartItem({ ...item, quantity: item.quantity + 1 }));
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(addCartItem({ ...item, quantity: item.quantity - 1 }));
    }
  };
  const handleRemove = () => dispatch(deleteCartItemThunk(item.id));

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.title} />
      <div className="flex-1">
        <h4 className="text-lg font-bold">{item.title}</h4>
        <p className="text-sm text-gray-600">${item.price}</p>
      </div>
      <div className={styles.quantityControl}>
        <button onClick={() => handleDecrement(item.id)}>-</button>
        <span className="font-semibold">{item.quantity}</span>
        <button onClick={() => handleIncrement(item.id)}>+</button>
      </div>
      <button
        onClick={() => handleRemove(item.id)}
        className="text-red-500 text-sm hover:underline"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;