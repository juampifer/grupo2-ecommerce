"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "./slices/cartThunks";
import CartList from "./components/CartList";
import styles from "./cart.module.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cart);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCartItems());
    }
  }, [dispatch, status]);

  if (status === "idle" || status === "loading") return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.cartTitle}>Carrito</h1>
      {items.length ? (
        <>
          <CartList items={items} />
          <button className={styles.payButton}>
            Pagar</button>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default CartPage;
