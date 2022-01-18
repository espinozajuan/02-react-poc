import React from 'react';
import styles from './ProductInfo.module.css';
import AddToCartForm from './AddToCartForm';

const ProductInfo = props => {
  return (
    <div className={styles.productInfoWrapper}>
      <span className={styles.productBrand}>{props.product.brand}</span>
      <h3 className={styles.productName}>{props.product.name}</h3>
      <p className={styles.productDesc}>{props.product.description}</p>
      <div className={styles.productPriceDesc}>
        <div className={styles.productPriceWrapper}>
          <h5 className={styles.productDiscountedPrice}>${props.product.price * props.product.discount}</h5>
          <span className={styles.productDiscount}>{props.product.discount * 100}%</span>
        </div>
        <del className={styles.productActualPrice}>${props.product.price}</del>
      </div>  
      <AddToCartForm onAddToCart={props.onAddToCart} product={props.product}/>
    </div>
  )
}

export default ProductInfo;