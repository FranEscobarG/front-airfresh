import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import WrapperIntput from "../molecules/WrapperInput";
import Caption from "../atoms/Caption";

const socket = socketIOClient("http://35.174.244.208:3000");

function FormLogin() {
  const navigate = useNavigate();
  const form = useRef();

  useEffect(() => {
    // Escucha el evento 'login_success' para recibir la notificación de inicio de sesión exitoso
    socket.on("server:login_success", () => {
      alert("Inicio de sesión válido");
      navigate("/home");
      // window.location.reload();
    });

    // Escucha el evento 'login_failed' para recibir la notificación de inicio de sesión fallido
    socket.on("server:login_failed", () => {
      alert("Inicio de sesión inválido");
    });
  }, []);

  const endpoint = "http://34.230.196.6:3000/event/login"; //34.230.196.6

  const handlerClickLogin = (e) => {
    e.preventDefault();
    const newForm = new FormData(form.current)
    console.log(newForm)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: newForm.get("email"),
        password: newForm.get("password"),
      }),
    };

    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message)
      });
  };

  return (
    <div className="login-container">
      <Caption msn={"Inicio de sesion"} />
      <form ref={form}>
        <WrapperIntput
          msn={"Correo"}
          type={"e-mail"}
          placeholder={""}
          name={"email"}
        />
        <WrapperIntput
          msn={"Contraseña"}
          type={"password"}
          placeholder={""}
          name={"password"}
        />

        <button onClick={handlerClickLogin}>Iniciar sesion</button>
        <Link className="link" to="/register">
          Regístrarse
        </Link>
      </form>
    </div>
  );
}

export default FormLogin;
