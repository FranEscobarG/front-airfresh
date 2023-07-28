import IconCO from "../../assets/img/iconCO.png";

function CardHistory({ COppm, date }) {
  // Separar la fecha y la hora
  const [fecha, horaD] = date.split("T");
  const [hora] = horaD.split(".");

  return (
    <div className="card-history">
      <div className="info_sensor">
        <div className="card_title">
          <img className="iconco" src={IconCO} alt="Icono CO" />
        </div>
        <div className="co_ppm">
          <span className="co">{COppm}</span> ppm
        </div>
      </div>

      <div className="info_date">
        <div className="info_max">
          Hora: <span>{hora}</span>
        </div>
        <div className="info_max">
          Fecha: <span>{fecha}</span>
        </div>
      </div>
    </div>
  );
}

export default CardHistory;
