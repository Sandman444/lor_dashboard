import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faCircle,
  faClone
} from '@fortawesome/free-regular-svg-icons';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link className={styles.link} to="/">
            <FontAwesomeIcon size="2x" icon={faUserCircle} />
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/collector">
            <FontAwesomeIcon size="2x" icon={faCircle} />
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/collector">
            <FontAwesomeIcon size="2x" icon={faClone} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
