"use client";
import { useDispatch } from "react-redux";
import styles from "./OffersCard.module.css";
import { addCartItem } from "../cart/slices/cartThunks";
const OffersCard = ({ id, title, description, price,offerPrice, image, items }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const existingItem = items.find((item) => item.id === id);
    if (!existingItem) {
      dispatch(
        addCartItem({ id, title, description, price, image, quantity: 1 })
      );
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
          <h5 className={styles.cardOfferPrice}>${offerPrice}</h5>
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

export default OffersCard;