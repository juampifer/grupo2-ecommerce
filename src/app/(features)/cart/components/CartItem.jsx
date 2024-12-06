import React from "react";
import styles from "../cart.module.css";
import { useDispatch } from "react-redux";
import { addCartItem, deleteCartItemThunk } from "../slices/cartThunks";
import { showAlert, showConfirm } from "@/app/utils/alertHelper";
import { BiTrash } from "react-icons/bi";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(addCartItem({ ...item, quantity: item.quantity + 1 }));
    showAlert('Cantidad actualizada', `${item.title}: ${item.quantity + 1}`);
  }

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(addCartItem({ ...item, quantity: item.quantity - 1 }));
      showAlert('Cantidad actualizada', `${item.title}: ${item.quantity - 1}`);
    } else {
      showAlert('Operación inválida', 'No puedes tener menos de 1 unidad.', 'error');
    }
  };
  const handleRemove = async () => {
    const confirmed = await showConfirm(
      '¿Eliminar producto?',
      `¿Estás seguro de eliminar ${item.title} del carrito?`,
      'warning'
    );
    if (confirmed) {
      dispatch(deleteCartItemThunk(item.id));
      showAlert('Eliminado', `${item.title} fue eliminado del carrito.`, 'info');
    }
  };

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
      <div>
        <button
          onClick={() => handleRemove(item.id)}
          className="text-red-500"
        >
          <BiTrash className={styles.trashIcon} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
