<template>
  <div id="heatmap"></div>
</template>

<style>
/*body {
  background-color: black;
}*/
</style>

<script>
import * as d3 from 'd3';

export default {
  mounted() {
    this.drawHeatmap();
  },
  methods: {
    drawHeatmap() {
      const data = [
        [1, 0.723, 0.592, 0.181, 0.023, -0.121, 0.385],
        [0.723, 1, 0.823, 0.023, 0.219, 0.012, 0.075],
        [0.592, 0.823, 1, 0.108, 0.317, 0.002, 0.412],
        [0.181, 0.023, 0.108, 1, 0.491, 0.093, 0.003],
        [0.023, 0.219, 0.317, 0.491, 1, 0.041, 0.019],
        [-0.121, 0.012, 0.002, 0.093, 0.041, 1, 0.001],
        [0.385, 0.075, 0.412, 0.003, 0.019, 0.001, 1],
      ];

      const labels = [
        '设备性能', '设备质量', '通话质量',
        '客服质量', '消费信息', '用户信息', '终端',
      ];

      const containerWidth = 800;
      const containerHeight = 500;
      const heatmapWidth = 600;
      const heatmapHeight = 400;
      const colors = ["#90e0ef","#48cae4","#00b4d8","#0096c7","#0077b6","#023e8a"];

      const svg = d3.select('#heatmap')
        .append('svg')
        .attr('width', containerWidth)
        .attr('height', containerHeight);

      const heatmapGroup = svg.append('g')
        .attr('class', 'heatmap-group')
        .attr('transform', `translate(${(containerWidth - heatmapWidth) / 2}, ${(containerHeight - heatmapHeight) / 2})`);

      const xScale = d3.scaleBand()
        .domain(labels)
        .range([0, heatmapWidth]);

      const yScale = d3.scaleBand()
        .domain(labels)
        .range([0, heatmapHeight]);

      const colorScale = d3.scaleQuantize()
        .domain([d3.min(data.flat()), d3.max(data.flat())])
        .range(colors);

      heatmapGroup.selectAll('rect')
        .data(data.flat())
        .enter()
        .append('rect')
        .attr('x', (d, i) => xScale(labels[Math.floor(i / data[0].length)]))
        .attr('y', (d, i) => yScale(labels[i % data[0].length]))
        .attr('width', xScale.bandwidth())
        .attr('height', yScale.bandwidth())
        .style('fill', d => colorScale(d))
        .style('stroke', '#ffffff')
        .style('stroke-width', 1);

      heatmapGroup.selectAll('.labels-x')
        .data(labels)
        .enter()
        .append('text')
        .attr('class', 'labels-x')
        .attr('x', (d, i) => xScale(d) + xScale.bandwidth() / 2)
        .attr('y', heatmapHeight + 20)
        .attr('dy', '0.35em')
        .style('text-anchor', 'middle')
        .style('fill', '#ffffff')
        .style('font-size', '12px')
        .text(d => d);

      heatmapGroup.selectAll('.labels-y')
        .data(labels)
        .enter()
        .append('text')
        .attr('class', 'labels-y')
        .attr('x', -20)
        .attr('y', (d, i) => yScale(d) + yScale.bandwidth() / 2)
        .attr('dy', '0.35em')
        .style('text-anchor', 'end')
        .style('fill', '#ffffff')
        .style('font-size', '12px')
        .text(d => d);

      heatmapGroup.selectAll('.values')
        .data(data.flat())
        .enter()
        .append('text')
        .attr('class', 'values')
        .attr('x', (d, i) => xScale(labels[Math.floor(i / data[0].length)]) + xScale.bandwidth() / 2)
        .attr('y', (d, i) => yScale(labels[i % data[0].length]) + yScale.bandwidth() / 2)
        .attr('dy', '0.35em')
        .style('text-anchor', 'middle')
        .style('fill', '#ffffff')
        .style('font-size', '12px')
        .text(d => d.toFixed(3));

      // Add zoom behavior
      const zoomBehavior = d3.zoom()
        .scaleExtent([1, 10])
        .on('zoom', () => {
          heatmapGroup.attr('transform', d3.event.transform);
        });

      svg.call(zoomBehavior);
    },
  },
};
</script>
