import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './Carousel.module.css';
import './Carousel.customize.css';

const Carousel = props => {
  const settings = {
    // customPaging: i => {
    //   return (
    //     <a>
    //       <img src={`../../images/${props.product.images[i].split('.')[0]}-thumbnail.jpg`} />
    //     </a>
    //   );
    // },
    // dots: true,
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <Slider className={styles.productImagesCarousel} {...settings}>
      {props.product.images.map((image, idx) => (
        <div className={styles.productImageOuter}>
          <img src={`../../images/${image}`} className={styles.productImage}/>
        </div>
      ))}
    </Slider>
  )
}

export default Carousel;