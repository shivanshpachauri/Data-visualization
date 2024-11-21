import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Outlet } from "react-router-dom"; // Import Outlet

ChartJS.register(...registerables);

const LineGraph = ({ data1, data2 }) => {
  const options = {
    scale: {
      pointLabels: {
        fontStyle: "bold",
      },
    },
    maintainAspectRatio: false,
  };
  // Chart.defaults.global.defaultFontStyle = 'italic'
  // const data = fake_data.LineChartData(upperconfidence, lowerconfidence);
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Data 1",
        data: data1,
        borderColor: "red",
        borderWidth: 3,
        pointRadius: 5,
        fill: "+1",
      },
      {
        label: "Data 2",
        data: data2,
        borderColor: "blue",
        borderWidth: 3,
        pointRadius: 5,
        fill: "+1",
      },
    ],
  };

  return (
    <div
      style={{
        display: "inline-flex",
        height: "500px",
        width: "700px",
        alignItems: "center",
        // backgroundColor: "grey",
      }}
    >
      <h1> Line Chart Data </h1>
      <Line options={options} data={data} />
      <Outlet />
    </div>
  );
};

export default LineGraph;
