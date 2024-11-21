import React from "react";
import CustomData from "./CustomData.js";
import { Outlet } from "react-router-dom";
const CustomHeader = ({ send1DataToParent, send2DataToParent }) => {
  return (
    <div>
      <center
        style={{
          display: "block",
          // backgroundColor: "lightsteelblue",
          // borderStyle: "solid",
          // border: "1px solid black",
        }}
      >
        <header>
          <h1>Dashboard layout</h1>
          <p>Statistics</p>
          {/* <p></p> */}
        </header>

        <CustomData
          send1DataToParent={send1DataToParent}
          send2DataToParent={send2DataToParent}
        />
        <Outlet />
      </center>
    </div>
  );
};

export default CustomHeader;
