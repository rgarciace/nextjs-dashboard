import { Menu, Search } from 'iconoir-react';
import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import styles from '/styles/components/Header.module.css'
const Header = ({ title = "Inicio", options = [] }) => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(true);
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const handlerMobileMenu = () => {
    setOpenSearchBar(false)
    setOpenMenu(!openMenu)
  }
  const handlerMobileSearchBar = () => {
    setOpenMenu(false)
    setOpenSearchBar(!openSearchBar)
  }

  useEffect(() => {
    setOpenMenu(false)
    setOpenSearchBar(false)
  }, [router])


  return (
    <div className={styles.centered}>
      <div className={styles.container}>
        <section className={styles.information}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.others}>
            {
              options.length > 0 && (
                <>
                  <button onClick={handlerMobileMenu} className={styles.buttonMobile}><Menu /></button>
                  <div className={`${styles.mobileMenu} ${openMenu && styles.mobileMenuActive}`}>
                    <nav className={styles.mobileNav}>
                      {options.map(({ text, path }) => (
                        <Link
                          className={`${styles.option} ${(router.pathname == path || router.pathname.includes(path + "/")) && styles.optionActive}`}
                          key={text}
                          href={path}>
                          {text}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </>
              )
            }
            <button onClick={handlerMobileSearchBar} className={styles.buttonMobile}><Search /></button>

            <div className={`${styles.mobileSearchBar} ${openSearchBar && styles.mobileSearchBarActive}`}>
              <input type="search" className={styles.mobileInputSearch} placeholder="Buscara aquí..." autoFocus />
            </div>
            <div className={styles.inputSearch}>
              <Search />
              <input className={styles.searchBar} type="search" placeholder='Buscar aquí...' />
            </div>
            <div className={styles.user}>
            </div>
          </div>
        </section>
        {
          options.length > 0 && (
            <nav className={styles.optionsGroup}>
              {options.map(({ text, path }) => (
                <Link
                  className={`${styles.option} ${(router.pathname == path || router.pathname.includes(path + "/")) && styles.optionActive}`}
                  key={text}
                  href={path}>
                  {text}
                </Link>
              ))}
            </nav>
          )
        }
      </div>
    </div>
  )
}

export default Header