import React from "react";
import "./publish.css"

import { useEffect, useState } from "react";
function Publish({ props }) {
  let [show, setshow] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3007/Post")
      .then((res)=> res.json())
      .then((data) => {
        setshow(data);
      });
  });
  return (
    <div id="publish">
      {show.map((items,key) => {
        return (
          <React.Fragment key={key}>
            <center>
            <div id="output">
            <h5>NAME:{items.title}</h5>
            <h6>POST:{items.text}</h6>
            </div>
            </center>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Publish;