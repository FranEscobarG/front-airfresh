import ContentHome from "../components/organism/ContentHome";
import '../assets/styles/home.css'

function Home({sensorData}) {
    return ( 
        <ContentHome sensorData={sensorData}></ContentHome>
     );
}

export default Home;