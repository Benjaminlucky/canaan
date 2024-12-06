import React from "react";
import Topheader from "../topheader/Topheader";
import Topnav from "../topnavigation/topNav";

function Mainheader() {
  return (
    <div className="mainHeaderSection">
      <Topheader />
      <Topnav />
    </div>
  );
}

export default Mainheader;
