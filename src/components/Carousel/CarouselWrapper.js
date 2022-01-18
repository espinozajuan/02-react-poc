import React from 'react';
import styles from './CarouselWrapper.module.css';
import Carousel from './Carousel';

const CarouselWrapper = props => {
  return (
    <div className={styles.productImagesCarouselWrapper}>
      <img className={styles.closeCarouselIcon} onClick={props.onCloseCarousel} src={'../../images/icon-close.svg'}/>
      <Carousel product={props.product}/>
    </div>  
  )
}

export default CarouselWrapper;