import React, { useState, useEffect } from "react";
import scroller from "../../utils/scroller";
import "./Resume.css"

function Resume() {
  const render = () => {
    return <div id="resume">Resume</div>
  }

  return (
    <React.Fragment>
      {render()}
    </React.Fragment>
  );
}

export default Resume;
