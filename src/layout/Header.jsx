import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [lists, setLists] = useState([
    { id: "01", name: "Courses" },
    { id: "02", name: "My Courses" },
    { id: "03", name: "My Page" },
    { id: "04", name: "Logout" },
    { id: "05", name: "Login" },
  ]);
  return (
    <Wrapper className="header">
      <Main>
        <li>Main</li>
      </Main>
      <Container>
        {lists.map((list) => (
          <List>{list.name}</List>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  margin: auto 0;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  background-color: #7e101047;
`;

const Main = styled.div`
  width: 20%;
`;
const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const List = styled.li`
  list-style: none;
`;
