import styled from "styled-components";

function Title({ msn }) {
  return <StyledH1>{msn}</StyledH1>;
}

const StyledH1 = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  padding: 4.5rem 0 ;
  /* padding-left: 20px; */
  text-transform: uppercase;
`;

export default Title;
