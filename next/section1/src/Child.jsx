import React from "react";

function Child({ func, number }) {
  console.log("child!");

  return <p>this is a child number: {number}</p>;
}

export default React.memo(Child);
