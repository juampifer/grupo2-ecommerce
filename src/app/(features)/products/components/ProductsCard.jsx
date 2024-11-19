"use client";
import styles from "./ProductsCard.module.css";
const ProductsCard = ({ title, description, price, image }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={image} alt={title} />
      <div className={styles.infoContainer}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardInfo}>{description}</p>
        <div className={styles.priceAndButton}>
          <p className={styles.cardPrice}>${price}</p>
          <a href="#" className={styles.cardButton}>
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
