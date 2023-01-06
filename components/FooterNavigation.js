import FooterNavigationItem from "./FooterNavigationItem"
import { BoxIso, Flash, HomeSimple, SmallShop } from 'iconoir-react'
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
      <FooterNavigationItem text="Transportadoras" paths={["/carriers"]} >
        <BoxIso />
      </FooterNavigationItem>
      <FooterNavigationItem text="Tiendas" paths={["/stores"]} >
        <SmallShop />
      </FooterNavigationItem>
    </nav>
  )
}

export default FooterNavigation