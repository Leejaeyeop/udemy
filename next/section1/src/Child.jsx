import React from "react";

function Child({ func, number }) {
  return (
    <div>
      {(function a() {
        console.log("child!");
      })()}
      this is a child component: {number}
    </div>
  );
}

export default React.memo(Child);
