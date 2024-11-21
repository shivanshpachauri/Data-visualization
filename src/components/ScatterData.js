import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Scatter } from "react-chartjs-2";
import { Outlet } from "react-router-dom"; // Import Outlet

export default function ScatterData({ data1, data2 }) {
  // Register chart.js components
  ChartJS.register(...registerables);
  const transformedData1 = data1.map((value, index) => ({
    x: index,
    y: value,
  }));
  const transformedData2 = data2.map((value, index) => ({
    x: index,
    y: value,
  }));
  // Chart options configuration
  const options = {
    responsive: true,
    layout: {
      padding: {
        left: 150,
        right: 150,
        // Uncomment and modify if needed
        // top: 10,
        // bottom: 0
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 40,
        title: {
          display: true,
          text: "Time",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 200,
        title: {
          display: true,
          text: "Readings",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  // Data for the scatter plot
  const data = {
    datasets: [
      {
        label: "Data1", // Label for the first dataset
        data: transformedData1,
        backgroundColor: "rgba(255, 99, 132, 1)", // Single color for all points
        fill: "+1",
      },
      {
        label: "Data2", // Label for the second dataset
        data: transformedData2,
        backgroundColor: "rgba(150, 99, 132, 1)",
        fill: "+1",
        // Single color for all points
      },
    ],
  };

  return (
    <>
      <Scatter options={options} data={data} />
      <Outlet />
    </>
  );
}
