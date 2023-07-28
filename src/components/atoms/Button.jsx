import styled from "styled-components";

const StyledButton = styled.button`
button[type="submit"] {
    background-color: #0ef4ecda;
    border: none;
    border-radius: 10px;
    color: #000000;
    cursor: pointer;
    font-size: 14px;
    padding: 10px;
    width: 100%;
  }
`;

//Para que este componente sea reutilizable - No se puede llamar igual que el elemento del styled
function Button({type, value, handlerClick}) {
    return ( 
        <button type="submit">Registrarse</button>
        //<StyledButton type={type} onClick={handlerClick} >{value}</StyledButton>
     );
}

export default Button;