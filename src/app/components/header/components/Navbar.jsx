'use client';

import React from 'react'
import styles from './Navbar.module.css'
import data from '../../../db/db.json';
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const categories = data.categories;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const hamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href={`/`}>
            Logo
          </Link>
        </div>
        <button className={styles.hamburger} onClick={hamburgerMenu}>
          <MdMenu/>
        </button>
      </div>
      
      <div className={styles.menuLarge}>
      <ul className={styles.navbarLinks}>
          {categories.map((category) => (
            <li key = {category.id}>
              <Link href={`/products?categoryId=${category.id}`} className={styles.category}>
                {category.categoryName}
              </Link>
            </li>
          ))}
        </ul> 
      </div>

      {isMenuOpen && (
          <div className={styles.menuSmall}>
            <ul className={styles.navbarLinksSmall}>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/products?categoryId=${category.id}`} className={styles.categorySmall}>
                    {category.categoryName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}


      <div className={styles.icons}>
        <button className={styles.search}>
          <IoSearchOutline/>
        </button>
        <button className={styles.cart}>
          <Link href={`/cart`}>
            <IoCartOutline/>
          </Link>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
