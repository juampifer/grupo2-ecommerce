"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "./slices/cartThunks";
import CartList from "./components/CartList";
import styles from "./cart.module.css";
import CartSummary from "./components/CartSummary";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cart);

  // Total de ítems del carrito
  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  // Precio total de la compra
  const totalAmount = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

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
          <CartSummary itemCount={totalItems} total={totalAmount} />
          <button className={styles.payButton}>Pagar</button>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default CartPage;
