import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";

import * as d3 from "d3";
const CustomStatistics = ({ data1, data2 }) => {
  const [mean, setmean] = useState(false);
  const [median, setmedian] = useState(false);
  const [mode, setmode] = useState(false);
  const [variance, setvariance] = useState(false);
  const [deviation, setdeviation] = useState(false);

  const mean1 = d3.mean(data1);
  const mean2 = d3.mean(data2);

  const median1 = d3.median(data1);
  const median2 = d3.median(data2);

  const mode1 = d3.mode(data1);
  const mode2 = d3.mode(data2);

  const variance1 = d3.variance(data1);
  const variance2 = d3.variance(data2);

  const deviation1 = d3.deviation(data1);
  const deviation2 = d3.deviation(data2);
  function handlemean() {
    setmean(!mean);
  }
  function handlemedian() {
    setmedian(!median);
  }
  function handlemode() {
    setmode(!mode);
  }
  function handlevariance() {
    setvariance(!variance);
  }
  function handledeviation() {
    setdeviation(!deviation);
  }
  // const percentile = require("percentile");
  // const percentileref = useRef();
  // const percentile1 = data1.map((val)=>()) / data1.length;
  // const percentile1 = 0;
  // const percentile2 = 0;
  // console.log(typeof percentileref.current.value);
  // const percentile2ref = useRef();

  // const completevariance =
  //   Math.pow(d3.sum(data1.map((val) => mean1 - val)), 2) / data1.length;
  // console.log(d3.sum(data1.map((val) => mean1 - Math.abs(val))));
  // console.log(mean1 + " " + mean2);
  // console.log(percentile2 + " " + percentile1);
  return (
    <center>
      <div style={{ display: "block" }}>
        <Button
          style={{ margin: "10px" }}
          variant="primary"
          size="lg"
          active
          onClick={handlemean}
        >
          {" "}
          Calculate mean
        </Button>
        <Button
          style={{ margin: "10px" }}
          variant="secondary"
          size="lg"
          active
          onClick={handlemedian}
        >
          {" "}
          Calculate median
        </Button>
        <Button
          style={{ margin: "10px" }}
          variant="info"
          size="lg"
          active
          onClick={handlemode}
        >
          {" "}
          Calculate mode
        </Button>
        <Button
          style={{ margin: "10px" }}
          variant="success"
          size="lg"
          active
          onClick={handlevariance}
        >
          {" "}
          Calculate variance
        </Button>
        <Button
          style={{ margin: "10px" }}
          variant="danger"
          size="lg"
          active
          onClick={handledeviation}
        >
          {" "}
          Calculate deviation
        </Button>
        {mean && (
          <div
            style={{ display: "block", marginTop: "10px", marginLeft: "10px" }}
          >
            <br />
            <h3>Mean of data 1: {mean1}</h3>
            <h3>Mean of data 2: {mean2}</h3>
            <br />
            <hr />
          </div>
        )}

        {median && (
          <div
            style={{ display: "block", marginTop: "10px", marginLeft: "10px" }}
          >
            <br />
            <h3>Median of data 1: {median1}</h3>
            <h3>Median of data 2: {median2}</h3>
            <br />
            <hr />
          </div>
        )}
        {mode && (
          <div
            style={{ display: "block", marginTop: "10px", marginLeft: "10px" }}
          >
            <h3>Mode of data 1: {mode1}</h3>
            <h3>Mode of data 2: {mode2}</h3>
            <br />
            <hr />
          </div>
        )}

        {variance && (
          <div
            style={{ display: "block", marginTop: "10px", marginLeft: "10px" }}
          >
            <h3>variance of data 1: {variance1}</h3>
            <h3>variance of data 2: {variance2}</h3>
            <br />
            <hr />
          </div>
        )}

        {deviation && (
          <div
            style={{ display: "block", marginTop: "10px", marginLeft: "10px" }}
          >
            <br />
            <h3>deviation of data 1: {deviation1}</h3>
            <h3>deviation of data 2: {deviation2}</h3>
            <br />
            <hr />
          </div>
        )}
      </div>
    </center>
  );
};

export default CustomStatistics;
