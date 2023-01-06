import MainLayout from '/components/MainLayout'
import { pathLoadSpeed } from '/utils/configPaths'

const LoadSpeedUsa = () => {
  return (
    <MainLayout title="Velocidad de USA" titleHeader="Velocidad de Carga" options={pathLoadSpeed}>
      <p>Cuerpo de USA</p>
    </MainLayout>
  )
}

export default LoadSpeedUsa