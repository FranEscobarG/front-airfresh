import Title from "../atoms/Title";
import CardHistory from "../molecules/CardHistory";

function FlexHistory({ sensorData }) {
  // Invierte el orden del array sensorData
  const reversedSensorData = [...sensorData].reverse();

  return (
    <div className="dark-background">
      <Title msn={"Historico de datos sensados"} />
      <div className="cards-history">
        {/* Renderiza los últimos 4 datos de los sensores en orden inverso */}
        {reversedSensorData.map((sensor) => (
          <CardHistory
            COppm={sensor.co_ppm}
            date={sensor.reg_date}
            key={sensor.id}
          />
        ))}
      </div>
    </div>
  );
}

export default FlexHistory;
