import { useState } from 'react'
import ButtonAdd from '../../components/ButtonAdd'
import MainLayout from '/components/MainLayout'
import { pathLoadSpeed } from '/utils/configPaths'
import styles from '/styles/load-speed/Can.module.css'
import SectionInformation from '../../components/SectionInformation'

import { websTrackingDB } from '/utils/bbdd'
import { Trash } from 'iconoir-react'

export default function LoadSpeedCan() {
  const [openModalAdd, setOpenModalAdd] = useState(false)
  const addWebForTracking = () => {
    setOpenModalAdd(true)
  }
  return (
    <>
      <MainLayout title="Velocidad de CAN" titleHeader="Velocidad de Carga" options={pathLoadSpeed}>
        <section className={styles.section}>
          <header className={styles.headerSection}>
            <SectionInformation title="Webs en seguimiento" description="Ecommerce en seguimiento para realizar comparaciones" />
            <ButtonAdd add={addWebForTracking} />
          </header>
          <div className={styles.bodySection}>
            <table>
              <tbody>
                {
                  websTrackingDB.map(({ name, url }) => (
                    <tr className={styles.webTracking}>
                      <td className={styles.nameWeb}>{name}</td>
                      <td className={styles.urlWeb}>{url}</td>
                      {name == "Coolbox" || <Trash />}
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </section>
      </MainLayout>
    </>
  )
}