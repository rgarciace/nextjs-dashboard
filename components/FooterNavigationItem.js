import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '/styles/components/FooterNavigationItem.module.css'

const FooterNavigationItem = ({ text, paths, children }) => {
  const router = useRouter();

  return (
    <Link className={`${styles.link} ${paths.includes(router.pathname) && styles.linkActive}`} href={paths[0]} title={text}>{children}</Link>
  )
}

export default FooterNavigationItem