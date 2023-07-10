<template>
  <div >
    <!--<h1>柱状图和折线图</h1>-->
    <div id="chart-container" style="text-align: center;">
      <svg :width=width :height=height  class="center-svg">
        <g class="bar-chart"></g>
        <g class="line-chart"></g>
      </svg>
    </div>
  </div>
</template>

<style>

</style>

<script>
import * as d3 from "d3";

export default {
  name: "Chart",
  data() {
    return {
      dataset: [
        [2018, 925069, 250.69, 0],
        [2019, 950277, 502.77, 2.73],
        [2020, 941918, 419.18, -0.88],
        [2021, 956892, 568.92, 1.59],
        [2022, 975006, 750.06, 1.88],
        [2023, 982783, 827.83, 0.80]
      ],
      width: 900,
      height: 400,
      margin: { top: 0, right: 80, bottom: 0, left: 80 },
      color :[ "#90e0ef","#48cae4","#00b4d8","#0096c7","#0077b6","#023e8a"]
      //color :[ "#cdb4db","#ffc8dd","#ffafcc","#bde0fe","#a2d2ff","#83c5be"]
           
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const svg = d3.select("#chart-container svg");

      // 绘制柱状图
      this.drawBarChart(svg);

      // 绘制折线图
      this.drawLineChart(svg);
    },
    drawBarChart(svg) {
      const { dataset, width, height, margin, color } = this;
      const xScale = d3
        .scaleBand()
        .domain(dataset.map((d) => d[0]))
        .range([margin.left, width - margin.right])
        .padding(0.1);
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset, (d) => d[1])])
        .range([height - margin.bottom, margin.top]);
      svg
        .select(".bar-chart")
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(d[0]))
        .attr("y", (d) => yScale((d[1]-900000)*10))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - margin.bottom - yScale((d[1]-900000)*10))
        .attr("fill", (d, i) => color[i]);
      svg
        .select(".bar-chart")
        .selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text((d) => d[1])
        .attr("x", (d) => xScale(d[0]) + xScale.bandwidth() / 2)
        .attr("y", (d) => yScale((d[1]-900000)*10) - 5)
        .attr("text-anchor", "middle")
        .attr("font-size", 12)
        .attr("fill", "white");
        // 创建 x 轴刻度线和标签
        svg.append("g")
          .attr("class", "x-axis")
          .attr("transform", `translate(0, ${height - margin.bottom})`)
          .call(d3.axisBottom(xScale))
          .selectAll("text")
          .attr("transform", "rotate(-45)")
          .attr("text-anchor", "end")
          .attr("dx", "-0.8em")
          .attr("dy", "0.15em")
          .style("font-size", "12px")
          .style("fill", "white")
          .text((d, i) => dataset[i][0]);
        // 创建 y 轴刻度线和标签
        svg.append("g")
          .attr("class", "y-axis")
          .attr("transform", `translate(${margin.left}, 0)`)
          .call(d3.axisLeft(yScale))
          .selectAll("text")
          .style("font-size", "12px")
          .style("fill", "white");

    },
    drawLineChart(svg) {
      const { dataset, width, height, margin } = this;
      const lineData = dataset.map((d) => [d[0], d[3]]);
      const xScale = d3
        .scaleBand()
        .domain(dataset.map((d) => d[0]))
        .range([margin.left, width - margin.right])
        .padding(0.1);
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset, (d) => d[3])])
        .range([height - margin.bottom, margin.top]);
      const line = d3
        .line()
        .x((d) => xScale(d[0]) + xScale.bandwidth() / 2)
        .y((d) => yScale(d[1]*0.4));
      svg
        .select(".line-chart")
        .append("path")
        .datum(lineData)
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("d", line);

      svg
        .select(".line-chart")
        .selectAll("circle")
        .data(lineData)
        .enter()
        .append("circle")
        .attr("cx", (d) => xScale(d[0]) + xScale.bandwidth() / 2)
        .attr("cy", (d) => yScale(d[1]*0.4))
        .attr("r", 4)
        .attr("fill", "white");

      svg
        .select(".line-chart")
        .selectAll("text")
        .data(lineData)
        .enter()
        .append("text")
        .text((d) => d[1])
        .attr("x", (d) => xScale(d[0]) + xScale.bandwidth() / 2+10)
        .attr("y", (d) => yScale(d[1]*0.25))
        .attr("text-anchor", "middle")
        .attr("font-size", 12)
        .attr("fill", "white");
    }
  }
};
</script>

<style>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.center-svg {
  transform: translate(300, 0%);
}
</style>
