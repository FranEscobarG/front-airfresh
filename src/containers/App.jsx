import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Navbar from "../components/molecules/Navbar";
import History from "../pages/History";

const socket = socketIOClient("http://35.174.244.208:3000"); // URL de mi API2 (donde esta mi websocket)

function App() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    // Escucha el evento 'connect' para saber cuándo el cliente se conecta al servidor
    socket.on("connect", () => {
      console.log("Client conectado al server");
    });

    // Escucha el evento 'server:all_data' para recibir el listado completo de la base de datos
    socket.on("server:all_data", (data) => {
      console.log("Listado completo recibido del servidor:", data);
      setSensorData(JSON.parse(data));
    });

    // Escucha el evento 'server:updated_data' para recibir las actualizaciones de datos
    socket.on("server:updated_data", (data) => {
      console.log("Actualización de datos recibida del servidor:", data);
      setSensorData(JSON.parse(data));
    });

    // Limpia los listeners al desmontar el componente
    return () => {
      socket.off("connect");
      socket.off("server:all_data");
      socket.off("server:updated_data");
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar/>

        <div className="container-pages">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home sensorData={sensorData} />} />
            <Route path="/history" element={<History sensorData={sensorData} />} />

            {/* <Route path="/*" element={<NotFound />} /> */}
          </Routes>
        </div>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
