import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '/styles/components/FooterNavigationItem.module.css'

const FooterNavigationItem = ({ text, path, children }) => {
  const router = useRouter();
  return (
    <Link className={`${styles.link} ${(router.pathname == path || router.pathname.includes(path + "/")) && styles.linkActive}`} href={path} title={text}>{children}</Link>
  )
}

export default FooterNavigationItem