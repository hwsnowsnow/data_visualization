<template>
  <div style="text-align: center;">
    <svg ref="chart" class="center-svg"></svg>
  </div>
</template>

<style>
/*body {
  background-color: black;
}*/
</style>


<script>
import * as d3 from "d3";
import axios from 'axios';

export default {
  name:"BubbleMap",
  data() {
      return {};
    },
  mounted() {
    this.putData();
  },
  methods:{
    putData() {
        axios.get('/flare.json').then(response => {
            const data = response.data;
            this.drawMap(data);
        }) 

      },
    drawMap(data){
const width =
      (window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth) *
      0.65;
    const height =
      (window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight) *
      0.65;
    //const color = d3.schemeTableau10;
    const color =[ "#00b4d8","#0096c7","#0077b6","#023e8a"]

    const svg = d3
      .select(this.$refs.chart)
      .attr("width", width)
      .attr("height", height);

    const pack = d3.pack().size([width, height]);
    const hierarchyData = d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value - a.value);
      const packData = pack(hierarchyData);
      const nodes = packData.descendants();

      const gc = svg
        .selectAll("g")
        .data(nodes)
        .join("g")
        .attr("transform", (d) => `translate(${d.x},${d.y})`);

      gc.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", (d) => d.r)
        .attr("fill",(d) => color[d.height])
        .attr("stroke", (d) => color[d.height]);

      gc.append("text")
        .attr("font-size", "15")
        .attr("text-anchor", "middle")
        .attr("dy", "0.5em")
        .attr("fill", "white")
        .text((d) => (d.r > 20 ? d.data.name : ""));
    }
  },
  
};
</script>

<style>
svg {
  width: 100%;
  height: 100%;
}
.center-svg {
  transform: translate(13%, 0%);
}
</style>
