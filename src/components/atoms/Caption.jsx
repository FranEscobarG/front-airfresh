import styled from "styled-components"


function Caption({ msn }) {
    return ( 
        <StyledH2>{msn}</StyledH2>
     );
}

const StyledH2 = styled.h2`
    color: black;
    font-size: 2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding-bottom: 2rem;
`;


export default Caption;