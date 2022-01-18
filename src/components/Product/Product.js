import React from "react";
import styles from './Product.module.css';
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

const Product = props => {
  return (
    <div className={styles.productWrapper}>
      <ProductImages onShowCarousel={props.onShowCarousel} images={props.product.images}/>
      <ProductInfo onAddToCart={props.onAddToCart} product={props.product}/>
    </div>
  )
}

export default Product;