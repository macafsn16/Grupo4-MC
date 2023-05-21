import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>PEDILOYA</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Inicio</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/comidas">Comidas</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <h1>Carrito ({getItemsCount()})</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;