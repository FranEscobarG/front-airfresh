import FlexHistory from "../components/organism/FlexHistory";
import '../assets/styles/history.css'

function History({sensorData}) {
    return ( 
        <FlexHistory sensorData={sensorData} />
     );
}

export default History;