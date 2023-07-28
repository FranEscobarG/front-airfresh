import Icon from "/iconPage.png";

function CardHome({ COppm, date }) {
    // Separar la fecha y la hora
const [fecha, horaD] = date.split("T");
const [hora] = horaD.split(".");

  return (
    <div className="card">
      <h1 className="card__title">CO</h1>
      <div className="card__info">
        <div className="info__min">
          <span className="co-ppm">{COppm}</span>ppm
        </div>
        <div className="info__max">
          Hora:
          <span>{hora}</span>
        </div>
        <div className="info__icon">
          <img className="iconair" src={Icon} alt="Icono aire" />
        </div>
      </div>
      <div className="info__max">
        Fecha: <span>{fecha}</span>
      </div>
    </div>
  );
}

export default CardHome;
