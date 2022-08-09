import React from "react";
import "./homeflex.css";
import { Data } from "../Data/Data";
import Movieflex from "../Movieflex/Movieflex";
function Homeflex() {
  return (
    <div className="flex">
      <div className="flex-insider">
        {Data.map((data) => (
          <Movieflex key={data.title} data={data} title={data.title} />
        ))}
      </div>
    </div>
  );
}

export default Homeflex;
