import React from "react";
import styled from "styled-components";

import logo from "../assets/meowLogo.jpg";

const Brand = () => {
  return <Image src={logo} alt="Company Logo" />;
};

export default Brand;

const Image = styled.img`
  height: 90%;
  margin: auto 0;
`;
