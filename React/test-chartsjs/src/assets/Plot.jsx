import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const Plot = ({ xData, yData, yData2 }) => {
  const chartData = {
    labels: xData,
    datasets: [
      {
        label: "Frequency",
        data: yData,
        borderColor: "#BC6C25",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        showLine: true, // Ensures the points are connected by a line
        pointRadius: 0, // Adjust the size of the points
      },
      {
        label: "Magnitude",
        data: yData2,
        borderColor: "rgba(192, 75, 192, 1)",
        backgroundColor: "rgba(192, 75, 192, 0.2)",
        borderWidth: 2,
        showLine: true, // Ensures the points are connected by a line
        pointRadius: 0, // Adjust the size of the points
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        mode: "nearest", // Show tooltip on the nearest point
        intersect: false,
        callbacks: {
          label: (context) => `Value: ${context.raw.toFixed(3)}`,
        },
      },
      legend: {
        display: true, // Show the legend for better clarity
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Frequency (Hz)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Magnitude (dB)",
        },
      },
    },
    hover: {
      mode: "nearest",
      intersect: false,
    },
  };

  return (
    <div className="p-4">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Plot;
