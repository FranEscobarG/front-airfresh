import styled from "styled-components"

const StyledInput = styled.input`
    border-radius: 3px;
    border: 2px solid #ccc;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    font-size: px;
    
`;

//Para que este componente sea reutilizable - No se puede llamar igual que el elemento del styled
function Input({ type, placeholder, pname }) {
    return (
        <StyledInput type={type} placeholder={placeholder} name={pname} required />
    );
}

export default Input;
