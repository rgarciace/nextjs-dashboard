import MainLayout from '/components/MainLayout'

const options = [
  { text: "Velocidad CAN", path: "/load-speed/can" },
  { text: "Velocidad USA", path: "/load-speed/usa" },
  { text: "Reportes", path: "/load-speed/reports" },
]

const LoadSpeedReports = () => {
  return (
    <MainLayout title="Reportes de Velocidad de Carga" titleHeader="Velocidad de Carga" options={options}>
      <p>Cuerpo de Reportes</p>
    </MainLayout>
  )
}

export default LoadSpeedReports