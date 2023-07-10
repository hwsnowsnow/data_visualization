<template>
    <div>
      <svg ref="map" :width="width" :height="height" style="background-color: aliceblue;"></svg>
    </div>
  </template>
  
  <script>
  import * as d3 from '../../../public/d3.v7.min.js';
  import axios from 'axios';
  
  export default {
    name:"ChinaMap",
    data() {
      return {
        width: 0,
        height: 0,
        num: [
        1585.3, 651.4, 3116.0, 1584.0, 1062.8, 1702.9, 1042.8,
        1337.2, 1493.8, 4129.9, 3708.0, 2317.9, 1811.2, 1823.5,
        4079.4, 4121.1, 2143.3, 2719.5, 7159.1,2041.9, 479.6,
        1474.1, 3499.4, 1691.3, 1897.9, 106.0, 1823.8, 1045.5,
        321.8, 384.7, 1024.9, 1000, 1000, 1000
        ],
        
        color: d3.schemeTableau10
      };
    },
    mounted() {
      this.width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) * 0.98;
      this.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) * 0.98;
      this.putData();
    },
    methods:{
      putData() {
        axios.get('/aliChinaOK.json').then(response => {
            const data = response.data;
            this.drawMap(data);
        }) },
        drawMap(data){
      const svg = d3.select(this.$refs.map)
        .attr("width", this.width)
        .attr("height", this.height);
  
      const linear = d3.scaleLinear()
        .domain([990, 90000])
        .range([0, 255]);
  
      const mapcolor = [];
      for (let i = 0; i < 34; i++) {
        mapcolor[i] = "#" + parseInt(255 - linear(this.num[i])).toString(16) + "0000";
      }
  
      const projection = d3.geoMercator()
        .center([107, 31])
        .scale(550)
        .translate([this.width / 2, this.height / 2]);
  
      const geoPath = d3.geoPath()
        .projection(projection);
  

        const groups = svg.append("g");
  
        groups.selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("class", "province")
          .attr("stroke", "black")
          .attr("fill", (d, i) => this.color[i % 10])
          .attr("d", (d, i) => geoPath(d))
          .on("mouseover", function (d, i) {
            d3.select(this)
              .attr("fill", "yellow");
          })
          .on("mouseout", function (d, i) {
            const j = i.properties.subFeatureIndex;
            d3.select(this)
              .attr("fill", (d, i) => this.color[j % 10]);
          });
  
        const texts = svg.selectAll(".texts")
          .data(data.features)
          .enter()
          .append("text")
          .attr("class", "texts")
          .text((d, i) => `${d.properties.name}`)
          .attr("text-anchor", "middle")
          .attr("transform", function (d) {
            const centroid = geoPath.centroid(d);
            let x = centroid[0];
            let y = centroid[1];
            if (d.properties.name == "河北省" || d.properties.name == "澳门" || d.properties.name == "安徽省")
              y = y + 25;
            return `translate(${x},${y})`;
          })
          .attr('fill', '999')
          .attr("font-size", "10px");

  }
    }
  };
  </script>
  