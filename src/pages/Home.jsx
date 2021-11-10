import React from "react";
import Header from "../layout/Header";
import Main from "../layout/Main";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Main>
        <div>
          {props.titles.map((element) => (
            <span key={element.id}>{element.title}</span>
          ))}
        </div>
      </Main>
    </div>
  );
};

export default Home;
