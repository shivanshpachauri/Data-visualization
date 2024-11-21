import "./styles.css";
import ReactDOM from "react-dom/client";
import CustomStatistics from "./components/CustomStatistics.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import CustomCollapse from "./components/CustomCollapse";
import LineGraph from "./components/LineGraph.js";
import Bardata from "./components/Bardata.js";
import PieChart from "./components/Piechart.js";
import ScatterData from "./components/ScatterData.js";
import RadarChart from "./components/RadarChart";
import CustomHeader from "./components/Header";
import CustomFooter from "./components/CustomFooter.js";
import CustomFlow from "./components/Customflowchart";
const App = () => {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  function handle1DataFromChild(data1) {
    setdata(data1);
  }
  function handle2DataFromChild(customdata) {
    setdata2(customdata);
  }
  console.log(data + " " + data2);
  return (
    <BrowserRouter>
      {" "}
      {/* Wrap BrowserRouter around the entire app */}
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CustomHeader
                  send1DataToParent={handle1DataFromChild}
                  send2DataToParent={handle2DataFromChild}
                />
                <CustomStatistics data1={data} data2={data2} />
              </>
            }
          >
            <Route
              path="Line"
              element={<LineGraph data1={data} data2={data2} />}
            />
            <Route
              path="Bar"
              element={<Bardata data1={data} data2={data2} />}
            />
            <Route
              path="Pie"
              element={<PieChart data1={data} data2={data2} />}
            />
            <Route
              path="Scatter"
              element={<ScatterData data1={data} data2={data2} />}
            />
            <Route
              path="Radar"
              element={<RadarChart data1={data} data2={data2} />}
            />
            <Route path="CustomFlow" element={<CustomFlow />} />

            <Route path="*" element={<CustomCollapse />} />
          </Route>
        </Routes>
        <CustomFooter
          name="Shivansh"
          email="shivanshpachauri00@gmail.com"
          phone="8305562691"
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
