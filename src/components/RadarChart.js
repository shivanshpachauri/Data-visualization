import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
// Register chart.js components
import { Radar } from "react-chartjs-2";
import { Outlet } from "react-router-dom"; // Import Outlet

const RadarChart = ({ data1, data2 }) => {
  ChartJS.register(...registerables);
  const data = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: data1,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "My Second Dataset",
        data: data2,
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };
  const options = {};
  return (
    <div
      style={{
        display: "flex",
        height: "600px",
        width: "600px",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        marginLeft: "10px",
      }}
    >
      <Radar options={options} data={data}>
        RadarChart
      </Radar>
      <Outlet />
    </div>
  );
};

export default RadarChart;
