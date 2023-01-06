import FooterNavigation from './FooterNavigation'
import styles from '/styles/components/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.logo}>LOGO</h2>
      <FooterNavigation />
      <p className={styles.myPage}>mypage.dev</p>
    </div>
  )
}

export default Footer