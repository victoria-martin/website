import React from "react";

export const Tech = () => {
  return (
    <>
      <h4>TECH</h4>
      <div className="tech-line">
        <div id="html">
          <i className="fab fa-html5 fa-4x"></i>
          HTML
        </div>
        <div id="css">
          <i className="fab fa-css3-alt fa-4x"></i>CSS
        </div>
        <div id="js">
          <i className="fab fa-js-square fa-4x"></i>JavaScript
        </div>
        <div id="nodejs">
          <i className="fab fa-node-js fa-4x"></i>NodeJS
        </div>
        <div id="reactjs">
          <i className="fab fa-react fa-4x"></i>ReactJS
        </div>
      </div>
      <div>
        <i class="fab fa-github fa-5x"></i>
      </div>
    </>
  );
};
