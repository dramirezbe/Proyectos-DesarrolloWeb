import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "../index.css";
// Obtén las variables de color definidas en el CSS
const styles = getComputedStyle(document.documentElement);
const colorTextPrimary = styles.getPropertyValue("--color-text-primary");
const colorAccent = styles.getPropertyValue("--color-accent");
const colorAccentLight = styles.getPropertyValue("--color-accent-light");


// Register chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const Plot = ({ xData, yData }) => {
  if (!xData || !yData || xData.length !== yData.length || xData.length === 0) {
    return <div>Error: xData and yData must have the same non-zero length.</div>;
  }

  // Prepare data for the chart
  const data = {
    labels: xData,
    datasets: [
      {
        label: "Spectrum",
        data: yData,
        borderColor: colorAccent.trim(),
        backgroundColor: colorAccentLight.trim(),
        borderWidth: 2,
        pointRadius: 0, // Avoid rendering points for large datasets
        tension: 0.1, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "linear",
        title: {
          display: true,
          text: "Frequency (Hz)", // Título del eje X
          color: colorTextPrimary.trim(), // Color del título del eje X
          font: {
            size: 14, // Tamaño del texto del título
          },
        },
        ticks: {
          color: colorTextPrimary.trim(), // Color de las etiquetas del eje X
        },
        grid: {
          color: colorTextPrimary.trim(), // Color de las líneas del grid del eje X
        },
      },
      y: {
        title: {
          display: true,
          text: "Magnitude (dB)",
          color: colorTextPrimary.trim(), // Color del título del eje Y
          font: {
            size: 14, // Tamaño del texto del título
          },
        },
        ticks: {
          color: colorTextPrimary.trim(), // Color de las etiquetas del eje Y
        },
        grid: {
          color: colorTextPrimary.trim(), // Color de las líneas del grid del eje Y
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: colorTextPrimary.trim(), // Color del texto de la leyenda
        },
      },
    },
    animation: true, // Animación activada
  };
  

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Plot;

