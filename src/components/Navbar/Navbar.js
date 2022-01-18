import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Cart from './Cart';

const Navbar = props => {
  const [showCart, setShowCart] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const showCartHandler = () => {
    setShowCart(prevShowCart => !prevShowCart);
  }

  const showMobileNavHandler = () => {
    setShowMobileNav(prevShowMobileNav => !prevShowMobileNav);
  }

  return (
    <nav className={styles.nav}>
      <img onClick={showMobileNavHandler} className={styles.menuIcon} src={'../../../images/icon-menu.svg'}/>
      <img className={styles.navlogo} src={'../../../images/logo.svg'}/>
      <ul className={[styles.navList, showMobileNav ? styles.active : ''].join(' ')}>
        <img onClick={showMobileNavHandler} className={styles.navCloseIcon} src={'../../../images/icon-close-black.svg'}/>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Collections</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Men</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Women</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink}>Contact</a>
        </li>
      </ul>
      <ul className={styles.navListRight}>
        <li className={[styles.navItem, styles.cartIconItem].join(' ')}>
          <img className={styles.navLink} src={'../../../images/icon-cart.svg'} onClick={showCartHandler}/>
          {props.cartItems.length > 0 && <span className={styles.cartItemsCount}>{props.cartItems[0].quantity}</span>}
          {showCart && <Cart products={props.products} cartItems={props.cartItems} onDeleteFromCart={props.onDeleteFromCart}/>}
        </li>
        <li className={styles.navItem}>
          <img width="50" height="50" className={[styles.navLink, styles.avatarIconLink].join(' ')} src={'../../../images/image-avatar.png'}/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;