"use client";
import { showAlert } from "@/app/utils/alertHelper";
import { addCartItem, fetchCartItems } from "../../cart/slices/cartThunks";
import styles from "./ProductsCard.module.css";
import { useDispatch } from "react-redux";

const ProductsCard = ({ id, title, description, price, image, items }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const existingItem = items.find((item) => item.id === id);
    if (!existingItem) {
      dispatch(addCartItem({ id, title, description, price, image, quantity: 1 }));
      showAlert('Producto agregado al carrito', `${title}`);
    }else{
      showAlert(`Si desea agregar más ${title}`, `Debe hacerlo desde el carrito de compras`);
    }
  };
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={image} alt={title} />
      <div className={styles.infoContainer}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardInfo}>{description}</p>
        <div className={styles.priceAndButton}>
          <p className={styles.cardPrice}>${price}</p>
          <button
            className={styles.cardButton}
            onClick={() => handleIncrement(id)}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
