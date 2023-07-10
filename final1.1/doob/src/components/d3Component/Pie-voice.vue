<template>
  <div class="chart-container">
    <svg ref="svg"></svg>
  </div>
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
    const data = [
      { label: "满意", value: 84.6 },
      { label: "一般", value: 7.5 },
      { label: "不满意", value: 6.1 }
    ];

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(this.$refs.svg)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const color = d3.scaleOrdinal()
    .range([ "#90e0ef","#48cae4","#00b4d8"]);

    const pie = d3.pie()
      .value(d => d.value);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = svg.selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g");

    arcs.append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

    arcs.append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text(d => `${d.data.label} (${d.data.value}%)`);
  }
}
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
