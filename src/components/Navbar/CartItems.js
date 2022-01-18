import React, { useEffect, useState } from 'react';
import styles from './CartItems.module.css';

const CartItems = props => {
  const [cartItemsExtended, setCartItemsExtended] = useState([]);

  useEffect(() => {
    setCartItemsExtended(props.cartItems.map(cartItem => {
      const product = props.products.find(product => product.id === cartItem.productId);
      return {
        thumbnail: `../../images/${product.images[0].split('.')[0]}-thumbnail.jpg`,
        name: product.name,
        price: product.price * product.discount,
        quantity: cartItem.quantity
      }
    }));
  }, []);

  const deleteFromCartHandler = event => {
    props.onDeleteFromCart(event.target.getAttribute('data-idx'));
  }

  return (
    <div className={styles.cartMainWrapper}>
      <ul className={styles.cartItems}>
        {cartItemsExtended.map((cartItemExtended, idx) => (
          <li key={idx} className={styles.cartItem}>
            <img className={styles.cartItemThumb} src={cartItemExtended.thumbnail} alt={cartItemExtended.name}/>
            <div className={styles.cartItemInfo}>
              <span className={styles.cartItemName}>{cartItemExtended.name}</span>
              <span className={styles.cartItemPriceWrapper}>
                ${cartItemExtended.price} x {cartItemExtended.quantity}
                <span className={styles.cartItemTotal}>${cartItemExtended.price * cartItemExtended.quantity}</span>
              </span>
            </div>
            <img data-idx={idx} onClick={deleteFromCartHandler} className={styles.cartItemDeleteIcon} src={'../../images/icon-delete.svg'} alt="delete-icon"/>
          </li>
        ))}
      </ul>
      <button className={styles.checkoutBtn}>Checkout</button>
    </div>
  )
}

export default CartItems;