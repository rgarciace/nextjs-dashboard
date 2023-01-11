import MainLayout from '/components/MainLayout'

const UpdateData = () => {
  return (
    <MainLayout title="Dashboard Cool" titleHeader="Actualizar Data">
      <input type="file" />
      <select>
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