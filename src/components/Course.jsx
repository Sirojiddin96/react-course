import React from "react";

const Course = (props) => {
  console.log(props.title);
  return (
    <div>
      {props.title.map((data) => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  );
};
export default Course;
