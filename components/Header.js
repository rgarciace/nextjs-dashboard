import { Search } from 'iconoir-react';
import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '/styles/components/Header.module.css'
const Header = ({ title = "Inicio", options = [] }) => {
  const router = useRouter();
  return (
    <div className={styles.centered}>
      <div className={styles.container}>
        <section className={styles.information}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.others}>
            <button className={styles.buttonSearch}><Search /></button>
            <div className={styles.inputSearch}>
              <Search />
              <input className={styles.searchBar} type="search" placeholder='Buscar aquí...' />
            </div>
            <div className={styles.user}>
            </div>
          </div>
        </section>
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
      </div>
    </div>
  )
}

export default Header