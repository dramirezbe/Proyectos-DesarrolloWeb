import React from "react";
import Plot from "./assets/Plot"; // Adjust the path based on your file structure
import "./App.css";

function App() {
  // Example data
  const xData = Array.from({ length: 360 }, (_, i) => i);
  const yData = xData.map((x) => Math.sin((x * Math.PI) / 180));

  return (
    <div className="main-container"> {/* Contenedor padre */}

      <div className="Plot-div">
        <h1>RF Spectrum</h1>
        <Plot xData={xData} yData={yData} />
      </div>

      <div className="Analitics"> {/* Corregido: className en lugar de classname */}
        <h1>Analitics</h1>
        <ul>
          <li>snrdB = #</li>
          <li>Electromagnetic energy = #</li>
          <li>rms = #</li>
        </ul>
      </div>  
        
    </div>
  );
}

export default App;