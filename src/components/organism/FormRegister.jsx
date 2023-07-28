import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Caption from "../atoms/Caption";
import WrapperIntput from "../molecules/WrapperInput";

function FormRegister() {
  const navigate = useNavigate();

    const form = useRef()
    const endpoint = 'http://34.230.196.6:3000/event/create'; //34.230.196.6

    const handlerClickReg = (e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)
        console.log(newForm)
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: newForm.get('name'),
              lastname: newForm.get('lastname'),
              email: newForm.get('email'),
              phone: newForm.get('phone'),
              password: newForm.get('password')
            })
        }
        
        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert("Usuario registrado exitosamente");
            navigate("/");
        });
    }

  return (
    <div className="register-container">
      <Caption msn={"Registro de Usuario"} />
      <form ref={form}>
        <WrapperIntput msn={"Nombre"} type={"text"} placeholder={""} name={"name"} />

        <WrapperIntput msn={"Apellido/s"} type={"text"} placeholder={""} name={"lastname"} />

        <WrapperIntput
          msn={"Correo electronico"}
          type={"e-mail"}
          placeholder={""} name={"email"}
        />

        <WrapperIntput msn={"Telefono"} type={"number"} placeholder={""} name={"phone"} />

        <WrapperIntput msn={"Contraseña"} type={"password"} placeholder={""} name={"password"} />

        <button onClick={handlerClickReg}>Registrarse</button>
      </form>
    </div>
  );
}

export default FormRegister;
