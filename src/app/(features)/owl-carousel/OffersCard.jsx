"use client";
import styles from "./OffersCard.module.css";
const OffersCard = ({ title, description, price,offerPrice, image }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={image} alt={title} />
      <div className={styles.infoContainer}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardInfo}>{description}</p>
        <div className={styles.priceAndButton}>
          <p className={styles.cardPrice}>${price}</p>
          <h5 className={styles.cardOfferPrice}>${offerPrice}</h5>
          <a href="#" className={styles.cardButton}>
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;