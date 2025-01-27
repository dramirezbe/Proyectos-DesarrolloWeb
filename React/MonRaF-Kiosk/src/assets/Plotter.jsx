import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Plotter = ({ xData, yData }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 50 };

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleLinear()
      .domain(d3.extent(xData))
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain([d3.min(yData), d3.max(yData)])
      .range([height - margin.bottom, margin.top]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.select('.x-axis')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);

    svg.select('.y-axis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis);

    svg.select('.plot-area')
      .selectAll('path')
      .data([yData])
      .join('path')
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1)
      .attr('d', d3.line()
        .x((d, i) => xScale(xData[i]))
        .y(d => yScale(d))
      );
  }, [xData, yData]);

  return (
    <svg ref={svgRef}>
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default Plotter;
