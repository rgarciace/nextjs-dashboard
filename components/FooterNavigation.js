import FooterNavigationItem from "./FooterNavigationItem"
import { Flash, HomeSimple } from 'iconoir-react'
import styles from '/styles/components/FooterNavigation.module.css'

const FooterNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <FooterNavigationItem text="Home" paths={["/"]} >
        <HomeSimple />
      </FooterNavigationItem>
      <FooterNavigationItem text="Velocidad de Carga" paths={["/load-speed/can", "/load-speed", "/load-speed/usa", "/load-speed/reports"]} >
        <Flash />
      </FooterNavigationItem>
    </nav>
  )
}

export default FooterNavigation