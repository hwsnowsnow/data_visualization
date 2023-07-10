<template>
    <div id="bar-chart-container" style="text-align: center;"></div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import * as d3 from "d3";
  import { API_BASE_URL } from '../../../config.js';
  
  export default defineComponent({
    name: 'd3Hist',
    data() {
      return {
        chartData: []
      }
    },
    mounted() {
    const apiUrl = `${API_BASE_URL}/portfolio-details/1/d3Hist`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.chartData = data;  // 将从后端获取的数据保存到chartData中
          this.drawBarChart(this.chartData);  // 调用drawBarChart方法绘制图表
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
    methods: {
      drawBarChart(data) {
        const width = 1000;
        const height = 400;
        const svg = d3
          .select("#bar-chart-container")
          .append("svg")
          .attr("width", width)
          .attr("height", height);
  
        svg
          .selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("fill", "steelblue")
          .attr("x", function (d, i) {
            return (width * i) / data.length;
          })
          .attr("y", (d) => height - d[1])
          .attr("height", (d) => d[1])
          .attr("width", width * 0.9 / data.length);
      }
    },
  })
  </script>
  