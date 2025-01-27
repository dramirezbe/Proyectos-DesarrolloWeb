import React from "react";
import Plot from "./assets/Plot"; // Ajusta la ruta según tu estructura de archivos
import "./App.css";

// Generador de suma de senos
const sumOfSines = (xData, amplitudes, frequencies) => {
  return xData.map((x) =>
    amplitudes.reduce(
      (sum, amp, i) => sum + amp * Math.sin((x * frequencies[i] * Math.PI) / 180),
      0
    )
  );
};

// Generador de seno con ruido
const sineWithNoise = (xData, amplitude, frequency, noiseStdDev) => {
  return xData.map(
    (x) =>
      amplitude * Math.sin((x * frequency * Math.PI) / 180) +
      noiseStdDev * (Math.random() * 2 - 1) // Aproximación de ruido gaussiano
  );
};

function App() {
  // Datos de prueba
  const xData = Array.from({ length: 4096 }, (_, i) => i); // Genera valores de 0 a 4095
  const yData = sineWithNoise(xData, 2, 0.25, 0.2); // Suma de senos como datos principales

  return (
    <div className="main-container"> {/* Contenedor principal */}
      <div className="Plot-div">
        <h1>RF Spectrum</h1>
        {/* Muestra el gráfico principal */}
        <Plot xData={xData} yData={yData} />
      </div>

      <div className="Analytics">
        <h1>Analytics</h1>
        <ul>
          <li>SNR (dB): {10 * Math.log10(yData.reduce((a, b) => a + b ** 2, 0) / yData.length).toFixed(2)}</li>
          <li>Electromagnetic energy: {(yData.reduce((a, b) => a + b ** 2, 0)).toFixed(2)}</li>
          <li>RMS: {Math.sqrt(yData.reduce((a, b) => a + b ** 2, 0) / yData.length).toFixed(2)}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
