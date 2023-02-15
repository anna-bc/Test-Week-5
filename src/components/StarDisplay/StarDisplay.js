import React from "react"

function StarDisplay(props) {
    let starArr = [];
    for(let i = 0; i < props.number; i++) {
        starArr.push('*');
    }

  return (
    <div className="StarDisplay">
      <div>{starArr.map((star) => star)}</div>
    </div>
  )
};

export default StarDisplay;
