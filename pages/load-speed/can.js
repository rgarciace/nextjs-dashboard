import { useState } from 'react'
import ButtonAdd from '../../components/ButtonAdd'
import MainLayout from '/components/MainLayout'
import { pathLoadSpeed } from '/utils/configPaths'
import styles from '/styles/load-speed/Can.module.css'
import SectionInformation from '../../components/SectionInformation'

import { websTrackingDB } from '/utils/bbdd'
import ListWebs from '../../components/ListWebs'
import HistoryColors from '../../components/HistoryColors'

export default function LoadSpeedCan() {
  const [openModalAdd, setOpenModalAdd] = useState(false)
  const [webFocus, setWebFocus] = useState("Coolbox");
  const addWebForTracking = () => {
    setOpenModalAdd(true)
  }
  return (
    <>
      <MainLayout title="Velocidad de CAN" titleHeader="Velocidad de Carga" options={pathLoadSpeed}>
        <div className={styles.main}>
          <div className={styles.containerHalf}>
            <header className={styles.headerSection}>
              <SectionInformation title="Última actividad" description={`Últimas 5 mediciones a la web de ${webFocus}`} />
              <ButtonAdd add={addWebForTracking} />
            </header>
            <HistoryColors first="Carga completa" second='Primera interacción' />
            
          </div>
          <section className={styles.containerHalf}>
            <header className={styles.headerSection}>
              <SectionInformation title="Webs en seguimiento" description="Ecommerce en seguimiento para realizar comparaciones" />
              <ButtonAdd add={addWebForTracking} />
            </header>
            <div className={styles.bodySection}>
              <ListWebs websTrackingDB={websTrackingDB} />
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  )
}