import styled from "styled-components";
import defaultImg from "../assets/background-header.jpeg";
const HomeHero = styled.header`
  min-height: 100vh;
  /* background: url(${defaultImg}); */
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  padding: 30px
`;

export default HomeHero;
