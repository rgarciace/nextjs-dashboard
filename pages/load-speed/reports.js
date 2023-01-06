import MainLayout from '/components/MainLayout'
import { pathLoadSpeed } from '/utils/configPaths'

const LoadSpeedReports = () => {
  return (
    <MainLayout title="Reportes de Velocidad de Carga" titleHeader="Velocidad de Carga" options={pathLoadSpeed}>
      <p>Cuerpo de Reportes</p>
    </MainLayout>
  )
}

export default LoadSpeedReports