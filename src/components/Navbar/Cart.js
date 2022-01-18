import React from 'react';
import styles from './Cart.module.css';
import CartItems from './CartItems';

const Cart = props => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h6>Cart</h6>
      </div>
      <div className={styles.cartMain}>
        {props.cartItems.length > 0 ? <CartItems products={props.products} cartItems={props.cartItems} onDeleteFromCart={props.onDeleteFromCart}/>  : <p className={styles.cartEmptyText}>Your cart is empty</p>}
      </div>
    </div>
  )
}

export default Cart;