import MainLayout from '/components/MainLayout'
import styles from '/styles/carriers/UpdateData.module.css'

const UpdateData = () => {
  return (
    <MainLayout title="Dashboard Cool" titleHeader="Transportadoras">
      <input className={styles.inputFile} type="file" accept='.xls'/>
      <select className={styles.selectType}>
        <option value="sameday" key="">Entrega hoy</option>
        <option value="nextday" key="">24 horas</option>
        <option value="lima" key="">Lima</option>
        <option value="periferia" key="">Periferia</option>
        <option value="provincia" key="">Provincia</option>
      </select>
    </MainLayout>
  )
}

export default UpdateData