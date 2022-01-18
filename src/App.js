import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import CarouselWrapper from './components/Carousel/CarouselWrapper';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const API_URL = 'https://www.mockachino.com/b045b644-d886-4e/products/7d6f7710-95d0-4a27-ae6c-b02c6cb0348f';

    fetch(API_URL)
    .then(res => res.json())
    .then(data => setProducts([data]))
    .catch(err => console.log(err));
  }, []);

  const addToCart = (productId, quantity) => {
    if(!quantity) return;

    setCartItems(prevCartItems => {
      if(prevCartItems.findIndex(prevCartItem => prevCartItem.productId === productId) !== -1) {
        return prevCartItems.map(prevCartItem => {
          if(prevCartItem.productId != productId) return prevCartItem;
          else return { productId, quantity : prevCartItem.quantity + quantity };
        });
      } else {
        return [...prevCartItems, { productId, quantity }];
      }
    });
  }

  const deleteFromCart = cartItemIdx => {
    setCartItems(prevCartItems => {
      return prevCartItems.filter((prevCartItem, idx) => idx != cartItemIdx);
    });
  }

  const showCarouselHandler = () => {
    setShowCarousel(prevShowCarousel => !prevShowCarousel);
  }

  const showCarouselAlways = () => {
    if(window.screen.width < 768) {
      setShowCarousel(true); 
    }
  }

  window.addEventListener('load', showCarouselAlways);
  window.addEventListener('resize', showCarouselAlways);

  return (
    <>
      {products.length > 0 && <Navbar products={products} cartItems={cartItems} onDeleteFromCart={deleteFromCart}/>}
      {products.length > 0 && showCarousel && <CarouselWrapper onCloseCarousel={showCarouselHandler} product={products[0]}/>}
      {products.length > 0 && <Product onShowCarousel={showCarouselHandler} product={products[0]} onAddToCart={addToCart}/>}
    </>
  );
}

export default App;
