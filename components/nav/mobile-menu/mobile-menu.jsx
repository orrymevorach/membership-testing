import styles from './mobile-menu.module.scss';
import HamburgerMenu from 'components/nav/hamburger-menu';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu({ isOpen, setIsOpen, logo }) {
  return (
    <div className={styles.mobileMenu}>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />{' '}
      <li className={styles.image}>
        <Link href="/">
          <img src={logo} alt="Logo" />
        </Link>
      </li>
    </div>
  );
}
