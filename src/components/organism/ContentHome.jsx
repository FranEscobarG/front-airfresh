import CardHome from "../molecules/CardHome";
import Title from "../atoms/Title";
import AreaChart from "../molecules/AreaChart";


function ContentHome({sensorData}) {
  
  return (
    <div className="dark-background">
      <Title msn={"Ultimos datos recolectados"} />
      <div className="cards">
        <div className="card__container">
          {/* Renderiza los últimos 4 datos de los sensores */}
          {sensorData.slice(-4).map((sensor) => (
            <CardHome
              COppm={sensor.co_ppm}
              date={sensor.reg_date}
              key={sensor.id}
            />
          ))}
        </div>
      </div>

      <div className="container-chart">
        <Title msn={"Niveles de CO en tiempo real"} />
        <div className="charts">
          <div className="chart">
            <AreaChart sensorData={sensorData} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ContentHome;
