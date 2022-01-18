import React, { useState } from 'react';
import styles from './ProductImages.module.css';

const ProductImages = props => {
  const [mainProductImgSrc, setMainProductImgSrc] = useState(`../../images/${props.images[0]}`);

  const mainProductImgSrcHandler = event => {
    setMainProductImgSrc(event.target.getAttribute('src').replace('-thumbnail', ''));
  }

  return (
    <div className={styles.productImagesWrapper}>
      <div className={styles.mainProductImageWrapper}>
        <img onClick={props.onShowCarousel} className={styles.mainProductImage} src={mainProductImgSrc} alt={mainProductImgSrc}/>
      </div>
      <div className={styles.productThumbsWrapper}>
        {props.images.map((thumb, idx) => (
          <div className={[styles.productThumbWrapper, mainProductImgSrc.replace('../../images/', '') == thumb ? styles.active : ''].join(' ')} key={idx}>
            <img onClick={mainProductImgSrcHandler} className={styles.productThumb} src={`../../images/${thumb.split('.')[0]}-thumbnail.jpg`} alt={`${thumb.split('.')[0]}-thumbnail`}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages;