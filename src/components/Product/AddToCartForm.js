import React, { useState } from 'react';
import styles from './AddToCartForm.module.css';

const AddToCartForm = props => {
  const [quantity, setQuantity] = useState(0);

  const addQuantityHandler = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  const minusQuantityHandler = () => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity - 1));
  }

  const addToCartHandler = event => {
    event.preventDefault();
    props.onAddToCart(props.product.id, quantity);
  }

  return (
    <form className={styles.addToCartForm} onSubmit={addToCartHandler}>
      <div className={styles.quantityWrapper}>
        <span onClick={minusQuantityHandler} className={styles.minusQuantityIcon}>-</span>
        <input className={styles.quantityInp} value={quantity} readOnly/>
        <span onClick={addQuantityHandler} className={styles.addQuantityIcon}>+</span>
      </div>
      <button onClick={props.onAddToCart} className={[styles.addToCartBtn, !quantity ? styles.disabled : ''].join(' ')}>
        <img className={styles.addToCartIcon} src={'../../../images/icon-cart-white.svg'} alt='icon-cart'/>
        Add to cart
      </button>
    </form>
  )
}

export default AddToCartForm;