import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarStyled>
      <List disablePadding dense>
        <ListItem button>
          <ListItemText>
            <Link to="/add-lessons">Add Lessons</Link> <br />
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="/schedules">Event Scheduler</Link> <br />
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="#">Reporting</Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="/admin-home">Back to homepage</Link>
          </ListItemText>
        </ListItem>
      </List>
    </SidebarStyled>
  );
}

export default Sidebar;

const SidebarStyled = styled.div`
  max-width: 220px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  & a {
    color: grey;
    font-weight: 800;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #black;
      border-bottom: 1px solid black;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
