import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Outlet } from "react-router-dom"; // Import Outlet

ChartJS.register(...registerables);

const PieChart = ({ data1, data2 }) => {
  const options = {
    alignItems: "center",
    responsive: true,

    // legen
    plugins: {
      legend: {
        labels: {
          generateLabels: (chart) => {
            const original =
              ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
            return original.map((label) => {
              // Here we can customize the color of the square (marker)
              if (label.text === "Data 1") {
                label.fillStyle = "red"; // Set color for Data 1 square (left-side marker)
              } else if (label.text === "Data 2") {
                label.fillStyle = "blue"; // Set color for Data 2 square (left-side marker)
              }
              return label;
            });
          },
        },
      },
    },
  };
  const data = {
    labels: ["Data1 : ", "Data2 : "], // Changed to array
    datasets: [
      {
        label: "Data 1",
        data: data1,
        // color: "red",
        backgroundColor: ["red"],
        borderColor: "white",
        // hoverOffset: 4,

        borderWidth: 2,
      },
      {
        label: "Data 2",
        data: data2,
        backgroundColor: ["blue"],
        borderColor: "white",
        borderWidth: 2,
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
      }}
    >
      <h1>PieChart data</h1>
      <Pie data={data} options={options} />
      <Outlet />
    </div>
  );
};

export default PieChart;
