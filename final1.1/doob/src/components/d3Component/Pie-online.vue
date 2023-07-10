<template>
  <div class="chart-container" style="text-align: center;">
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
  name:"pie",
  mounted() {
    const data = [
      { label: "满意", value: 74.9 },
      { label: "一般", value: 14.3 },
      { label: "不满意", value: 10.8 }
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
    .range([ "#0096c7","#0077b6","#023e8a"]);

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
</style>
