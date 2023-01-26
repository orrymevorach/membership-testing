import styles from './desktop-nav.module.scss';
import NavLinks from '../nav-links/nav-links';
import Link from 'next/link';
import Image from 'next/image';

export default function DesktopNav({ navData, pathname, logo = '' }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <img src={logo} width={100} height={100} alt="" />
          </Link>
        </li>

        <NavLinks navData={navData} pathname={pathname} />
      </ul>
    </nav>
  );
}
