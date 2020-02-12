import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const AdminDashboard = (props) => {
  return (
    <Wrapper>
      <Title>Admin Dashboard</Title>
      <Row>
        <ColumnLeft>
          <Sidebar />
        </ColumnLeft>

        <Column>
          <InnerRow>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
            condimentum mattis pellentesque id. Tristique magna sit amet purus
            gravida quis blandit turpis cursus.
          </InnerRow>
          <InnerRow>
            Rhoncus mattis rhoncus urna neque. Dignissim enim sit amet
            venenatis. Vel risus commodo viverra maecenas. Placerat vestibulum
            lectus mauris ultrices. In metus vulputate eu scelerisque.
          </InnerRow>
          <InnerRow>
            In ante metus dictum at tempor commodo ullamcorper. Eu volutpat odio
            facilisis mauris sit amet massa vitae. Arcu risus quis varius quam
            quisque. Lacinia quis vel eros donec ac odio tempor orci dapibus.
            Vulputate mi sit amet mauris.
          </InnerRow>
        </Column>
      </Row>
    </Wrapper>
  );
};

export default AdminDashboard;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

const ColumnLeft = styled.div`
  float: left;
  width: 24%;
  padding: 15px;
`;

const Column = styled.div`
  float: left;
  width: 57%;
  padding: 15px;
`;

const Row = styled.div`
  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  content: "";
  display: table;
  clear: both;

  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  }
`;

const InnerRow = styled.div`
  content: "";
  display: table;
  clear: both;
`;
