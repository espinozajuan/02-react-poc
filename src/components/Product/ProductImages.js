import React from 'react';
import styles from './ProductImages.module.css';

const ProductImages = props => {
  return (
    <div className={styles.productImagesWrapper}>
      <div className={styles.mainProductImageWrapper}>
        <img onClick={props.onShowCarousel} className={styles.mainProductImage} src={`../../images/${props.images[0]}`} alt={props.images[0].split('.')[0]}/>
      </div>
      <div className={styles.productThumbsWrapper}>
        {props.images.map((thumb, idx) => (
          <div className={[styles.productThumbWrapper, !idx ? styles.active : ''].join(' ')} key={idx}>
            <img className={styles.productThumb} src={`../../images/${thumb.split('.')[0]}-thumbnail.jpg`} alt={`${thumb.split('.')[0]}-thumbnail`}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages;