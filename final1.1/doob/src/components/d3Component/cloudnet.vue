<template>
  <div id="wordcloud"></div>
</template>

<script>
import * as d3 from 'd3';
import * as cloud from "d3-cloud";
//import Cloudnet from '../../../../../../../../cloudnet.vue';

export default {
  name:"CloudNet",
  mounted() {
    const words = [
        { text: '网络信号差', weight: 73 },
        { text: '显示有信号上不了网', weight: 36 },
        { text: '网络时断时序或时快时慢', weight: 54 },
        { text: '网络时快时慢', weight: 54 },
        { text: '手机上网速度慢', weight: 37 },
        { text: '流量', weight: 20 },
        { text: '卡顿', weight: 150 },
        { text: '微信', weight: 50 },
        { text: '打不开', weight: 70 },
        { text: '网络', weight: 30 },
      // 添加更多词语和权重
    ];

    const width = 500;
    const height = 500;

    const layout = cloud()
      .size([width, height])
      .words(words.map(d => ({ text: d.text, size: d.size })))
      .padding(5)
      .rotate(() => (~~(Math.random() * 2) * 90))
      .fontSize(d => d.size)
      .shape(() => this.telenetShape) // 指定词云形状为电话
      .on("end", this.draw);

    layout.start();
  },
  data() {
    return {
      telenetShape: null // 电话形状的图像对象
    };
  },
  methods: {
    draw(words) {
      const svg = d3.select("#wordcloud")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

      const wordGroup = svg.append("g")
        .attr("transform", "translate(250, 250)");

      const text = wordGroup.selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", d => `${d.size}px`)
        .style("fill", "steelblue")
        .attr("text-anchor", "middle")
        .attr("transform", d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
        .text(d => d.text);
    },
    loadTelenetShape() {
      const image = new Image();
      image.src = "/net.png"; // 替换为您的电话形状图像路径
      image.onload = () => {
        this.telenetShape = image;
        this.mounted();
      };
    }
  },
  created() {
    this.loadTelenetShape();
  }
};
</script>

<style>
#wordcloud {
  width: 500px;
  height: 500px;
}
</style>
