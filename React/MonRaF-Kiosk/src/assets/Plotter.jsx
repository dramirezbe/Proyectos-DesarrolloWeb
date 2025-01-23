import React from 'react';
import Plot from 'react-plotly.js';

const Plotter = () => {
  return (
    <div>
      <h2>Gráfico Interactivo</h2>
      <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5],
            y: [10, 14, 18, 24, 30],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' },
          },
        ]}
        layout={{
          title: 'Ejemplo de Gráfico',
          xaxis: {
            title: 'Eje X',
            showgrid: true,
            zeroline: true,
          },
          yaxis: {
            title: 'Eje Y',
            showgrid: true,
            zeroline: true,
          },
        }}
        style={{ width: '100%', height: '400px' }}
        config={{
          responsive: true,
          scrollZoom: true,
        }}
      />
    </div>
  );
};

export default Plotter;