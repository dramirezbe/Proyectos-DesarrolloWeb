import React from 'react';
import Plotter from './assets/Plotter';

const App = () => {
  // Generar 4096 muestras aleatorias
  const xData = Array.from({ length: 4096 }, (_, i) => i);
  const yData = Array.from({ length: 4096 }, () => Math.random() * 2 - 1); // Valores entre -1 y 1

  return (
    <div className="container_plot">
      <Plotter xData={xData} yData={yData} />
    </div>
  );
};

export default App;
