import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Outlet } from "react-router-dom"; // Import Outlet

// Register required components for Chart.js
Chart.register(...registerables);

const Bardata = ({ data1, data2 }) => {
  // Check if data1 and data2 are arrays of numbers
  if (!Array.isArray(data1) || !Array.isArray(data2)) {
    console.error("data1 and data2 should be arrays.");
    return null;
  }

  // Ensure both data arrays have the same length
  const labels = data1.map((_, index) => `Point ${index + 1}`);

  return (
    <div
      style={{
        display: "inline-flex",
        height: "500px",
        width: "700px",
        alignItems: "center",
        flexDirection: "column", // Align items vertically
      }}
    >
      <h1>Bardata</h1>
      <Bar
        data={{
          labels: labels, // Dynamic labels based on data length
          datasets: [
            {
              label: "Data1", // Label for the first dataset
              data: [...data1],
              backgroundColor: "red", // Single color for all bars in this dataset
              borderColor: "aqua", // Single color for all borders
              borderWidth: 0.5,
            },
            {
              label: "Data2", // Label for the second dataset
              data: [...data2],
              backgroundColor: "blue", // Single color for all bars in this dataset
              borderColor: "green", // Single color for all borders
              borderWidth: 0.5,
            },
          ],
        }}
        height={400}
        options={{
          maintainAspectRatio: false, // Allows manual control over aspect ratio
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 15,
                },
              },
            },
          },
        }}
      />
      <Outlet />
    </div>
  );
};

export default Bardata;
