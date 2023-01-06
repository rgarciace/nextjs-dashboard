import MainLayout from '/components/MainLayout'

const options = [
  { text: "Velocidad CAN", path: "/load-speed/can" },
  { text: "Velocidad USA", path: "/load-speed/usa" },
  { text: "Reportes", path: "/load-speed/reports" },
]

const LoadSpeedUsa = () => {
  return (
    <MainLayout title="Velocidad de USA" titleHeader="Velocidad de Carga" options={options}>
      <p>Cuerpo de USA</p>
    </MainLayout>
  )
}

export default LoadSpeedUsa