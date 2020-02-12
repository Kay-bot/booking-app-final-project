import React from "react";
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
            <Image src="https://content.presspage.com/uploads/685/1920_bookerinsights-2.png?10000" />
          </InnerRow>
          <InnerRow>
            <a href="#">Export excel</a>
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

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
