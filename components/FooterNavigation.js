import FooterNavigationItem from "./FooterNavigationItem"
import { Flash, HomeSimple } from 'iconoir-react'
import styles from '/styles/components/FooterNavigation.module.css'

const FooterNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <FooterNavigationItem text="Home" path="/" >
        <HomeSimple />
      </FooterNavigationItem>
      <FooterNavigationItem text="Velocidad de Carga" path="/load-speed" >
        <Flash />
      </FooterNavigationItem>
    </nav>
  )
}

export default FooterNavigation