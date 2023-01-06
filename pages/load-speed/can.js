import MainLayout from '/components/MainLayout'

const options = [
  { text: "Velocidad CAN", path: "/load-speed/can" },
  { text: "Velocidad USA", path: "/load-speed/usa" },
  { text: "Reportes", path: "/load-speed/reports" },
]

export default function LoadSpeedCan() {
  return (
      <MainLayout title="Velocidad de CAN" titleHeader="Velocidad de Carga" options={options}>
        <p>Cuerpo de CAN</p>
      </MainLayout>
  )
}